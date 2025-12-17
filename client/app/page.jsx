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
  faWandMagicSparkles,
  faGripLinesVertical,
  faChevronRight,
  faBolt,
  faCrown,
  faGem,
  faRocket,
  faShieldAlt,
  faCheckCircle,
  faCreditCard,
  faGift,
  faClock,
  faUsers,
  faInfinity,
  faCloud,
  faMobileAlt,
  faHeadset,
  faFire,
  faTrophy,
  faChartLine,
  faGlobe,
  faDatabase,
  faKey,
  faBell,
  faPalette,
  faMagic,
  faSync,
  faShieldHeart,
  faHandshake,
  faAward,
  faCertificate,
  faBitcoinSign,
  faCoins
} from '@fortawesome/free-solid-svg-icons';

// Import PayPal from brands
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

import MyBody from './MyBody';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from './logo.png'; // Fixed import path

// Image Logo Component (Fixed)
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
      {/* Outer glow effect - keeping for image */}
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
      
      {/* Image logo instead of SVG - FIXED: Using imported logo */}
      <motion.div
        className="relative z-10 rounded-full overflow-hidden"
        style={{ width, height }}
        whileHover={{ scale: animated ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Use the imported logo variable */}
        <Image
          src={logo}  // FIXED: Using imported logo
          alt="TSRA Logo"
          width={width}
          height={height}
          className="object-cover rounded-full"
          priority
        />
      </motion.div>
      
      {/* Optional floating sparkles for animated version */}
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

// Full Logo with Text Component (Updated to use ImageLogo)
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
                    <span className="text-transparent">TSRA</span>
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

  // For intro/large variant
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
        
        {/* Pulsing rings */}
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
export default function Page() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [introComplete, setIntroComplete] = useState(false);
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

  // Premium Plans Data
  const premiumPlans = [
    {
      id: 'basic',
      name: 'Starter',
      price: { monthly: '$9.99', yearly: '$99.99' },
      originalPrice: { monthly: '$14.99', yearly: '$149.99' },
      description: 'Perfect for individuals starting out',
      features: [
        'Up to 10 projects',
        'Basic analytics dashboard',
        'Email support (48h response)',
        '5GB cloud storage',
        'Community forum access',
        'Basic templates',
        'Export to PDF/PNG',
        'Mobile responsive'
      ],
      popular: false,
      color: 'from-blue-400 to-cyan-400',
      icon: faRocket,
      badge: 'BEGINNER'
    },
    {
      id: 'pro',
      name: 'Professional',
      price: { monthly: '$19.99', yearly: '$199.99' },
      originalPrice: { monthly: '$29.99', yearly: '$299.99' },
      description: 'For professionals and small teams',
      features: [
        'Unlimited projects',
        'Advanced analytics & insights',
        'Priority support (24h response)',
        '50GB cloud storage',
        'Team collaboration (up to 5 members)',
        'Custom branding & templates',
        'API access & webhooks',
        'Advanced security features',
        'Custom domains',
        'White-label options',
        'Automated backups',
        'Advanced integrations'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500',
      icon: faGem,
      badge: 'MOST POPULAR'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: { monthly: '$49.99', yearly: '$499.99' },
      originalPrice: { monthly: '$79.99', yearly: '$799.99' },
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Unlimited team members',
        'Dedicated support manager',
        'Unlimited cloud storage',
        'SSO & SAML integration',
        'Custom development',
        'Advanced security & compliance',
        '24/7 phone & chat support',
        'Onboarding assistance',
        'Custom SLA agreements',
        'Advanced reporting suite',
        'Dedicated infrastructure'
      ],
      popular: false,
      color: 'from-orange-500 to-red-500',
      icon: faCrown,
      badge: 'ENTERPRISE'
    }
  ];

  const paymentMethods = [
    { 
      id: 'card', 
      name: 'Credit/Debit Card', 
      icon: faCreditCard, 
      color: 'text-blue-500',
      description: 'Visa, Mastercard, American Express'
    },
    { 
      id: 'paypal', 
      name: 'PayPal', 
      icon: faPaypal, 
      color: 'text-blue-700',
      description: 'Fast and secure payment'
    },
    { 
      id: 'crypto', 
      name: 'Cryptocurrency', 
      icon: faCoins, 
      color: 'text-yellow-500',
      description: 'Bitcoin, Ethereum, USDC'
    },
    { 
      id: 'bank', 
      name: 'Bank Transfer', 
      icon: faHandshake, 
      color: 'text-green-500',
      description: 'Wire transfer for enterprises'
    }
  ];

  const premiumFeatures = [
    {
      icon: faRocket,
      title: 'Priority Access',
      description: 'Get early access to new features and updates before everyone else'
    },
    {
      icon: faShieldAlt,
      title: 'Enhanced Security',
      description: 'Military-grade encryption and advanced security protocols'
    },
    {
      icon: faCloud,
      title: 'Unlimited Storage',
      description: 'Store all your projects without any storage limitations'
    },
    {
      icon: faUsers,
      title: 'Team Collaboration',
      description: 'Real-time collaboration with unlimited team members'
    },
    {
      icon: faMobileAlt,
      title: 'Mobile App',
      description: 'Full-featured mobile app for iOS and Android'
    },
    {
      icon: faHeadset,
      title: '24/7 Support',
      description: 'Round-the-clock customer support via chat, phone, and email'
    },
    {
      icon: faChartLine,
      title: 'Advanced Analytics',
      description: 'Deep insights and analytics for your projects'
    },
    {
      icon: faGlobe,
      title: 'Global CDN',
      description: 'Lightning-fast global content delivery network'
    },
    {
      icon: faDatabase,
      title: 'Daily Backups',
      description: 'Automated daily backups with 30-day retention'
    },
    {
      icon: faKey,
      title: 'API Access',
      description: 'Full API access for custom integrations'
    },
    {
      icon: faBell,
      title: 'Smart Notifications',
      description: 'Customizable notifications and alerts'
    },
    {
      icon: faPalette,
      title: 'Custom Branding',
      description: 'White-label solutions with your branding'
    }
  ];

  const specialOffers = [
    {
      title: '30-Day Free Trial',
      description: 'Try all premium features for 30 days, no credit card required',
      icon: faGift,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Annual Discount',
      description: 'Save 20% when you choose annual billing',
      icon: faFire,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Team Discount',
      description: 'Additional 10% discount for teams of 5+ members',
      icon: faUsers,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Money-Back Guarantee',
      description: '30-day money-back guarantee, no questions asked',
      icon: faShieldHeart,
      color: 'from-pink-500 to-rose-500'
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
    
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (!hasSeenIntro) {
      const timer = setTimeout(() => {
        setIntroComplete(true);
        sessionStorage.setItem('hasSeenIntro', 'true');
      }, 2300);
      
      return () => clearTimeout(timer);
    } else {
      setIntroComplete(true);
    }
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

  // Add custom scrollbar styles
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      /* Custom Scrollbar Styles */
      ::-webkit-scrollbar {
        width: 12px;
      }
      
      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 6px;
      }
      
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #22d3ee, #3b82f6, #a855f7);
        border-radius: 6px;
        border: 2px solid #f1f1f1;
      }
      
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #06b6d4, #2563eb, #9333ea);
      }
      
      /* Dark theme scrollbar */
      .dark-theme ::-webkit-scrollbar-track {
        background: #1e293b;
      }
      
      .dark-theme ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #22d3ee, #3b82f6, #a855f7);
        border: 2px solid #1e293b;
      }
      
      .dark-theme ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #06b6d4, #2563eb, #9333ea);
      }
      
      /* Firefox */
      * {
        scrollbar-width: thin;
        scrollbar-color: #22d3ee #f1f1f1;
      }
      
      .dark-theme * {
        scrollbar-color: #22d3ee #1e293b;
      }
      
      /* Smooth scrolling */
      html {
        scroll-behavior: smooth;
      }
      
      /* Gradient text utility */
      .gradient-text {
        background: linear-gradient(to right, #22d3ee, #3b82f6, #a855f7);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      /* Premium modal scrollbar */
      .premium-modal-scrollbar::-webkit-scrollbar {
        width: 8px;
      }
      
      .premium-modal-scrollbar::-webkit-scrollbar-track {
        background: transparent;
      }
      
      .premium-modal-scrollbar::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #fbbf24, #f59e0b, #ea580c);
        border-radius: 4px;
      }
      
      .premium-modal-scrollbar::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #f59e0b, #ea580c, #dc2626);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

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

  const handleSubscribe = async (planId) => {
    setIsProcessing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsProcessing(false);
    setShowPremiumModal(false);
    
    // Show success message
    const plan = premiumPlans.find(p => p.id === planId);
    alert(`🎉 Successfully subscribed to ${plan.name} plan!\n\nYou will receive a confirmation email shortly.`);
    
    // Reset selected plan
    setSelectedPlan('monthly');
    setPaymentMethod('card');
  };

  const handlePayment = () => {
    // Here you would integrate with actual payment gateway
    // For demo, we'll show a success message
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment processed successfully! Thank you for your subscription.');
      setShowPremiumModal(false);
    }, 2000);
  };

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
              <VyraFullLogo darkMode={darkMode} variant="intro" animated={true} />
              
              <div className="flex justify-center mt-10 space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                    className={`w-2 h-2 rounded-full ${
                      darkMode ? 'bg-cyan-400' : 'bg-blue-500'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
            
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: Math.random() * 100 + 'vw',
                    y: Math.random() * 100 + 'vh',
                    opacity: 0
                  }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    x: `calc(${Math.random() * 100}vw + ${Math.sin(i) * 100}px)`,
                    y: `calc(${Math.random() * 100}vh + ${Math.cos(i) * 100}px)`,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                  className={`absolute rounded-full ${
                    darkMode ? 'bg-cyan-400/10' : 'bg-blue-500/10'
                  }`}
                  style={{
                    width: Math.random() * 10 + 2,
                    height: Math.random() * 10 + 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Modal */}
      <AnimatePresence>
        {showPremiumModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
          >
            {/* Background particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20"
                  initial={{
                    x: Math.random() * 100 + 'vw',
                    y: Math.random() * 100 + 'vh',
                    scale: Math.random() * 0.5 + 0.5
                  }}
                  animate={{
                    x: `calc(${Math.random() * 100}vw + ${Math.sin(i) * 100}px)`,
                    y: `calc(${Math.random() * 100}vh + ${Math.cos(i) * 50}px)`,
                  }}
                  transition={{
                    duration: 10 + Math.random() * 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{
                    width: Math.random() * 20 + 5,
                    height: Math.random() * 20 + 5,
                  }}
                />
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ 
                type: "spring",
                damping: 20,
                stiffness: 300,
                mass: 0.8
              }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl premium-modal-scrollbar ${
                darkMode 
                  ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 border border-yellow-500/30' 
                  : 'bg-gradient-to-br from-white via-blue-50 to-purple-50 border border-yellow-400/30'
              }`}
            >
              {/* Close Button */}
              <motion.button
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => setShowPremiumModal(false)}
                className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center z-50 shadow-lg ${
                  darkMode 
                    ? 'bg-gradient-to-r from-red-500/90 to-orange-500/90 hover:from-red-600 hover:to-orange-600 text-white' 
                    : 'bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500 text-white'
                } transition-all duration-300 hover:scale-110`}
              >
                <FontAwesomeIcon icon={faTimes} className="text-lg" />
              </motion.button>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-8 left-8 text-4xl opacity-30"
              >
                <FontAwesomeIcon icon={faCrown} className="text-yellow-400" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0, 5, 0]
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-8 right-8 text-3xl opacity-30"
              >
                <FontAwesomeIcon icon={faGem} className="text-purple-400" />
              </motion.div>

              {/* Header */}
              <div className="p-8 text-center border-b border-opacity-20 border-yellow-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-pink-500/5"></div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="relative inline-block p-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 mb-6 shadow-xl"
                >
                  <FontAwesomeIcon icon={faCrown} className="text-white text-4xl" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent mb-4">
                    Premium Membership
                  </h2>
                  <p className={`text-xl ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                    Unlock exclusive features and supercharge your experience
                  </p>
                </motion.div>
              </div>

              {/* Features Grid */}
              <div className="p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center mb-10"
                >
                  <h3 className="text-3xl font-bold gradient-text mb-3">
                    Why Go Premium?
                  </h3>
                  <p className={`text-lg ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                    Get access to exclusive features that will transform your workflow
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {specialOffers.map((offer, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05, 
                        translateY: -5,
                        boxShadow: darkMode 
                          ? '0 20px 40px rgba(251, 191, 36, 0.2)'
                          : '0 20px 40px rgba(251, 191, 36, 0.3)'
                      }}
                      className={`p-6 rounded-2xl backdrop-blur-sm border bg-gradient-to-r ${offer.color} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white/10"></div>
                      <div className="relative">
                        <div className="inline-block p-3 rounded-xl bg-white/20 mb-4">
                          <FontAwesomeIcon 
                            icon={offer.icon} 
                            className="text-white text-xl" 
                          />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{offer.title}</h4>
                        <p className="text-white/90">{offer.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Detailed Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {premiumFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      whileHover={{ 
                        scale: 1.03,
                        backgroundColor: darkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.8)'
                      }}
                      className={`p-6 rounded-2xl backdrop-blur-sm border ${
                        darkMode 
                          ? 'bg-blue-900/20 border-blue-700/30 hover:border-yellow-500/50' 
                          : 'bg-white/50 border-blue-200/50 hover:border-yellow-400/50'
                      } transition-all duration-300 group`}
                    >
                      <div className="flex items-start mb-4">
                        <div className={`p-3 rounded-xl mr-4 ${
                          darkMode ? 'bg-blue-800/30 group-hover:bg-yellow-500/20' : 'bg-blue-100 group-hover:bg-yellow-100'
                        } transition-colors duration-300`}>
                          <FontAwesomeIcon 
                            icon={feature.icon} 
                            className={`text-xl ${
                              darkMode ? 'text-cyan-300 group-hover:text-yellow-300' : 'text-blue-600 group-hover:text-yellow-600'
                            } transition-colors duration-300`} 
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-1 group-hover:gradient-text transition-all duration-300">
                            {feature.title}
                          </h4>
                          <p className={`${darkMode ? 'text-blue-300/80' : 'text-blue-700/80'} text-sm`}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pricing Plans */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mb-12"
                >
                  <div className="flex flex-col items-center mb-8">
                    <h3 className="text-3xl font-bold gradient-text mb-6">
                      Choose Your Plan
                    </h3>
                    
                    <div className={`inline-flex p-1 rounded-2xl backdrop-blur-sm ${
                      darkMode ? 'bg-blue-800/30' : 'bg-blue-100/50'
                    } border ${darkMode ? 'border-blue-700/50' : 'border-blue-300'}`}>
                      {['monthly', 'yearly'].map((period) => (
                        <motion.button
                          key={period}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedPlan(period)}
                          className={`px-8 py-3 rounded-xl font-semibold transition-all relative overflow-hidden ${
                            selectedPlan === period
                              ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                              : darkMode
                                ? 'text-blue-300 hover:text-white hover:bg-blue-700/20'
                                : 'text-blue-600 hover:text-blue-800 hover:bg-blue-100'
                          }`}
                        >
                          {selectedPlan === period && (
                            <motion.div
                              layoutId="planSelection"
                              className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                          <span className="relative z-10 flex items-center">
                            {period === 'yearly' && (
                              <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs mr-2 ${
                                darkMode ? 'bg-green-600/30 text-green-300' : 'bg-green-100 text-green-700'
                              }`}>
                                <FontAwesomeIcon icon={faFire} className="mr-1" />
                                Save 20%
                              </span>
                            )}
                            {period.charAt(0).toUpperCase() + period.slice(1)} Billing
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {premiumPlans.map((plan, index) => (
                      <motion.div
                        key={plan.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + index * 0.2 }}
                        whileHover={{ 
                          scale: plan.popular ? 1.03 : 1.02,
                          boxShadow: plan.popular 
                            ? darkMode 
                              ? '0 25px 50px rgba(168, 85, 247, 0.3)'
                              : '0 25px 50px rgba(168, 85, 247, 0.2)'
                            : darkMode
                              ? '0 15px 30px rgba(0, 0, 0, 0.3)'
                              : '0 15px 30px rgba(0, 0, 0, 0.1)'
                        }}
                        className={`relative rounded-3xl p-8 border-2 ${
                          plan.popular
                            ? darkMode
                              ? 'border-yellow-500/50 bg-gradient-to-b from-slate-800 via-purple-900/20 to-slate-900/30'
                              : 'border-yellow-400 bg-gradient-to-b from-white via-purple-50 to-blue-50'
                            : darkMode
                              ? 'border-blue-700/30 bg-slate-800/30'
                              : 'border-blue-200 bg-white/70'
                        } transition-all duration-300 h-full flex flex-col`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center">
                              <FontAwesomeIcon icon={faTrophy} className="mr-2" />
                              {plan.badge}
                            </div>
                          </div>
                        )}

                        <div className="text-center mb-6 flex-grow">
                          <div className={`inline-block p-4 rounded-2xl mb-4 bg-gradient-to-r ${plan.color} shadow-lg`}>
                            <FontAwesomeIcon icon={plan.icon} className="text-white text-3xl" />
                          </div>
                          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                          <p className={`mb-6 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                            {plan.description}
                          </p>

                          <div className="mb-4">
                            <div className="flex items-baseline justify-center mb-2">
                              <span className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                {plan.price[selectedPlan]}
                              </span>
                              <span className="ml-2 text-lg opacity-70">
                                /{selectedPlan === 'monthly' ? 'month' : 'year'}
                            </span>
                            </div>
                            <div className="text-sm line-through opacity-60">
                              {plan.originalPrice[selectedPlan]}
                            </div>
                            {selectedPlan === 'yearly' && (
                              <p className={`text-sm mt-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                                <FontAwesomeIcon icon={faFire} className="mr-1" />
                                Save ${(parseFloat(plan.originalPrice.yearly.replace('$', '')) - parseFloat(plan.price.yearly.replace('$', '')))} annually
                              </p>
                            )}
                          </div>

                          <ul className="space-y-3 mb-6 text-left">
                            {plan.features.map((feature, idx) => (
                              <motion.li 
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 + index * 0.1 + idx * 0.05 }}
                                className="flex items-start"
                              >
                                <FontAwesomeIcon 
                                  icon={faCheckCircle} 
                                  className={`mt-1 mr-3 flex-shrink-0 ${
                                    darkMode ? 'text-green-400' : 'text-green-500'
                                  }`} 
                                />
                                <span className={darkMode ? 'text-blue-200' : 'text-blue-800'}>
                                  {feature}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <motion.button
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: plan.popular
                              ? '0 10px 30px rgba(251, 191, 36, 0.4)'
                              : '0 10px 20px rgba(0, 0, 0, 0.2)'
                          }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleSubscribe(plan.id)}
                          disabled={isProcessing}
                          className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 relative overflow-hidden group ${
                            plan.popular
                              ? 'bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 hover:from-yellow-500 hover:via-orange-500 hover:to-pink-600 text-white shadow-xl'
                              : darkMode
                                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white'
                                : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white'
                          }`}
                        >
                          {isProcessing ? (
                            <span className="flex items-center justify-center">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                              />
                              Processing...
                            </span>
                          ) : (
                            <>
                              <span className="relative z-10 flex items-center justify-center">
                                Get Started Now
                                <FontAwesomeIcon icon={faChevronRight} className="ml-2 group-hover:translate-x-1 transition-transform" />
                              </span>
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.6 }}
                              />
                            </>
                          )}
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Payment Methods */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className={`rounded-3xl p-8 mb-8 ${
                    darkMode ? 'bg-blue-900/20' : 'bg-blue-50/50'
                  } border ${darkMode ? 'border-blue-700/30' : 'border-blue-200'}`}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold gradient-text mb-3">
                      Secure Payment Methods
                    </h3>
                    <p className={`${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                      Choose your preferred payment method
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {paymentMethods.map((method) => (
                      <motion.button
                        key={method.id}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ 
                          scale: 1.03,
                          backgroundColor: darkMode ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.9)'
                        }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`p-6 rounded-2xl border-2 flex flex-col items-center justify-center space-y-3 transition-all relative overflow-hidden ${
                          paymentMethod === method.id
                            ? darkMode
                              ? 'border-yellow-500 bg-gradient-to-r from-yellow-500/10 to-orange-500/10'
                              : 'border-yellow-400 bg-gradient-to-r from-yellow-400/10 to-orange-400/10'
                            : darkMode
                              ? 'border-blue-700/30 hover:border-yellow-500/50'
                              : 'border-blue-200 hover:border-yellow-400'
                        }`}
                      >
                        <div className={`p-3 rounded-xl ${paymentMethod === method.id ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : darkMode ? 'bg-blue-800/30' : 'bg-blue-100'}`}>
                          <FontAwesomeIcon 
                            icon={method.icon} 
                            className={`text-2xl ${paymentMethod === method.id ? 'text-white' : method.color}`} 
                          />
                        </div>
                        <div>
                          <span className="font-bold text-lg block">{method.name}</span>
                          <span className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            {method.description}
                          </span>
                        </div>
                        {paymentMethod === method.id && (
                          <motion.div
                            layoutId="paymentSelection"
                            className="absolute bottom-2 right-2"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          >
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </div>

                  {/* Payment Form */}
                  {paymentMethod === 'card' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className={`mt-6 p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white/70'}`}
                    >
                      <h4 className="text-xl font-bold mb-4">Enter Card Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Card Number"
                          className={`p-3 rounded-lg ${darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300'}`}
                        />
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className={`p-3 rounded-lg ${darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300'}`}
                        />
                        <input
                          type="text"
                          placeholder="CVC"
                          className={`p-3 rounded-lg ${darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300'}`}
                        />
                        <input
                          type="text"
                          placeholder="Cardholder Name"
                          className={`p-3 rounded-lg ${darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300'}`}
                        />
                      </div>
                    </motion.div>
                  )}

                  <div className="text-center mt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handlePayment}
                      disabled={isProcessing}
                      className={`px-8 py-4 rounded-xl font-bold text-lg ${
                        isProcessing 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                      } text-white shadow-lg transition-all`}
                    >
                      {isProcessing ? (
                        <span className="flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                          />
                          Processing Payment...
                        </span>
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faLock} className="mr-2" />
                          Complete Secure Payment
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="flex flex-wrap justify-center items-center gap-8 mb-6"
                >
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-green-500 text-xl mr-2" />
                    <span className={darkMode ? 'text-blue-300' : 'text-blue-600'}>SSL Secure</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faAward} className="text-yellow-500 text-xl mr-2" />
                    <span className={darkMode ? 'text-blue-300' : 'text-blue-600'}>Trusted by 10K+ Users</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCertificate} className="text-blue-500 text-xl mr-2" />
                    <span className={darkMode ? 'text-blue-300' : 'text-blue-600'}>Money-Back Guarantee</span>
                  </div>
                </motion.div>
              </div>

              {/* Footer */}
              <div className={`p-6 text-center border-t ${
                darkMode ? 'border-blue-800/30' : 'border-blue-200/50'
              }`}>
                <p className={`mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                  <FontAwesomeIcon icon={faShieldAlt} className="mr-2 text-green-500" />
                  256-bit SSL encryption • 30-day money-back guarantee • Cancel anytime
                </p>
                <p className={`text-sm opacity-70 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>
                  All prices in USD. Taxes may apply. By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              darkMode ? 'bg-blue-400/10' : 'bg-blue-500/5'
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 0.5, delay: introComplete ? 0 : 0.5 }}
        className={introComplete ? 'block' : 'hidden'}
      >
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
                  transition={{ duration: 0.5, delay: introComplete ? 0.5 : 0 }}
                >
                  <VyraFullLogo darkMode={darkMode} variant="header" animated={true} />
                </motion.div>

                <nav className="hidden md:flex items-center space-x-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: introComplete ? 0.7 + (index * 0.1) : 0 }}
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
                    transition={{ duration: 0.5, delay: introComplete ? 1.2 : 0 }}
                    className={`w-px h-6 ${
                      darkMode ? 'bg-blue-700/30' : 'bg-blue-300/50'
                    }`}
                  ></motion.div>
                  
                  <div className="flex items-center space-x-3">
                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: introComplete ? 1.3 : 0 }}
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
                      transition={{ duration: 0.3, delay: introComplete ? 1.4 : 0 }}
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
                      
                      {/* Animated ring effect */}
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
                      
                      {/* Sparkle effect */}
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
                      
                      {/* Tooltip */}
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
                      transition={{ duration: 0.3, delay: introComplete ? 1.5 : 0 }}
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
                      transition={{ duration: 0.3, delay: introComplete ? 1.6 : 0 }}
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
                  transition={{ duration: 0.3, delay: introComplete ? 0.6 : 0 }}
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

        <div
          className={`${
            darkMode
              ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-stone-50'
              : 'bg-gradient-to-br from-stone-50 via-stone-100 to-blue-50 text-slate-900'
          } min-h-screen transition-all duration-500 pt-16`}
          style={{
            minHeight: "1780px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: darkMode ? "#334155" : "#d6d3d1"
          }}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: introComplete ? 2 : 0 }}
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

          <MyBody darkMode={darkMode} fontMode={fontMode} />
        </div>
      </motion.div>
    </>
  );
}