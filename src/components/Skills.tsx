import { useEffect, useRef, useState } from 'react';
// import { Shield, Code } from 'lucide-react';
import { Zap, Code } from 'lucide-react';


export function Skills() {
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

  // مهارات الأمن السيبراني
  const cybersecuritySkills = [
    'Burp Suite',
    'Nmap',
    'Metasploit',
    'Wireshark',
    'Kali Linux',
    'TryHackMe Labs',
    'HackTheBox Labs',
  ];

  // مهارات البرمجة
  const programmingSkills = [
    'C++',
    'C#',
    'Python',
    'JavaScript',
    'PHP',
    'HTML',
    'CSS',
    'MySQL',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* العنوان */}
          <h2 className="text-center text-white mb-2"  style={{ fontSize: '1.5rem' }}>
            Skills <span className="text-cyan-400">& Expertise</span> 
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>

          {/* الشبكة */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* مهارات الأمن السيبراني */}
            <div
              className="bg-gray-900 p-8 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Zap className="text-cyan-400" size={28} />
                </div>
                <h3 className="text-white">Cybersecurity Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {cybersecuritySkills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-full border border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300"
                    style={{
                      animation: isVisible
                        ? `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                        : 'none',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* مهارات البرمجة */}
            <div
              className="bg-gray-900 p-8 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Code className="text-green-400" size={28} />
                </div>
                <h3 className="text-white">Programming Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {programmingSkills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 text-green-400 rounded-full border border-green-500/30 hover:bg-green-500/10 hover:border-green-500 transition-all duration-300"
                    style={{
                      animation: isVisible
                        ? `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                        : 'none',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
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
