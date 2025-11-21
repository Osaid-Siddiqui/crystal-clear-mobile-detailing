"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Sparkles,
  Car,
  Shield,
  Droplets,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Check,
  Award,
  Zap,
  Spray,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CrystalClearLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    package: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const testimonials = [
    {
      name: "John Smith",
      text: "Crystal Clear did an amazing job on my car! It looks brand new. Highly recommend their mobile service.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      text: "Professional, thorough, and convenient. Tallyn and his team exceeded my expectations!",
      rating: 5,
    },
    {
      name: "Mike Davis",
      text: "Best detailing service in the area. The attention to detail is incredible. Worth every penny!",
      rating: 5,
    },
  ]

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium Detailing",
      price: "$250",
      description: "Full inside & out with showroom finish",
      features: ["Interior deep clean", "Exterior wash & wax", "Paint sealant", "Tire shine"],
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Basic Detail",
      price: "$150",
      description: "Interior only deep clean",
      features: ["Interior vacuum", "Window cleaning", "Panel wipe down", "Odor removal"],
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Diamond Detail",
      price: "$350",
      description: "Premium with paint correction",
      features: ["Everything in Premium", "Clay bar", "3-month sealant", "Leather conditioning"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Paint Protection",
      price: "$700",
      description: "3-year ceramic coating",
      features: ["Full protection", "Water repellent", "UV protection", "Long-lasting shine"],
    },
  ]

  const addOns = [
    { name: "Paint Correction", price: "$150" },
    { name: "Headlight Restoration", price: "$50" },
    { name: "Pet Hair Removal", price: "$25" },
    { name: "Clay Bar Treatment", price: "$50" },
    { name: "Engine Bay Cleaning", price: "$50" },
    { name: "Stain Removal", price: "$50" },
  ]

  const galleryItems = [
    "/cars/IMG-20251119-WA0119.jpg",
    "/cars/IMG-20251119-WA0120.jpg",
    "/cars/IMG-20251119-WA0121.jpg",
    "/cars/IMG-20251119-WA0122.jpg",
  ]

  const serviceAreas = [
    { name: "Parker", highlight: true },
    { name: "Castle Rock", highlight: true },
    { name: "Franktown", highlight: true },
    { name: "Elizabeth", highlight: true },
    { name: "Denver Metro", highlight: false },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const validateForm = () => {
    const errors: Record<string, string> = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.phone.trim()) errors.phone = "Phone is required"
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) errors.phone = "Valid 10-digit phone required"
    if (!formData.package.trim()) errors.package = "Please select a service"
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
        setFormData({ name: "", phone: "", package: "", message: "" })
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
            <Button className="bg-gradient-to-r from-[#9630b7] to-[#b13f9e] hover:from-[#8021d7] hover:to-[#cd507e] text-white border-0 font-bold">
              <Phone className="w-4 h-4 mr-2" />
              (720) 641-2574
            </Button>
          </motion.a>
        </div>
      </motion.header>

      {/* Professional Landing Page Hero */}
      <section className="relative overflow-hidden bg-white pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-100"
            >
              <Image
                src="https://images.pexels.com/photos/6872601/pexels-photo-6872601.jpeg"
                alt="Professional car detailing service"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  Discover how Crystal Clear can help you
                </h1>
                <a href="#contact-form">
                  <Button className="bg-gradient-to-r from-[#9630b7] to-[#7c2887] hover:from-[#8021d7] hover:to-[#6b2276] text-white border-0 font-semibold">
                    Get a Free Quote
                  </Button>
                </a>
              </div>

              <div className="text-gray-600 text-sm space-y-2">
                <p>*No obligation. Free quote on all services.</p>
                <a href="/page" className="text-[#9630b7] hover:text-[#7c2887] font-semibold transition-colors inline-flex items-center gap-1">
                  View full website <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-b border-gray-200 mt-16 mb-12"
        >
          <div className="container mx-auto px-4">
            <div className="flex gap-8">
              <button className="pb-4 px-4 border-b-2 border-[#9630b7] text-gray-900 font-semibold hover:text-[#9630b7] transition-colors">
                Premium Detailing
              </button>
              <button className="pb-4 px-4 text-gray-500 font-semibold hover:text-gray-900 transition-colors border-b-2 border-transparent">
                Professional Services
              </button>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Why choose Crystal Clear?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#9630b7] to-[#cd507e] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Droplets className="w-8 h-8 text-[#9630b7]" />,
                title: "Professional Equipment",
                description: "State-of-the-art detailing tools and premium products",
              },
              {
                icon: <Car className="w-8 h-8 text-[#9630b7]" />,
                title: "Mobile Service",
                description: "We come to you - no hassle, maximum convenience",
              },
              {
                icon: <Sparkles className="w-8 h-8 text-[#9630b7]" />,
                title: "Premium Results",
                description: "Showroom finish quality on every vehicle",
              },
              {
                icon: <Award className="w-8 h-8 text-[#9630b7]" />,
                title: "100% Guarantee",
                description: "Complete satisfaction or your money back",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-4"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-16 pt-12"></div>

        {/* View Full Website CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Explore our full range of services, pricing, testimonials, and gallery
          </p>
          <a href="/page">
            <Button
              variant="outline"
              className="border-[#9630b7] text-[#9630b7] hover:bg-[#9630b7] hover:text-white font-semibold transition-colors"
            >
              View Full Website <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#1a0723] to-[#421272]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-[#e6c0dc] text-lg">Professional mobile detailing at your convenience</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-[#421272]/50 border-[#634277] hover:border-[#ac73e2] transition-all duration-300 h-full group">
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9630b7] to-[#cd507e] flex items-center justify-center mb-4 text-white"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-white group-hover:text-[#ac73e2] transition-colors text-2xl">
                      {service.title}
                    </CardTitle>
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent mt-2">
                      {service.price}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#e6c0dc] mb-4">{service.description}</CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-[#e6c0dc] text-sm">
                          <Check className="w-4 h-4 text-[#ac73e2] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#421272] to-[#1a0723]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-[#634277] shadow-xl shadow-[#ac73e2]/20">
                <Image
                  src="/logo.png"
                  alt="Tallyn Adams - Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent">
                About Crystal Clear
              </h2>
              <p className="text-[#e6c0dc] text-lg mb-6 leading-relaxed">
                Founded by detailing pro Tallyn Adams, we're obsessed with perfection. No shop visits—just us at your location for hassle-free luxury.
              </p>
              <p className="text-[#e6c0dc] text-lg mb-6 leading-relaxed">
                Our commitment to excellence and customer satisfaction has made us the trusted choice for auto detailing in the Denver metro area. We use only the finest products and techniques to ensure your vehicle looks its absolute best.
              </p>
              <div className="space-y-3">
                {[
                  "Expert detailing skills honed over a decade",
                  "Mobile service—no drive needed",
                  "Premium products for lasting results",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-[#ac73e2]" />
                    <span className="text-[#e6c0dc]">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#1a0723] to-[#421272]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gradient-to-br from-[#421272] to-[#634277] border-[#ac73e2] shadow-xl shadow-[#ac73e2]/20">
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-[#cd507e] text-[#cd507e]" />
                      ))}
                    </div>
                    <p className="text-[#e6c0dc] text-lg mb-8 text-center italic">
                      &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                    </p>
                    <p className="text-[#ac73e2] font-bold text-center text-lg">
                      — {testimonials[currentTestimonial].name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentTestimonial
                      ? "bg-[#ac73e2] w-8 h-3"
                      : "bg-[#634277] w-3 h-3 hover:bg-[#ac73e2]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#421272] to-[#1a0723]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent">
              See the Transformation
            </h2>
            <p className="text-[#e6c0dc] text-lg">Real results from real customers</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-lg overflow-hidden border-2 border-[#634277] bg-[#421272]/40 shadow-lg shadow-[#ac73e2]/10 group cursor-pointer"
              >
                <Image
                  src={item}
                  alt={`Crystal Clear detail work ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0723]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <span className="text-white font-semibold">Showroom Quality</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#1a0723] to-[#421272]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent">
              Pricing Plans
            </h2>
            <p className="text-[#e6c0dc] text-lg">Choose the perfect package for your vehicle</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-[#421272]/60 border-[#634277] hover:border-[#ac73e2] transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent mt-2">
                      {service.price}
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col">
                    <CardDescription className="text-[#e6c0dc] mb-6">{service.description}</CardDescription>
                    <ul className="space-y-3 mb-8 flex-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#e6c0dc]">
                          <Check className="w-5 h-5 text-[#ac73e2] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#contact-form">
                      <Button className="w-full bg-gradient-to-r from-[#9630b7] to-[#b13f9e] hover:from-[#8021d7] hover:to-[#cd507e] text-white border-0">
                        Book Now
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Add-ons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 pt-16 border-t border-[#634277]"
          >
            <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent">
              Popular Add-ons
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {addOns.map((addOn, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="bg-[#421272]/40 border-[#634277] hover:border-[#ac73e2] transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <h4 className="text-white font-semibold">{addOn.name}</h4>
                        <p className="text-2xl font-bold bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent">
                          {addOn.price}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Area Map Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#421272] to-[#1a0723]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent">
              Service Areas
            </h2>
            <p className="text-[#e6c0dc] text-lg">We roll up anywhere in the greater Denver area</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#421272]/50 border-2 border-[#634277] rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Service Locations</h3>
                <div className="space-y-3">
                  {serviceAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <MapPin className={`w-5 h-5 flex-shrink-0 ${area.highlight ? "text-[#ac73e2]" : "text-[#634277]"}`} />
                      <span className="text-[#e6c0dc]">{area.name}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-[#ac73e2] mt-6 font-semibold">...and beyond!</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#421272]/50 border-2 border-[#634277] rounded-xl h-96 flex items-center justify-center"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200000!2d-104.9847!3d39.7392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0xeb3fb1eb48a5edc!2sParker%2C%20CO!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: "none", borderRadius: "0.5rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#1a0723] to-[#421272]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent">
              Make Your Ride Crystal Clear
            </h2>
            <p className="text-[#e6c0dc] text-lg">Contact Us Today!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-[#421272]/80 border-[#634277] backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Booking Form</CardTitle>
                  <CardDescription className="text-[#ac73e2]">Fill out the form to get started</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-[#1a0723] border-[#634277] text-white placeholder:text-[#634277]"
                      />
                      {formErrors.name && <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>}
                    </div>

                    <div>
                      <Input
                        type="tel"
                        placeholder="Your Phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-[#1a0723] border-[#634277] text-white placeholder:text-[#634277]"
                      />
                      {formErrors.phone && <p className="text-red-400 text-sm mt-1">{formErrors.phone}</p>}
                    </div>

                    <div>
                      <select
                        value={formData.package}
                        onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                        className="w-full bg-[#1a0723] border border-[#634277] text-white rounded-md px-3 py-2 placeholder:text-[#634277]"
                        required
                      >
                        <option value="">Select a Service</option>
                        <option value="Basic detail (interior only)">Basic Detail - $150</option>
                        <option value="Premium detail (full inside and out)">Premium Detailing - $250</option>
                        <option value="Diamond Detail (Paint Correction Detail)">Diamond Detail - $350</option>
                        <option value="Paint Protection">Paint Protection - $700</option>
                      </select>
                      {formErrors.package && <p className="text-red-400 text-sm mt-1">{formErrors.package}</p>}
                    </div>

                    <div>
                      <Textarea
                        placeholder="Your Message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-[#1a0723] border-[#634277] text-white placeholder:text-[#634277] min-h-32"
                      />
                      {formErrors.message && <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#9630b7] to-[#b13f9e] hover:from-[#8021d7] hover:to-[#cd507e] text-white border-0 disabled:opacity-50"
                    >
                      {isSubmitting ? "Booking..." : "Book My Appointment"}
                    </Button>

                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-300 text-center">
                        Booking request sent! We'll contact you soon.
                      </div>
                    )}
                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300 text-center">
                        Error submitting. Please try again.
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="bg-[#421272]/80 border-[#634277] backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9630b7] to-[#cd507e] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Phone</h3>
                      <a href="tel:7206412574" className="text-[#ac73e2] hover:text-[#cd507e] transition-colors">
                        (720) 641-2574
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#421272]/80 border-[#634277] backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9630b7] to-[#cd507e] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Email</h3>
                      <a href="mailto:Tallyn.adams@gmail.com" className="text-[#ac73e2] hover:text-[#cd507e] transition-colors break-all">
                        Tallyn.adams@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#421272]/80 border-[#634277] backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9630b7] to-[#cd507e] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Service Area</h3>
                      <p className="text-[#e6c0dc]">
                        Mobile service available throughout greater Denver metro including Parker, Castle Rock, Franktown, and Elizabeth
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-3 flex-col">
                <a href="tel:7206412574" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-[#9630b7] to-[#b13f9e] hover:from-[#8021d7] hover:to-[#cd507e] text-white border-0">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href="mailto:Tallyn.adams@gmail.com" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-[#9630b7] to-[#b13f9e] hover:from-[#8021d7] hover:to-[#cd507e] text-white border-0">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-[#9630b7] via-[#634277] to-[#cd507e]">
        <div className="absolute inset-0 opacity-20">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Car?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers. Book your appointment today and experience the Crystal Clear difference.
            </p>

            <a href="#contact-form">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-[#9630b7] font-bold text-lg px-10 py-6"
              >
                Get Started Now <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a0723] border-t border-[#421272] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Crystal Clear Logo" width={40} height={40} className="rounded-lg" />
              <div>
                <div className="font-bold bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent">
                  Crystal Clear Auto Detailing
                </div>
                <p className="text-[#e6c0dc] text-sm">Premium Mobile Detailing</p>
              </div>
            </div>
            <p className="text-[#e6c0dc] text-center flex-1">
              Professional auto detailing serving the Denver Metro area with convenience and excellence
            </p>
          </div>
          <div className="border-t border-[#421272] pt-8 text-center text-[#e6c0dc] text-sm">
            <p>&copy; {new Date().getFullYear()} Crystal Clear Auto Detailing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
