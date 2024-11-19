"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Meal Plans", href: "#mealplans" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 text-gray-800 dark:text-white"
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="w-6 h-5 flex flex-col justify-between"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 8 },
            }}
            className="w-full h-0.5 bg-current block"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="w-full h-0.5 bg-current block"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -8 },
            }}
            className="w-full h-0.5 bg-current block"
          />
        </motion.div>
      </button>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-gray-900"
          >
            <div className="flex flex-col items-center justify-center h-full">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-2xl font-bold py-4 text-gray-800 dark:text-white",
                    "hover:text-green-500 dark:hover:text-green-400",
                    "transition-colors duration-200"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}