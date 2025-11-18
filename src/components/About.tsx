import { useEffect, useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Photo from '../Image/Photo.jpg';

export function About() {
  // Display status when scrolling
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll monitor
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* the address */}
          <h2 className="text-center text-white mb-2" style={{ fontSize: '1.5rem' }}>
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Text */}
            <div className="space-y-6">
              <p className="text-gray-300">
                I’m Mohamed Ramadan, a Penetration Tester focused on web application security and red teaming. 
                I have hands-on experience discovering and exploiting vulnerabilities such as XSS, SQL Injection, 
                CSRF, SSRF, and Broken Access Control. I combine offensive testing skills with web development 
                knowledge (HTML, CSS, JavaScript, PHP, MySQL) to produce clear PoCs and practical remediation guidance.
              </p>
              <p className="text-gray-300">
                I completed a network security project at the National Telecommunication Institute (NTI) applying 
                Cisco technologies including OSPF, SSH, ACLs, VLANs, and VPNs. I’ve performed real-world vulnerability 
                discovery on educational platforms and completed practical labs on TryHackMe and HackTheBox.
              </p>
              <p className="text-gray-300">
                I bring a practical, lab-first approach to testing: responsible disclosure, clear documentation, and 
                remediation-focused reports. I’m passionate about offensive security and continuously 
                sharpening my skills to stay ahead of emerging threats.
              </p>

              <p className="text-gray-300">
                My services include manual and automated web application penetration testing with OWASP Top-10 coverage, 
                professional PDF reports with PoC and remediation steps, and red team simulations to evaluate detection and response. 
                Available for both one-time assessments and ongoing security partnerships.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 pt-6" style={{ fontSize: '1.1rem' }}>
                <div className="text-center">
                  <div className="text-cyan-400 mb-2">20+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-cyan-400 mb-2">15+</div>
                  <div className="text-gray-400">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-cyan-400 mb-2">2+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <ImageWithFallback
                  src={Photo}
                  alt="Mohamed Ramadan"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
              {/* Decorative effect */}
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-cyan-500/10 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-cyan-500/30 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
