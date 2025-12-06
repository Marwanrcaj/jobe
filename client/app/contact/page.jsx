'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowUp, 
  faSun, 
  faMoon, 
  faFont, 
  faUser, 
  faEnvelope, 
  faLock,
  faEye,
  faEyeSlash,
  faSignInAlt,
  faUserPlus,
  faBars,
  faTimes,
  faStar,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
  faCommentDots,
  faHeadset,
  faClock,
  faCheckCircle,
  faSpinner,
  faUserCircle,
  faBuilding,
  faGlobe,
  faMobileAlt,
  faCalendarAlt,
  faVideo,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp as faWhatsappBrand, 
  faFacebook as faFacebookBrand, 
  faTwitter as faTwitterBrand, 
  faLinkedin as faLinkedinBrand, 
  faInstagram as faInstagramBrand 
} from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('contact');
  const [introComplete, setIntroComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const formDataInitialState = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: 'general'
  };
  
  const contactFormInitialState = {
    email: '',
    password: '',
    username: '',
    confirmPassword: ''
  };
  
  const [contactFormData, setContactFormData] = useState(formDataInitialState);
  const [authFormData, setAuthFormData] = useState(contactFormInitialState);
  const [isLogin, setIsLogin] = useState(true);

  const [darkMode, setDarkMode] = useState(null);
  const [fontMode, setFontMode] = useState(null);

  useEffect(() => {
    const savedDark = localStorage.getItem('darkMode');
    const savedFont = localStorage.getItem('fontMode');
    setDarkMode(savedDark ? JSON.parse(savedDark) : true);
    setFontMode(savedFont || 'hilal');
    
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (!hasSeenIntro) {
      const timer = setTimeout(() => {
        setIntroComplete(true);
        sessionStorage.setItem('hasSeenIntro', 'true');
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      setIntroComplete(true);
    }
  }, []);

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

  useEffect(() => {
    if (fontMode !== null) {
      localStorage.setItem('fontMode', fontMode);
      document.documentElement.classList.remove('font-hilal', 'font-chams');
      document.documentElement.classList.add(`font-${fontMode}`);
    }
  }, [fontMode]);

  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAuthInputChange = (e) => {
    const { name, value } = e.target;
    setAuthFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // محاكاة إرسال النموذج
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setContactFormData(formDataInitialState);
    
    // إخفاء رسالة النجاح بعد 5 ثواني
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login attempt:', authFormData);
    } else {
      if (authFormData.password !== authFormData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('Sign up attempt:', authFormData);
    }
  };

  const toggleAuthForm = () => {
    setIsLogin(!isLogin);
    setAuthFormData(contactFormInitialState);
  };

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'partners', label: 'Partners', href: '/partners' },
    { id: 'contact', label: 'Contact', href: '/contact' }
  ];

  const handleNavClick = (id) => {
    setActiveLink(id);
    setMobileMenuOpen(false);
    if (id !== 'contact') {
      window.location.href = navItems.find(item => item.id === id)?.href || '/';
    }
  };

  const serviceTypes = [
    { value: 'general', label: 'استفسار عام' },
    { value: 'technical', label: 'دعم فني' },
    { value: 'partnership', label: 'شراكة' },
    { value: 'career', label: 'وظائف' },
    { value: 'feedback', label: 'مقترحات وتحسينات' }
  ];

  const contactInfo = [
    { icon: faPhone, title: 'الهاتف', value: '+212 66009999', color: 'from-green-500 to-emerald-500' },
    { icon: faEnvelope, title: 'البريد الإلكتروني', value: 'info@lkhadma-like.ma', color: 'from-blue-500 to-cyan-500' },
    { icon: faMapMarkerAlt, title: 'العنوان', value: 'المغرب - الدار البيضاء', color: 'from-purple-500 to-pink-500' },
    { icon: faClock, title: 'ساعات العمل', value: '09:00 - 18:00 (من الإثنين إلى الجمعة)', color: 'from-orange-500 to-yellow-500' }
  ];

  const socialMedia = [
    { icon: faWhatsappBrand, label: 'واتساب', color: 'bg-green-500 hover:bg-green-600', link: '#' },
    { icon: faFacebookBrand, label: 'فيسبوك', color: 'bg-blue-600 hover:bg-blue-700', link: '#' },
    { icon: faTwitterBrand, label: 'تويتر', color: 'bg-sky-500 hover:bg-sky-600', link: '#' },
    { icon: faLinkedinBrand, label: 'لينكدإن', color: 'bg-blue-700 hover:bg-blue-800', link: '#' },
    { icon: faInstagramBrand, label: 'انستغرام', color: 'bg-pink-600 hover:bg-pink-700', link: '#' }
  ];

  if (darkMode === null || fontMode === null) return null;

  return (
    <>
      {/* Intro Overlay */}
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{
              background: darkMode 
                ? 'radial-gradient(circle at center, #0f172a 0%, #020617 100%)'
                : 'radial-gradient(circle at center, #ffffff 0%, #f8fafc 100%)'
            }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: [0.5, 1, 1, 1, 0.9],
                opacity: [0, 1, 1, 1, 0],
                rotate: [0, 360, 720]
              }}
              transition={{
                duration: 1.2,
                times: [0, 0.2, 0.4, 0.8, 1],
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 2.5, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1.8, repeat: Infinity, repeatType: "reverse" }
                  }}
                  className={`absolute -inset-4 rounded-full border-2 ${
                    darkMode 
                      ? 'border-cyan-500/30' 
                      : 'border-blue-500/30'
                  }`}
                />
                
                <div className={`w-20 h-20 rounded-xl flex items-center justify-center shadow-2xl ${
                  darkMode 
                    ? 'bg-gradient-to-br from-blue-700 via-cyan-600 to-purple-600' 
                    : 'bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-500'
                }`}>
                  <FontAwesomeIcon 
                    icon={faCommentDots} 
                    className="text-white text-3xl"
                  />
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8 text-center"
              >
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  اتصل بنا
                </h1>
                <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                  Lkhadma - نحن هنا لمساعدتك
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              darkMode ? 'bg-cyan-400/5' : 'bg-blue-500/5'
            }`}
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: 0
            }}
            animate={{
              x: `calc(${Math.random() * 100}vw + ${Math.sin(i) * 100}px)`,
              y: `calc(${Math.random() * 100}vh + ${Math.cos(i) * 100}px)`,
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.2
            }}
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
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
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-3"
              >
                <div onClick={() => handleNavClick('home')} className="cursor-pointer">
                  <div className="relative">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        darkMode 
                          ? 'bg-gradient-to-br from-blue-700 to-cyan-600 shadow-lg' 
                          : 'bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg'
                      }`}
                    >
                      <FontAwesomeIcon 
                        icon={faStar} 
                        className="text-white text-sm"
                      />
                    </motion.div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div onClick={() => handleNavClick('home')} className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer">
                    Lkhadma-Like
                  </div>
                
                </div>
              </motion.div>

              <nav className="hidden md:flex items-center space-x-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      onClick={() => handleNavClick(item.id)}
                      className={`relative px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
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
                    </div>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-px h-6 ${
                    darkMode ? 'bg-blue-700/30' : 'bg-blue-300/50'
                  }`}
                ></motion.div>
                
                <div className="flex items-center space-x-3">
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
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
                  
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setFontMode(fontMode === 'hilal' ? 'chams' : 'hilal')}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                      darkMode
                        ? 'bg-blue-800/30 hover:bg-blue-700/40 text-cyan-300'
                        : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                    }`}
                  >
                    <FontAwesomeIcon icon={faFont} />
                  </motion.button>
                </div>
                
                <div className="flex items-center space-x-3">
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setShowLogin(true); setIsLogin(true); }}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      darkMode
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg'
                        : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white shadow-lg'
                    }`}
                  >
                    <FontAwesomeIcon icon={faSignInAlt} className="ml-2" />
                    دخول
                  </motion.button>
                  
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setShowSignUp(true); setIsLogin(false); }}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      darkMode
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg'
                        : 'bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white shadow-lg'
                    }`}
                  >
                    <FontAwesomeIcon icon={faUserPlus} className="ml-2" />
                    تسجيل
                  </motion.button>
                </div>
              </nav>

              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
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
                    <div
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`block px-4 py-3 rounded-lg transition-all cursor-pointer ${
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
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-blue-500/20 space-y-3">
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className={`w-full px-4 py-3 rounded-lg flex items-center justify-center transition-all ${
                        darkMode
                          ? 'bg-blue-800/30 hover:bg-blue-700/40 text-yellow-300'
                          : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                      }`}
                    >
                      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="ml-3" />
                      {darkMode ? 'الوضع الفاتح' : 'الوضع الداكن'}
                    </button>
                    
                    <button
                      onClick={() => setFontMode(fontMode === 'hilal' ? 'chams' : 'hilal')}
                      className={`w-full px-4 py-3 rounded-lg flex items-center justify-center transition-all ${
                        darkMode
                          ? 'bg-blue-800/30 hover:bg-blue-700/40 text-cyan-300'
                          : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                      }`}
                    >
                      <FontAwesomeIcon icon={faFont} className="ml-3" />
                      تغيير الخط
                    </button>
                    
                    <button
                      onClick={() => { setShowLogin(true); setIsLogin(true); setMobileMenuOpen(false); }}
                      className={`w-full px-4 py-3 rounded-lg font-semibold transition-all ${
                        darkMode
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                          : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white'
                      }`}
                    >
                      <FontAwesomeIcon icon={faSignInAlt} className="ml-3" />
                      دخول
                    </button>
                    
                    <button
                      onClick={() => { setShowSignUp(true); setIsLogin(false); setMobileMenuOpen(false); }}
                      className={`w-full px-4 py-3 rounded-lg font-semibold transition-all ${
                        darkMode
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white'
                          : 'bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:pink-600 text-white'
                      }`}
                    >
                      <FontAwesomeIcon icon={faUserPlus} className="ml-3" />
                      تسجيل
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 0.5, delay: introComplete ? 0 : 0.5 }}
        className={introComplete ? 'block' : 'hidden'}
      >
        <div className={`min-h-screen transition-all duration-500 pt-16 ${
          darkMode
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-stone-50'
            : 'bg-gradient-to-br from-stone-50 via-stone-100 to-blue-50 text-slate-900'
        }`}>
          
          {/* Back to Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-10 left-10 z-40"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
              darkMode
                ? 'bg-gradient-to-br from-blue-700 to-purple-600'
                : 'bg-gradient-to-br from-blue-500 to-purple-400'
            }`}>
              <FontAwesomeIcon icon={faArrowUp} className="text-white" />
            </div>
          </motion.button>

          {/* Success Message */}
          <AnimatePresence>
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
              >
                <div className={`flex items-center space-x-3 space-x-reverse px-6 py-4 rounded-xl shadow-2xl ${
                  darkMode 
                    ? 'bg-gradient-to-r from-green-900/90 to-emerald-900/90 border border-green-700/50' 
                    : 'bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300'
                } backdrop-blur-lg`}>
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                  <div>
                    <h3 className="font-bold text-green-700 dark:text-green-300">تم الإرسال بنجاح!</h3>
                    <p className="text-sm text-green-600 dark:text-green-400">سيتم الرد على رسالتك في أقرب وقت</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Contact Page Content */}
          <div dir="rtl" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            
            {/* Hero Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="relative inline-block mb-8">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className={`absolute -inset-4 rounded-full ${
                    darkMode ? 'bg-cyan-500/10' : 'bg-blue-500/10'
                  }`}
                />
                
                <div className={`relative w-24 h-24 rounded-2xl flex items-center justify-center ${
                  darkMode
                    ? 'bg-gradient-to-br from-cyan-600 to-blue-700'
                    : 'bg-gradient-to-br from-cyan-500 to-blue-600'
                } shadow-2xl`}>
                  <FontAwesomeIcon icon={faHeadset} className="text-white text-4xl" />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                اتصل بنا
              </h1>
              
              <p className={`text-2xl max-w-3xl mx-auto leading-relaxed mb-8 ${
                darkMode ? 'text-blue-200' : 'text-blue-900'
              }`}>
                نحن هنا لمساعدتك. تواصل مع فريق <span className="font-bold gradient-text">Lkhadma</span> للحصول على الدعم والاستفسارات
              </p>
            </motion.section>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <div className={`rounded-3xl p-8 ${
                  darkMode
                    ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50'
                    : 'bg-white border border-slate-200/50'
                } shadow-2xl backdrop-blur-sm`}>
                  <div className="flex items-center mb-8">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center ml-4`}>
                      <FontAwesomeIcon icon={faPaperPlane} className="text-white text-2xl" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      أرسل رسالتك
                    </h2>
                  </div>
                  
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                          الاسم الكامل <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <FontAwesomeIcon 
                            icon={faUserCircle} 
                            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} 
                          />
                          <input
                            type="text"
                            name="name"
                            value={contactFormData.name}
                            onChange={handleContactInputChange}
                            className={`w-full pl-4 pr-10 py-3 rounded-xl transition-all ${
                              darkMode 
                                ? 'bg-slate-800/50 border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 text-white' 
                                : 'bg-slate-50 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800'
                            }`}
                            placeholder="أدخل اسمك الكامل"
                            required
                          />
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                          البريد الإلكتروني <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <FontAwesomeIcon 
                            icon={faEnvelope} 
                            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} 
                          />
                          <input
                            type="email"
                            name="email"
                            value={contactFormData.email}
                            onChange={handleContactInputChange}
                            className={`w-full pl-4 pr-10 py-3 rounded-xl transition-all ${
                              darkMode 
                                ? 'bg-slate-800/50 border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 text-white' 
                                : 'bg-slate-50 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800'
                            }`}
                            placeholder="example@domain.com"
                            required
                          />
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                          رقم الهاتف
                        </label>
                        <div className="relative">
                          <FontAwesomeIcon 
                            icon={faPhone} 
                            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} 
                          />
                          <input
                            type="tel"
                            name="phone"
                            value={contactFormData.phone}
                            onChange={handleContactInputChange}
                            className={`w-full pl-4 pr-10 py-3 rounded-xl transition-all ${
                              darkMode 
                                ? 'bg-slate-800/50 border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 text-white' 
                                : 'bg-slate-50 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800'
                            }`}
                            placeholder="+212 6XX-XXXXXX"
                          />
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                          نوع الخدمة
                        </label>
                        <div className="relative">
                          <FontAwesomeIcon 
                            icon={faBuilding} 
                            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} 
                          />
                          <select
                            name="serviceType"
                            value={contactFormData.serviceType}
                            onChange={handleContactInputChange}
                            className={`w-full pl-4 pr-10 py-3 rounded-xl transition-all appearance-none ${
                              darkMode 
                                ? 'bg-slate-800/50 border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 text-white' 
                                : 'bg-slate-50 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800'
                            }`}
                          >
                            {serviceTypes.map((type) => (
                              <option key={type.value} value={type.value}>{type.label}</option>
                            ))}
                          </select>
                        </div>
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                        الموضوع
                      </label>
                      <div className="relative">
                        <FontAwesomeIcon 
                          icon={faCommentDots} 
                          className={`absolute right-3 top-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} 
                        />
                        <input
                          type="text"
                          name="subject"
                          value={contactFormData.subject}
                          onChange={handleContactInputChange}
                          className={`w-full pl-4 pr-10 py-3 rounded-xl transition-all ${
                            darkMode 
                              ? 'bg-slate-800/50 border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 text-white' 
                              : 'bg-slate-50 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800'
                          }`}
                          placeholder="موضوع رسالتك"
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                        الرسالة <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <FontAwesomeIcon 
                          icon={faEnvelope} 
                          className={`absolute right-3 top-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} 
                        />
                        <textarea
                          name="message"
                          value={contactFormData.message}
                          onChange={handleContactInputChange}
                          rows={6}
                          className={`w-full pl-4 pr-10 py-3 rounded-xl transition-all resize-none ${
                            darkMode 
                              ? 'bg-slate-800/50 border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 text-white' 
                              : 'bg-slate-50 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800'
                          }`}
                          placeholder="اكتب رسالتك هنا..."
                          required
                        />
                      </div>
                    </motion.div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg ${
                        isSubmitting
                          ? 'bg-gradient-to-r from-blue-400 to-cyan-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
                      } text-white flex items-center justify-center`}
                    >
                      {isSubmitting ? (
                        <>
                          <FontAwesomeIcon icon={faSpinner} className="animate-spin ml-3" />
                          جاري الإرسال...
                        </>
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faPaperPlane} className="ml-3" />
                          إرسال الرسالة
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Contact Information */}
                <div className={`rounded-3xl p-8 ${
                  darkMode
                    ? 'bg-gradient-to-br from-purple-900/40 to-pink-900/20 border border-purple-800/30'
                    : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/50'
                } shadow-2xl backdrop-blur-sm`}>
                  <div className="flex items-center mb-8">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center ml-4`}>
                      <FontAwesomeIcon icon={faPhone} className="text-white text-2xl" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      معلومات الاتصال
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center ml-4 flex-shrink-0`}>
                          <FontAwesomeIcon icon={info.icon} className="text-white" />
                        </div>
                        <div>
                          <h3 className={`font-bold text-lg mb-1 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                            {info.title}
                          </h3>
                          <p className={`${darkMode ? 'text-blue-200' : 'text-slate-600'}`}>
                            {info.value}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className={`rounded-3xl p-8 ${
                  darkMode
                    ? 'bg-gradient-to-br from-blue-900/40 to-cyan-900/20 border border-blue-800/30'
                    : 'bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/50'
                } shadow-2xl backdrop-blur-sm`}>
                  <div className="flex items-center mb-8">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center ml-4`}>
                      <FontAwesomeIcon icon={faGlobe} className="text-white text-2xl" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      وسائل التواصل
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialMedia.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                        className={`flex flex-col items-center justify-center p-4 rounded-xl text-white ${social.color} transition-all duration-300 shadow-lg`}
                      >
                        <FontAwesomeIcon icon={social.icon} className="text-2xl mb-2" />
                        <span className="text-sm font-medium">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Quick Support */}
                <div className={`rounded-3xl p-8 ${
                  darkMode
                    ? 'bg-gradient-to-br from-green-900/40 to-emerald-900/20 border border-green-800/30'
                    : 'bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50'
                } shadow-2xl backdrop-blur-sm`}>
                  <div className="flex items-center mb-8">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center ml-4`}>
                      <FontAwesomeIcon icon={faHeadset} className="text-white text-2xl" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      دعم سريع
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    <motion.a
                      href="https://wa.me/212600000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold shadow-lg`}
                    >
                      <FontAwesomeIcon icon={faWhatsappBrand} className="ml-2" />
                      تواصل عبر واتساب
                    </motion.a>
                    
                    <motion.a
                      href="tel:+212600000000"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold shadow-lg`}
                    >
                      <FontAwesomeIcon icon={faPhone} className="ml-2" />
                      اتصل بنا الآن
                    </motion.a>
                    
                    <motion.a
                      href="mailto:info@lkhadma-like.ma"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold shadow-lg`}
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
                      أرسل بريد إلكتروني
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* FAQ Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className={`rounded-3xl p-8 ${
                darkMode
                  ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50'
                  : 'bg-white border border-slate-200/50'
              } shadow-2xl backdrop-blur-sm`}>
                <div className="flex items-center mb-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center ml-4`}>
                    <FontAwesomeIcon icon={faCommentDots} className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    الأسئلة الشائعة
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { 
                      q: 'كم تستغرق مدة الرد على الرسائل؟', 
                      a: 'نرد على جميع الرسائل خلال 24-48 ساعة عمل' 
                    },
                    { 
                      q: 'هل تقدمون دعمًا فنيًا للشركات؟', 
                      a: 'نعم، نقدم حزم دعم فني متخصصة للشركات' 
                    },
                    { 
                      q: 'كيف يمكنني التقدم لوظيفة في Lkhadma؟', 
                      a: 'يمكنك التقديم من خلال صفحة "وظائف" أو إرسال سيرتك الذاتية' 
                    },
                    { 
                      q: 'هل توجد رسوم لاستخدام المنصة؟', 
                      a: 'المنصة مجانية للباحثين عن عمل، وتوجد باقات للشركات' 
                    }
                  ].map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-6 rounded-2xl ${
                        darkMode
                          ? 'bg-slate-800/50 border border-slate-700'
                          : 'bg-slate-50 border border-slate-200'
                      }`}
                    >
                      <div className="flex items-start mb-3">
                        <FontAwesomeIcon icon={faQuestionCircle} className={`text-cyan-400 ml-3 mt-1`} />
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                          {faq.q}
                        </h3>
                      </div>
                      <p className={`${darkMode ? 'text-blue-200' : 'text-slate-600'}`}>
                        {faq.a}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Map & Location */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className={`rounded-3xl p-8 ${
                darkMode
                  ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50'
                  : 'bg-white border border-slate-200/50'
              } shadow-2xl backdrop-blur-sm`}>
                <div className="flex items-center mb-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center ml-4`}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    موقعنا
                  </h2>
                </div>
                
                <div className={`rounded-2xl overflow-hidden h-64 relative ${
                  darkMode ? 'bg-slate-900' : 'bg-slate-100'
                }`}>
                  {/* خريطة وهمية مع تأثيرات متحركة */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="text-center"
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        darkMode
                          ? 'bg-gradient-to-br from-red-600 to-orange-500'
                          : 'bg-gradient-to-br from-red-500 to-orange-400'
                      }`}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-2xl" />
                      </div>
                      <p className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        المغرب - الدار البيضاء
                      </p>
                      <p className={`mt-2 ${darkMode ? 'text-blue-200' : 'text-slate-600'}`}>
                        العنوان: شارع محمد السادس، رقم 123
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* تأثيرات الخريطة */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute rounded-full ${
                        darkMode ? 'bg-cyan-400/20' : 'bg-blue-500/20'
                      }`}
                      initial={{
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                        scale: 0
                      }}
                      animate={{
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                      style={{
                        width: Math.random() * 50 + 20,
                        height: Math.random() * 50 + 20,
                      }}
                    />
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <p className={`${darkMode ? 'text-blue-200' : 'text-slate-600'}`}>
                    يمكنك زيارتنا في مقرنا الرئيسي خلال ساعات العمل الرسمية
                  </p>
                </div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-12 text-center relative overflow-hidden ${
                darkMode
                  ? 'bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-700/30'
                  : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200/50'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
              
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                لديك استفسار عاجل؟
              </h2>
              
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                فريق الدعم لدينا متاح على مدار الساعة للإجابة على استفساراتك
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center`}
                >
                  <FontAwesomeIcon icon={faWhatsappBrand} className="ml-2" />
                  واتساب مباشر
                </motion.a>
                
                <motion.a
                  href="tel:+212600000000"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center`}
                >
                  <FontAwesomeIcon icon={faPhone} className="ml-2" />
                  اتصل الآن
                </motion.a>
              </div>
            </motion.section>
          </div>
        </div>
      </motion.div>

      {/* Login/Signup Modal */}
      <AnimatePresence>
        {(showLogin || showSignUp) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => { setShowLogin(false); setShowSignUp(false); }}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
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
            >
              <button
                onClick={() => { setShowLogin(false); setShowSignUp(false); }}
                className={`absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center ${
                  darkMode 
                    ? 'bg-blue-800/50 hover:bg-blue-700 text-blue-200' 
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                }`}
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 text-center">
                {isLogin ? 'مرحباً بعودتك' : 'إنشاء حساب جديد'}
              </h2>

              <form onSubmit={handleAuthSubmit} className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'} text-right`}>
                      اسم المستخدم
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="username"
                        value={authFormData.username}
                        onChange={handleAuthInputChange}
                        className={`w-full pl-4 pr-10 py-3 rounded-lg transition-all text-right ${
                          darkMode 
                            ? 'bg-slate-800 border border-blue-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 text-white' 
                            : 'bg-white border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800'
                        }`}
                        placeholder="أدخل اسم المستخدم"
                        required={!isLogin}
                      />
                      <FontAwesomeIcon 
                        icon={faUser} 
                        className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} 
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'} text-right`}>
                    البريد الإلكتروني
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={authFormData.email}
                      onChange={handleAuthInputChange}
                      className={`w-full pl-4 pr-10 py-3 rounded-lg transition-all text-right ${
                        darkMode 
                          ? 'bg-slate-800 border border-blue-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 text-white' 
                          : 'bg-white border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800'
                      }`}
                      placeholder="أدخل بريدك الإلكتروني"
                      required
                    />
                    <FontAwesomeIcon 
                      icon={faEnvelope} 
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} 
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'} text-right`}>
                    كلمة المرور
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={authFormData.password}
                      onChange={handleAuthInputChange}
                      className={`w-full pl-4 pr-12 py-3 rounded-lg transition-all text-right ${
                        darkMode 
                          ? 'bg-slate-800 border border-blue-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 text-white' 
                          : 'bg-white border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800'
                      }`}
                      placeholder="أدخل كلمة المرور"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    >
                      <FontAwesomeIcon 
                        icon={showPassword ? faEyeSlash : faEye} 
                        className={darkMode ? 'text-blue-400' : 'text-blue-500'} 
                      />
                    </button>
                    <FontAwesomeIcon 
                      icon={faLock} 
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} 
                    />
                  </div>
                </div>

                {!isLogin && (
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'} text-right`}>
                      تأكيد كلمة المرور
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        name="confirmPassword"
                        value={authFormData.confirmPassword}
                        onChange={handleAuthInputChange}
                        className={`w-full pl-4 pr-10 py-3 rounded-lg transition-all text-right ${
                          darkMode 
                            ? 'bg-slate-800 border border-blue-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 text-white' 
                            : 'bg-white border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800'
                        }`}
                        placeholder="أعد إدخال كلمة المرور"
                        required={!isLogin}
                      />
                      <FontAwesomeIcon 
                        icon={faLock} 
                        className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} 
                      />
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 mt-6 shadow-md ${
                    darkMode 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700' 
                      : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600'
                  }`}
                >
                  {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className={darkMode ? 'text-blue-300' : 'text-blue-700'}>
                  {isLogin ? "ليس لديك حساب؟" : "لديك حساب بالفعل؟"}
                  <button
                    onClick={toggleAuthForm}
                    className={`mr-2 font-semibold ${
                      darkMode ? 'text-cyan-300 hover:text-cyan-200' : 'text-blue-600 hover:text-blue-800'
                    }`}
                  >
                    {isLogin ? 'سجل الآن' : 'تسجيل الدخول'}
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