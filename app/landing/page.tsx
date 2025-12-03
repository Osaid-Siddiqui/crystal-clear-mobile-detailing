"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function CrystalClearLanding() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

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
    setSubmitStatus(null)

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
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Submit error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#1a0723] text-white overflow-hidden">
      {/* Sticky Header */}
      <motion.header
        className="sticky top-0 z-50 bg-[#1a0723]/95 backdrop-blur-sm border-b border-[#421272]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
            <Image src="/logo.png" alt="Crystal Clear Logo" width={50} height={50} className="rounded-lg" />
            <div>
              <div className="text-lg font-bold bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent">
                Crystal Clear
              </div>
              <div className="text-xs text-[#ac73e2]">Auto Detailing</div>
            </div>
          </motion.div>
          <motion.a href="tel:7206412574" whileHover={{ scale: 1.05 }}>
            <Button className="bg-gradient-to-r from-[#9630b7] to-[#b13f9e] hover:from-[#8021d7] hover:to-[#cd507e] text-white border-0 font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              (720) 641-2574
            </Button>
          </motion.a>
        </div>
      </motion.header>

      {/* Main Hero Section - Continuous throughout page */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="media-bg media-bg--home" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#421272] via-[#1a0723] to-[#634277]" />
        <div className="container mx-auto px-4 w-full max-w-5xl flex flex-col items-center relative z-10">
          {/* Hero Image & Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full mb-12"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-[#634277] mb-12">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Feaa719c761d64fc58dbfe871f4fb5f8e%2Fb3e6a402926b4717ae7a1665e9e828c2?format=webp&width=800"
                alt="Crystal Clear Auto Detailing - Orange Car"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Business Name & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 w-full"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Crystal Clear Auto Detailing
            </h1>
            <p className="text-2xl md:text-3xl text-[#ac73e2] font-semibold mb-8">
              Premium Mobile Detailing for Your Vehicle
            </p>
          </motion.div>

          {/* What We Do - Bullet Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-12 w-full max-w-2xl"
          >
            <div className="space-y-4 text-lg text-[#e6c0dc]">
              <p className="flex items-center justify-center gap-3">
                <span className="text-[#ac73e2] font-bold">•</span>
                Professional interior and exterior detailing with showroom-quality finishes
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-[#ac73e2] font-bold">•</span>
                Mobile service – we come to you, no appointment needed
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-[#ac73e2] font-bold">•</span>
                Premium paint protection and ceramic coating services
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-[#ac73e2] font-bold">•</span>
                Serving Parker, Castle Rock, Franktown, Elizabeth & Greater Denver Metro
              </p>
            </div>
          </motion.div>

          {/* Service Areas & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16 w-full"
          >
            <p className="text-[#e6c0dc] text-lg mb-2">
              <span className="font-semibold">Service Areas:</span> Parker • Castle Rock • Franktown • Elizabeth • Denver Metro
            </p>
            <p className="text-[#e6c0dc] text-lg">
              <span className="font-semibold">Available:</span> Monday – Sunday, 8 AM – 6 PM
            </p>
          </motion.div>

          {/* Pricing Plans Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full mb-16 border-t border-[#634277] pt-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              Our Packages
            </h2>
            <p className="text-[#e6c0dc] text-lg text-center mb-12">
              Choose the perfect detailing package for your vehicle
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Basic Plan */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative"
              >
                <div className="bg-[#421272]/60 border-[#634277] border rounded-xl p-8 h-full">
                  <h3 className="text-2xl font-bold text-white mb-3">Basic Detail</h3>
                  <p className="text-[#e6c0dc] text-sm mb-4">Interior only</p>
                  <div className="text-4xl font-bold text-[#ac73e2] mb-8">$150</div>
                  <ul className="space-y-3 text-[#e6c0dc] text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#ac73e2] font-bold mt-1">•</span>
                      <span>Interior vacuum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ac73e2] font-bold mt-1">•</span>
                      <span>Window cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ac73e2] font-bold mt-1">•</span>
                      <span>Panel wipe down</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ac73e2] font-bold mt-1">•</span>
                      <span>Interior detailing</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Premium Plan */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="relative"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#9630b7] to-[#cd507e] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <div className="bg-[#421272]/80 border-[#ac73e2] border-2 rounded-xl p-8 h-full">
                  <h3 className="text-2xl font-bold text-white mb-3">Premium Detail</h3>
                  <p className="text-[#e6c0dc] text-sm mb-4">Full inside and out</p>
                  <div className="text-4xl font-bold text-[#ac73e2] mb-8">$250</div>
                  <ul className="space-y-3 text-[#e6c0dc] text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#ac73e2] font-bold mt-1">•</span>
                      <span>Everything in Basic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ac73e2] font-bold mt-1">•</span>
                      <span>Exterior wash & wax</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ac73e2] font-bold mt-1">•</span>
                      <span>Interior deep clean</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ac73e2] font-bold mt-1">•</span>
                      <span>Paint sealant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ac73e2] font-bold mt-1">•</span>
                      <span>Tire shine</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Diamond Plan */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative"
              >
                <div className="bg-[#421272]/60 border-[#634277] border rounded-xl p-8 h-full">
                  <h3 className="text-2xl font-bold text-white mb-3">Diamond Detail</h3>
                  <p className="text-[#e6c0dc] text-sm mb-4">Paint Correction Detail</p>
                  <div className="text-4xl font-bold text-[#ac73e2] mb-8">$350</div>
                  <ul className="space-y-3 text-[#e6c0dc] text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#ac73e2] font-bold mt-1">•</span>
                      <span>Everything in Premium</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ac73e2] font-bold mt-1">•</span>
                      <span>Clay bar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ac73e2] font-bold mt-1">•</span>
                      <span>3 month sealant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ac73e2] font-bold mt-1">•</span>
                      <span>Interior UV protectant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ac73e2] font-bold mt-1">•</span>
                      <span>Leather conditioning</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Add-Ons Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full mb-16 border-t border-[#634277] pt-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              Add-Ons
            </h2>
            <p className="text-[#e6c0dc] text-lg text-center mb-12">
              Enhance your package with premium add-on services
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {/* 1 step paint correction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-[#421272]/40 border border-[#634277] rounded-lg p-4 hover:border-[#ac73e2] transition-all duration-300"
              >
                <h4 className="text-white font-semibold mb-2 text-sm">1 step paint correction</h4>
                <p className="text-3xl font-bold text-[#ac73e2]">$150</p>
              </motion.div>

              {/* Headlight restoration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.63 }}
                className="bg-[#421272]/40 border border-[#634277] rounded-lg p-4 hover:border-[#ac73e2] transition-all duration-300"
              >
                <h4 className="text-white font-semibold mb-2 text-sm">Headlight restoration</h4>
                <p className="text-3xl font-bold text-[#ac73e2]">$50</p>
              </motion.div>

              {/* Pet hair removal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.66 }}
                className="bg-[#421272]/40 border border-[#634277] rounded-lg p-4 hover:border-[#ac73e2] transition-all duration-300"
              >
                <h4 className="text-white font-semibold mb-2 text-sm">Pet hair removal</h4>
                <p className="text-3xl font-bold text-[#ac73e2]">$25</p>
              </motion.div>

              {/* Claybar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.69 }}
                className="bg-[#421272]/40 border border-[#634277] rounded-lg p-4 hover:border-[#ac73e2] transition-all duration-300"
              >
                <h4 className="text-white font-semibold mb-2 text-sm">Claybar</h4>
                <p className="text-3xl font-bold text-[#ac73e2]">$50</p>
              </motion.div>

              {/* Engine bay cleaning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.72 }}
                className="bg-[#421272]/40 border border-[#634277] rounded-lg p-4 hover:border-[#ac73e2] transition-all duration-300"
              >
                <h4 className="text-white font-semibold mb-2 text-sm">Engine bay cleaning</h4>
                <p className="text-3xl font-bold text-[#ac73e2]">$50</p>
              </motion.div>

              {/* Stain removal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="bg-[#421272]/40 border border-[#634277] rounded-lg p-4 hover:border-[#ac73e2] transition-all duration-300"
              >
                <h4 className="text-white font-semibold mb-2 text-sm">Stain removal</h4>
                <p className="text-3xl font-bold text-[#ac73e2]">$50</p>
              </motion.div>

              {/* 3 year ceramic coating */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.78 }}
                className="bg-[#421272]/40 border border-[#634277] rounded-lg p-4 hover:border-[#ac73e2] transition-all duration-300"
              >
                <h4 className="text-white font-semibold mb-2 text-sm">3 year ceramic coating</h4>
                <p className="text-3xl font-bold text-[#ac73e2]">$700</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Section - Massive & Focused */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full border-t border-[#634277] pt-16 pb-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-[#e6c0dc]">Book your appointment or get a free quote today</p>
            </div>

            {/* Large Contact Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
              {/* Phone */}
              <motion.a
                href="tel:7206412574"
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 border-2 border-[#ac73e2] rounded-xl hover:bg-[#ac73e2]/10 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <Phone className="w-12 h-12 text-[#ac73e2]" />
                </div>
                <p className="text-[#e6c0dc] text-sm mb-2">Call us now</p>
                <p className="text-4xl font-bold text-[#ac73e2]">(720) 641-2574</p>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:Tallyn.adams@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 border-2 border-[#ac73e2] rounded-xl hover:bg-[#ac73e2]/10 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <Mail className="w-12 h-12 text-[#ac73e2]" />
                </div>
                <p className="text-[#e6c0dc] text-sm mb-2">Email us</p>
                <p className="text-xl font-bold text-[#ac73e2] break-all">Tallyn.adams@gmail.com</p>
              </motion.a>
            </div>

            {/* Contact Form - Minimal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto bg-[#421272]/80 rounded-xl border border-[#634277] p-8 backdrop-blur-sm"
              id="contact-form"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Name</label>
                  <Input
                    type="text"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-[#634277] bg-[#1a0723] text-white placeholder:text-[#634277]"
                  />
                  {formErrors.name && <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Phone</label>
                  <Input
                    type="tel"
                    placeholder="(720) 123-4567"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border-[#634277] bg-[#1a0723] text-white placeholder:text-[#634277]"
                  />
                  {formErrors.phone && <p className="text-red-400 text-sm mt-1">{formErrors.phone}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your vehicle and what you need..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border-[#634277] bg-[#1a0723] text-white placeholder:text-[#634277] min-h-32"
                  />
                  {formErrors.message && <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#9630b7] to-[#b13f9e] hover:from-[#8021d7] hover:to-[#cd507e] text-white border-0 font-bold text-lg py-6 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Book Appointment"} <ChevronRight className="w-5 h-5 ml-2" />
                </Button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-300 text-center font-semibold">
                    ✓ Request sent! We'll contact you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300 text-center font-semibold">
                    ✗ Error submitting. Please try again.
                  </div>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a0723] border-t border-[#421272] py-8">
        <div className="container mx-auto px-4 text-center text-[#e6c0dc] text-sm">
          <p>&copy; {new Date().getFullYear()} Crystal Clear Auto Detailing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
