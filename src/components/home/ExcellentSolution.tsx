import { motion } from "framer-motion";
import { Handshake, Eye, Shield, Globe } from "lucide-react";
const ExcellentSolution = () => {
  const features = [{
    icon: <Handshake className="w-8 h-8 text-secondary-foreground" />,
    title: "Strong Partnerships",
    description: "Close working relationships with customers for comprehensive supply chain management"
  }, {
    icon: <Eye className="w-8 h-8 text-primary" />,
    title: "Total Visibility",
    description: "Customer and partner portals providing integrated processes and transparency"
  }, {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Cost-Effective",
    description: "Continuously providing cost-effective transportation and logistics solutions"
  }, {
    icon: <Globe className="w-8 h-8 text-secondary-foreground" />,
    title: "Global Network",
    description: "Extensive network of carefully selected business partners worldwide"
  }];
  return <section className="py-16 bg-gradient-to-br from-brand-navy to-brand-navy/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-secondary-foreground">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.7
        }} viewport={{
          once: true
        }} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="/lovable-uploads/gp.jpg" alt="Global Logistics Solutions" className="w-full h-[400px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-green text-white p-6 rounded-xl shadow-lg hidden md:block">
              <p className="text-3xl font-bold text-primary-foreground">2018</p>
              <p className="text-sm text-primary-foreground">UAE Operations Started</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.7
        }} viewport={{
          once: true
        }} className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Excellent Solution For Your Business
            </h2>
            
            <p className="text-white/80 mb-8 text-base leading-relaxed">
              We believe in establishing strong partnerships and close working relationships with our customers to produce a comprehensive total supply chain management service. We continuously provide cost-effective transportation and logistics solutions to our broad and varied customer base. Through our customer portal and partner portal, we are able to provide integrated processes with our clients systems which ensures total visibility and transparency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-brand-green/20 rounded-lg text-brand-green">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-white/70 text-sm">{feature.description}</p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ExcellentSolution;