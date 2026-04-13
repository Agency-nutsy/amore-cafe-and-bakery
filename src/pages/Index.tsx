import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Coffee, Truck, Star, ArrowRight, Clock, MapPin, Phone, ChefHat } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

// You will need to update these image imports with your actual assets
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
import heroSlide4 from "@/assets/hero-slide-4.png";
import pastaImg from "@/assets/momos.jpg";
import sandwichImg from "@/assets/momos.jpg";
import coffeeImg from "@/assets/momos.jpg";
import cakeImg from "@/assets/momos.jpg";
import gallery1 from "@/assets/momos.jpg";
import gallery2 from "@/assets/momos.jpg";

// NAP Data directly from Google Maps
const PHONE = ""; // No phone number listed on the Google Business Profile
const PHONE_DISPLAY = "Add Phone Number"; 
const ADDRESS = "Shop no-98, 98, Satya Niketan Rd, Moti Bagh II, Satya Niketan, South Moti Bagh, New Delhi, Delhi 110021, India";
const MAPS_LINK = "https://www.google.com/maps/place/Amore+cafe+and+bakery/@28.5881911,77.168306,17z/data=!4m15!1m8!3m7!1s0x390d1d000326ed37:0x670fdaa3c9a1b3eb!2sAmore+cafe+and+bakery!8m2!3d28.5881911!4d77.168306!10e1!16s%2Fg%2F11wn42y2pb!3m5!1s0x390d1d000326ed37:0x670fdaa3c9a1b3eb!8m2!3d28.5881911!4d77.168306!16s%2Fg%2F11wn42y2pb?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D";
const MAPS_EMBED = "https://maps.google.com/maps?q=Amore+cafe+and+bakery+Satya+Niketan&t=&z=15&ie=UTF8&iwloc=&output=embed";

const heroSlides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

// Updated based on actual Google reviews praising these specific items
const specialties = [
  { name: "Artisanal Coffee", desc: "Rich, aromatic, and brewed with love to perfection.", img: coffeeImg, price: "₹150", tag: "Bestseller" },
  { name: "Creamy White Sauce Pasta", desc: "Delectable and rich pasta with an impeccable balance of taste.", img: pastaImg, price: "₹220", tag: "Highly Recommended" },
  { name: "Paneer Tikka Sandwich", desc: "Loaded sandwich with unmatched flavors and generous portions.", img: sandwichImg, price: "₹180", tag: "Must Try" },
  { name: "Fresh Pastries & Cakes", desc: "A delightful treat speaking of quality and absolute freshness.", img: cakeImg, price: "₹140", tag: "Classic" },
];

// Extracted from real 5-star Google Maps reviews
const reviews = [
  { name: "Google Reviewer", text: "Amore Cafe and Bakery is truly a hidden gem... their coffee is nothing short of perfection—rich, aromatic, and brewed with love.", rating: 5, avatar: "G" },
  { name: "Google Reviewer", text: "Amore also serves the most delectable pasta and sandwiches in the entire market. The creamy white sauce pasta is unmatched.", rating: 5, avatar: "G" },
  { name: "Google Reviewer", text: "The ambiance is warm and welcoming, perfect for catching up with friends or a quiet coffee break. Highly recommended for all foodies!", rating: 5, avatar: "G" },
];

