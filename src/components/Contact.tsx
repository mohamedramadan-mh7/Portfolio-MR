import { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Github, Target, FileText } from 'lucide-react';

export function Contact() {
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

  // معلومات التواصل
  const contactInfo = [
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'Mohamed Ramadan',
      link: 'https://www.linkedin.com/in/mohamedramadan-mh7/',
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
        </svg>
      ),
      label: 'Upwork',
      value: 'Freelancer Profile',
      link: 'https://www.upwork.com/freelancers/~01680dbe1d530421f3',
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'mohamedramadan-mh7',
      link: 'https://github.com/mohamedramadan-mh7',
    },
    {
      icon: <FileText size={20} />,
      label: 'Medium',
      value: '@mohamedramadan.mh7',
      link: 'https://medium.com/@mohamedramadan.mh7',
    },
    {
      icon: <Target size={20} />,
      label: 'TryHackMe',
      value: 'mohamedramadan.mh7',
      link: 'https://tryhackme.com/p/mohamedramadan.mh7',
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'mohamedramadan.mh7@gmail.com',
      link: 'mailto:mohamedramadan.mh7@gmail.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* العنوان */}
          <h2 className="text-center text-white mb-2" style={{ fontSize: '1.5rem' }}>
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-12"></div>

          {/* النص التعريفي */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-400">
              I'm always open to discussing new projects, security challenges,
              or opportunities to collaborate. Feel free to reach out through
              any of the following channels.
            </p>
          </div>

          {/* معلومات التواصل */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
                style={{
                  animation: isVisible
                    ? `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                    : 'none',
                }}
              >
                <div className="p-4 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  {info.icon}
                </div>
                <div className="text-center">
                  <div className="text-gray-400 mb-1">{info.label}</div>
                  <div className="text-white">{info.value}</div>
                </div>
              </a>
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