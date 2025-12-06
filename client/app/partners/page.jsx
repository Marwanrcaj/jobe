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
  faHandshake,
  faBuilding,
  faGlobe,
  faRocket,
  faChartLine,
  faAward,
  faShieldAlt,
  faUsers,
  faChevronDown,
  faCheckCircle,
  faQuoteLeft,
  faQuoteRight,
  faArrowRight,
  faHeart,
  faLightbulb,
  faCogs,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';

export default function PartnersPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('partners');
  const [introComplete, setIntroComplete] = useState(false);
  
  const formDataInitialState = {
    email: '',
    password: '',
    username: '',
    confirmPassword: ''
  };
  
  const [formData, setFormData] = useState(formDataInitialState);
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
      }, 1500);
      
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login attempt:', formData);
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('Sign up attempt:', formData);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData(formDataInitialState);
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
    if (id !== 'partners') {
      window.location.href = navItems.find(item => item.id === id)?.href || '/';
    }
  };

  // بيانات الشركاء
  const partners = [
    {
      id: 1,
      name: 'شركة التقنية المتقدمة',
      category: 'التكنولوجيا',
      logoColor: 'from-blue-500 to-cyan-500',
      description: 'رائدة في مجال حلول البرمجيات والتطبيقات الذكية',
      benefits: ['دعم تقني متكامل', 'حلول مخصصة', 'تدريب مستمر']
    },
    {
      id: 2,
      name: 'مجموعة التوظيف الدولية',
      category: 'الموارد البشرية',
      logoColor: 'from-purple-500 to-pink-500',
      description: 'متخصصة في تقديم خدمات التوظيف والاستشارات الإدارية',
      benefits: ['شبكة واسعة من المرشحين', 'فحص السجلات', 'استشارات مهنية']
    },
    {
      id: 3,
      name: 'أكاديمية المهارات الرقمية',
      category: 'التعليم والتدريب',
      logoColor: 'from-green-500 to-emerald-500',
      description: 'تقدم برامج تدريبية متخصصة في المهارات الرقمية',
      benefits: ['شهادات معتمدة', 'تدريب عملي', 'تأهيل سوق العمل']
    },
    {
      id: 4,
      name: 'بنك التنمية المحلي',
      category: 'التمويل',
      logoColor: 'from-yellow-500 to-orange-500',
      description: 'يدعم المشاريع الصغيرة والمتوسطة ورواد الأعمال',
      benefits: ['تمويل ميسر', 'استشارات مالية', 'حاضنات أعمال']
    },
    {
      id: 5,
      name: 'وكالة التطوير الاقتصادي',
      category: 'التنمية',
      logoColor: 'from-red-500 to-rose-500',
      description: 'تعمل على تعزيز النمو الاقتصادي وخلق فرص العمل',
      benefits: ['دعم حكومي', 'شبكات تواصل', 'تسهيلات إدارية']
    },
    {
      id: 6,
      name: 'شبكة الحرفيين الوطنيين',
      category: 'الحرف اليدوية',
      logoColor: 'from-indigo-500 to-blue-500',
      description: 'تجمع للحرفيين المهرة في مختلف التخصصات',
      benefits: ['ترويج للحرف', 'تدريب الحرفيين', 'تسويق المنتجات']
    }
  ];

  // قصص النجاح
  const successStories = [
    {
      id: 1,
      company: 'شركة النخبة للتسويق',
      partnerSince: '2022',
      result: 'زيادة 300% في عدد المرشحين المؤهلين',
      quote: 'ساعدتنا Lkhadma في بناء فريق عمل مميز في وقت قياسي'
    },
    {
      id: 2,
      company: 'مؤسسة البناء الحديث',
      partnerSince: '2021',
      result: 'تخفيض 40% في وقت التوظيف',
      quote: 'المنصة وفرت لنا حرفيين مهرة بمعايير دقيقة وسرعة فائقة'
    },
    {
      id: 3,
      company: 'مركز التدريب التقني',
      partnerSince: '2023',
      result: 'تخرج 500 متدرب في سوق العمل',
      quote: 'شراكتنا مع Lkhadma ساعدت في توظيف خريجينا بشكل فوري'
    }
  ];

  // مراحل الشراكة
  const partnershipSteps = [
    {
      step: 1,
      title: 'التواصل الأولي',
      description: 'نقوم بالتعرف على احتياجات شريكنا وأهدافه'
    },
    {
      step: 2,
      title: 'توقيع الاتفاقية',
      description: 'نضع إطاراً قانونياً واضحاً يحمي مصالح الطرفين'
    },
    {
      step: 3,
      title: 'التكامل التقني',
      description: 'نربط أنظمة شريكنا بمنصتنا لتحقيق أقصى استفادة'
    },
    {
      step: 4,
      title: 'الدعم المستمر',
      description: 'نقدم دعماً فنياً وتسويقياً مستمراً لضمان النجاح'
    }
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
                duration: 1.5,
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
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
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
                    icon={faHandshake} 
                    className="text-white text-3xl"
                  />
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-8 text-center"
              >
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  شركاؤنا
                </h1>
                <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                  Lkhadma - شبكة شركاء قوية
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

          {/* Partners Page Content */}
          <div dir="rtl" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            
            {/* Hero Section */}
            <section className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <div className={`w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center ${
                  darkMode
                    ? 'bg-gradient-to-br from-cyan-600 to-blue-700'
                    : 'bg-gradient-to-br from-cyan-500 to-blue-600'
                } shadow-2xl`}>
                  <FontAwesomeIcon icon={faHandshake} className="text-white text-5xl" />
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  شركاؤنا
                </h1>
                
                <p className={`text-2xl max-w-3xl mx-auto leading-relaxed mb-8 ${
                  darkMode ? 'text-blue-200' : 'text-blue-900'
                }`}>
                  نعمل مع <span className="font-bold gradient-text">أفضل الشركاء</span> لبناء شبكة توظيف قوية وفعالة تخدم سوق العمل المغربي
                </p>
              </motion.div>
            </section>

            {/* Partners Grid */}
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  شركاؤنا المميزون
                </h2>
                <p className={`text-xl ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                  نتعاون مع مؤسسات رائدة في مختلف المجالات
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className={`rounded-3xl p-6 ${
                      darkMode
                        ? 'bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700'
                        : 'bg-gradient-to-br from-white to-slate-50 border border-slate-200'
                    } shadow-xl`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${partner.logoColor} flex items-center justify-center ml-4`}>
                        <FontAwesomeIcon icon={faBuilding} className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                          {partner.name}
                        </h3>
                        <div className={`px-3 py-1 rounded-full text-sm inline-block mt-1 ${
                          darkMode ? 'bg-slate-700 text-blue-300' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {partner.category}
                        </div>
                      </div>
                    </div>
                    
                    <p className={`mb-4 ${darkMode ? 'text-blue-200' : 'text-slate-600'}`}>
                      {partner.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className={`font-semibold ${darkMode ? 'text-cyan-300' : 'text-blue-600'}`}>
                        فوائد الشراكة:
                      </h4>
                      {partner.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 ml-2" />
                          <span className={darkMode ? 'text-blue-100' : 'text-slate-700'}>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Why Partner With Us */}
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-3xl p-8 ${
                  darkMode
                    ? 'bg-gradient-to-br from-blue-900/40 to-cyan-900/20 border border-blue-800/30'
                    : 'bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/50'
                }`}
              >
                <div className="flex items-center mb-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center ml-4`}>
                    <FontAwesomeIcon icon={faAward} className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    لماذا تختار الشراكة معنا؟
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: faRocket, title: 'وصول أوسع', desc: 'وصول إلى آلاف الباحثين عن العمل المؤهلين' },
                    { icon: faChartLine, title: 'تحسين الأداء', desc: 'تقارير وتحليلات تفصيلية لعمليات التوظيف' },
                    { icon: faShieldAlt, title: 'حماية وأمان', desc: 'بيئة آمنة ومحمية لجميع المعاملات' },
                    { icon: faUsers, title: 'شبكة متكاملة', desc: 'اندماج مع شبكة واسعة من الشركات والمؤسسات' },
                    { icon: faCogs, title: 'تقنية متطورة', desc: 'منصة حديثة مع أدوات متقدمة للإدارة' },
                    { icon: faHeadset, title: 'دعم فني', desc: 'فريق دعم فني متخصص على مدار الساعة' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 rounded-2xl ${
                        darkMode ? 'bg-slate-800/50' : 'bg-white/50'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center mb-3`}>
                        <FontAwesomeIcon icon={item.icon} className="text-white" />
                      </div>
                      <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-slate-600'}`}>
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Success Stories */}
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  قصص نجاح شركائنا
                </h2>
                <p className={`text-xl ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                  شهادات حقيقية من شركائنا عن تجربة العمل معنا
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {successStories.map((story, index) => (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`rounded-3xl p-6 relative ${
                      darkMode
                        ? 'bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700'
                        : 'bg-gradient-to-br from-white to-slate-50 border border-slate-200'
                    } shadow-xl`}
                  >
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center shadow-lg">
                      <FontAwesomeIcon icon={faQuoteLeft} className="text-white" />
                    </div>
                    
                    <div className="mb-4">
                      <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        {story.company}
                      </h3>
                      <div className={`px-3 py-1 rounded-full text-sm inline-block ${
                        darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-700'
                      }`}>
                        شريك منذ {story.partnerSince}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className={`p-3 rounded-lg mb-3 ${
                        darkMode ? 'bg-slate-700/50' : 'bg-blue-50'
                      }`}>
                        <p className={`font-bold ${darkMode ? 'text-green-300' : 'text-green-600'}`}>
                          النتيجة: {story.result}
                        </p>
                      </div>
                      
                      <div className="relative">
                        <FontAwesomeIcon icon={faQuoteRight} className={`absolute bottom-0 left-0 text-4xl opacity-10 ${darkMode ? 'text-blue-400' : 'text-blue-200'}`} />
                        <p className={`pr-8 ${darkMode ? 'text-blue-200' : 'text-slate-600'}`}>
                          "{story.quote}"
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faHeart} className="text-red-400 ml-2" />
                      <span className={darkMode ? 'text-blue-300' : 'text-blue-600'}>شريك موثوق</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Partnership Process */}
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  خطوات الشراكة معنا
                </h2>
              </motion.div>

              <div className="relative">
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 ${
                  darkMode ? 'bg-blue-800/30' : 'bg-blue-200/50'
                } hidden lg:block`}></div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  {partnershipSteps.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative text-center"
                    >
                      <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${
                        darkMode
                          ? 'bg-gradient-to-br from-orange-500 to-yellow-400'
                          : 'bg-gradient-to-br from-orange-400 to-yellow-300'
                      } shadow-lg`}>
                        <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                          <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                            {step.step}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                        {step.title}
                      </h3>
                      
                      <p className={`${darkMode ? 'text-blue-200' : 'text-slate-600'}`}>
                        {step.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

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
                كن شريكنا القادم
              </h2>
              
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                انضم إلى شبكة شركائنا المتميزين وكن جزءاً من رحلة تطوير سوق العمل المغربي
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all`}
                >
                  <FontAwesomeIcon icon={faHandshake} className="ml-2" />
                  تقدم بطلب الشراكة
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-xl font-bold text-lg ${
                    darkMode
                      ? 'bg-slate-800 border border-slate-700 text-white'
                      : 'bg-white border border-blue-300 text-blue-700'
                  } shadow-lg hover:shadow-xl transition-all`}
                >
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  تعرف على المزيد
                </motion.button>
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

              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'} text-right`}>
                      اسم المستخدم
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
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
                      value={formData.email}
                      onChange={handleInputChange}
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
                      value={formData.password}
                      onChange={handleInputChange}
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
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
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
                    onClick={toggleForm}
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