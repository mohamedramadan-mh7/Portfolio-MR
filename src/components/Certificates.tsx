import { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';

export function Certificates() {
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

  // قائمة الشهادات
  const certificates = [
    {
      title: 'Ethical Hacker',
      issuer: 'Cisco Networking Academy',
      hours: '70 hours',
      description: 'Comprehensive penetration testing training covering information gathering, vulnerability scanning, exploitation, wireless attacks, cloud security, IoT security, and reporting.',
      link: 'https://www.credly.com/badges/1067aa6a-6ee5-48a0-af5a-e8dfb2e12db5/public_url',
    },
    {
      title: "Penetration Tester",
      issuer: "TryHackMe",
      hours: "28 hours",
      description: "Completed an in-depth learning path covering web application exploitation, privilege escalation, network attack techniques, and real-world penetration testing methodology.",
      link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-XNRFS76EXP.pdf"
    },
    {
      title: "Network Security",
      issuer: "National Telecommunication Institute (NTI)",
      hours: "120 hours",
      description: "Intensive 120-hour program covering OSPF, SSH, ACLs, VPN, Syslog, NTP, AAA, and enterprise network defense concepts.",
      link: "https://drive.google.com/file/d/11jM6F84ouCeeIyxwZuEZdVXeTmn4fdse/view?usp=sharing"
    },
    {
      title: "Cyber Security 101",
      issuer: "TryHackMe",
      hours: "Learning Path",
      description: "Beginner-friendly path introducing core cybersecurity areas including networking, cryptography, Windows & Linux basics, offensive tools, defensive solutions, and practical hands-on security challenges.",
      link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-PPLF5XTHH2.pdf"
    },        
    {
      title: 'Advent of Cyber 2024',
      issuer: 'TryHackMe',
      hours: '24 challenges',
      description: 'Completed 24 real security challenges demonstrating consistency, practical problem-solving, strong analytical thinking, and solid cybersecurity fundamentals.',
      link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-4UUOVUBVSP.pdf',
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      hours: '6 hours',
      description: 'Foundational cybersecurity course covering modern threats, online safety, vulnerability identification, and core defensive strategies across organizations.',
      link: 'https://www.credly.com/badges/35491684-70e5-4665-85e0-e0f748731064/public_url',
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-800" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* العنوان */}
          <h2 className="text-center text-white mb-2"  style={{ fontSize: '1.5rem' }}>
            Certificates <span className="text-cyan-400">& Achievements</span> 
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>

          {/* شبكة الشهادات */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certificates.map((cert, index) => (
              <div
                key={cert.title}
                className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
                style={{
                  animation: isVisible
                    ? `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                    : 'none',
                }}
              >
                {/* أيقونة الشهادة */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg flex-shrink-0">
                    <Award className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-cyan-400">{cert.issuer}</p>
                  </div>
                </div>

                {/* المدة */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-full">
                    {cert.hours}
                  </span>
                </div>

                {/* الوصف */}
                <p className="text-gray-400 mb-4">
                  {cert.description}
                </p>

                {/* رابط المشاهدة */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  View Certificate
                  <ExternalLink size={14} />
                </a>
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
