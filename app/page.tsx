'use client'

import { Button } from "@/components/ui/button"
import { GraduationCap, Code2, Users, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars, Environment, Float } from "@react-three/drei"
import { motion } from "framer-motion"
import Spline from '@splinetool/react-spline'
import { useRef, useEffect, useState } from "react"

function SpinningBox() {
  return (
    <Float 
      speed={1.4} 
      rotationIntensity={1} 
      floatIntensity={2}
    >
      <mesh>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial
          color="#7C3AED"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const splineRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (splineRef.current) {
        const width = window.innerWidth
        if (width < 768) setScale(0.9)
        else if (width < 1024) setScale(1.1)
        else setScale(1.25)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full backdrop-blur-sm border border-violet-500/20">
              <span className="text-sm font-medium text-violet-300">Welcome to the Future of Freelancing</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-violet-200">
              Let's Solve Doubts &<br />Build Futures Together
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Experience the next generation of freelancing with AI-powered assistance,
              expert mentorship, and a thriving community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-lg px-8 py-6 rounded-2xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/jobs" className="flex items-center gap-2">
                  Find Jobs <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-violet-500/30 hover:bg-violet-600/10 text-lg px-8 py-6 rounded-2xl transition-all duration-300"
                asChild
              >
                <Link href="/mentors" className="flex items-center gap-2">
                  Connect with Mentors <Sparkles className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 bg-black/40 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-600/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="h-[800px] w-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-violet-600/20 rounded-3xl overflow-hidden flex justify-center items-center" ref={splineRef}>
              <div className="w-full h-full" style={{ transform: `scale(${scale})`, transformOrigin: "center" }}>
                <Spline scene="https://prod.spline.design/xmYuMRbtvfM9o4V3/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/20 to-black" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-300"
          >
            Why Choose FreeLancer?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[{
              icon: <Code2 className="h-8 w-8 text-violet-400" />, title: "AI-Powered Assistance", desc: "Get real-time coding help and debugging from our advanced AI assistant."
            }, {
              icon: <GraduationCap className="h-8 w-8 text-violet-400" />, title: "Expert Mentorship", desc: "Connect with industry veterans for personalized career guidance."
            }, {
              icon: <Users className="h-8 w-8 text-violet-400" />, title: "Thriving Community", desc: "Join a network of passionate developers and freelancers."
            }].map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-violet-950/50 to-purple-950/30 p-8 rounded-2xl backdrop-blur-sm border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
              >
                <div className="h-16 w-16 bg-violet-600/20 rounded-xl flex items-center justify-center mb-6">
                  {icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-violet-200">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-300">
            Voices from Our Community
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { name: "Ayush", role: "Full Stack Developer", msg: "The AI assistant has become my go-to debugging partner. It's like having a senior developer always by my side!" },
              { name: "Riya", role: "Frontend Specialist", msg: "The mentorship program helped me land my dream projects. The community here is incredibly supportive and encouraging." }
            ].map(({ name, role, msg }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-violet-950/30 to-purple-950/20 p-8 rounded-2xl backdrop-blur-sm border border-violet-500/20"
              >
                <p className="text-lg text-gray-300 italic mb-6">"{msg}"</p>
                <div>
                  <div className="font-semibold text-violet-300">{name}</div>
                  <div className="text-sm text-gray-400">{role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-4 text-center relative">
          <div className="text-sm text-gray-400">
            <p className="mb-2">Built with ❤️ by Yuvi | Access Denied</p>
            <p>© 2025 FreeLancer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
