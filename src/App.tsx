import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* شريط التنقل الثابت */}
      <Navbar />
      
      {/* الصفحة الرئيسية */}
      <Hero />
      
      {/* قسم عني */}
      <About />
      
      {/* قسم المهارات */}
      <Skills />
      
      {/* قسم المشاريع */}
      <Projects />
      
      {/* قسم الشهادات */}
      <Certificates />
      
      {/* قسم التواصل */}
      <Contact />
      
      {/* التذييل */}
      <Footer />
    </div>
  );
}