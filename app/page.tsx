export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">
              Beverly Web Design
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-gray-900">Portfolio</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Web Design & Development Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We create beautiful, high-performing websites that help your business grow.
              From design to launch, we handle everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition text-center">
                Get a Free Consultation
              </a>
              <a href="#portfolio" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition border-2 border-blue-600 text-center">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed online</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#contact" className="text-blue-600 font-semibold hover:text-blue-700">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">See what we've built for our clients</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'E-Commerce Store', category: 'Retail', color: 'from-purple-400 to-pink-400' },
              { name: 'Restaurant Website', category: 'Hospitality', color: 'from-blue-400 to-cyan-400' },
              { name: 'Corporate Site', category: 'Business', color: 'from-green-400 to-emerald-400' },
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${project.color} h-64 rounded-xl mb-4 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-105 transition`}>
                  {project.name}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Beverly Web Design?</h2>
              <p className="text-lg text-gray-600 mb-6">
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
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-96 rounded-xl"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@beverlywebdesign.com" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Send Us an Email
            </a>
            <a href="tel:+1234567890" className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Call Us Today
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Beverly Web Design</h3>
              <p className="text-sm">Professional web design and development services.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Web Design</a></li>
                <li><a href="#" className="hover:text-white">Development</a></li>
                <li><a href="#" className="hover:text-white">E-Commerce</a></li>
                <li><a href="#" className="hover:text-white">SEO</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Portfolio</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>hello@beverlywebdesign.com</li>
                <li>+1 (234) 567-890</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Beverly Web Design. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