const stats = [
  { value: "24/7", label: "Always Open" },
  { value: "50+", label: "Menu Items" },
  { value: "5.0", label: "Google Rating" },
  { value: "100%", label: "Fresh Ingredients" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = React.useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      }
    }
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {heroSlides.map((slide, i) => (
          <motion.img
            key={i}
            src={slide}
            alt="Amore Cafe Ambiance"
            className="absolute inset-0 w-full h-full object-cover"
            initial={false}
            animate={{ opacity: i === currentSlide ? 1 : 0, scale: i === currentSlide ? 1 : 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 hero-overlay z-10" />

        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl z-10" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl z-10" />

        <div className="relative z-20 container">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-widest uppercase mb-6">
                <span className="w-8 h-px bg-accent" />
                Relaxed Cafe & Bakery
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-6 leading-[0.95]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Amore Cafe
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-primary-foreground/80 mb-2 font-display italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A Hidden Gem in Satya Niketan
            </motion.p>

            <motion.p
              className="text-primary-foreground/60 mb-10 text-lg max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Rich aromatic coffee, fresh cakes and pastries, and the most delectable pasta and sandwiches in the market.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link
                to="/menu"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                Explore Menu
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-4 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <MapPin size={18} />
                Get Directions
              </a>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-primary-foreground w-8" : "bg-primary-foreground/40"}`}
            />
          ))}
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
          </div>
        </motion.div>
      </section>

      {/* Stats bar */}
      <section className="relative -mt-16 z-30 pb-8">
        <div className="container">
          <ScrollReveal>
            <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-display font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-grain">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Why Us</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">The Amore Difference</h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Coffee, title: "Perfect Brews", desc: "Our coffee is rich, aromatic, and brewed with absolute love for an unmatched taste." },
              { icon: ChefHat, title: "Freshly Baked", desc: "Incredible selection of cakes and pastries that speak of high quality and daily freshness." },
              { icon: Truck, title: "Quick Delivery", desc: "Enjoy our generous portions of loaded sandwiches and creamy pasta right at your doorstep." },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.15}>
                <div className="p-8 rounded-2xl bg-card border border-border card-hover text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                    <f.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Menu</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Signature Bites & Brews</h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden bg-card border border-border group card-hover">
                  <div className="relative overflow-hidden">
                    <img src={s.img} alt={s.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">{s.tag}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-bold text-lg">{s.name}</h3>
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{s.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link to="/menu" className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                View Full Menu <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ambiance split */}
      <section className="py-20 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img src={gallery1} alt="Amore Cafe Ambiance" className="rounded-2xl w-full h-80 object-cover shadow-xl" loading="lazy" />
                <img src={gallery2} alt="Cafe Coffee and Food" className="absolute -bottom-8 -right-4 md:-right-8 w-48 h-48 object-cover rounded-2xl border-4 border-background shadow-lg" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="md:pl-4">
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Space</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                  Warm, Welcoming,<br />and Simply Delicious
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Located just behind Mother Dairy in the bustling Satya Niketan market, Amore Cafe and Bakery is your perfect cozy escape. Whether you are catching up with friends, enjoying a quiet coffee break, or indulging in some solo time with a good book, our warm ambiance makes every visit special.
                </p>
                <Link to="/about" className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Read Our Story <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-secondary bg-grain">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">What Our Guests Say</h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="p-8 rounded-2xl bg-card border border-border card-hover relative">
                  <div className="absolute -top-3 left-8 text-6xl text-primary/10 font-display">"</div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{r.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">{r.avatar}</div>
                    <p className="font-semibold text-sm">{r.name}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div>
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Find Us</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-8">Visit Our Cafe</h2>
                <div className="space-y-6">
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Opening Hours</h4>
                      <p className="text-sm text-muted-foreground">Monday – Sunday: Open 24 Hours</p>
                    </div>
                  </div>
                  {PHONE && (
                    <a href={`tel:${PHONE}`} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone size={22} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-sm text-muted-foreground">{PHONE_DISPLAY}</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-80">
                <iframe
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Amore Cafe Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-10" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Craving Something Sweet?
            </h2>
            <p className="text-primary-foreground/70 mb-8 text-lg max-w-lg mx-auto">
              Drop by for a coffee and fresh pastry, or dive into the best pasta in Satya Niketan. We are open 24/7!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground text-foreground px-8 py-4 font-semibold hover:shadow-xl transition-all duration-300"
              >
                <MapPin size={18} />
                Get Directions
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Explore Menu
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;