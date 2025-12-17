// app/about/page.jsx
'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faUserClock,
  faCrown,
  faHandshake,
  faClock,
  faStar,
  faRocket,
  faShieldAlt,
  faUsers,
  faChartLine,
  faGlobe,
  faHeart,
  faTarget,
  faGem,
  faTrophy,
  faAward,
  faCertificate,
  faMedal,
  faFire,
  faMagicWandSparkles,
  faSparkles,
  faCheckDouble,
  faBusinessTime,
  faBalanceScale,
  faHandHoldingHeart,
  faInfinity,
  faPhoneVolume,
  faQuoteRight,
  faQuestionCircle,
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
  faGripLinesVertical,
  faChevronRight,
  faBolt,
  faCreditCard,
  faGift,
  faCloud,
  faMobileAlt,
  faHeadset,
  faDatabase,
  faKey,
  faBell,
  faPalette,
  faMagic,
  faSync,
  faShieldHeart,
  faBitcoinSign,
  faCoins,
  faHandshake as faHandshakeIcon,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../logo.png';

// Image Logo Component (Same as main page)
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
          alt=" TSRA Logo"
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

// Full Logo with Text Component
const VyraFullLogo = ({ darkMode, variant = 'header', animated = true }) => {
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
                       TSRA
                    </motion.span>
                    <span className="text-transparent"> TSRA</span>
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
                
              </motion.div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="relative mb-6"
        animate={animated ? {
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0, -5, 0]
        } : {}}
        transition={animated ? {
          scale: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          },
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        } : {}}
      >
        <ImageLogo darkMode={darkMode} size="large" animated={animated} />
        
        {animated && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
              animate={{
                scale: [1, 1.5, 2],
                opacity: [0.5, 0.3, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-purple-400/20"
              animate={{
                scale: [1, 1.8, 2.2],
                opacity: [0.3, 0.2, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.5
              }}
            />
          </>
        )}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">
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
              TSRA
            </motion.span>
            <span className="text-transparent">TSRA</span>
          </span>
        </h1>
        
        <motion.div
          className="h-1 w-48 mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full mb-4"
          animate={animated ? {
            scaleX: [0.8, 1, 0.8],
          } : {}}
          transition={animated ? {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          } : {}}
        />
        
        <p className="text-xl opacity-80 tracking-wider">
          <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
            Wave Your Web Experience
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default function AboutPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('about');
  const [introComplete, setIntroComplete] = useState(true);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  
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

  const pathname = usePathname();

  // Premium Plans Data (simplified for about page)
  const premiumPlans = [
    {
      id: 'basic',
      name: 'Starter',
      price: { monthly: '$9.99', yearly: '$99.99' },
      icon: faRocket,
    },
    {
      id: 'pro',
      name: 'Professional',
      price: { monthly: '$19.99', yearly: '$199.99' },
      icon: faGem,
    }
  ];

  const paymentMethods = [
    { 
      id: 'card', 
      name: 'Credit/Debit Card', 
      icon: faCreditCard,
    },
    { 
      id: 'paypal', 
      name: 'PayPal', 
      icon: faPaypal,
    }
  ];

  // فلسفتنا النص الأصلي
  const philosophyText = {
    vision: `
      <strong>"ماشي 'شي واحد غادي يجيك'</strong><br/>
      <strong>بل 'أنت اللي كتختار وبشروطك'"</strong>
      
      <p style="margin-top: 1rem;">
        في عالم كان الخدمات تحدد وقتك ومكانك، جاءت فيرا لتقلب المعادلة.
        نحن لا نبيع لك خدمة، نحن نبيع لك <strong>السيطرة الكاملة على وقتك</strong>.
        أنت من يحدد متى، أين، وكيف تريد الخدمة.
      </p>
    `,
    clientValue: `
      <h3>للزبائن (Clients): نهاية المعاناة</h3>
      <p>
        تخلص من عناء البحث والانتظار. مع فيرا:
        <br/>• <strong>"تهنى من صف الحلاق"</strong> - حدد موعدك وراحتك أولوية
        <br/>• <strong>"الكوتش ديالك فوقتك نتا ماشي فوقتو هو"</strong> - أنت المسيطر
        <br/>• <strong>"الخدمة تجيك لعندك"</strong> - بدون حركة ولا تعب
      </p>
    `,
    providerValue: `
      <h3>للحرفيين (Providers): أنت المدير</h3>
      <p>
        لم تعد مضطراً للانتظار أو العمل بظروف غير مناسبة:
        <br/>• <strong>"خدم فالوقت اللي بغيتي"</strong> - جدولك أنت من يحدده
        <br/>• <strong>"وضاعف المدخول ديالك"</strong> - كفاءة أعلى، دخل أكبر
        <br/>• <strong>"خليك فالبيت، الخدمة تجي لعندك"</strong> - راحة واستقرار
      </p>
    `,
    conclusion: `
      <h3>الخلاصة: إعادة تعريف الخدمات</h3>
      <p>
        <strong>"الخدمة كيديرها الحرفي، والراحة كنوفروها حنا"</strong>
        <br/><br/>
        هذا هو جوهر فيرا: نحن جسر يربط بين الاحترافية والراحة.
        نحن لا نقدم خدمة فقط، بل نقدم <strong>تجربة إنسانية</strong> تحترم وقتك وقيمتك.
        لأننا نؤمن أن الجودة الحقيقية تبدأ عندما يشعر الطرفان بالاحترام والتقدير.
      </p>
    `
  };

  // إحصائيات وأرقام
  const stats = [
    {
      icon: faUsers,
      value: '10,000+',
      label: 'زبون راضي',
      color: 'from-blue-500 to-cyan-400',
      description: 'عملاء اختاروا الراحة'
    },
    {
      icon: faUserClock,
      value: '5,000+',
      label: 'حرفي محترف',
      color: 'from-purple-500 to-pink-500',
      description: 'محترف يتحكم في وقته'
    },
    {
      icon: faChartLine,
      value: '98%',
      label: 'رضا عملاء',
      color: 'from-green-500 to-emerald-400',
      description: 'معدل رضا عالي'
    },
    {
      icon: faClock,
      value: '50%',
      label: 'توفير وقت',
      color: 'from-orange-500 to-red-500',
      description: 'وقت أقل، إنتاجية أعلى'
    }
  ];

  // مبادئنا الأساسية
  const principles = [
    {
      icon: faCrown,
      title: 'السيطرة على الوقت',
      description: 'أنت تتحكم في جدولك. نحن نضمن تنفيذه بدقة',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: faHandshake,
      title: 'شراكة متبادلة',
      description: 'علاقة تكاملية تحترم الطرفين وتضمن حقوق الجميع',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: faShieldAlt,
      title: 'جودة مضمونة',
      description: 'كل خدمة تخضع لمعايير جودة صارمة ومراجعة دقيقة',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: faRocket,
      title: 'تطور مستمر',
      description: 'نسعى دائماً لتطوير التجربة وتحسين الخدمات',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  // فريق القيادة
  const team = [
    {
      name: "مروان م.",
      role: "المؤسس والرؤية",
      quote: "الوقت أغلى ما نملك، فلنحترمه ولنحفظه",
      color: "from-blue-600 to-cyan-500"
    },
    {
      name: "الفريق التنفيذي",
      role: "التنفيذ والجودة",
      quote: "نحن جسر بين الاحترافية والراحة",
      color: "from-purple-600 to-pink-500"
    },
    {
      name: "مستشارو الخبرة",
      role: "التطوير والابتكار",
      quote: "كل تحسين نقدمه يعكس احترامنا لعملائنا",
      color: "from-green-600 to-emerald-500"
    }
  ];

  // FAQ أسئلة شائعة
  const faqs = [
    {
      question: "كيف تضمنون جودة الخدمات؟",
      answer: "كل حرفي يمر بعملية تقييم صارمة، ونظام مراجعة بعد كل خدمة"
    },
    {
      question: "هل يمكنني اختيار الوقت المناسب لي؟",
      answer: "نعم! أنت تختار الوقت، المكان، والشروط التي تناسبك"
    },
    {
      question: "ماذا عن السلامة والأمان؟",
      answer: "جميع المحترفين مؤمنون ومراجعون، مع نظام تقييم وتتبع"
    },
    {
      question: "كيف تدعمون الحرفيين؟",
      answer: "نوفر أدوات، تدريب، وتغطية تأمينية لضمان استقرارهم"
    }
  ];

  useEffect(() => {
    const savedDark = localStorage.getItem('darkMode');
    const savedFont = localStorage.getItem('fontMode');
    setDarkMode(savedDark ? JSON.parse(savedDark) : true);
    setFontMode(savedFont || 'hilal');
    
    const currentPath = pathname;
    if (currentPath === '/') setActiveLink('home');
    else if (currentPath === '/about') setActiveLink('about');
    else if (currentPath === '/Community') setActiveLink('Community');
    else if (currentPath === '/contact') setActiveLink('contact');
    
    // Skip intro for about page
    setIntroComplete(true);
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
    { id: 'Community', label: 'Community', href: '/Community' },
    { id: 'contact', label: 'Contact', href: '/contact' }
  ];

  const handleNavClick = (id) => {
    setActiveLink(id);
    setMobileMenuOpen(false);
  };

  if (darkMode === null || fontMode === null) return null;

  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${darkMode ? 'bg-blue-400/10' : 'bg-blue-500/5'}`}
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="block"
      >
        {/* HEADER SECTION - Exact same as main page */}
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
                >
                  <VyraFullLogo darkMode={darkMode} variant="header" animated={true} />
                </motion.div>

                <nav className="hidden md:flex items-center space-x-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
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
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className={`w-px h-6 ${
                      darkMode ? 'bg-blue-700/30' : 'bg-blue-300/50'
                    }`}
                  ></motion.div>
                  
                  <div className="flex items-center space-x-3">
                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.3 }}
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

                    {/* Premium Button */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.4 }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: [0, -5, 5, -5, 0],
                        boxShadow: darkMode
                          ? '0 0 20px rgba(251, 191, 36, 0.3)'
                          : '0 0 20px rgba(251, 191, 36, 0.4)'
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowPremiumModal(true)}
                      className={`relative w-10 h-10 rounded-lg flex items-center justify-center transition-all group ${
                        darkMode
                          ? 'bg-gradient-to-br from-yellow-600/20 via-orange-500/20 to-pink-500/20 hover:from-yellow-600/30 hover:via-orange-500/30 hover:to-pink-500/30 text-yellow-300'
                          : 'bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 hover:from-yellow-200 hover:via-orange-200 hover:to-pink-200 text-yellow-600'
                      }`}
                    >
                      <FontAwesomeIcon icon={faCrown} className="text-sm" />
                      
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                        className="absolute inset-0 rounded-lg border-2 border-yellow-400/30"
                      />
                      
                      <motion.div
                        animate={{
                          rotate: 360,
                          scale: [0.8, 1, 0.8]
                        }}
                        transition={{
                          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                          scale: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
                        }}
                        className="absolute -top-1 -right-1 text-xs text-yellow-300"
                      >
                        ✨
                      </motion.div>
                      
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                        Premium Features
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-yellow-500"></div>
                      </div>
                    </motion.button>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 1.5 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => { setShowLogin(true); setIsLogin(true); }}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        darkMode
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg'
                          : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white shadow-lg'
                      }`}
                    >
                      <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                      Login
                    </motion.button>
                    
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 1.6 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => { setShowSignUp(true); setIsLogin(false); }}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
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
                      
                      <button
                        onClick={() => { setShowPremiumModal(true); setMobileMenuOpen(false); }}
                        className={`w-full px-4 py-3 rounded-lg flex items-center justify-center transition-all ${
                          darkMode
                            ? 'bg-gradient-to-r from-yellow-600/20 to-orange-500/20 hover:from-yellow-600/30 hover:to-orange-500/30 text-yellow-300'
                            : 'bg-gradient-to-r from-yellow-100 to-orange-100 hover:from-yellow-200 hover:to-orange-200 text-yellow-600'
                        }`}
                      >
                        <FontAwesomeIcon icon={faCrown} className="mr-3" />
                        Premium Features
                      </button>
                      
                      <button
                        onClick={() => { setShowLogin(true); setIsLogin(true); setMobileMenuOpen(false); }}
                        className={`w-full px-4 py-3 rounded-lg font-semibold transition-all ${
                          darkMode
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                            : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white'
                        }`}
                      >
                        <FontAwesomeIcon icon={faSignInAlt} className="mr-3" />
                        Login
                      </button>
                      
                      <button
                        onClick={() => { setShowSignUp(true); setIsLogin(false); setMobileMenuOpen(false); }}
                        className={`w-full px-4 py-3 rounded-lg font-semibold transition-all ${
                          darkMode
                            ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white'
                            : 'bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:pink-600 text-white'
                        }`}
                      >
                        <FontAwesomeIcon icon={faUserPlus} className="mr-3" />
                        Sign Up
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </header>

        {/* MAIN ABOUT CONTENT */}
        <div
          className={`${
            darkMode
              ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-stone-50'
              : 'bg-gradient-to-br from-stone-50 via-stone-100 to-blue-50 text-slate-900'
          } min-h-screen transition-all duration-500 pt-16`}
        >
          {/* Hero Section */}
          <section className={`relative overflow-hidden py-20 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute rounded-full ${darkMode ? 'bg-cyan-500/10' : 'bg-blue-500/5'}`}
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
                    width: Math.random() * 200 + 50,
                    height: Math.random() * 200 + 50,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="inline-block p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-6"
                >
                  <FontAwesomeIcon icon={faLightbulb} className="text-white text-3xl" />
                </motion.div>

                <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                   فكرتنا
                  </span>
                </h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="max-w-3xl mx-auto"
                >
                  <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                    إعادة تعريف مفهوم الخدمات... حيث يصبح <strong className="text-cyan-400">الوقت</strong> ملكك، 
                    و <strong className="text-purple-400">الراحة</strong> حقك، و <strong className="text-blue-400">الجودة</strong> واجبنا
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className={`p-8 rounded-3xl ${darkMode ? 'bg-gradient-to-br from-slate-800 to-blue-900/30' : 'bg-white'} shadow-2xl border ${darkMode ? 'border-blue-800/30' : 'border-blue-200'}`}>
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <FontAwesomeIcon icon={faGem} className="text-white text-2xl" />
                    </div>
                    
                    <div className="mt-8">
                      <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          رؤية مختلفة، واقع أفضل
                        </span>
                      </h2>
                      
                      <div className={`space-y-6 text-lg leading-relaxed ${darkMode ? 'text-blue-200' : 'text-gray-700'}`}>
                        <div 
                          className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
                          dangerouslySetInnerHTML={{ __html: philosophyText.vision }}
                        />
                        
                        <div 
                          className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
                          dangerouslySetInnerHTML={{ __html: philosophyText.clientValue }}
                        />
                        
                        <div 
                          className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20"
                          dangerouslySetInnerHTML={{ __html: philosophyText.providerValue }}
                        />
                        
                        <div 
                          className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20"
                          dangerouslySetInnerHTML={{ __html: philosophyText.conclusion }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10, scale: 1.05 }}
                        className={`p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white/80'} backdrop-blur-sm border ${darkMode ? 'border-blue-800/30' : 'border-blue-200/50'} shadow-lg`}
                      >
                        <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                          <FontAwesomeIcon icon={stat.icon} className="text-white text-xl" />
                        </div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                          {stat.value}
                        </div>
                        <div className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {stat.label}
                        </div>
                        <div className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                          {stat.description}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Principles */}
                  <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-slate-800 to-blue-900/30' : 'bg-gradient-to-br from-white to-blue-50'} border ${darkMode ? 'border-blue-800/30' : 'border-blue-200'}`}>
                    <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        مبادئنا الأساسية
                      </span>
                    </h3>
                    <div className="space-y-4">
                      {principles.map((principle, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="flex items-start space-x-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-cyan-500/5 transition-all"
                        >
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${principle.color} flex-shrink-0`}>
                            <FontAwesomeIcon icon={principle.icon} className="text-white" />
                          </div>
                          <div>
                            <h4 className={`font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {principle.title}
                            </h4>
                            <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                              {principle.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className={`py-20 ${darkMode ? 'bg-gradient-to-br from-blue-950 to-slate-900' : 'bg-gradient-to-br from-blue-100 to-purple-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    عقول وراء الرؤية
                  </span>
                </h2>
                <p className={`text-xl ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                  فريق يؤمن بأن الجودة تبدأ بالاحترام
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -15, scale: 1.02 }}
                    className={`p-8 rounded-3xl ${darkMode ? 'bg-slate-800/50' : 'bg-white/90'} backdrop-blur-sm border ${darkMode ? 'border-blue-800/30' : 'border-blue-200/50'} shadow-xl`}
                  >
                    <div className={`p-6 rounded-2xl bg-gradient-to-r ${member.color} mb-6 text-center`}>
                      <FontAwesomeIcon icon={faUserClock} className="text-white text-3xl" />
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {member.name}
                    </h3>
                    
                    <div className="text-center mb-4">
                      <span className={`px-4 py-1 rounded-full text-sm font-semibold ${darkMode ? 'bg-blue-900/30 text-cyan-300' : 'bg-blue-100 text-blue-700'}`}>
                        {member.role}
                      </span>
                    </div>
                    
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-900/50' : 'bg-blue-50'} border ${darkMode ? 'border-blue-800/30' : 'border-blue-200'}`}>
                      <FontAwesomeIcon icon={faQuoteRight} className={`mb-2 ${darkMode ? 'text-cyan-400' : 'text-blue-500'}`} />
                      <p className={`italic ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                        "{member.quote}"
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    أسئلة شائعة
                  </span>
                </h2>
                <p className={`text-xl ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                  كل ما تحتاج معرفته عن تجربة فيرا
                </p>
              </motion.div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-blue-50/50'} backdrop-blur-sm border ${darkMode ? 'border-blue-800/30' : 'border-blue-200'} shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                        <FontAwesomeIcon icon={faQuestionCircle} className={`text-lg ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {faq.question}
                        </h3>
                        <p className={`${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={`py-20 ${darkMode ? 'bg-gradient-to-br from-slate-900 to-blue-950' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-3xl ${darkMode ? 'bg-gradient-to-br from-slate-800/80 to-blue-900/80' : 'bg-white/90'} backdrop-blur-sm border ${darkMode ? 'border-cyan-500/30' : 'border-blue-300'} shadow-2xl`}
              >
                <div className="inline-block p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-6">
                  <FontAwesomeIcon icon={faHandshake} className="text-white text-3xl" />
                </div>
                
                <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    انضم إلى الثورة
                  </span>
                </h2>
                
                <p className={`text-xl mb-8 leading-relaxed ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                  سواء كنت زبوناً تبحث عن الراحة، أو محترفاً تبحث عن الحرية...<br/>
                  <strong>في فيرا، نضمن لك تجربة تحترم وقتك وتقدّر قيمتك</strong>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <FontAwesomeIcon icon={faRocket} className="mr-2" />
                    ابدأ الآن
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 font-bold rounded-xl border-2 ${darkMode ? 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10' : 'border-blue-500 text-blue-600 hover:bg-blue-50'} transition-all`}
                  >
                    <FontAwesomeIcon icon={faPhoneVolume} className="mr-2" />
                    تواصل معنا
                  </motion.button>
                </div>
                
                <p className={`mt-8 text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  ✨ لأن الوقت أغلى ما تملك، والراحة تستحق الاستثمار ✨
                </p>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Login/Signup Modal */}
        {(showLogin || showSignUp) && (
          <div 
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
                className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center ${
                  darkMode 
                    ? 'bg-blue-800/50 hover:bg-blue-700 text-blue-200' 
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                }`}
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                      Username
                    </label>
                    <div className="relative">
                      <FontAwesomeIcon 
                        icon={faUser} 
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} 
                      />
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg transition-all ${
                          darkMode 
                            ? 'bg-slate-800 border border-blue-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 text-white' 
                            : 'bg-white border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800'
                        }`}
                        placeholder="Enter your username"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                    Email
                  </label>
                  <div className="relative">
                    <FontAwesomeIcon 
                      icon={faEnvelope} 
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} 
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg transition-all ${
                        darkMode 
                          ? 'bg-slate-800 border border-blue-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 text-white' 
                          : 'bg-white border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800'
                      }`}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                    Password
                  </label>
                  <div className="relative">
                    <FontAwesomeIcon 
                      icon={faLock} 
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} 
                    />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-3 rounded-lg transition-all ${
                        darkMode 
                          ? 'bg-slate-800 border border-blue-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 text-white' 
                            : 'bg-white border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800'
                      }`}
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <FontAwesomeIcon 
                        icon={showPassword ? faEyeSlash : faEye} 
                        className={darkMode ? 'text-blue-400' : 'text-blue-500'} 
                      />
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                      Confirm Password
                    </label>
                    <div className="relative">
                      <FontAwesomeIcon 
                        icon={faLock} 
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} 
                      />
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg transition-all ${
                          darkMode 
                            ? 'bg-slate-800 border border-blue-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 text-white' 
                            : 'bg-white border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800'
                        }`}
                        placeholder="Confirm your password"
                        required={!isLogin}
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
                  {isLogin ? 'Login' : 'Sign Up'}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className={darkMode ? 'text-blue-300' : 'text-blue-700'}>
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    onClick={toggleForm}
                    className={`ml-2 font-semibold ${
                      darkMode ? 'text-cyan-300 hover:text-cyan-200' : 'text-blue-600 hover:text-blue-800'
                    }`}
                  >
                    {isLogin ? 'Sign Up' : 'Login'}
                  </button>
                </p>
              </div>
            </motion.div>
          </div>
        )}

        {/* Scroll to top button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ position: 'fixed', bottom: 40, right: 20, zIndex: 1000, width: 60, height: 60 }}
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
      </motion.div>
    </>
  );
}