"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Instagram, Facebook, X } from "lucide-react"
import Image from "next/image"

export default function CrystalClearLanding() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)
  const [scrollY, setScrollY] = useState(0)
  const [isMobileFormOpen, setIsMobileFormOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const validateForm = () => {
    const errors: Record<string, string> = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.phone.trim()) errors.phone = "Phone is required"
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) errors.phone = "Valid 10-digit phone required"
    if (!formData.message.trim()) errors.message = "Message is required"
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", phone: "", message: "" })
        setTimeout(() => setSubmitStatus(null), 5000)
      } else setSubmitStatus("error")
    } catch (error) {
      console.error("Submit error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden relative">
      {/* Fixed Background with Parallax & Grain */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Hero Image */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/6872601/pexels-photo-6872601.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            y: scrollY * 0.05,
          }}
        >
          {/* Ken-Burns Zoom */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/80 to-white/90 backdrop-blur-sm"
            animate={{ scale: [1, 1.02] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>

        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header - Minimal */}
        <motion.header
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
              <Image src="/logo.png" alt="Crystal Clear" width={40} height={40} className="rounded-lg" />
              <span className="text-sm font-light tracking-widest text-[#9630b7]">CRYSTAL CLEAR</span>
            </motion.div>
            <motion.a
              href="tel:7206412574"
              whileHover={{ scale: 1.05 }}
              className="text-[#9630b7] hover:text-[#7c2887] transition-colors font-light text-sm"
            >
              +1 (720) 641-2574
            </motion.a>
          </div>
        </motion.header>

        {/* Main Content - Ultra Elite Minimal */}
        <section className="min-h-screen flex items-center justify-center relative pt-20">
          <div className="container mx-auto px-4 w-full max-w-4xl">
            {/* Floating Logo - Bottom Left */}
            <motion.div
              className="fixed bottom-8 left-8 z-20 opacity-50 pointer-events-none"
              animate={{ rotateZ: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Image src="/logo.png" alt="Crystal Clear" width={80} height={80} className="rounded-lg blur-sm" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-7xl md:text-8xl font-black text-center mb-6 text-gray-900 leading-tight tracking-tighter relative"
              style={{
                textShadow: "0 0 30px rgba(150, 48, 183, 0.15)",
              }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-[#9630b7] to-gray-900 bg-clip-text text-transparent">
                Crystal Clear
              </span>
            </motion.h1>

            {/* Poetic Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-center text-2xl md:text-3xl text-[#9630b7] font-light tracking-wide mb-16 italic"
            >
              Luxury detailing, delivered to your door.
            </motion.p>

            {/* Ultra-Short Bullet Points - Left Aligned */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="max-w-lg mb-16 space-y-4 text-lg text-gray-900"
            >
              {[
                "Premium showroom finishes",
                "Mobile service nationwide",
                "Ceramic protection included",
                "Elite guarantee always",
              ].map((bullet, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-4"
                  whileInView={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                >
                  <span className="text-[#cd507e] text-3xl">◆</span>
                  <span className="font-light">{bullet}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Massive Glowing Phone Number */}
            <motion.a
              href="tel:7206412574"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="block text-center mb-20 relative group cursor-pointer"
            >
              {/* Pulsing Halo */}
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl -z-10"
                style={{
                  background: "radial-gradient(circle, rgba(150, 48, 183, 0.3) 0%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="text-6xl md:text-7xl font-black text-[#9630b7] tracking-wider">
                (720) 641-2574
              </div>
              <p className="text-sm text-gray-600 mt-4 font-light tracking-widest uppercase">
                Click to call
              </p>
            </motion.a>

            {/* Contact Form - Glassmorphism - Bottom Right on Desktop */}
            <div className="hidden md:block fixed bottom-8 right-8 z-40">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-8 w-80 shadow-2xl"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/60 border-0 text-gray-900 placeholder:text-gray-500 text-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/60 border-0 text-gray-900 placeholder:text-gray-500 text-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/60 border-0 text-gray-900 placeholder:text-gray-500 text-sm rounded-lg min-h-20 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#9630b7] to-[#cd507e] hover:from-[#8021d7] hover:to-[#b13f9e] text-white border-0 font-bold text-sm py-5 disabled:opacity-50 rounded-lg"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </Button>
                </form>
              </motion.div>
            </div>

            {/* Mobile Form Button */}
            <motion.div
              className="md:hidden flex justify-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Button
                onClick={() => setIsMobileFormOpen(true)}
                className="bg-gradient-to-r from-[#9630b7] to-[#cd507e] hover:from-[#8021d7] hover:to-[#b13f9e] text-white border-0 font-bold px-12 py-6 rounded-full text-lg"
              >
                Send Message
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services & Pricing Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 py-32 border-t border-white/10 backdrop-blur-sm bg-white/5"
        >
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-black text-center mb-4 text-gray-900"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center text-xl text-gray-600 mb-16 font-light"
            >
              Elite detailing packages crafted for perfection
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Essential Detail",
                  price: "$149",
                  features: ["Interior vacuum", "Window cleaning", "Tire shine", "Panel wipe down"],
                  desc: "Perfect for regular maintenance"
                },
                {
                  name: "Premium Detail",
                  price: "$249",
                  features: ["Full interior deep clean", "Exterior wash & wax", "Paint sealant", "Tire dressing", "Ceramic coating"],
                  desc: "Our most popular service",
                  featured: true
                },
                {
                  name: "Diamond Detail",
                  price: "$399",
                  features: ["Everything in Premium", "Paint correction", "Clay bar treatment", "3-month sealant", "Leather conditioning"],
                  desc: "Ultimate luxury finish"
                },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className={`rounded-2xl p-8 backdrop-blur-xl border transition-all ${
                    service.featured
                      ? "bg-gradient-to-br from-[#9630b7]/30 to-[#cd507e]/20 border-[#9630b7]/50 shadow-2xl"
                      : "bg-white/10 border-white/20 hover:border-[#9630b7]/30"
                  }`}
                >
                  {service.featured && (
                    <div className="inline-block px-3 py-1 bg-[#9630b7] text-white text-xs font-bold rounded-full mb-4">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 font-light">{service.desc}</p>
                  <div className="text-4xl font-black text-[#9630b7] mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-3 text-gray-700 text-sm">
                        <span className="text-[#cd507e]">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => setIsMobileFormOpen(true)}
                    className="w-full bg-gradient-to-r from-[#9630b7] to-[#cd507e] text-white border-0 font-bold py-4 rounded-lg hover:from-[#8021d7] hover:to-[#b13f9e] transition-all"
                  >
                    Book Now
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Facility & Location Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 py-32 border-t border-white/10"
        >
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-black text-center mb-4 text-gray-900"
            >
              Our Facility
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center text-xl text-gray-600 mb-16 font-light"
            >
              State-of-the-art equipment & professional workspace
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {[
                "https://images.pexels.com/photos/6872606/pexels-photo-6872606.jpeg",
                "https://images.pexels.com/photos/20051443/pexels-photo-20051443.jpeg",
              ].map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="relative aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
                >
                  <Image
                    src={src}
                    alt={`Facility ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Professional Equipment", desc: "Latest detailing tools & pressure washers" },
                  { title: "Mobile Ready", desc: "We bring everything to your location" },
                  { title: "Quality Assured", desc: "Certified products & techniques" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + idx * 0.1 }}
                    className="text-center"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm font-light">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Mobile Bottom Sheet Form */}
        <AnimatePresence>
          {isMobileFormOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/40 z-50 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileFormOpen(false)}
              />
              <motion.div
                className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white rounded-t-3xl p-8 max-h-[90vh] overflow-y-auto"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
              >
                <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-gray-100 border-0 text-gray-900 placeholder:text-gray-500 rounded-lg py-3"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-gray-100 border-0 text-gray-900 placeholder:text-gray-500 rounded-lg py-3"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-gray-100 border-0 text-gray-900 placeholder:text-gray-500 rounded-lg min-h-28 resize-none py-3"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#9630b7] to-[#cd507e] text-white border-0 font-bold py-6 rounded-lg text-lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Minimal Footer */}
        <footer className="relative z-10 border-t border-white/10 backdrop-blur-sm bg-white/5 py-8">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <p className="text-gray-600 text-sm font-light">© 2025 Crystal Clear Auto Detailing</p>
            <div className="flex gap-6">
              <a href="#" className="text-[#9630b7] hover:text-[#cd507e] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#9630b7] hover:text-[#cd507e] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#9630b7] hover:text-[#cd507e] transition-colors">
                <X className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Custom Cursor */}
      <style jsx global>{`
        * {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="2" fill="%239630b7"/></svg>') 16 16, auto;
        }
        a, button {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="3" fill="%23cd507e"/></svg>') 16 16, pointer;
        }
      `}</style>
    </div>
  )
}
