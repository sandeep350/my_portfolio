import React from 'react'
import Navbar from './sections/Navbar'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <Navbar />
      
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section id="hero" className="py-16">
          <h1 className="text-4xl font-bold text-center">Welcome to My Portfolio</h1>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <h2 className="text-3xl font-semibold">About Me</h2>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl font-semibold">Projects</h2>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <h2 className="text-3xl font-semibold">Experience</h2>
        </section>

        {/* Testimonial Section */}
        <section id="testimonial" className="py-16">
          <h2 className="text-3xl font-semibold">Testimonials</h2>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <h2 className="text-3xl font-semibold">Contact</h2>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
