"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sparkles,
  Car,
  Shield,
  Droplets,
  Star,
  ChevronRight,
  Check,
  Zap,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "John Smith",
      text: "Crystal Clear did an amazing job on my car! It looks brand new.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      text: "Professional, thorough, and convenient. They exceeded my expectations!",
      rating: 5,
    },
    {
      name: "Mike Davis",
      text: "Best detailing service in the area. The attention to detail is incredible!",
      rating: 5,
    },
  ]

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium Detailing",
      description: "Complete interior and exterior detailing for a showroom finish",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Mobile Service",
      description: "We come to you - convenient detailing at your location",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Deep Cleaning",
      description: "Professional deep cleaning for every surface of your vehicle",
    },
  ]

  const galleryItems = [
    "/cars/IMG-20251119-WA0119.jpg",
    "/cars/IMG-20251119-WA0120.jpg",
    "/cars/IMG-20251119-WA0121.jpg",
    "/cars/IMG-20251119-WA0122.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

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
            <span className="text-xl font-bold bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent">
              Crystal Clear
            </span>
          </motion.div>
          <Link href="/">
            <Button className="bg-gradient-to-r from-[#9630b7] to-[#b13f9e] hover:from-[#8021d7] hover:to-[#cd507e] text-white border-0">
              Enter Site
            </Button>
          </Link>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#421272] via-[#1a0723] to-[#634277]" />

        {/* Animated background elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#ac73e2] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block mb-6 px-4 py-2 bg-[#9630b7]/20 border border-[#ac73e2] rounded-full">
              <span className="text-[#ac73e2] font-semibold text-sm flex items-center gap-2">
                <Zap className="w-4 h-4" /> Premium Auto Detailing
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-[#9630b7] via-[#b13f9e] to-[#cd507e] bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Your Car Deserves to Shine
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[#e6c0dc] mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional mobile detailing that transforms your vehicle into a showroom-quality masterpiece. No hassle, no drive—we come to you.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#9630b7] to-[#b13f9e] hover:from-[#8021d7] hover:to-[#cd507e] text-white border-0 font-bold text-lg px-8"
              >
                Book Now <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-[#ac73e2] text-[#ac73e2] hover:bg-[#ac73e2] hover:text-white font-bold text-lg px-8"
            >
              View Pricing
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block"
          >
            <div className="flex items-center gap-6 bg-[#421272]/40 border border-[#634277] rounded-full px-6 py-3 backdrop-blur-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9630b7] to-[#cd507e] border-2 border-[#1a0723]"
                  />
                ))}
              </div>
              <span className="text-sm text-[#e6c0dc]">
                <span className="font-bold text-white">500+</span> Happy Customers
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative bg-gradient-to-b from-transparent via-[#421272]/30 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent">
              Why Choose Crystal Clear?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Expert Team",
                description: "Years of experience and passion for perfection",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Mobile Service",
                description: "No drive needed—we come to your location",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Premium Results",
                description: "Showroom quality every single time",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#421272]/30 border border-[#634277] hover:border-[#ac73e2] transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9630b7] to-[#cd507e] flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-[#e6c0dc]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 relative overflow-hidden">
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
            <p className="text-[#e6c0dc] text-lg">Everything your car needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-[#9630b7] to-[#cd507e] flex items-center justify-center mb-4 text-white"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-white group-hover:text-[#ac73e2] transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#e6c0dc]">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#421272]/20 to-transparent">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-lg overflow-hidden border border-[#634277] bg-[#421272]/40 shadow-lg shadow-[#ac73e2]/10 group cursor-pointer"
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

      {/* Testimonials */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent">
              Loved by Our Customers
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gradient-to-br from-[#421272] to-[#634277] border-[#ac73e2]">
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
                      - {testimonials[currentTestimonial].name}
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
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              animate={{
                y: [0, -20, 0],
              }}
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

            <Link href="/">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-[#9630b7] font-bold text-lg px-10 py-6"
              >
                Get Started Now <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-white">
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-white/80">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold">10+</p>
                <p className="text-white/80">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold">100%</p>
                <p className="text-white/80">Satisfaction Guarantee</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a0723] border-t border-[#421272] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Crystal Clear Logo" width={40} height={40} className="rounded-lg" />
              <span className="font-bold bg-gradient-to-r from-[#9630b7] to-[#cd507e] bg-clip-text text-transparent">
                Crystal Clear Auto Detailing
              </span>
            </div>
            <p className="text-[#e6c0dc] text-sm text-center md:text-right">
              Premium mobile auto detailing for the Denver Metro area
            </p>
          </div>
          <div className="border-t border-[#421272] mt-8 pt-8 text-center text-[#e6c0dc] text-sm">
            <p>&copy; {new Date().getFullYear()} Crystal Clear Auto Detailing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
