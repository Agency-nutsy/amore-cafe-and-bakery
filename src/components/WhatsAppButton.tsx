import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import whatsappLogo from "@/assets/whatsapp-logo.jpeg";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center">
    {/* Get Directions Button */}
    <motion.a
      href="https://www.google.com/maps/place/Amore+cafe+and+bakery/@28.5881911,77.168306,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1d000326ed37:0x670fdaa3c9a1b3eb!8m2!3d28.5881911!4d77.168306!16s%2Fg%2F11wn42y2pb?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get Directions"
      className="rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-shadow flex items-center justify-center bg-blue-600 text-white w-14 h-14 sm:w-16 sm:h-16"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MapPin size={28} />
    </motion.a>

    {/* WhatsApp Button */}
    <motion.a
      href="https://wa.me/917827012123"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Us"
      className="rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow overflow-hidden w-14 h-14 sm:w-16 sm:h-16"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={whatsappLogo} alt="WhatsApp" className="w-full h-full object-cover rounded-full" />
    </motion.a>
  </div>
);

export default FloatingButtons;