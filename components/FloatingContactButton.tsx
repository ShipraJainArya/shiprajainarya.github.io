"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dosis } from "next/font/google";

const dosis = Dosis({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function FloatingContactButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const [shouldHide, setShouldHide] = useState(false);

    useEffect(() => {
        // 1. Scroll visibility logic (Show button after scrolling a bit)
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        // 2. Intersection Observer for color/visibility logic based on sections
        const observer = new IntersectionObserver(
            (entries) => {
                // Find all intersecting entries
                const visibleEntries = entries.filter((entry) => entry.isIntersecting);

                if (visibleEntries.length > 0) {
                    // Get the entry that takes up the most space on screen, or just the first intersecting one
                    // For a floating bottom-right button, we care about what's at the bottom of the viewport
                    const currentEntry = visibleEntries[visibleEntries.length - 1]; // bottom-most intersecting section

                    const sectionId = currentEntry.target.id;
                    const tagName = currentEntry.target.tagName.toLowerCase();

                    // Hide if overlapping footer or contact section
                    if (sectionId === "contact" || tagName === "footer") {
                        setShouldHide(true);
                    } else {
                        setShouldHide(false);

                        // Determine theme based on the section's background
                        if (sectionId === "about") { // HomeServices has id "about"
                            setTheme("light");
                        } else {
                            // Light sections: #home, #agreements, #testimonials, etc.
                            setTheme("dark");
                        }
                    }
                }
            },
            {
                // Root margin: observe intersections specifically near the bottom of the viewport
                // This makes it trigger when a section enters the bottom area where the button lives
                rootMargin: "0px 0px -10% 0px",
                threshold: 0.1, // Trigger when 10% of the section is visible
            }
        );

        // Observe all relevant sections
        const sections = document.querySelectorAll("section, footer, main");
        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && !shouldHide && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={`fixed bottom-6 right-6 z-50 ${dosis.className}`}
                >
                    <motion.a
                        href="https://wa.me/919711909677"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 px-5 py-3.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-colors duration-300 font-semibold border ${theme === "dark"
                            ? "bg-[#2b1c13] text-[#f5c75b] border-[#4a3427] hover:bg-[#3d281a]"
                            : "bg-[#f5c75b] text-[#2b1c13] border-[#f5c75b]/30 hover:bg-[#ffd76d]"
                            } group overflow-hidden`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Subtle inner shine */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none ${theme === "dark" ? "bg-white" : "bg-black"
                            }`} />

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className={`w-5 h-5 ${theme === "dark" ? "text-[#f5c75b]" : "text-[#2b1c13]"
                                }`}
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.488-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                        </svg>
                        <span className="tracking-wide hidden md:inline-block">Start a consultation now!</span>
                        <span className="tracking-wide md:hidden">Chat</span>
                    </motion.a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
