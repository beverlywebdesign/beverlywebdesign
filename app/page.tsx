'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-surface-50">
      {/* Navigation - Color Layer: surface-100 (elevated from page) */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-surface-100 backdrop-blur-sm shadow-soft z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-surface-900"
            >
              Beverly Web Design
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="text-surface-700 hover:text-surface-900 transition-colors font-medium">Services</a>
              <a href="#portfolio" className="text-surface-700 hover:text-surface-900 transition-colors font-medium">Portfolio</a>
              <a href="#about" className="text-surface-700 hover:text-surface-900 transition-colors font-medium">About</a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-soft hover:shadow-medium transition-all"
                style={{
                  boxShadow: '0 2px 4px -1px rgba(37, 99, 235, 0.2), 0 4px 6px -1px rgba(37, 99, 235, 0.3)'
                }}
              >
                Contact
              </motion.a>
            </div>

            {/* Mobile Hamburger Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-surface-200 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-surface-900"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-surface-900/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Mobile Menu Drawer - Most elevated surface */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-elevated z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header - surface-100 layer */}
                <div className="flex justify-between items-center p-4 bg-surface-100 border-b border-surface-200">
                  <span className="text-lg font-bold text-surface-900">Menu</span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={closeMobileMenu}
                    className="p-2 rounded-lg hover:bg-surface-200 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6 text-surface-900"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Mobile Menu Links */}
                <nav className="flex-1 overflow-y-auto bg-white">
                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="py-4"
                  >
                    {navLinks.map((link) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={closeMobileMenu}
                        variants={fadeInUp}
                        whileTap={{ scale: 0.98 }}
                        className={`block px-6 py-4 text-lg font-medium transition-all ${
                          link.label === 'Contact'
                            ? 'bg-brand-600 text-white hover:bg-brand-700 mx-4 rounded-lg text-center mt-4 shadow-medium'
                            : 'text-surface-900 hover:bg-surface-100 hover:text-brand-600'
                        }`}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </motion.div>
                </nav>

                {/* Mobile Menu Footer - surface-100 layer */}
                <div className="border-t border-surface-200 p-4 bg-surface-100">
                  <p className="text-sm text-surface-600 text-center">
                    © 2024 Beverly Web Design
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section - Color Layer: brand-50 (background) */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-brand-50 to-brand-100 relative overflow-hidden">
        {/* Animated background circles - deeper layers */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-brand-200 rounded-full opacity-30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-brand-300 rounded-full opacity-30 blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold text-surface-900 mb-6 leading-tight"
            >
              Professional Web Design & Development Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-xl text-surface-700 mb-8 leading-relaxed"
            >
              We create beautiful, high-performing websites that help your business grow.
              From design to launch, we handle everything.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center shadow-large hover:shadow-elevated"
                style={{
                  backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)',
                }}
              >
                Get a Free Consultation
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center shadow-medium hover:shadow-large border border-brand-200"
              >
                View Our Work
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Color Layer: white (elevated from page) */}
      <section id="services" className="py-20 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-surface-900 mb-4">Our Services</h2>
            <p className="text-xl text-surface-600">Everything you need to succeed online</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: 'Web Design',
                description: 'Custom, responsive designs that capture your brand and engage visitors.',
                icon: '🎨'
              },
              {
                title: 'Web Development',
                description: 'Fast, secure, and scalable websites built with modern technologies.',
                icon: '⚡'
              },
              {
                title: 'E-Commerce',
                description: 'Complete online store solutions that drive sales and growth.',
                icon: '🛒'
              },
              {
                title: 'SEO & Marketing',
                description: 'Get found online and attract more customers to your business.',
                icon: '📈'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-surface-50 p-8 rounded-xl transition-all cursor-pointer shadow-soft hover:shadow-large group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-4xl mb-4"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-surface-900 mb-3">{service.title}</h3>
                <p className="text-surface-600 mb-4 leading-relaxed">{service.description}</p>
                <motion.a
                  href="#contact"
                  whileHover={{ x: 5 }}
                  className="text-brand-600 font-semibold hover:text-brand-700 inline-flex items-center group-hover:text-brand-700"
                >
                  Learn More →
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section - Color Layer: surface-50 (background) */}
      <section id="portfolio" className="py-20 px-4 bg-surface-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-surface-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-surface-600">See what we've built for our clients</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { name: 'E-Commerce Store', category: 'Retail', gradient: 'from-purple-500 to-pink-500' },
              { name: 'Restaurant Website', category: 'Hospitality', gradient: 'from-brand-500 to-cyan-500' },
              { name: 'Corporate Site', category: 'Business', gradient: 'from-green-500 to-emerald-500' },
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`bg-gradient-to-br ${project.gradient} h-64 rounded-xl mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-large hover:shadow-elevated relative overflow-hidden transition-all`}
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, currentColor, currentColor), linear-gradient(to top, rgba(255,255,255,0.1), transparent)`
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-surface-900/20 backdrop-blur-sm flex items-center justify-center transition-opacity"
                  >
                    <span className="text-sm font-semibold bg-white text-surface-900 px-6 py-2 rounded-full shadow-medium">
                      View Project →
                    </span>
                  </motion.div>
                  <span className="relative z-10">{project.name}</span>
                </motion.div>
                <h3 className="text-xl font-bold text-surface-900">{project.name}</h3>
                <p className="text-surface-600">{project.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section - Color Layer: white (elevated) */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold text-surface-900 mb-6">Why Choose Beverly Web Design?</h2>
              <p className="text-lg text-surface-700 mb-6 leading-relaxed">
                We're a team of passionate designers and developers dedicated to creating
                exceptional web experiences. With years of experience and hundreds of successful
                projects, we know what it takes to build websites that work.
              </p>
              <ul className="space-y-4">
                {[
                  'Modern, responsive designs',
                  'Fast turnaround times',
                  'Ongoing support & maintenance',
                  'SEO-optimized from the start',
                  'Transparent pricing'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-surface-700 bg-surface-50 px-4 py-3 rounded-lg shadow-subtle"
                  >
                    <motion.span
                      whileHover={{ scale: 1.2 }}
                      className="text-green-500 mr-3 text-xl"
                    >
                      ✓
                    </motion.span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-brand-500 to-purple-600 h-96 rounded-xl shadow-large hover:shadow-elevated transition-all"
              style={{
                backgroundImage: 'linear-gradient(to bottom right, rgba(59, 130, 246, 1), rgba(147, 51, 234, 1)), linear-gradient(to top, rgba(255,255,255,0.1), transparent)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Section - Color Layer: surface-900 (deepest background) */}
      <section id="contact" className="py-20 px-4 bg-surface-900 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-800 to-surface-900" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-surface-300 mb-8"
          >
            Let's discuss how we can help bring your vision to life
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="mailto:hello@beverlywebdesign.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-large hover:shadow-elevated"
              style={{
                backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)',
              }}
            >
              Send Us an Email
            </motion.a>
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-surface-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-large hover:shadow-elevated"
            >
              Call Us Today
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer - Color Layer: surface-900 (deepest) */}
      <footer className="bg-surface-900 text-surface-400 py-12 px-4 border-t border-surface-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Beverly Web Design</h3>
              <p className="text-sm leading-relaxed">Professional web design and development services.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-brand-400 transition-colors">Web Design</a></li>
                <li><a href="#services" className="hover:text-brand-400 transition-colors">Development</a></li>
                <li><a href="#services" className="hover:text-brand-400 transition-colors">E-Commerce</a></li>
                <li><a href="#services" className="hover:text-brand-400 transition-colors">SEO</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-brand-400 transition-colors">About</a></li>
                <li><a href="#portfolio" className="hover:text-brand-400 transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:hello@beverlywebdesign.com" className="hover:text-brand-400 transition-colors">hello@beverlywebdesign.com</a></li>
                <li><a href="tel:+1234567890" className="hover:text-brand-400 transition-colors">+1 (234) 567-890</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-surface-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Beverly Web Design. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
