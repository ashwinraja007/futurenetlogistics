import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ArrowLeft, ArrowRight, Plane, Ship, Truck, Warehouse, Package, FileCheck, Boxes, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Footer = () => {
  const offices = [
    {
      city: "Dubai Office",
      address: ["Office # 509, Al Nazar Plaza", "Oud Metha, Dubai, U.A.E"],
      phone: "+971 4 3433388",
    },
    {
      city: "Jebel Ali Office",
      address: ["Warehouse# Zg06, Near Roundabout 13", "North Zone, Jebel Ali, Dubai, U.A.E"],
      phone: "+971 4 8819787",
      mobile: "+971 50 5075187",
    },
    {
      city: "Abu Dhabi Office",
      address: ["Office 3-1, Unit 101, 1st Floor", "Al Jaber Jewellery Building, Al Khalidiya"],
      phone: "+971 2 8867676",
      mobile: "+971 50 4337214",
    },
  ];

  const services = [
    { title: "Ocean Freight", link: "/services/ocean-freight", icon: <Ship size={16} /> },
    { title: "Air Freight", link: "/services/air-freight", icon: <Plane size={16} /> },
    { title: "Customs Clearance", link: "/services/customs-clearance", icon: <FileCheck size={16} /> },
    { title: "Transportation", link: "/services/transportation", icon: <Truck size={16} /> },
    { title: "Warehousing", link: "/services/warehousing", icon: <Warehouse size={16} /> },
    { title: "Project Cargo", link: "/services/project-cargo", icon: <Package size={16} /> },
    { title: "3PL Services", link: "/services/3pl", icon: <Boxes size={16} /> },
    { title: "Liquid Transportation", link: "/services/liquid-transportation", icon: <Droplets size={16} /> },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % offices.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src="/futurenet-logo.png" alt="Future Net Logistics LLC" className="h-14 brightness-0 invert" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Future Net Logistics LLC is an international freight forwarder headquartered in Dubai with branches in Jebel Ali and Abu Dhabi, providing comprehensive logistics solutions worldwide.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <div className="bg-brand-green/20 p-2 rounded-full">
                <Mail size={16} className="text-brand-green" />
              </div>
              <a href="mailto:info@futurenetlogistics.com" className="text-gray-300 hover:text-brand-green transition-colors">
                info@futurenetlogistics.com
              </a>
            </div>
            <a
              href="/documents/DMA_Tariff.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors text-sm"
            >
              <FileCheck size={16} />
              DMA Tariff
            </a>
          </div>

          {/* Services Grid */}
          <div className="space-y-4">
            <h4 className="text-brand-green font-semibold text-lg border-b border-gray-700 pb-2">
              Our Services
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {services.map((service, i) => (
                <Link
                  key={i}
                  to={service.link}
                  className="flex items-center gap-3 text-gray-300 hover:text-brand-green transition-all duration-300 group py-1.5"
                >
                  <span className="text-brand-green group-hover:scale-110 transition-transform">
                    {service.icon}
                  </span>
                  <span className="text-sm">{service.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Offices Slider */}
          <div className="space-y-4">
            <h4 className="text-brand-green font-semibold text-lg border-b border-gray-700 pb-2">
              Our Offices
            </h4>

            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 min-h-[200px] border border-gray-700/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
                    <p className="font-semibold text-white">{offices[index].city}</p>
                  </div>

                  <div className="flex gap-3 text-sm">
                    <MapPin size={16} className="text-brand-green mt-0.5 shrink-0" />
                    <div className="text-gray-300 text-sm">
                      {offices[index].address.map((l, i) => (
                        <p key={i} className="text-primary-foreground">{l}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Phone size={16} className="text-brand-green" />
                    {offices[index].phone}
                  </div>
                  {offices[index].mobile && (
                    <p className="text-xs ml-7 text-white">Mob: {offices[index].mobile}</p>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={() => setIndex((index - 1 + offices.length) % offices.length)}
                  className="p-2 rounded-full bg-gray-700/50 hover:bg-brand-green/20 border border-gray-600 hover:border-brand-green transition-all"
                >
                  <ArrowLeft size={14} />
                </button>
                <button
                  onClick={() => setIndex((index + 1) % offices.length)}
                  className="p-2 rounded-full bg-gray-700/50 hover:bg-brand-green/20 border border-gray-600 hover:border-brand-green transition-all"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-gray-400 text-center">
              © Future Net Logistics LLC. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
