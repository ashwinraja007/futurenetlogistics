import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MembershipsProps {
  className?: string;
}

const Memberships = ({ className }: MembershipsProps) => {
  const certifications = [{
    src: "/certifications/wca.png",
    alt: "WCA World - Leading the World in Logistics Partnering"
  }, {
    src: "/certifications/fiata.png",
    alt: "FIATA - International Federation of Freight Forwarders Associations"
  }, {
    src: "/certifications/iso.png",
    alt: "ISO 9001:2015 Certified"
  }, {
    src: "/certifications/iaf.png",
    alt: "IAF - Member of Multilateral Recognition Arrangement"
  }, {
    src: "/certifications/sck.png",
    alt: "SCK Certifications"
  }];
  return <section className={cn("py-12 bg-gray-50", className)}>
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7
      }} viewport={{
        once: true
      }} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
            Memberships & Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted globally with industry-leading certifications and partnerships
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.7,
        delay: 0.2
      }} viewport={{
        once: true
      }} className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {certifications.map((cert, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="p-4 transition-shadow shadow-none bg-inherit">
              <img src={cert.src} alt={cert.alt} className="h-16 md:h-20 w-auto object-contain" />
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default Memberships;