'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Home, Briefcase, Users, Bot } from "lucide-react";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: <Home className="w-4 h-4" /> },
    { href: "/jobs", label: "Find Work", icon: <Briefcase className="w-4 h-4" /> },
    { href: "/mentors", label: "Mentor Help", icon: <Users className="w-4 h-4" /> },
    { href: "/ai-assistant", label: "AI Assist", icon: <Bot className="w-4 h-4" /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-black/80 backdrop-blur-lg border-b border-white/10"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/freelancer-logo.png"
                alt="Logo"
                className="h-10 w-auto filter drop-shadow-lg"
              />
              <span className="font-bold text-xl hidden sm:inline bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
                FreeLancer
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <motion.div key={link.href} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={link.href}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </motion.div>
            ))}

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="bg-white/10 hover:bg-white/20 rounded-full"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-400" />
                )}
              </Button>
            </motion.div>

            <SignedIn>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{ elements: { avatarBox: "h-10 w-10" } }}
                />
              </motion.div>
            </SignedIn>

            <SignedOut>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <SignInButton mode="modal">
                  <Button className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-6">
                    Login
                  </Button>
                </SignInButton>
              </motion.div>
            </SignedOut>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg border-b border-white/10"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <motion.div key={link.href} whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={link.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}

              <div className="pt-2 border-t border-white/10">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:text-white"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <div className="flex items-center space-x-3">
                      <Sun className="w-4 h-4 text-yellow-400" />
                      <span>Light Mode</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3">
                      <Moon className="w-4 h-4 text-blue-400" />
                      <span>Dark Mode</span>
                    </div>
                  )}
                </Button>

                <div className="mt-3">
                  <SignedIn>
                    <UserButton
                      afterSignOutUrl="/"
                      appearance={{ elements: { avatarBox: "h-10 w-10" } }}
                    />
                  </SignedIn>

                  <SignedOut>
                    <SignInButton mode="modal">
                      <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                        Login
                      </Button>
                    </SignInButton>
                  </SignedOut>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}