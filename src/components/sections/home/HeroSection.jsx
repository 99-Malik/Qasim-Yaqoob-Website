"use client";

import { Button } from "@/components/ui/button";
import { Phone, Zap, Shield, Clock, Star, ArrowRight, Wrench, CheckCircle, Sparkles, Target, Rocket, Crown } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/common";
import Link from "next/link";
import { phoneNumber } from "@/lib/company";

const HeroSection = ({ brand }) => {
  let bgGradient = "from-violet-950 via-purple-900 to-indigo-950";
  let textGradient = "from-amber-300 via-orange-400 to-red-500";
  let buttonGradient = "from-rose-500 via-pink-600 to-purple-700";
  let accentColor = "from-amber-300 to-orange-500";
  let brandName = "UAE";
  let glowColor = "from-amber-400/50 via-orange-500/50 to-red-500/50";

  if (brand === "lg") {
    bgGradient = "from-slate-950 via-gray-900 to-zinc-950";
    textGradient = "from-emerald-300 via-teal-400 to-cyan-500";
    buttonGradient = "from-emerald-500 via-teal-600 to-cyan-700";
    accentColor = "from-emerald-300 to-teal-400";
    brandName = "LG";
    glowColor = "from-emerald-400/50 via-teal-500/50 to-cyan-500/50";
  } else if (brand === "samsung") {
    bgGradient = "from-indigo-950 via-blue-900 to-slate-950";
    textGradient = "from-cyan-300 via-blue-400 to-indigo-500";
    buttonGradient = "from-cyan-500 via-blue-600 to-indigo-700";
    accentColor = "from-cyan-300 to-blue-400";
    brandName = "Samsung";
    glowColor = "from-cyan-400/50 via-blue-500/50 to-indigo-500/50";
  } else if (brand === "bosch") {
    bgGradient = "from-red-950 via-rose-900 to-pink-950";
    textGradient = "from-yellow-300 via-orange-400 to-red-500";
    buttonGradient = "from-yellow-500 via-orange-600 to-red-700";
    accentColor = "from-yellow-300 to-orange-400";
    brandName = "Bosch";
    glowColor = "from-yellow-400/50 via-orange-500/50 to-red-500/50";
  } else if (brand === "siemens") {
    bgGradient = "from-teal-950 via-cyan-900 to-blue-950";
    textGradient = "from-lime-300 via-green-400 to-emerald-500";
    buttonGradient = "from-lime-500 via-green-600 to-emerald-700";
    accentColor = "from-lime-300 to-green-400";
    brandName = "Siemens";
    glowColor = "from-lime-400/50 via-green-500/50 to-emerald-500/50";
  }

  return (
    <section className={`relative min-h-screen pt-12 overflow-hidden bg-gradient-to-br ${bgGradient}`}>
      {/* Advanced 3D Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:25px_25px] sm:bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.05)_2px,transparent_2px)] bg-[size:50px_50px] sm:bg-[size:100px_100px]"></div>
      </div>

      {/* Floating 3D Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-16 h-16 sm:top-20 sm:left-20 sm:w-32 sm:h-32 border-2 border-white/20 rotate-45 transform-gpu animate-spin-slow"></div>
        <div className="absolute top-20 right-16 w-12 h-12 sm:top-40 sm:right-32 sm:w-24 sm:h-24 border-2 border-white/15 rotate-12 transform-gpu animate-spin-slow-reverse"></div>
        <div className="absolute bottom-16 left-16 w-20 h-20 sm:bottom-32 sm:left-32 sm:w-40 sm:h-40 border-2 border-white/20 -rotate-45 transform-gpu animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-14 h-14 sm:bottom-20 sm:right-20 sm:w-28 sm:h-28 border-2 border-white/15 rotate-90 transform-gpu animate-spin-slow-reverse"></div>
        
        {/* 3D Cubes */}
        <div className="absolute top-1/4 left-1/3 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-white/20 to-white/5 transform rotate-45 animate-float-delay-1"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 sm:w-12 sm:h-12 bg-gradient-to-br from-white/15 to-white/5 transform -rotate-45 animate-float-delay-2"></div>
        <div className="absolute bottom-1/4 left-1/4 w-10 h-10 sm:w-20 sm:h-20 bg-gradient-to-br from-white/25 to-white/5 transform rotate-12 animate-float-delay-3"></div>
      </div>

      {/* Advanced Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gradient-to-r ${accentColor} rounded-full animate-pulse-glow-slow`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Dynamic Light Rays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse delay-2000"></div>
      </div>

      {/* Glowing Orb Backgrounds */}
      <div className="absolute inset-0">
        <div className={`absolute top-16 left-8 w-48 h-48 sm:top-32 sm:left-16 sm:w-96 sm:h-96 bg-gradient-to-r ${glowColor} rounded-full blur-3xl animate-pulse-glow-slow opacity-30`}></div>
        <div className={`absolute bottom-16 right-8 w-64 h-64 sm:bottom-32 sm:right-16 sm:w-[500px] sm:h-[500px] bg-gradient-to-l ${glowColor} rounded-full blur-3xl animate-pulse-glow-slow delay-1000 opacity-25`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-b ${glowColor} rounded-full blur-3xl animate-pulse-glow-slow delay-500 opacity-20`}></div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-12 sm:py-20 text-center sm:px-6 lg:px-8">
        {/* Ultra-Modern Premium Badge */}
        <div className="mb-8 sm:mb-12 inline-flex items-center gap-2 sm:gap-4 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-2xl px-4 py-2 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold text-white border border-white/30 shadow-2xl transform-gpu hover:scale-105 transition-all duration-500">
          <div className="relative">
            <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-amber-400 animate-pulse" />
            <div className="absolute inset-0 w-4 h-4 sm:w-6 sm:h-6 bg-amber-400/20 rounded-full blur-md animate-ping"></div>
          </div>
          <span className="uppercase tracking-widest font-black text-xs sm:text-sm">Next-Gen Elite</span>
          <div className="relative">
            <Crown className="h-4 w-4 sm:h-6 sm:w-6 text-amber-400 animate-pulse" />
            <div className="absolute inset-0 w-4 h-4 sm:w-6 sm:h-6 bg-amber-400/20 rounded-full blur-md animate-ping delay-1000"></div>
          </div>
        </div>

        {/* Instant 3D Main Heading */}
        <div className="relative mb-6 sm:mb-8">
          <h1 className="text-4xl font-black tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none transform-gpu hover:scale-105 transition-transform duration-700">
            <span className="block mb-2 sm:mb-4 opacity-90 drop-shadow-2xl">Instant</span>
            <span className="block mb-3 sm:mb-6 drop-shadow-2xl">Appliance</span>
            <span className="block mb-4 sm:mb-8 drop-shadow-2xl">Solutions</span>
            <span className={`block text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r ${textGradient} bg-clip-text text-transparent font-extrabold tracking-wider drop-shadow-2xl`}>
              {brandName}
            </span>
          </h1>
          
          {/* 3D Text Shadow Effect */}
          <div className="absolute inset-0 -z-10 text-4xl font-black tracking-tighter text-black/20 sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none transform translate-x-1 translate-y-1">
            <span className="block mb-2 sm:mb-4">Instant</span>
            <span className="block mb-3 sm:mb-6">Appliance</span>
            <span className="block mb-4 sm:mb-8">Solutions</span>
            <span className="block text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">{brandName}</span>
          </div>
        </div>

        {/* Ultra-Modern Description */}
        <p className="mt-8 sm:mt-12 max-w-3xl sm:max-w-4xl text-lg sm:text-3xl md:mt-16 md:max-w-6xl leading-tight font-bold px-4 sm:px-0">
          <span className="text-white font-black">Instant</span> Repair Technology • 
          <span className="text-white font-black"> Instant</span> Expert Dispatch • 
          <span className="text-white font-black"> Instant</span> Customer Experience
        </p>

        {/* Advanced Features Grid with 3D Effects */}
        <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 max-w-4xl sm:max-w-5xl mx-auto px-4 sm:px-0">
          <div className="group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl border border-white/25 shadow-2xl transform-gpu hover:scale-110 hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center shadow-2xl">
                <Rocket className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            </div>
            <span className="text-white font-bold text-sm sm:text-lg">Lightning Fast</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl border border-white/25 shadow-2xl transform-gpu hover:scale-110 hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center shadow-2xl">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            </div>
            <span className="text-white font-bold text-sm sm:text-lg">Precision Quality</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl border border-white/25 shadow-2xl transform-gpu hover:scale-110 hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center shadow-2xl">
                <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-400 to-pink-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            </div>
            <span className="text-white font-bold text-sm sm:text-lg">Elite Rated</span>
          </div>
        </div>

        {/* Ultra-Modern CTA Buttons */}
        <div className="mt-12 sm:mt-20 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center px-4 sm:px-0 w-full sm:w-auto">
          <Link href={`tel:${phoneNumber}`} className="block group w-full sm:w-auto">
            <Button
              className={`relative w-full rounded-2xl sm:rounded-3xl bg-gradient-to-r ${buttonGradient} px-8 py-6 sm:px-16 sm:py-8 text-lg sm:text-2xl font-black text-white shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-110 overflow-hidden border-0 transform-gpu hover:-translate-y-1`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>
              <Phone className="mr-3 sm:mr-6 h-6 w-6 sm:h-8 sm:w-8 relative z-10" />
              <span className="relative z-10 uppercase tracking-widest text-sm sm:text-base">Emergency Call</span>
              <ArrowRight className="ml-2 sm:ml-4 h-5 w-5 sm:h-7 sm:w-7 relative z-10 group-hover:translate-x-3 transition-transform duration-500" />
            </Button>
          </Link>
          
          <Link href={`https://wa.me/${phoneNumber}`} className="block group w-full sm:w-auto">
            <Button
              className="relative w-full rounded-2xl sm:rounded-3xl border-2 border-white/50 bg-white/20 backdrop-blur-2xl px-8 py-6 sm:px-16 sm:py-8 text-lg sm:text-2xl font-black text-white hover:bg-white/30 hover:border-white/70 transition-all duration-700 hover:scale-110 overflow-hidden transform-gpu hover:-translate-y-1"
              variant="outline"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>
              <WhatsappIcon className="mr-3 sm:mr-6 h-6 w-6 sm:h-8 sm:w-8 relative z-10" />
              <span className="relative z-10 uppercase tracking-widest text-sm sm:text-base">WhatsApp</span>
            </Button>
          </Link>
        </div>

        {/* Advanced Trust Indicators with 3D Effects */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-5xl sm:max-w-6xl mx-auto px-4 sm:px-0">
          <div className="group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-xl transform-gpu hover:scale-105 hover:shadow-2xl transition-all duration-500">
            <div className="relative">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-md animate-ping"></div>
            </div>
            <span className="text-white/90 text-xs sm:text-sm font-bold uppercase tracking-widest text-center">24/7 Elite</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-xl transform-gpu hover:scale-105 hover:shadow-2xl transition-all duration-500">
            <div className="relative">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse delay-300"></div>
              <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-md animate-ping delay-1000"></div>
            </div>
            <span className="text-white/90 text-xs sm:text-sm font-bold uppercase tracking-widest text-center">Licensed Pro</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-xl transform-gpu hover:scale-105 hover:shadow-2xl transition-all duration-500">
            <div className="relative">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-700"></div>
              <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md animate-ping delay-2000"></div>
            </div>
            <span className="text-white/90 text-xs sm:text-sm font-bold uppercase tracking-widest text-center">Free Analysis</span>
          </div>
          
          <div className="group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-xl transform-gpu hover:scale-105 hover:shadow-2xl transition-all duration-500">
            <div className="relative">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-md animate-ping delay-3000"></div>
            </div>
            <span className="text-white/90 text-xs sm:text-sm font-bold uppercase tracking-widest text-center">Premium Parts</span>
          </div>
        </div>

        {/* Ultra-Modern Bottom Accent */}
        <div className="mt-12 sm:mt-20 w-24 sm:w-40 h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full shadow-2xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
