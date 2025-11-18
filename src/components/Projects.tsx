import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  // حالة الظهور عند التمرير
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // مراقب التمرير
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

  // قائمة المشاريع
  const projects = [
    {
      title: 'Practical Labs - Junior Penetration Tester',
      description:
        'Completed the Junior Penetration Tester path on TryHackMe: hands-on labs covering web app exploitation, network reconnaissance, privilege escalation, and reporting. Practical experience with Burp Suite, Nmap, and exploit development.',
      image : '/src/Image/jrpenetrationtester.jpg',
      link: 'https://tryhackme.com/p/mohamedramadan.mh7',
    },
    {
      title: 'Login & Order Manipulation Exploit — Real-World Bug',
      description:
        'Identified a real-world login bypass and discount manipulation flaw in an e-commerce platform. Exploited response modification to gain access and alter pricing using Burp Suite. Documented a full PoC and performed responsible disclosure.',
        image : '/src/Image/BugBounty.png',
      link: 'https://medium.com/@mohamedramadan.mh7/how-i-got-a-free-order-by-bypassing-login-my-first-real-world-bug-38798b79a9d7',
    },
    {
      title: 'Enterprise Network Security Project — NTI',
      description:
        'Designed and implemented a secure enterprise network using Cisco Packet Tracer, including OSPF routing, AAA, ACL, SSH, NTP, Syslog, and IPSec VPN. Built a multi-department infrastructure with layered security controls.',
      image: '/src/Image/nti-network.png',
      link: 'https://github.com/mohamedramadan-mh7/Summer-Intern-FInal-Project-NETSEC---NTI/tree/main'
    },
    {
      "title": "Python Network Sniffer",
      "description": "Lightweight packet-sniffing tool built with Python and Scapy. Captures and analyzes live traffic, showing protocol, IPs, ports, and timestamps with clean colored terminal output. Supports BPF filters and optional PCAP export.",
      "image": "/src/Image/Network-Sniffer.png",
      "link": "https://github.com/mohamedramadan-mh7/CodeAlpha_Basic_Network_Sniffer/tree/main"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* العنوان */}
          <h2 className="text-center text-white mb-2"  style={{ fontSize: '1.5rem' }}>
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>

          {/* شبكة المشاريع */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
                style={{
                  animation: isVisible
                    ? `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                    : 'none',
                }}
              >
                {/* صورة المشروع */}
                <div className="relative overflow-hidden h-64">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0"></div>
                </div>

                {/* محتوى المشروع */}
                <div className="p-6">
                  <h3 className="text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
