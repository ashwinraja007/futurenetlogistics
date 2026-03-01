import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  User,
  Phone,
  FileText,
  MessageSquare,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { motion } from "framer-motion";

interface EnquiryForm {
  fullName: string;
  phone: string;
  email: string;
  purpose: string;
  comment: string;
}

export const QuickEnquiry = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnquiryForm>();

  const onSubmit = async (data: EnquiryForm) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@futurenetlogistics.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...data,
            _subject: "New Quick Enquiry Submission",
            _template: "table",
            _captcha: false,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Quick Enquiry
          </h2>
          <div className="w-20 h-1 bg-brand-green mx-auto mb-4" />
          <p className="text-gray-600">
            Have a question? Fill out the form below and we'll get back to you
            shortly.
          </p>
        </motion.div>

        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Alert className="bg-green-50 border-green-200">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800">
                Enquiry Submitted
              </AlertTitle>
              <AlertDescription className="text-green-700">
                Thank you. Your enquiry has been sent successfully. Our team
                will contact you shortly.
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Alert className="bg-red-50 border-red-200">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-800">
                Submission Failed
              </AlertTitle>
              <AlertDescription className="text-red-700">
                Unable to submit your enquiry. Please try again later.
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 p-8 rounded-xl shadow-lg bg-gradient-to-br from-white to-slate-100 border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Label className="flex items-center gap-2">
                  <User className="h-4 w-4 text-brand-green" />
                  Full Name*
                </Label>
                <Input
                  {...register("fullName", { required: "Name is required" })}
                />
              </div>

              <div>
                <Label className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-green" />
                  Phone*
                </Label>
                <Input
                  {...register("phone", { required: "Phone is required" })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Label className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand-green" />
                  Email*
                </Label>
                <Input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                />
              </div>

              <div>
                <Label className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-brand-green" />
                  Purpose*
                </Label>
                <Input
                  {...register("purpose", { required: "Purpose is required" })}
                />
              </div>
            </div>

            <div>
              <Label className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-brand-green" />
                Comment*
              </Label>
              <Textarea
                className="min-h-[120px]"
                {...register("comment", { required: "Comment is required" })}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white bg-gradient-to-r from-brand-green to-emerald-600"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Submit Enquiry"
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickEnquiry;
