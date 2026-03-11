import React, { useEffect, useState, useRef } from 'react';
import { MessageCircle, Instagram, ArrowRight, Star, MapPin, Gift, Droplet, Wind, Sparkles, ShoppingBag, Menu, X } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/971547411813";
const INSTAGRAM_LINK = "https://instagram.com/algharayaf.perfume";

function Reveal({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    let animationFrameId: number;
    const updateRing = () => {
      setRingPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.15,
        y: prev.y + (mousePos.y - prev.y) * 0.15
      }));
      animationFrameId = requestAnimationFrame(updateRing);
    };
    animationFrameId = requestAnimationFrame(updateRing);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  const collections = [
    { id: 1, nameAr: "عود خام", nameEn: "Raw Oud Wood", desc: "Premium oud chips for burning", price: "200–2000 AED", icon: <Wind className="w-6 h-6" />, badge: "Bestseller" },
    { id: 2, nameAr: "عطور دهنية", nameEn: "Oud Oil Perfumes", desc: "Concentrated Arabian oil perfumes", price: "150–800 AED", icon: <Droplet className="w-6 h-6" /> },
    { id: 3, nameAr: "عطور إسبري", nameEn: "Spray Perfumes", desc: "Modern spray format with Arabic soul", price: "100–500 AED", icon: <Sparkles className="w-6 h-6" />, badge: "جديد" },
    { id: 4, nameAr: "بخور", nameEn: "Bakhoor", desc: "Scented incense chips for home", price: "80–400 AED", icon: <Wind className="w-6 h-6" /> },
    { id: 5, nameAr: "مجموعات الهدايا", nameEn: "Gift Collections", desc: "Curated gift sets for occasions", price: "300–1500 AED", icon: <Gift className="w-6 h-6" />, badge: "Limited" },
    { id: 6, nameAr: "تفصيل عطور", nameEn: "Bespoke Perfume", desc: "Personal fragrance creation service", price: "Consultation", icon: <Star className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-brand-cream font-body relative">
      <div className="hidden md:block">
        <div className="cursor-dot" style={{ left: mousePos.x, top: mousePos.y }} />
        <div className="cursor-ring" style={{ left: ringPos.x, top: ringPos.y }} />
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col items-center">
            <span className="font-arabic text-3xl text-brand-gold">الغرايف</span>
            <span className="font-display text-xs tracking-[0.2em] text-brand-cream/80 mt-1">AL GHARAYAF PERFUM</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Collections', 'Our Story', 'Bespoke', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm tracking-widest uppercase hover:text-brand-gold transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 border border-brand-gold/50 px-5 py-2 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all">
            <span className="font-arabic-sans text-sm">تواصل معنا</span>
            <MessageCircle className="w-4 h-4" />
          </a>

          <button className="md:hidden text-brand-gold" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8">
          {['Collections', 'Our Story', 'Bespoke', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display tracking-widest uppercase text-brand-cream">
              {item}
            </a>
          ))}
          <a href={WHATSAPP_LINK} className="flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-3 rounded-full mt-4">
            <span className="font-arabic-sans">تواصل معنا</span>
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      )}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark pt-32 md:pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(184,150,46,0.15)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 arabesque-pattern opacity-10"></div>
        
        {/* Majestic Spark Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => {
            // Pseudo-random values based on index to avoid hydration issues and keep it stable
            const left = (i * 13.7) % 100;
            const top = (i * 23.3) % 100;
            const delay = (i * 0.7) % 10;
            const duration = 8 + ((i * 3.1) % 10);
            const size = 2 + ((i * 1.3) % 3);
            
            return (
              <div
                key={i}
                className="absolute bg-brand-gold rounded-full"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  boxShadow: '0 0 10px #B8962E, 0 0 20px #B8962E',
                  animation: `floatUp ${duration}s ease-in-out infinite`,
                  animationDelay: `-${delay}s`,
                  opacity: 0
                }}
              />
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 h-full grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-1 animate-[fadeIn_1s_ease-out_0.6s_forwards] opacity-0">
            <h1 className="font-luxury text-5xl md:text-7xl lg:text-8xl text-brand-cream tracking-widest uppercase mb-2 drop-shadow-lg leading-none">
              Signature
            </h1>
            <h2 className="font-modern text-xl md:text-3xl text-brand-gold tracking-[0.4em] uppercase mb-12 font-light">
              Exclusive Collection
            </h2>
            
            <p className="font-modern text-sm md:text-base text-brand-cream/80 tracking-widest uppercase mb-4 font-light">
              The Pinnacle of Emirati Craftsmanship
            </p>
          </div>

          {/* Right: Product Image on Podium */}
          <div className="relative flex justify-center items-center h-[50vh] md:h-[70vh] order-1 md:order-2 animate-[fadeIn_1s_ease-out_0.3s_forwards] opacity-0 mt-8 md:mt-0">
            {/* Podium Base */}
            <div className="absolute bottom-10 w-64 h-16 bg-brand-gold/10 rounded-[100%] border-t border-brand-gold/30 shadow-[0_20px_50px_rgba(184,150,46,0.2)] blur-[1px]"></div>
            <div className="absolute bottom-6 w-64 h-12 bg-brand-dark rounded-[100%] shadow-[inset_0_10px_20px_rgba(184,150,46,0.1)]"></div>
            
            {/* Product Image */}
            <div className="relative z-10 h-[50vh] md:h-[65vh] w-full flex justify-center items-center" style={{ animation: 'floatSmooth 6s ease-in-out infinite' }}>
              <img
                src="/bottle.png"
                alt="Signature Collection"
                className="absolute bottom-10 h-[40vh] md:h-[55vh] object-contain drop-shadow-[0_20px_40px_rgba(184,150,46,0.4)] transform -rotate-6 hover:-rotate-3 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes floatSmooth {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(2deg); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes floatUp {
            0% { transform: translateY(50px) scale(0.5); opacity: 0; }
            20% { opacity: 0.8; transform: translateY(0px) scale(1); }
            80% { opacity: 0.8; transform: translateY(-100px) scale(1); }
            100% { transform: translateY(-150px) scale(0.5); opacity: 0; }
          }
        `}} />
      </section>

      <section id="our-story" className="py-24 px-6 max-w-7xl mx-auto">
        <Reveal className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] border border-brand-gold/20 rounded-t-full overflow-hidden p-8 flex items-center justify-center arabesque-pattern">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10"></div>
            <Droplet className="w-32 h-32 text-brand-gold opacity-50 animate-float" strokeWidth={1} />
            <div className="absolute top-1/4 left-1/4 bg-brand-dark/80 border border-brand-gold/30 px-4 py-2 rounded-full text-xs font-display italic z-20 animate-float" style={{animationDelay: '1s'}}>Oud</div>
            <div className="absolute bottom-1/3 right-1/4 bg-brand-dark/80 border border-brand-gold/30 px-4 py-2 rounded-full text-xs font-display italic z-20 animate-float" style={{animationDelay: '2s'}}>Amber</div>
          </div>
          
          <div>
            <span className="text-brand-gold tracking-widest uppercase text-sm font-bold mb-4 block">قصتنا — Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl mb-8 leading-tight">More than a perfume.<br/><span className="italic text-brand-gold-light">A piece of the Gulf.</span></h2>
            <p className="text-xl text-brand-text-muted mb-8 leading-relaxed">
              Al Gharayaf was born from a deep love of Arabian fragrance culture. As an Emirati brand, we believe scent is memory — it carries the warmth of home, the spirit of our ancestors, and the identity of our land. Every fragrance we craft is a story waiting to live on your skin.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-12">
              {['Handcrafted', 'Premium Oud', 'UAE Made', 'Bespoke'].map(stat => (
                <div key={stat} className="border-l border-brand-gold pl-4 py-2">
                  <span className="font-display text-xl text-brand-cream">{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="collections" className="py-24 bg-brand-dark/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <h2 className="font-arabic text-5xl text-brand-cream mb-4">مجموعاتنا</h2>
            <p className="font-display text-xl italic text-brand-gold">Our Collections</p>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((item) => (
              <Reveal key={item.id} className="group gold-border-hover bg-brand-dark p-8 relative overflow-hidden flex flex-col items-center text-center">
                {item.badge && (
                  <span className="absolute top-4 right-4 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
                <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-arabic text-2xl mb-2">{item.nameAr}</h3>
                <h4 className="font-display italic text-brand-gold-light mb-4">{item.nameEn}</h4>
                <p className="text-brand-text-muted text-sm mb-6 flex-grow">{item.desc}</p>
                <div className="w-full pt-6 border-t border-brand-gold/10 flex justify-between items-center">
                  <span className="font-mono text-sm text-brand-cream/70">{item.price}</span>
                  <span className="text-brand-gold text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 arabesque-pattern opacity-10"></div>
        <Reveal className="relative z-10 max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl italic leading-tight mb-16 text-brand-cream">
            "The finest oud tells the story of a thousand-year old forest. <span className="text-brand-gold">We bring that story to you.</span>"
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { icon: '🌲', en: 'Woody', ar: 'عودي' },
              { icon: '🌹', en: 'Floral', ar: 'زهري' },
              { icon: '🌊', en: 'Fresh', ar: 'منعش' }
            ].map(fam => (
              <div key={fam.en} className="flex flex-col items-center">
                <span className="text-4xl mb-4">{fam.icon}</span>
                <span className="font-display text-xl mb-1">{fam.en}</span>
                <span className="font-arabic text-brand-gold">{fam.ar}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="bespoke" className="py-24 bg-[#080603] border-y border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-arabic text-5xl text-brand-gold mb-4">عطرك الخاص</h2>
              <h3 className="font-display text-3xl italic mb-8">Your Signature Scent</h3>
              <p className="text-xl text-brand-text-muted mb-12">
                Work directly with our master perfumer to create a fragrance that is entirely yours. A one-on-one consultation to capture your essence in a bottle.
              </p>
              
              <div className="space-y-8 mb-12">
                {[
                  { step: '01', title: 'Consult', desc: 'Discuss your preferences and memories.' },
                  { step: '02', title: 'Craft', desc: 'We blend rare ingredients to your taste.' },
                  { step: '03', title: 'Deliver', desc: 'Presented in a personalized luxury bottle.' }
                ].map(s => (
                  <div key={s.step} className="flex gap-6 items-start">
                    <span className="font-display text-2xl text-brand-gold/50 italic">{s.step}</span>
                    <div>
                      <h4 className="font-display text-xl mb-2">{s.title}</h4>
                      <p className="text-brand-text-muted">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 bg-brand-cream text-brand-dark px-8 py-4 rounded-full font-bold hover:bg-brand-gold transition-colors">
                Book via WhatsApp <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <div className="relative aspect-square border border-brand-gold/20 rounded-full flex items-center justify-center arabesque-pattern p-12">
              <div className="w-full h-full rounded-full border border-brand-gold/40 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,150,46,0.2)_0%,transparent_60%)] rounded-full"></div>
                <Sparkles className="w-24 h-24 text-brand-gold animate-pulse" strokeWidth={1} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-arabic text-4xl mb-4">آراء عملائنا</h2>
          <p className="font-display text-xl italic text-brand-gold">What They Say</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "محمد العامري", city: "أبوظبي", text: "أفضل عود جربته، ريحة أصيلة وثبات خيالي. خدمة العملاء راقية جداً." },
            { name: "نورة الكعبي", city: "دبي", text: "طلبت مجموعة هدايا للعيد، التغليف فخم جداً والعطور تبيض الوجه." },
            { name: "خالد المنصوري", city: "الشارقة", text: "تجربة تفصيل العطر كانت مميزة. العطر يعبر عن شخصيتي بالضبط." }
          ].map((t, i) => (
            <Reveal key={i} className="border border-brand-gold/20 p-8 bg-brand-dark/50 flex flex-col items-center text-center">
              <div className="flex text-brand-gold mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-arabic-sans text-lg mb-8 flex-grow" dir="rtl">"{t.text}"</p>
              <div className="border-t border-brand-gold/20 w-full pt-6">
                <p className="font-arabic text-xl text-brand-gold">{t.name}</p>
                <p className="text-sm text-brand-text-muted">{t.city}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="py-24 bg-brand-gold/5 border-t border-brand-gold/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-arabic text-5xl mb-4">كيف تطلب؟</h2>
            <h3 className="font-display text-2xl italic text-brand-gold mb-12">How to Order</h3>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-brand-gold flex items-center justify-center mb-4 text-brand-gold"><MessageCircle /></div>
                <span className="font-display">1. Message Us</span>
              </div>
              <div className="hidden md:block w-16 h-[1px] bg-brand-gold/30"></div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-brand-gold flex items-center justify-center mb-4 text-brand-gold"><ShoppingBag /></div>
                <span className="font-display">2. Confirm Order</span>
              </div>
              <div className="hidden md:block w-16 h-[1px] bg-brand-gold/30"></div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-brand-gold flex items-center justify-center mb-4 text-brand-gold"><MapPin /></div>
                <span className="font-display">3. UAE Delivery</span>
              </div>
            </div>

            <a href={WHATSAPP_LINK} className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#128C7E] transition-colors shadow-[0_0_30px_rgba(37,211,102,0.3)]">
              <MessageCircle className="w-6 h-6" />
              Order via WhatsApp
            </a>
            <p className="mt-6 text-brand-text-muted">Or send us a DM on <a href={INSTAGRAM_LINK} className="text-brand-gold hover:underline">Instagram</a></p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-brand-gold/20 pt-20 pb-10 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-arabic text-4xl text-brand-gold mb-2">الغرايف</h2>
          <p className="font-display tracking-[0.2em] text-sm mb-12">AL GHARAYAF PERFUM</p>
          
          <div className="flex justify-center gap-8 mb-12">
            <a href={INSTAGRAM_LINK} className="text-brand-text-muted hover:text-brand-gold transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href={WHATSAPP_LINK} className="text-brand-text-muted hover:text-brand-gold transition-colors"><MessageCircle className="w-6 h-6" /></a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-brand-text-muted uppercase tracking-widest font-display">
            <a href="#collections" className="hover:text-brand-gold">Collections</a>
            <a href="#our-story" className="hover:text-brand-gold">Story</a>
            <a href="#bespoke" className="hover:text-brand-gold">Bespoke</a>
            <a href="#contact" className="hover:text-brand-gold">Contact</a>
          </div>
          
          <div className="border-t border-brand-gold/10 pt-8 flex flex-col items-center text-sm text-brand-text-muted">
            <p className="mb-2">© 2025 الغرايف | Al Gharayaf Perfum</p>
            <p className="italic font-display">Crafted with love in the UAE 🇦🇪</p>
          </div>
        </div>
      </footer>

      <a href={WHATSAPP_LINK} className={`fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg transition-all duration-500 z-50 hover:scale-110 ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <MessageCircle className="w-6 h-6" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full animate-ping"></span>
      </a>
    </div>
  );
}
