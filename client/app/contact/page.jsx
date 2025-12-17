'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, faPhone, faMapMarkerAlt, faClock, 
  faPaperPlane, faUser, faCommentDots, faCheckCircle,
  faBuilding, faGlobe, faHeadset, faShieldAlt,
  faTimes, faBars, faArrowUp, faSun, faMoon,
  faCrown, faSignInAlt, faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
  faWhatsapp,
  faTelegram
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../logo.png';

// Image Logo Component
const ImageLogo = ({ darkMode, size = 'normal', animated = true }) => {
  const dimensions = {
    normal: { width: 40, height: 40 },
    large: { width: 80, height: 80 },
    small: { width: 32, height: 32 }
  };

  const { width, height } = dimensions[size];

  return (
    <motion.div
      className="relative"
      animate={animated ? {
        rotate: [0, 5, 0, -5, 0],
      } : {}}
      transition={animated ? {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      } : {}}
    >
      <motion.div
        animate={animated ? {
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        } : {}}
        transition={animated ? {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        } : {}}
        className={`absolute -inset-2 rounded-full ${
          darkMode 
            ? 'bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20' 
            : 'bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20'
        } blur-sm`}
      />
      
      <motion.div
        className="relative z-10 rounded-full overflow-hidden"
        style={{ width, height }}
        whileHover={{ scale: animated ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={logo}
          alt="TSRA Logo"
          width={width}
          height={height}
          className="object-cover rounded-full"
          priority
        />
      </motion.div>
      
      {animated && (
        <>
          <motion.div
            className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-yellow-300 z-20"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-1 -left-1 w-1 h-1 rounded-full bg-cyan-300 z-20"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </>
      )}
    </motion.div>
  );
};

// Full Logo Component
const TSRAFullLogo = ({ darkMode, variant = 'header', animated = true }) => {
  if (variant === 'header') {
    return (
      <div className="flex items-center space-x-3">
        <Link href="/">
          <div className="flex items-center space-x-3 cursor-pointer group">
            <ImageLogo darkMode={darkMode} size="normal" animated={animated} />
            
            <div className="flex flex-col">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <h1 className="text-xl font-bold">
                  <span className="relative">
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                      animate={animated ? {
                        backgroundPosition: ["0%", "200%"],
                      } : {}}
                      transition={animated ? {
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      } : {}}
                      style={{
                        backgroundSize: "200% 100%",
                      }}
                    >
                      TSRATSRA
                    </motion.span>
                    <span className="text-transparent">TSRATSRA</span>
                  </span>
                </h1>
                
                <motion.div
                  className="h-0.5 w-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full mt-1"
                  animate={animated ? {
                    scaleX: [0.8, 1, 0.8],
                  } : {}}
                  transition={animated ? {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  } : {}}
                />
              </motion.div>
              
              <motion.div
                className="text-xs opacity-70 tracking-widest font-light mt-0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                TSRA Logo
              </motion.div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
};

export default function ContactPage() {
  const [darkMode, setDarkMode] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const pathname = usePathname();

  // Contact methods in Arabic
  const contactMethods = [
    {
      icon: faEnvelope,
      title: 'البريد الإلكتروني',
      details: ['contact@TSRA.com', 'support@TSRA.com'],
      color: 'from-red-500 to-pink-500',
      link: 'mailto:contact@TSRA.com'
    },
    {
      icon: faPhone,
      title: 'الهاتف',
      details: ['+966 55 123 4567', '+966 55 987 6543'],
      color: 'from-green-500 to-emerald-500',
      link: 'tel:+966551234567'
    },
    {
      icon: faMapMarkerAlt,
      title: 'الموقع',
      details: ['شارع الأعمال 123', 'الرياض 12345', 'المملكة العربية السعودية'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: faClock,
      title: 'ساعات العمل',
      details: ['الإثنين - الجمعة: 9 ص - 6 م', 'السبت: 10 ص - 4 م', 'الأحد: مغلق'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // Social media links in Arabic
  const socialLinks = [
    { icon: faFacebook, name: 'فيسبوك', color: 'from-blue-600 to-blue-800', link: '#' },
    { icon: faTwitter, name: 'تويتر', color: 'from-sky-400 to-sky-600', link: '#' },
    { icon: faLinkedin, name: 'لينكد إن', color: 'from-blue-700 to-blue-900', link: '#' },
    { icon: faInstagram, name: 'إنستغرام', color: 'from-pink-500 to-rose-600', link: '#' },
    { icon: faYoutube, name: 'يوتيوب', color: 'from-red-500 to-red-700', link: '#' },
    { icon: faWhatsapp, name: 'واتساب', color: 'from-green-500 to-green-700', link: '#' },
    { icon: faTelegram, name: 'تلغرام', color: 'from-blue-400 to-blue-600', link: '#' }
  ];

  // FAQ items in Arabic
  const faqItems = [
    {
      question: 'كيف يمكنني الحصول على الدعم الفني؟',
      answer: 'فريق الدعم الفني متاح على مدار الساعة عبر البريد الإلكتروني support@TSRA.com أو من خلال ميزة الدردشة المباشرة. متوسط وقت الاستجابة أقل من 15 دقيقة.'
    },
    {
      question: 'هل تقدمون حلولاً مخصصة؟',
      answer: 'نعم! نحن متخصصون في تقديم حلول مخصصة تلبي احتياجات عملك. تواصل مع فريق المبيعات لمناقشة متطلباتك.'
    },
    {
      question: 'ما هي أوقات الاستجابة لديكم؟',
      answer: 'الاستفسارات العامة: خلال 24 ساعة. الدعم الفني: خلال ساعة واحدة. عملاء المؤسسات: مدير حساب مخصص مع وقت استجابة 15 دقيقة.'
    },
    {
      question: 'كيف يمكنني جدولة عرض توضيحي؟',
      answer: 'يمكنك جدولة عرض توضيحي من خلال تقويم موقعنا، أو التواصل مباشرة مع فريق المبيعات على sales@TSRA.com.'
    }
  ];

  useEffect(() => {
    const savedDark = localStorage.getItem('darkMode');
    setDarkMode(savedDark ? JSON.parse(savedDark) : true);
    
    const currentPath = pathname;
    if (currentPath === '/') setActiveLink('home');
    else if (currentPath === '/about') setActiveLink('about');
    else if (currentPath === '/Community') setActiveLink('Community');
    else if (currentPath === '/contact') setActiveLink('contact');
  }, [pathname]);

  useEffect(() => {
    if (darkMode !== null) {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
      
      if (darkMode) {
        document.documentElement.classList.add('dark-theme');
        document.documentElement.classList.remove('light-theme');
      } else {
        document.documentElement.classList.add('light-theme');
        document.documentElement.classList.remove('dark-theme');
      }
    }
  }, [darkMode]);

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'Community', label: 'Community', href: '/Community' },
    { id: 'contact', label: 'Contact', href: '/contact' }
  ];

  const handleNavClick = (id) => {
    setActiveLink(id);
    setMobileMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  if (darkMode === null) return null;

  return (
    <>
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              darkMode ? 'bg-blue-400/5' : 'bg-blue-500/3'
            }`}
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              x: `calc(${Math.random() * 100}vw + ${Math.sin(i) * 50}px)`,
              y: `calc(${Math.random() * 100}vh + ${Math.cos(i) * 50}px)`,
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
            }}
          />
        ))}
      </div>

      {/* Header */}
     <header className="fixed top-0 left-0 w-full z-50">
  <div className={`relative backdrop-blur-lg ${
    darkMode 
      ? 'bg-slate-900/90 border-b border-blue-800/30' 
      : 'bg-white/95 border-b border-blue-200/50'
  }`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        
        <TSRAFullLogo darkMode={darkMode} variant="header" animated={true} />

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeLink === item.id
                    ? darkMode
                      ? 'text-white bg-gradient-to-r from-blue-700/30 to-cyan-700/20'
                      : 'text-blue-700 bg-gradient-to-r from-blue-100 to-cyan-100'
                    : darkMode
                      ? 'text-blue-300 hover:text-cyan-300'
                      : 'text-blue-600 hover:text-blue-800'
                }`}
              >
                <span className="font-semibold tracking-wide">
                  {item.label}
                </span>
                
                {activeLink === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-[2px] rounded-full ${
                      darkMode ? 'bg-cyan-400' : 'bg-blue-500'
                    }`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          
          <div className={`w-px h-6 ${
            darkMode ? 'bg-blue-700/30' : 'bg-blue-300/50'
          }`}></div>
          
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                darkMode
                  ? 'bg-blue-800/30 hover:bg-blue-700/40 text-yellow-300'
                  : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
              }`}
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </motion.button>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Beautiful Premium Features Button without icon */}
            <motion.button
              whileHover={{ 
                scale: 1.08,
                boxShadow: darkMode 
                  ? '0 10px 25px rgba(245, 158, 11, 0.3)' 
                  : '0 10px 25px rgba(245, 158, 11, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLogin(true)}
              className={`relative overflow-hidden group px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                darkMode
                  ? 'bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 hover:from-yellow-600 hover:via-amber-600 hover:to-orange-600 text-gray-900 shadow-lg'
                  : 'bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 hover:from-yellow-500 hover:via-amber-500 hover:to-orange-500 text-gray-900 shadow-lg'
              }`}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.7 }}
              />
              
              <span className="relative z-10 font-bold flex items-center">
                {/* Sparkle emoji before text */}
                <motion.span
                  animate={{ 
                    rotate: [0, 10, 0, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  className="mr-2"
                >
                  ✨
                </motion.span>
                Premium Features
                {/* Sparkle emoji after text */}
                <motion.span
                  animate={{ 
                    rotate: [0, -10, 0, 10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: 0.5
                  }}
                  className="ml-2"
                >
                  ✨
                </motion.span>
              </span>
              
              {/* Glow effect */}
              <div className={`absolute -inset-1 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${
                darkMode ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gradient-to-r from-yellow-400 to-orange-400'
              }`} />
              
              {/* Particle effects - subtle sparkles */}
              <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{ 
                      x: Math.random() * 100 + '%',
                      y: Math.random() * 100 + '%',
                      opacity: 0
                    }}
                    whileHover={{ 
                      x: [null, Math.random() * 100 + '%'],
                      y: [null, Math.random() * 100 + '%'],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </motion.button>
            
            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLogin(true)}
              className={`px-4 py-2.5 rounded-lg font-semibold transition-all flex items-center ${
                darkMode
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg'
                  : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white shadow-lg'
              }`}
            >
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
              Login
            </motion.button>
            
            {/* Sign Up Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSignUp(true)}
              className={`px-4 py-2.5 rounded-lg font-semibold transition-all flex items-center ${
                darkMode
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg'
                  : 'bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white shadow-lg'
              }`}
            >
              <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
              Sign Up
            </motion.button>
          </div>
        </nav>

        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
            darkMode
              ? 'bg-blue-800/30 hover:bg-blue-700/40 text-blue-300'
              : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
          }`}
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
        </motion.button>
      </div>
    </div>

    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden overflow-hidden ${
            darkMode ? 'bg-slate-800/95' : 'bg-white/95'
          } backdrop-blur-lg border-t ${
            darkMode ? 'border-blue-800/30' : 'border-blue-200/50'
          }`}
        >
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`block px-4 py-3 rounded-lg transition-all ${
                  activeLink === item.id
                    ? darkMode
                      ? 'bg-gradient-to-r from-blue-700/30 to-cyan-700/20 text-white'
                      : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700'
                    : darkMode
                      ? 'text-blue-300 hover:bg-blue-800/20'
                      : 'text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-blue-500/20 space-y-3">
              {/* Mobile Premium Features Button without icon */}
              <motion.button
                onClick={() => setShowLogin(true)}
                className={`relative w-full px-4 py-3.5 rounded-xl flex items-center justify-center transition-all overflow-hidden group ${
                  darkMode
                    ? 'bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-gray-900'
                    : 'bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-gray-900'
                }`}
              >
                {/* Mobile shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                
                <span className="font-bold flex items-center">
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="mr-2"
                  >
                    ✨
                  </motion.span>
                  Premium Features
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    className="ml-2"
                  >
                    ✨
                  </motion.span>
                </span>
              </motion.button>
              
              <button
                onClick={() => setShowLogin(true)}
                className={`w-full px-4 py-3 rounded-lg flex items-center justify-center transition-all ${
                  darkMode
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white'
                }`}
              >
                <FontAwesomeIcon icon={faSignInAlt} className="mr-3" />
                Login
              </button>
              
              <button
                onClick={() => setShowSignUp(true)}
                className={`w-full px-4 py-3 rounded-lg flex items-center justify-center transition-all ${
                  darkMode
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                    : 'bg-gradient-to-r from-purple-400 to-pink-500 text-white'
                }`}
              >
                <FontAwesomeIcon icon={faUserPlus} className="mr-3" />
                Sign Up
              </button>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-full px-4 py-3 rounded-lg flex items-center justify-center transition-all ${
                  darkMode
                    ? 'bg-blue-800/30 hover:bg-blue-700/40 text-yellow-300'
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                }`}
              >
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="mr-3" />
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</header>

      {/* Main Content in Arabic */}
      <div
        className={`${
          darkMode
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-stone-50'
            : 'bg-gradient-to-br from-stone-50 via-stone-100 to-blue-50 text-slate-900'
        } min-h-screen transition-all duration-500 pt-16`}
        dir="rtl"
        style={{
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: darkMode ? "#334155" : "#d6d3d1"
        }}
      >
        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ position: 'fixed', bottom: 40, left: 20, zIndex: 1000 }}
        >
          <motion.div 
            className="relative w-[60px] h-[60px] flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="60" height="60" className="absolute top-0 left-0">
              <circle cx="30" cy="30" r="18" stroke="#1e3a8a" strokeWidth="4" fill="transparent" />
            </svg>
            
            <FontAwesomeIcon 
              icon={faArrowUp} 
              className="text-white text-base z-10 drop-shadow-lg" 
            />
          </motion.div>
        </motion.button>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    تواصل معنا
                  </span>
                </h1>
                <p className={`text-xl max-w-2xl mx-auto mb-10 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                  نحن هنا لمساعدتك! تواصل معنا من خلال أي من القنوات أدناه، وسيقوم فريقنا بالرد عليك في أقرب وقت.
                </p>
              </motion.div>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <div className={`relative p-6 rounded-2xl border backdrop-blur-sm ${
                    darkMode 
                      ? 'bg-slate-800/50 border-blue-700/30' 
                      : 'bg-white/70 border-blue-200/50'
                  }`}>
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${method.color} mb-4`}>
                      <FontAwesomeIcon icon={method.icon} className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                    <div className="space-y-2">
                      {method.details.map((detail, idx) => (
                        <p key={idx} className={darkMode ? 'text-blue-300' : 'text-blue-700'}>
                          {detail}
                        </p>
                      ))}
                    </div>
                    {method.link && (
                      <motion.a
                        href={method.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-block mt-4 px-4 py-2 rounded-lg font-medium ${
                          darkMode 
                            ? 'bg-blue-800/30 hover:bg-blue-700/40 text-blue-300' 
                            : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                        } transition-colors`}
                      >
                        تواصل عبر {method.title}
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className={`p-8 rounded-2xl border backdrop-blur-sm ${
                  darkMode 
                    ? 'bg-slate-800/50 border-blue-700/30' 
                    : 'bg-white/70 border-blue-200/50'
                }`}>
                  <div className="flex items-center mb-8">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 ml-4">
                      <FontAwesomeIcon icon={faPaperPlane} className="text-white text-xl" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">أرسل لنا رسالة</h2>
                      <p className={darkMode ? 'text-blue-300' : 'text-blue-700'}>
                        نرد عادة خلال 24 ساعة
                      </p>
                    </div>
                  </div>

                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`mb-6 p-4 rounded-xl flex items-center ${
                        darkMode 
                          ? 'bg-green-900/30 border border-green-700/50' 
                          : 'bg-green-50 border border-green-200'
                      }`}
                    >
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xl ml-3" />
                      <div>
                        <p className="font-semibold text-green-600">تم إرسال الرسالة بنجاح!</p>
                        <p className="text-sm opacity-80">سنتواصل معك قريباً.</p>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                          <FontAwesomeIcon icon={faUser} className="ml-2" />
                          اسمك
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border transition-all ${
                            darkMode 
                              ? 'bg-slate-700 border-blue-700/50 focus:border-cyan-500 text-white' 
                              : 'bg-white border-blue-200 focus:border-blue-500 text-slate-800'
                          } focus:ring-2 focus:ring-blue-500/20`}
                          placeholder="محمد أحمد"
                          required
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                          <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
                          البريد الإلكتروني
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border transition-all ${
                            darkMode 
                              ? 'bg-slate-700 border-blue-700/50 focus:border-cyan-500 text-white' 
                              : 'bg-white border-blue-200 focus:border-blue-500 text-slate-800'
                          } focus:ring-2 focus:ring-blue-500/20`}
                          placeholder="mohamed@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                        <FontAwesomeIcon icon={faCommentDots} className="ml-2" />
                        الموضوع
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-all ${
                          darkMode 
                            ? 'bg-slate-700 border-blue-700/50 focus:border-cyan-500 text-white' 
                            : 'bg-white border-blue-200 focus:border-blue-500 text-slate-800'
                        } focus:ring-2 focus:ring-blue-500/20`}
                        placeholder="كيف يمكننا مساعدتك؟"
                        required
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                        <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                        الرسالة
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="6"
                        className={`w-full px-4 py-3 rounded-lg border transition-all ${
                          darkMode 
                            ? 'bg-slate-700 border-blue-700/50 focus:border-cyan-500 text-white' 
                            : 'bg-white border-blue-200 focus:border-blue-500 text-slate-800'
                        } focus:ring-2 focus:ring-blue-500/20 resize-none`}
                        placeholder="أخبرنا عن مشروعك أو استفسارك..."
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all relative overflow-hidden ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
                      } text-white shadow-lg`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full ml-2"
                          />
                          جاري الإرسال...
                        </span>
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                          إرسال الرسالة
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6 }}
                          />
                        </>
                      )}
                    </motion.button>
                  </form>

                  <div className={`mt-6 text-sm text-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    <FontAwesomeIcon icon={faShieldAlt} className="ml-2" />
                    معلوماتك آمنة ولن يتم مشاركتها مع أطراف ثالثة.
                  </div>
                </div>
              </motion.div>

              {/* FAQ & Social Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* FAQ Section */}
                <div className={`p-8 rounded-2xl border backdrop-blur-sm ${
                  darkMode 
                    ? 'bg-slate-800/50 border-blue-700/30' 
                    : 'bg-white/70 border-blue-200/50'
                }`}>
                  <div className="flex items-center mb-8">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 ml-4">
                      <FontAwesomeIcon icon={faCommentDots} className="text-white text-xl" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">الأسئلة الشائعة</h2>
                      <p className={darkMode ? 'text-blue-300' : 'text-blue-700'}>
                        إجابات سريعة للأسئلة الشائعة
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {faqItems.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.01 }}
                        className={`p-4 rounded-xl border ${
                          darkMode 
                            ? 'bg-slate-700/30 border-blue-700/30 hover:border-cyan-500/50' 
                            : 'bg-blue-50/50 border-blue-200 hover:border-blue-300'
                        } transition-colors`}
                      >
                        <h3 className="font-semibold mb-2 flex items-center">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 ml-2" />
                          {item.question}
                        </h3>
                        <p className={darkMode ? 'text-blue-300' : 'text-blue-700'}>
                          {item.answer}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Media Section */}
                <div className={`p-8 rounded-2xl border backdrop-blur-sm ${
                  darkMode 
                    ? 'bg-slate-800/50 border-blue-700/30' 
                    : 'bg-white/70 border-blue-200/50'
                }`}>
                  <div className="flex items-center mb-8">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 ml-4">
                      <FontAwesomeIcon icon={faGlobe} className="text-white text-xl" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">تواصل معنا</h2>
                      <p className={darkMode ? 'text-blue-300' : 'text-blue-700'}>
                        تابعنا على وسائل التواصل الاجتماعي
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-7 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -5,
                          boxShadow: `0 10px 25px ${darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative group flex flex-col items-center justify-center p-4 rounded-xl transition-all ${
                          darkMode ? 'bg-slate-700/30' : 'bg-blue-50/50'
                        } border ${darkMode ? 'border-blue-700/30' : 'border-blue-200'}`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity`} />
                        <FontAwesomeIcon 
                          icon={social.icon} 
                          className={`text-2xl mb-2 ${
                            social.color.includes('blue') ? 'text-blue-500' :
                            social.color.includes('sky') ? 'text-sky-500' :
                            social.color.includes('pink') ? 'text-pink-500' :
                            social.color.includes('red') ? 'text-red-500' :
                            social.color.includes('green') ? 'text-green-500' :
                            'text-purple-500'
                          }`} 
                        />
                        <span className={`text-xs font-medium ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                          {social.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Office Location */}
                <div className={`p-8 rounded-2xl border backdrop-blur-sm ${
                  darkMode 
                    ? 'bg-slate-800/50 border-blue-700/30' 
                    : 'bg-white/70 border-blue-200/50'
                }`}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 ml-4">
                      <FontAwesomeIcon icon={faBuilding} className="text-white text-xl" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">مكتبنا</h2>
                      <p className={darkMode ? 'text-blue-300' : 'text-blue-700'}>
                        زورنا شخصياً
                      </p>
                    </div>
                  </div>

                  <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                    <div className={`absolute inset-0 flex items-center justify-center ${
                      darkMode ? 'bg-slate-700' : 'bg-blue-100'
                    }`}>
                      <div className="text-center">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl text-red-500 mb-2" />
                        <p className={darkMode ? 'text-blue-300' : 'text-blue-700'}>
                          خريطة تفاعلية هنا
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`p-4 rounded-xl ${
                    darkMode ? 'bg-slate-700/30' : 'bg-blue-50/50'
                  }`}>
                    <p className={darkMode ? 'text-blue-300' : 'text-blue-700'}>
                      <strong>العنوان:</strong> شارع الأعمال 123، الرياض 12345
                    </p>
                    <p className={`mt-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                      <strong>مواقف السيارات:</strong> متوفرة في مواقف السيارات المجاورة
                    </p>
                    <p className={`mt-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                      <strong>النقل العام:</strong> 5 دقائق سيراً من محطة المركز
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Section */}
            <div className="mt-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    دعمنا بالأرقام
                  </span>
                </h2>
                <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                  ملتزمون بتقديم أفضل تجربة دعم
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '24/7', label: 'توفر الدعم', icon: faClock },
                  { value: '< 15د', label: 'متوسط وقت الاستجابة', icon: faHeadset },
                  { value: '98%', label: 'معدل الرضا', icon: faCheckCircle },
                  { value: '50K+', label: 'عملاء سعداء', icon: faUser }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className={`inline-flex p-4 rounded-2xl mb-4 ${
                      darkMode ? 'bg-blue-800/20' : 'bg-blue-100/50'
                    }`}>
                      <FontAwesomeIcon 
                        icon={stat.icon} 
                        className={`text-2xl ${
                          darkMode ? 'text-cyan-400' : 'text-blue-600'
                        }`} 
                      />
                    </div>
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className={`font-medium ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-12 border-t ${
          darkMode ? 'border-blue-800/30' : 'border-blue-200/50'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <TSRAFullLogo darkMode={darkMode} variant="header" animated={true} />
                <p className={`mt-4 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                  نبني الاتصالات وتمكين المهنيين من خلال حلول مبتكرة.
                </p>
              </div>
              
              <div>
                <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  روابط سريعة
                </h3>
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={`block hover:underline ${darkMode ? 'text-blue-300 hover:text-cyan-300' : 'text-blue-700 hover:text-blue-900'}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  قانوني
                </h3>
                <div className="space-y-2">
                  <a href="#" className={`block hover:underline ${darkMode ? 'text-blue-300 hover:text-cyan-300' : 'text-blue-700 hover:text-blue-900'}`}>
                    سياسة الخصوصية
                  </a>
                  <a href="#" className={`block hover:underline ${darkMode ? 'text-blue-300 hover:text-cyan-300' : 'text-blue-700 hover:text-blue-900'}`}>
                    شروط الخدمة
                  </a>
                  <a href="#" className={`block hover:underline ${darkMode ? 'text-blue-300 hover:text-cyan-300' : 'text-blue-700 hover:text-blue-900'}`}>
                    سياسة الكوكيز
                  </a>
                </div>
              </div>
            </div>
            
            <div className={`mt-8 pt-8 border-t text-center ${
              darkMode ? 'border-blue-800/30 text-blue-400' : 'border-blue-200/50 text-blue-600'
            }`}>
              <p>© {new Date().getFullYear()} TSRA. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Support Modal */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
            onClick={() => setShowLogin(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-md rounded-2xl shadow-2xl p-8 ${
                darkMode 
                  ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 border border-blue-800' 
                  : 'bg-gradient-to-br from-white via-blue-50 to-indigo-50 border border-blue-200'
              }`}
              dir="rtl"
            >
              <button
                onClick={() => setShowLogin(false)}
                className={`absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center ${
                  darkMode 
                    ? 'bg-blue-800/50 hover:bg-blue-700 text-blue-200' 
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                }`}
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                <FontAwesomeIcon icon={faHeadset} className="ml-2" />
                دعم العملاء
              </h2>

              <div className="space-y-6">
                <div className={`p-4 rounded-xl border ${
                  darkMode ? 'bg-blue-800/20 border-blue-700/30' : 'bg-blue-50 border-blue-200'
                }`}>
                  <h3 className="font-bold mb-2 flex items-center">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 ml-2" />
                    دعم واتساب
                  </h3>
                  <p className={`mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                    أسرع استجابة عبر واتساب
                  </p>
                  <a
                    href="https://wa.me/966551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium ${
                      darkMode 
                        ? 'bg-green-700/30 hover:bg-green-600/40 text-green-300' 
                        : 'bg-green-100 hover:bg-green-200 text-green-700'
                    } transition-colors`}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="ml-2 text-lg" />
                    بدء محادثة واتساب
                  </a>
                </div>

                <div className={`p-4 rounded-xl border ${
                  darkMode ? 'bg-blue-800/20 border-blue-700/30' : 'bg-blue-50 border-blue-200'
                }`}>
                  <h3 className="font-bold mb-2 flex items-center">
                    <FontAwesomeIcon icon={faPhone} className="text-blue-500 ml-2" />
                    دعم الهاتف
                  </h3>
                  <p className={`mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                    اتصل بنا مباشرة
                  </p>
                  <a
                    href="tel:+966551234567"
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium ${
                      darkMode 
                        ? 'bg-blue-800/30 hover:bg-blue-700/40 text-blue-300' 
                        : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                    } transition-colors`}
                  >
                    <FontAwesomeIcon icon={faPhone} className="ml-2" />
                    +966 55 123 4567
                  </a>
                </div>

                <div className={`p-4 rounded-xl border ${
                  darkMode ? 'bg-blue-800/20 border-blue-700/30' : 'bg-blue-50 border-blue-200'
                }`}>
                  <h3 className="font-bold mb-2 flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-red-500 ml-2" />
                    دعم البريد الإلكتروني
                  </h3>
                  <p className={`mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                    للاستفسارات التفصيلية
                  </p>
                  <a
                    href="mailto:support@TSRA.com"
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium ${
                      darkMode 
                        ? 'bg-red-800/20 hover:bg-red-700/30 text-red-300' 
                        : 'bg-red-50 hover:bg-red-100 text-red-700'
                    } transition-colors`}
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
                    support@TSRA.com
                  </a>
                </div>
              </div>

              <div className={`mt-6 p-4 rounded-xl ${
                darkMode ? 'bg-blue-900/20' : 'bg-blue-50/50'
              }`}>
                <p className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  <FontAwesomeIcon icon={faClock} className="ml-2" />
                  <strong>ساعات الدعم:</strong> 24/7 للمستخدمين المميزين، 9ص-6م للمستخدمين العاديين
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sign Up Modal */}
      <AnimatePresence>
        {showSignUp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
            onClick={() => setShowSignUp(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-md rounded-2xl shadow-2xl p-8 ${
                darkMode 
                  ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-purple-950 border border-purple-800' 
                  : 'bg-gradient-to-br from-white via-purple-50 to-pink-50 border border-purple-200'
              }`}
            >
              <button
                onClick={() => setShowSignUp(false)}
                className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center ${
                  darkMode 
                    ? 'bg-purple-800/50 hover:bg-purple-700 text-purple-200' 
                    : 'bg-purple-100 hover:bg-purple-200 text-purple-700'
                }`}
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent mb-6">
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                Create Your Account
              </h2>

              <div className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-purple-200' : 'text-purple-800'}`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border transition-all ${
                      darkMode 
                        ? 'bg-slate-700 border-purple-700/50 focus:border-pink-500 text-white' 
                        : 'bg-white border-purple-200 focus:border-purple-500 text-slate-800'
                    } focus:ring-2 focus:ring-purple-500/20`}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-purple-200' : 'text-purple-800'}`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border transition-all ${
                      darkMode 
                        ? 'bg-slate-700 border-purple-700/50 focus:border-pink-500 text-white' 
                        : 'bg-white border-purple-200 focus:border-purple-500 text-slate-800'
                    } focus:ring-2 focus:ring-purple-500/20`}
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-purple-200' : 'text-purple-800'}`}>
                    Password
                  </label>
                  <input
                    type="password"
                    className={`w-full px-4 py-3 rounded-lg border transition-all ${
                      darkMode 
                        ? 'bg-slate-700 border-purple-700/50 focus:border-pink-500 text-white' 
                        : 'bg-white border-purple-200 focus:border-purple-500 text-slate-800'
                    } focus:ring-2 focus:ring-purple-500/20`}
                    placeholder="Create a password"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all ${
                    darkMode
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg'
                      : 'bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white shadow-lg'
                  }`}
                >
                  Create Account
                </motion.button>

                <p className={`text-center text-sm ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                  Already have an account?{' '}
                  <button
                    onClick={() => {
                      setShowSignUp(false);
                      setShowLogin(true);
                    }}
                    className="font-semibold hover:underline"
                  >
                    Log in here
                  </button>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}