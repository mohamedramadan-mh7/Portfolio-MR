import { Download } from 'lucide-react';
import CVfile from '../CV/Mohamed Ramadan - CV.pdf';


export function Footer() {
  // دالة تحميل السيرة الذاتية
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CVfile;
    link.download = 'Mohamed-Ramadan-CV.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* القسم العلوي */} 
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* معلومات عني */}
          <div>
            <div className="text-cyan-400 mb-4 text-2xl">
              {'<MR />'}
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Cybersecurity Specialist passionate about ethical hacking and
              protecting digital assets. Dedicated to securing the digital world
              one vulnerability at a time.
            </p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="text-white mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* الفاصل */}
        <div className="border-t border-gray-800 pt-8">
          {/* حقوق النشر وزر التحميل */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-gray-400 text-center md:text-left">
                © 2025 Mohamed Ramadan. All Rights Reserved.
              </p>
            </div>
            
            {/* زر تحميل السيرة الذاتية */}
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 cursor-pointer"
            >
              <Download size={18} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}