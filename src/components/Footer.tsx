"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import { resources } from "@/data/resources";

// Social Media Icons
const SocialIcons = {
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  twitter: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  instagram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  ),
  facebook: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  ),
  youtube: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const services = [
    { name: "Paid Search", href: "#services" },
    { name: "Paid Social", href: "#services" },
    { name: "SEO", href: "#services" },
    { name: "DSP", href: "#services" },
    { name: "Creative", href: "#services" },
    { name: "Content Marketing", href: "#services" },
    { name: "CRO", href: "#services" },
  ];

  const company = [
    { name: "Home", href: "/" },
    { name: "Our Stories", href: "#about" },
    { name: "Success Stories", href: "#success-stories" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/mediamate", icon: "linkedin" },
    { name: "Twitter", href: "https://twitter.com/mediamate", icon: "twitter" },
    { name: "Instagram", href: "https://www.instagram.com/mediamate", icon: "instagram" },
    { name: "Facebook", href: "https://www.facebook.com/mediamate", icon: "facebook" },
    { name: "YouTube", href: "https://www.youtube.com/@mediamate", icon: "youtube" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitMessage("Thank you! We'll be in touch soon.");
    setEmail("");
    setIsSubmitting(false);

    // Clear message after 3 seconds
    setTimeout(() => setSubmitMessage(""), 3000);
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-[#1a1a1a] text-white"
      role="contentinfo"
      id="contact"
    >
      <div className="w-full px-4 py-10 md:py-10">
        <div className="w-[90vw] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
            {/* Left Section - Logo, Headline, Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-center lg:text-left"
            >
              {/* Company Logo */}
              <div className="relative w-40 h-20 sm:w-48 sm:h-24 md:w-56 md:h-28 lg:w-64 lg:h-32 mx-auto lg:mx-0">
                <Image
                  src={resources.logo.src}
                  alt={resources.logo.alt}
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>

              {/* Headline */}
              <h2 className="font-bold leading-tight font-montserrat">Ready to Scale?</h2>

              {/* Supporting Line */}
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-md">
                Let precision marketing take your brand to the next level
              </p>

              {/* Business Contact Info */}
              <address className="not-italic text-gray-300 text-body-sm space-y-2">
                <p>123 Marketing Avenue, Suite 500</p>
                <p>New York, NY 10001</p>
                <p>
                  <a href="tel:+15551234567" className="hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </a>
                </p>
              </address>

              {/* Email Input Form */}
              <form onSubmit={handleSubmit} className="pt-4" aria-label="Newsletter subscription">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                  <div className="flex-1 relative">
                    <label htmlFor="footer-email" className="sr-only">
                      Enter your email address
                    </label>
                    <Mail
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5"
                      aria-hidden="true"
                    />
                    <input
                      id="footer-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      autoComplete="email"
                      className="w-full pl-12 pr-4 py-4 rounded-full bg-[#2a2a2a] border border-gray-700 focus:outline-none focus:border-[#DF5E99] focus:ring-2 focus:ring-[#DF5E99]/50 text-white placeholder:text-gray-500 text-body-base transition-all"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-[#EB5896] to-[#3CB4C7] text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap text-btn focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Sending..." : "Submit"}</span>
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </motion.button>
                </div>
                {submitMessage && (
                  <p className="mt-3 text-green-400 text-body-sm" role="status" aria-live="polite">
                    {submitMessage}
                  </p>
                )}
              </form>

              {/* Social Media Links */}
              <div className="pt-4">
                <p className="text-gray-400 text-body-sm mb-4">Follow us on social media</p>
                <div className="flex gap-4 justify-center lg:justify-start">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#2a2a2a] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#DF5E99] hover:border-[#DF5E99] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DF5E99]"
                      aria-label={`Follow MediaMate on ${social.name}`}
                    >
                      {SocialIcons[social.icon as keyof typeof SocialIcons]}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Section - Link Columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-12 md:gap-16 pt-8 lg:pt-4"
            >
              {/* Services Column */}
              <nav aria-label="Services navigation">
                <h3 className="text-h5 uppercase tracking-wider text-white mb-8">Services</h3>
                <ul className="space-y-4" role="list">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a
                        href={service.href}
                        className="text-gray-300 hover:text-white focus:text-white transition-colors text-body-base flex items-center gap-3 group focus:outline-none focus-visible:underline"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[#DF5E99] group-hover:bg-[#45AFC5] transition-colors flex-shrink-0"
                          aria-hidden="true"
                        />
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Company Column */}
              <nav aria-label="Company navigation">
                <h3 className="text-h5 uppercase tracking-wider text-white mb-8">Company</h3>
                <ul className="space-y-4" role="list">
                  {company.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-white focus:text-white transition-colors text-body-base flex items-center gap-3 group focus:outline-none focus-visible:underline"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[#45AFC5] group-hover:bg-[#DF5E99] transition-colors flex-shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </div>

          {/* Divider Line */}
          <div className="mt-16 md:mt-16 pt-6 border-t border-gray-800">
            {/* Centered Copyright */}
            <div className="text-center">
              <p className="text-gray-400 text-body-base">
                © {new Date().getFullYear()} MediaMate. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
