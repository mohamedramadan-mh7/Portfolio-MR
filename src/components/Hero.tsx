import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  //The function to scroll to the next section
  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1719255417989-b6858e87359e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwZGFya3xlbnwxfHx8fDE3NjI4NzcyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          

          {/*Main Title*/}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white mb-6"
            style={{ fontSize: '2.8rem' }}
          >
            Mohamed Ramadan
          </motion.h1>

        

          {/* العنوان الفرعي */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-lg md:text-xl text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ fontSize: '1.2rem' }}
          >
            <span className="text-cyan-400">Cybersecurity Specialist</span>
            <span className="text-cyan-500/50">|</span>
            <span className="text-cyan-400">Penetration Tester</span>
            <span className="text-cyan-400/50">|</span>
            <span className="text-cyan-400">Red Team Enthusiast</span>
          </motion.div>

          {/* Introductory paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Welcome! I'm Mohamed Ramadan, a passionate cybersecurity professional dedicated to 
            protecting digital assets and finding vulnerabilities before the bad guys do. 
            With expertise in penetration testing and red team operations, I help 
            organizations strengthen their security posture.
          </motion.p>

          {/* Explore button */}
          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToNext();
            }}
            className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            Explore My Work
          </motion.a>
        </div>
      </div>

      {/* Scroll icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <ChevronDown className="text-cyan-400 animate-bounce" size={32} />
      </motion.div>
    </section>
  );
}
