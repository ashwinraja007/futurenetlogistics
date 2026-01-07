import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Globe, Clock, Users, Award, Target, Eye } from 'lucide-react';
import Memberships from '@/components/home/Memberships';
const About = () => {
  return <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-brand-navy to-brand-navy/90 text-white px-6 mt-16">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-50">
                About <span className="text-secondary-foreground">Us</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-slate-50">
                International freight forwarder and logistics provider headquartered in Dubai, UAE
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main About Content */}
        <section className="py-20 px-6 bg-primary-foreground">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }}>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p className="text-base">
                    Future Net Logistics LLC is an international freight forwarder and logistics provider with headquarter in Dubai & branch offices in Jebel Ali & Abu Dhabi (UAE). We offer premium logistics services to businesses worldwide, and a wide range of international and domestic transportation and logistics services. Our personal service and expert knowledge of freight forwarding is unrivaled.
                  </p>

                  <p className="text-base">
                    We provide seamless integration of various transportation modes such as sea freight, air freight and road freight, as well as diversified logistics services in warehousing, and material handling. Future Net Logistics is well equipped to handle worldwide door-to-door delivery, custom clearance, dangerous or perishable goods, break bulk/project cargos, etc.
                  </p>

                  <p className="text-base">
                    Our organizational structure is simple which makes the communication process very effective and much satisfactory for our clients. We also have our Dubai office with our own warehouse facility inside JAFZA. We are providing total logistics solutions to many customers. Our extensive network of carefully selected business partners and the committed workforce have taken us far ahead, combining all the benefits of in-depth local knowledge with truly global expertise.
                  </p>

                  <p className="text-base">
                    Future Net Logistics is part of the world's largest network 'World Cargo Alliance (WCA) and is able to handle shipments to and from any part of the world using our own offices & agents worldwide.
                  </p>

                  <p className="text-base font-medium text-brand-navy">
                    Futurenet started UAE operations in 2018. We have direct import LCL consolidation services from all major ports covering CHINA, SOUTH EAST ASIA, EUROPE, USA, and INDIAN subcontinents with the shortest transit days.
                  </p>

                  <p className="text-base">
                    With the support of our global partners, Futurenet is successfully delivering the commitment of offering the best possible rates in the market along with excellent services to the customers.
                  </p>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img alt="Future Net Logistics LLC" className="w-full h-[800px] object-cover" src="/lovable-uploads/a16f8678-cd09-4b89-9bfe-86efd56cf0f4.jpg" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 px-6 bg-primary-foreground">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="bg-brand-navy p-8 rounded-xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-primary-foreground">01 Vision</h3>
                </div>
                <p className="text-white/90">
                  FUTURE NET, to be the leading global logistics solution provider thru our most advanced systems combined with well experienced logistics professionals.
                </p>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="bg-brand-green p-8 rounded-xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-primary-foreground">02 Mission</h3>
                </div>
                <p className="text-white/90">
                  FUTURE NET, to be customers first choice for following services: Customised logistics solutions with integrated processes with clients thru our most advanced WMS & distribution module with e-commerce capability. FCL, LCL, Air Freight & Freight Management, Liquid Transportation solutions Projects & Break Bulk.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Memberships */}
        <Memberships className="bg-primary-foreground" />
      </main>

      <Footer />
    </div>;
};
export default About;