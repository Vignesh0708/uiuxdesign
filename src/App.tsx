import React, { useState } from 'react';

import {
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MousePointer2,
  Palette,
  Users,
  Lightbulb,
  ArrowUpRight,
  Touchpad,
  LayoutGrid,
  BarChart,
  Smartphone,
  Behance
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Skincare Website Redesign",
      
      image: "https://img.freepik.com/free-psd/professional-laser-clinic-landing-page-template_23-2150274377.jpg?t=st=1737995631~exp=1737999231~hmac=b448d2d148d227427d4bc94274ddcb82dbe2d35f42fd82b7a9ae301b711740a0&w=1380",
      tags: ["UX Design", "Web", "Retail"],
      link: "https://www.behance.net/gallery/217942455/SkinCare-Clinic-Landing-Page",
    },
    {
      title: "Ticket Booking Application",
    
      image:
        "https://i.ibb.co/9ksCmwhJ/csk.png",
     link: "https://www.behance.net/gallery/180663483/CSK-Ticket-Booking-Application",
    },
    {
      title: "Learning Platform",
      description:
        "User-centered design for a wellness tracking application with emphasis on data visualization.",
      image:
        "https://i.ibb.co/HTgkBGYG/landing-page.png",
    link : "https://www.behance.net/gallery/217921919/Learning-Management-WebApplication"
    },
    {
      title: "Quiz Application",
      description:
        "User-centered design for a wellness tracking application with emphasis on data visualization.",
      image:
        "https://i.ibb.co/kN0bbw4/1.png",
    link : "https://www.behance.net/gallery/217982631/Quiz-Application-Presentation-Deck"
    },
    {
      title: "SportZone CaseStudy",
      description:
        "User-centered design for a wellness tracking application with emphasis on data visualization.",
      image:
        "https://i.ibb.co/RkBQx8V1/Project-Title-1.png",
  
    },
    {
      title: "Design System",
      description:
        "User-centered design for a wellness tracking application with emphasis on data visualization.",
      image:
        "https://i.ibb.co/twMbvKCs/Thumbnail-2.png",
  link :"https://www.behance.net/gallery/217984107/Design-System"
    },
  ];

  const services = [
    {
      icon: <MousePointer2 className="w-6 h-6" />, 
      title: "UI Design",
      description: "Creating beautiful, intuitive interfaces that users love to interact with."
    },
    {
      icon: <Users className="w-6 h-6" />, 
      title: "UX Research",
      description: "Understanding user needs through in-depth research and testing."
    },
    {
      icon: <Palette className="w-6 h-6" />, 
      title: "Design Systems",
      description: "Building scalable and consistent design systems for teams."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />, 
      title: "Product Strategy",
      description: "Shaping product direction through design thinking and innovation."
    },
    {
      icon: <Touchpad className="w-6 h-6" />, 
      title: "Interaction Design",
      description: "Crafting engaging and seamless interactions to enhance user experience."
    },
    {
      icon: <LayoutGrid className="w-6 h-6" />, 
      title: "Wireframing & Prototyping",
      description: "Creating low and high-fidelity wireframes and interactive prototypes."
    },
    {
      icon: <BarChart className="w-6 h-6" />, 
      title: "Data Visualization",
      description: "Designing intuitive visual representations of complex data."
    },
    {
      icon: <Smartphone className="w-6 h-6" />, 
      title: "Mobile App Design",
      description: "Crafting user-friendly and visually appealing mobile experiences."
    }
  ];


  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Vignesh
            </span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#work" className="text-gray-400 hover:text-white">
                Work
              </a>
              <a href="#services" className="text-gray-400 hover:text-white">
                Services
              </a>
              <a href="#about" className="text-gray-400 hover:text-white">
                About
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </div>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-400 hover:text-white"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#work" className="block px-3 py-2 text-gray-400 hover:text-white">
                Work
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-400 hover:text-white">
                Services
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-400 hover:text-white">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-400 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6">
            Designing{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Experiences
            </span>{" "}
            That Delight
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            I'm Vignesh, a UI/UX Designer with 3 years of experience crafting
            seamless digital experiences for SaaS products, web apps, and
            websites.
          </p>
          <div className="flex gap-4">
            <a
              href="#work"
              className="group px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100"
            >
              View Work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-800 rounded-full hover:bg-gray-900"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold mb-10 text-center">My Work</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <a
        key={index}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900 p-6 rounded-lg hover:shadow-lg hover:bg-gray-800 transition"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      </a>
    ))}
  </div>
  <br />
  <br />
<div className='expBtn'>
  <a href='https://www.behance.net/vigneshvicky81' className='seemore'>Explore My Work</a>
  </div>
</section>


      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-400">
          Hi, I'm Vignesh! I specialize in designing user interfaces and
          experiences that drive engagement and solve real problems. With
          experience working on SaaS products, e-commerce platforms, and
          healthcare apps, I bring both creativity and strategic thinking to
          every project.
        </p>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <div className="text-violet-500">{service.icon}</div>
              <h3 className="text-xl font-bold mt-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer
        id="contact"
        className="py-12 bg-gray-900 text-gray-400 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p>Email me or connect on social platforms:</p>
        <div className="flex justify-center mt-4 space-x-6 text-xl text-violet-400">
       
          <a
            href="https://www.linkedin.com/in/vignesh-v-548491221/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.behance.net/vigneshvicky81"
            target="_blank"
            rel="noopener noreferrer"
          >
          <i className="fi fi-brands-behance"></i>
          </a>
          <a href="mailto:vigneshengineer07@gmail.com">
            <Mail />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
