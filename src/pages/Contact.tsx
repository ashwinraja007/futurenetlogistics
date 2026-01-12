import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import QuickEnquiry from "@/components/home/QuickEnquiry";

const offices = [
  {
    city: "Dubai Office",
    address: "Office # 509, Al Nazar Plaza, Oud Metha, Dubai, U.A.E",
    mobile: "+971 52 4436740",
    email: "inquiries@futurenetlogistics.com",
    map: "https://www.google.com/maps/d/embed?mid=1D4N0vC2-Se7EH9iVJi2cp5_EeVqEH40&ehbc=2E312F&noprof=1",
  },
  {
    city: "Jebel Ali Office",
    address:
      "Warehouse# Zg06, Near Roundabout 13, North Zone, P.B No: 30821, Jebel Ali, Dubai, U.A.E",
    phone: "+971 4 8819787",
    mobile: "+971 50 5075187 / +971 55 3877366",
    email: "info@futurenetlogistics.com",
    map: "https://www.google.com/maps/d/embed?mid=1k7Ufg8mYdAYhS3Oue398UVcgRDq2LMI&ehbc=2E312F&noprof=1",
  },
  {
    city: "Abu Dhabi Office",
    address:
      "PB No: 30500, Office 3-1, Unit 101, 1st Floor, Al Jaber Jewellery Building, Al Khalidiya, Abu Dhabi, U.A.E.",
    phone: "+971 2 8867676",
    mobile: "+971 50 4337214",
    email: "info@futurenetlogistics.com",
    map: "https://www.google.com/maps/d/embed?mid=1D0XIvUvTkX_zFe-9J-Rm-4jdUrQXMbM&ehbc=2E312F&noprof=1",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section className="relative h-[40vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-navy/90" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              Reach out or visit any of our offices across UAE
            </p>
          </div>
        </section>

        {/* OFFICES */}
        <section className="py-16">
          <div className="container mx-auto px-4 space-y-12">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {/* LEFT – ADDRESS */}
                <div>
                  <h2 className="text-2xl font-bold text-brand-navy mb-4">
                    {office.city}
                  </h2>

                  <div className="flex items-start gap-2 mb-3">
                    <MapPin size={18} className="text-brand-green mt-1" />
                    <p className="text-gray-600 leading-relaxed">
                      {office.address}
                    </p>
                  </div>

                  {/* TEL – only for non-Dubai offices */}
                  {office.phone && (
                    <div className="flex items-center gap-2 mb-3">
                      <Phone size={18} className="text-brand-green" />
                      <p className="text-gray-600">Tel: {office.phone}</p>
                    </div>
                  )}

                  {/* MOBILE */}
                  {office.mobile && (
                    <div className="flex items-center gap-2 mb-3 ml-6">
                      <p className="text-gray-600">Mob: {office.mobile}</p>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <Mail size={18} className="text-brand-green" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-gray-600 hover:text-brand-green transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>

                {/* RIGHT – MAP */}
                <div className="map-wrapper border rounded-lg overflow-hidden">
                  <iframe
                    src={office.map}
                    className="w-full h-[300px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <QuickEnquiry />
      <Footer />
    </div>
  );
};

export default Contact;
