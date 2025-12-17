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
  faCheckCircle,
  faWrench,
  faPlug,
  faBuilding,
  faPaintRoller,
  faHammer,
  faCogs,
  faTree,
  faDesktop,
  faCar,
  faSearch,
  faPlus,
  faComment,
  faShare,
  faCheck,
  faUserTie,
  faFilter,
  faSort,
  faFireAlt,
  faBookmark,
  faPaperPlane,
  faThumbsUp,
  faReply,
  faEllipsisH,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../logo.png';

// Enhanced Image Logo Component
const ImageLogo = ({ darkMode, size = 'normal', animated = true }) => {
  const dimensions = {
    normal: { width: 48, height: 48 },
    large: { width: 96, height: 96 },
    small: { width: 36, height: 36 }
  };

  const { width, height } = dimensions[size];

  return (
    <motion.div
      className="relative"
      animate={animated ? {
        rotate: [0, 5, 0, -5, 0],
      } : {}}
      transition={animated ? {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      } : {}}
    >
      <motion.div
        animate={animated ? {
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4]
        } : {}}
        transition={animated ? {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        } : {}}
        className={`absolute -inset-3 rounded-full ${
          darkMode 
            ? 'bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30' 
            : 'bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30'
        } blur-xl`}
      />
      
      <motion.div
        className="relative z-10 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl"
        style={{ width, height }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image
          src={logo}
          alt="TSRA Logo"
          width={width}
          height={height}
          className="object-cover"
          priority
        />
      </motion.div>
      
      {animated && (
        <>
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 z-20"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 z-20"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.4, 0.9, 0.4]
            }}
            transition={{
              duration: 2.5,
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

// Enhanced Full Logo
const VyraFullLogo = ({ darkMode, variant = 'header', animated = true }) => {
  if (variant === 'header') {
    return (
      <div className="flex items-center space-x-4">
        <Link href="/">
          <motion.div 
            className="flex items-center space-x-4 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
          >
            <ImageLogo darkMode={darkMode} size="normal" animated={animated} />
            
            <div className="flex flex-col">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-2xl font-bold">
                  <span className="relative">
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                      animate={animated ? {
                        backgroundPosition: ["0%", "200%"],
                      } : {}}
                      transition={animated ? {
                        duration: 4,
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
                  className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full mt-2 opacity-80"
                  animate={animated ? {
                    scaleX: [0.8, 1.1, 0.8],
                  } : {}}
                  transition={animated ? {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  } : {}}
                />
              </motion.div>
              
              <motion.p
                className="text-sm opacity-70 tracking-wider font-light mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Community
              </motion.p>
            </div>
          </motion.div>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="relative mb-8"
        animate={animated ? {
          scale: [1, 1.08, 1],
          rotate: [0, 5, 0, -5, 0]
        } : {}}
        transition={animated ? {
          scale: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          },
          rotate: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        } : {}}
      >
        <ImageLogo darkMode={darkMode} size="large" animated={animated} />
        
        {animated && (
          <>
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-cyan-400/40"
              animate={{
                scale: [1, 1.6, 2.2],
                opacity: [0.6, 0.3, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl border border-purple-400/30"
              animate={{
                scale: [1, 2, 2.8],
                opacity: [0.4, 0.2, 0]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.7
              }}
            />
          </>
        )}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          <span className="relative">
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={animated ? {
                backgroundPosition: ["0%", "200%"],
              } : {}}
              transition={animated ? {
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              } : {}}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              COMMUNITY
            </motion.span>
            <span className="text-transparent">COMMUNITY</span>
          </span>
        </h1>
        
        <motion.div
          className="h-1.5 w-64 mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full mb-6"
          animate={animated ? {
            scaleX: [0.7, 1.1, 0.7],
          } : {}}
          transition={animated ? {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          } : {}}
        />
        
        <motion.p
          className="text-2xl opacity-90 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Connect, Learn & Grow Together
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};

// Beautiful Header Component
const BeautifulHeader = ({ 
  darkMode, 
  setDarkMode, 
  activeLink, 
  setActiveLink, 
  setMobileMenuOpen, 
  mobileMenuOpen, 
  setShowLogin, 
  setShowSignUp 
}) => {
  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'community', label: 'Community', href: '/community' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      darkMode ? 'bg-slate-900/80 backdrop-blur-xl' : 'bg-white/80 backdrop-blur-xl'
    } border-b ${
      darkMode ? 'border-cyan-900/30' : 'border-blue-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <VyraFullLogo darkMode={darkMode} variant="header" animated={true} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setActiveLink(item.id)}
                  className={`relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeLink === item.id
                      ? darkMode
                        ? 'text-white bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20'
                        : 'text-blue-700 bg-gradient-to-r from-cyan-100 via-blue-100 to-purple-100'
                      : darkMode
                        ? 'text-blue-300 hover:text-white hover:bg-slate-800/50'
                        : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50'
                  }`}
                >
                  {activeLink === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                      layoutId="activeIndicator"
                    />
                  )}
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-lg relative overflow-hidden ${
                darkMode
                  ? 'bg-gradient-to-br from-blue-800/30 to-cyan-800/30 hover:from-blue-700/40 hover:to-cyan-700/40 text-yellow-300 border border-cyan-500/30'
                  : 'bg-gradient-to-br from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 text-blue-700 border border-blue-300'
              }`}
            >
              {/* Animated background glow */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute inset-0 rounded-xl ${
                  darkMode ? 'bg-yellow-400/10' : 'bg-blue-500/10'
                }`}
              />
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-lg relative z-10" />
            </motion.button>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLogin(true)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all shadow-lg relative overflow-hidden group ${
                  darkMode
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                    : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white'
                }`}
              >
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative z-10 flex items-center">
                  <FontAwesomeIcon icon={faSignInAlt} className="ml-3" />
                  دخول
                </span>
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSignUp(true)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all shadow-lg relative overflow-hidden group ${
                  darkMode
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white'
                    : 'bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white'
                }`}
              >
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative z-10 flex items-center">
                  <FontAwesomeIcon icon={faUserPlus} className="ml-3" />
                  تسجيل
                </span>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-lg relative overflow-hidden ${
              darkMode
                ? 'bg-gradient-to-br from-blue-800/30 to-cyan-800/30 hover:from-blue-700/40 hover:to-cyan-700/40 text-blue-300 border border-cyan-500/30'
                : 'bg-gradient-to-br from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 text-blue-700 border border-blue-300'
            }`}
          >
            <motion.div
              animate={{
                rotate: mobileMenuOpen ? 180 : 0,
                scale: mobileMenuOpen ? 0.9 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-lg" />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden overflow-hidden mt-2 mb-4 rounded-2xl ${
                darkMode ? 'bg-slate-800/95' : 'bg-white/95'
              } backdrop-blur-xl border ${
                darkMode ? 'border-cyan-900/30' : 'border-blue-100'
              } shadow-2xl`}
            >
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        setActiveLink(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`block px-4 py-4 rounded-xl transition-all ${
                        activeLink === item.id
                          ? darkMode
                            ? 'bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 text-white'
                            : 'bg-gradient-to-r from-cyan-100 via-blue-100 to-purple-100 text-blue-700'
                          : darkMode
                            ? 'text-blue-300 hover:bg-slate-700/50'
                            : 'text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{item.label}</span>
                        {activeLink === item.id && (
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
                
                <div className="pt-4 border-t border-blue-500/20 space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setDarkMode(!darkMode);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full px-4 py-4 rounded-xl flex items-center justify-center transition-all ${
                      darkMode
                        ? 'bg-gradient-to-r from-blue-800/30 to-cyan-800/30 hover:from-blue-700/40 hover:to-cyan-700/40 text-yellow-300'
                        : 'bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 text-blue-700'
                    }`}
                  >
                    <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="ml-3" />
                    {darkMode ? 'الوضع الفاتح' : 'الوضع الداكن'}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowLogin(true);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full px-4 py-4 rounded-xl font-semibold transition-all ${
                      darkMode
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                        : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white'
                    }`}
                  >
                    <FontAwesomeIcon icon={faSignInAlt} className="ml-3" />
                    دخول
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowSignUp(true);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full px-4 py-4 rounded-xl font-semibold transition-all ${
                      darkMode
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white'
                        : 'bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white'
                    }`}
                  >
                    <FontAwesomeIcon icon={faUserPlus} className="ml-3" />
                    تسجيل
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

// Categories array
const categories = [
  { id: 'all', name: 'الكل', icon: faQuestionCircle, count: 156, color: 'from-blue-500 to-cyan-500' },
  { id: 'plumbing', name: 'السباكة', icon: faWrench, count: 24, color: 'from-cyan-500 to-blue-500' },
  { id: 'electricity', name: 'الكهرباء', icon: faPlug, count: 18, color: 'from-yellow-500 to-orange-500' },
  { id: 'construction', name: 'البناء', icon: faBuilding, count: 32, color: 'from-orange-500 to-red-500' },
  { id: 'painting', name: 'الدهان', icon: faPaintRoller, count: 15, color: 'from-purple-500 to-pink-500' },
  { id: 'carpentry', name: 'النجارة', icon: faHammer, count: 21, color: 'from-amber-600 to-amber-800' },
  { id: 'mechanics', name: 'الميكانيك', icon: faCogs, count: 28, color: 'from-gray-600 to-gray-800' },
  { id: 'gardening', name: 'الحدائق', icon: faTree, count: 12, color: 'from-green-500 to-emerald-500' },
  { id: 'technology', name: 'التكنولوجيا', icon: faDesktop, count: 45, color: 'from-blue-500 to-indigo-500' },
  { id: 'automotive', name: 'السيارات', icon: faCar, count: 19, color: 'from-red-500 to-pink-500' }
];

// Enhanced Community Card Component
const CommunityCard = ({ question, darkMode, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const categoryColors = {
    plumbing: { from: 'from-cyan-500', to: 'to-blue-500', bg: 'bg-cyan-500/10' },
    electricity: { from: 'from-yellow-500', to: 'to-orange-500', bg: 'bg-yellow-500/10' },
    construction: { from: 'from-orange-500', to: 'to-red-500', bg: 'bg-orange-500/10' },
    painting: { from: 'from-purple-500', to: 'to-pink-500', bg: 'bg-purple-500/10' },
    automotive: { from: 'from-red-500', to: 'to-pink-500', bg: 'bg-red-500/10' },
    technology: { from: 'from-blue-500', to: 'to-indigo-500', bg: 'bg-blue-500/10' },
    gardening: { from: 'from-green-500', to: 'to-emerald-500', bg: 'bg-green-500/10' },
    carpentry: { from: 'from-amber-600', to: 'to-amber-800', bg: 'bg-amber-600/10' },
    mechanics: { from: 'from-gray-600', to: 'to-gray-800', bg: 'bg-gray-600/10' }
  };

  const categoryColor = categoryColors[question.category] || categoryColors.plumbing;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
      className={`relative rounded-3xl overflow-hidden group cursor-pointer border ${
        darkMode 
          ? 'border-slate-700/50 bg-gradient-to-br from-slate-800/60 to-slate-900/60' 
          : 'border-blue-100/50 bg-gradient-to-br from-white to-blue-50'
      } shadow-lg hover:shadow-2xl transition-all duration-500`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor.from} ${categoryColor.to} opacity-5`} />
      
      {/* Animated Glow Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 p-8">
        <div className="flex items-start space-x-6 rtl:space-x-reverse">
          {/* Votes Section */}
          <div className="flex flex-col items-center min-w-[80px]">
            <motion.button
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className={`p-3 rounded-xl mb-2 transition-all duration-300 ${
                isLiked
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : darkMode 
                    ? 'bg-slate-700/50 hover:bg-slate-600' 
                    : 'bg-blue-100 hover:bg-blue-200'
              }`}
            >
              <FontAwesomeIcon 
                icon={isLiked ? faThumbsUp : faArrowUp} 
                className="text-xl" 
              />
            </motion.button>
            <div className={`text-3xl font-bold my-2 transition-all duration-300 ${
              isLiked ? 'text-blue-400' : darkMode ? 'text-blue-300' : 'text-blue-600'
            }`}>
              {question.votes + (isLiked ? 1 : 0)}
            </div>
            <div className="text-sm opacity-75 mb-6">تصويت</div>
            
            <div className={`p-4 rounded-xl mb-4 w-full text-center transition-all duration-300 ${
              question.solved 
                ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30' 
                : darkMode 
                  ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30' 
                  : 'bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-300'
            }`}>
              <div className="text-2xl font-bold">{question.answersCount}</div>
              <div className="text-sm">إجابة</div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center mb-4 flex-wrap gap-3">
                  {/* Category Badge */}
                  <span className={`px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r ${categoryColor.from} ${categoryColor.to} text-white shadow-lg`}>
                    {categories.find(c => c.id === question.category)?.name}
                  </span>
                  
                  {question.urgency === 'high' && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm rounded-lg flex items-center shadow-lg"
                    >
                      <FontAwesomeIcon icon={faFireAlt} className="ml-2 animate-pulse" />
                      عاجل
                    </motion.span>
                  )}
                  
                  {question.solved && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm rounded-lg flex items-center shadow-lg"
                    >
                      <FontAwesomeIcon icon={faCheckCircle} className="ml-2" />
                      محلول
                    </motion.span>
                  )}
                  
                  {question.expertAnswer && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm rounded-lg flex items-center shadow-lg"
                    >
                      <FontAwesomeIcon icon={faUserTie} className="ml-2" />
                      إجابة خبير
                    </motion.span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 leading-tight">{question.title}</h3>
                
                <p className={`text-lg leading-relaxed mb-6 transition-all duration-500 ${
                  isExpanded ? 'opacity-90' : 'opacity-80'
                }`}>
                  {question.content}
                  {!isExpanded && question.content.length > 150 && (
                    <span className="text-blue-400 cursor-pointer mr-2"> ...المزيد</span>
                  )}
                </p>
                
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6"
                  >
                    <div className={`p-6 rounded-xl ${
                      darkMode ? 'bg-slate-800/50' : 'bg-blue-50'
                    }`}>
                      <h4 className="font-bold mb-3 flex items-center">
                        <FontAwesomeIcon icon={faLightbulb} className="ml-2 text-yellow-500" />
                        تفاصيل إضافية
                      </h4>
                      <p className="opacity-90">هنا يمكن إضافة المزيد من التفاصيل حول المشكلة والحلول المقترحة...</p>
                    </div>
                  </motion.div>
                )}
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {question.tags.map((tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                        darkMode ? 'bg-slate-700/50 text-blue-300' : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col space-y-3 ml-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsBookmarked(!isBookmarked);
                  }}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    isBookmarked
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                      : darkMode 
                        ? 'bg-slate-700/50 hover:bg-slate-600' 
                        : 'bg-blue-100 hover:bg-blue-200'
                  }`}
                >
                  <FontAwesomeIcon 
                    icon={faBookmark} 
                    className={isBookmarked ? 'text-white' : darkMode ? 'text-blue-400' : 'text-blue-500'} 
                  />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                  className={`p-3 rounded-xl transition-all ${
                    darkMode 
                      ? 'bg-slate-700/50 hover:bg-slate-600' 
                      : 'bg-blue-100 hover:bg-blue-200'
                  }`}
                >
                  <FontAwesomeIcon icon={faShare} className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
                </motion.button>
              </div>
            </div>
            
            {/* Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-blue-500/20">
              <div className="flex items-center">
                {/* User Avatar */}
                <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center mr-4 overflow-hidden ${
                  darkMode ? 'bg-gradient-to-br from-slate-700 to-slate-800' : 'bg-gradient-to-br from-blue-100 to-cyan-100'
                }`}>
                  <FontAwesomeIcon 
                    icon={faUser} 
                    className={`${darkMode ? 'text-blue-400' : 'text-blue-500'}`} 
                  />
                  {question.userRole === 'محترف' && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400" />
                  )}
                </div>
                
                <div>
                  <div className="font-bold flex items-center">
                    {question.user}
                    {question.userRole === 'محترف' && (
                      <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500 text-sm" />
                    )}
                  </div>
                  <div className="text-sm opacity-75">{question.userRole}</div>
                </div>
                
                <span className="mx-4 opacity-30">•</span>
                
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faClock} className="ml-2 opacity-75" />
                  <span className="opacity-75">{question.timestamp}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  className={`px-5 py-2.5 rounded-lg text-sm flex items-center transition-all ${
                    question.solved
                      ? 'bg-green-500/20 text-green-400'
                      : darkMode
                        ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  }`}
                >
                  <FontAwesomeIcon icon={faCheck} className="ml-2" />
                  {question.solved ? 'تم الحل' : 'علام كمحلول'}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  className={`px-5 py-2.5 rounded-lg text-sm flex items-center ${
                    darkMode 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white' 
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white'
                  }`}
                >
                  <FontAwesomeIcon icon={faReply} className="ml-2" />
                  أضف إجابة
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced Category Card Component
const CategoryCard = ({ category, darkMode, isActive, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative p-6 rounded-2xl transition-all duration-500 group overflow-hidden ${
        isActive
          ? darkMode 
            ? `bg-gradient-to-r ${category.color} shadow-2xl` 
            : `bg-gradient-to-r ${category.color} shadow-2xl`
          : darkMode
            ? 'bg-slate-800/50 hover:bg-slate-700/50'
            : 'bg-white hover:bg-blue-50'
      }`}
    >
      {/* Animated background gradient for active state */}
      {isActive && (
        <>
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{
              background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)`,
              backgroundSize: '200% 200%',
            }}
          />
          <motion.div
            className="absolute -inset-1 opacity-20"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent blur-md" />
          </motion.div>
        </>
      )}
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Icon Container */}
        <div className={`p-4 rounded-xl mb-4 transition-all duration-300 ${
          isActive 
            ? 'bg-white/20 backdrop-blur-sm' 
            : darkMode 
              ? 'bg-slate-700/50 group-hover:bg-slate-600/50' 
              : 'bg-blue-100 group-hover:bg-blue-200'
        }`}>
          <FontAwesomeIcon 
            icon={category.icon} 
            className={`text-2xl transition-all duration-300 ${
              isActive 
                ? 'text-white' 
                : darkMode 
                  ? 'text-blue-400 group-hover:text-blue-300' 
                  : 'text-blue-500 group-hover:text-blue-600'
            }`} 
          />
        </div>
        
        {/* Text Content */}
        <div className={`font-bold mb-2 transition-all duration-300 ${
          isActive ? 'text-white' : darkMode ? 'text-blue-300' : 'text-blue-700'
        }`}>
          {category.name}
        </div>
        
        <div className={`text-sm transition-all duration-300 ${
          isActive ? 'text-white/80' : darkMode ? 'text-blue-400/70' : 'text-blue-600/70'
        }`}>
          {category.count} سؤال
        </div>
      </div>
      
      {/* Hover effect dots */}
      {!isActive && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-400/30"
              style={{
                top: `${20 + i * 30}%`,
                left: '10%',
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      )}
    </motion.button>
  );
};

// Interactive Statistics Component
const StatisticsSection = ({ darkMode }) => {
  const [statistics, setStatistics] = useState({
    questions: 1256,
    answers: 5892,
    experts: 128,
    satisfaction: 94
  });

  const [animatedValues, setAnimatedValues] = useState({
    questions: 0,
    answers: 0,
    experts: 0,
    satisfaction: 0
  });

  const [isInView, setIsInView] = useState(false);

  // Animate counting effect
  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 frames
    const stepDuration = duration / steps;

    const startAnimation = (targetValue, key) => {
      let current = 0;
      const step = targetValue / steps;
      const interval = setInterval(() => {
        current += step;
        if (current >= targetValue) {
          current = targetValue;
          clearInterval(interval);
        }
        setAnimatedValues(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    };

    startAnimation(statistics.questions, 'questions');
    startAnimation(statistics.answers, 'answers');
    startAnimation(statistics.experts, 'experts');
    startAnimation(statistics.satisfaction, 'satisfaction');
  }, [isInView]);

  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    { 
      key: 'questions', 
      label: 'أسئلة', 
      icon: faQuestionCircle, 
      iconColor: 'from-blue-500 to-cyan-500',
      numberColor: 'from-blue-400 to-cyan-400',
      suffix: '+',
      description: 'سؤال تم طرحه في مختلف المجالات',
      trend: '▲ 12% هذا الشهر'
    },
    { 
      key: 'answers', 
      label: 'إجابات', 
      icon: faComment, 
      iconColor: 'from-green-500 to-emerald-500',
      numberColor: 'from-green-400 to-emerald-400',
      suffix: '+',
      description: 'إجابة مكتوبة من قبل الخبراء',
      trend: '▲ 23% هذا الشهر'
    },
    { 
      key: 'experts', 
      label: 'خبراء', 
      icon: faUserTie, 
      iconColor: 'from-purple-500 to-pink-500',
      numberColor: 'from-purple-400 to-pink-400',
      suffix: '+',
      description: 'خبير نشط يقدم الحلول',
      trend: '▲ 8% هذا الشهر'
    },
    { 
      key: 'satisfaction', 
      label: 'رضا العملاء', 
      icon: faStar, 
      iconColor: 'from-yellow-500 to-orange-500',
      numberColor: 'from-yellow-400 to-orange-400',
      suffix: '%',
      description: 'معدل رضا المستخدمين عن الحلول',
      trend: '▲ 5% هذا الشهر'
    },
  ];

  const handleHover = (statKey) => {
    setHoveredStat(statKey);
    
    // Simulate real-time updates on hover
    if (statKey === 'questions') {
      setStatistics(prev => ({
        ...prev,
        questions: prev.questions + Math.floor(Math.random() * 10) + 1
      }));
    }
  };

  const handleClick = (statKey) => {
    // Animate bounce effect on click
    const element = document.getElementById(`stat-${statKey}`);
    if (element) {
      element.classList.add('animate-bounce');
      setTimeout(() => element.classList.remove('animate-bounce'), 1000);
    }
    
    // Show notification
    if (typeof window !== 'undefined') {
      const stat = stats.find(s => s.key === statKey);
      alert(`إحصائيات ${stat.label}: ${animatedValues[statKey]}${stat.suffix}\n${stat.description}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      onViewportEnter={() => setIsInView(true)}
      className={`mb-20 p-8 md:p-12 rounded-3xl ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50' 
          : 'bg-gradient-to-br from-white/50 to-blue-50/50'
      } backdrop-blur-sm border ${
        darkMode ? 'border-cyan-500/20' : 'border-blue-200'
      } shadow-2xl relative overflow-hidden`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-500/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Refresh button */}
      <motion.button
        whileHover={{ rotate: 180, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsInView(false);
          setTimeout(() => setIsInView(true), 100);
        }}
        className={`absolute top-6 left-6 w-10 h-10 rounded-full flex items-center justify-center z-10 ${
          darkMode 
            ? 'bg-slate-700/50 hover:bg-slate-600/50 text-blue-400' 
            : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
        }`}
      >
        <FontAwesomeIcon icon={faSync} />
      </motion.button>

      <h2 className="text-3xl font-bold mb-12 text-center relative">
        <span className="relative inline-block">
          إحصائيات المجتمع
          <motion.div
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-full"
            animate={{
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </span>
        <div className="text-sm opacity-70 mt-2 font-normal">
          آخر تحديث: الآن
        </div>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.key}
            id={`stat-${stat.key}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring" }}
            whileHover={{ scale: 1.05, y: -5 }}
            onMouseEnter={() => handleHover(stat.key)}
            onMouseLeave={() => setHoveredStat(null)}
            onClick={() => handleClick(stat.key)}
            className={`text-center group cursor-pointer relative p-6 rounded-2xl transition-all duration-300 ${
              hoveredStat === stat.key
                ? darkMode
                  ? 'bg-gradient-to-br from-slate-700/50 to-slate-800/50 shadow-xl'
                  : 'bg-gradient-to-br from-white to-blue-100 shadow-xl'
                : ''
            }`}
          >
            {/* Hover effect glow */}
            {hoveredStat === stat.key && (
              <motion.div
                className="absolute inset-0 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  background: `radial-gradient(circle at center, ${darkMode ? 'rgba(56, 189, 248, 0.1)' : 'rgba(56, 189, 248, 0.05)'} 0%, transparent 70%)`,
                }}
              />
            )}

            {/* Icon with pulse animation */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${stat.iconColor} mb-4 shadow-lg relative`}
            >
              <FontAwesomeIcon icon={stat.icon} className="text-white text-2xl" />
              
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Animated number with counting effect */}
            <div className="relative">
              <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.numberColor} bg-clip-text text-transparent`}>
                {animatedValues[stat.key].toLocaleString()}
                <span className="text-2xl">{stat.suffix}</span>
              </div>
              
              {/* Counter animation indicator */}
              {isInView && animatedValues[stat.key] > 0 && animatedValues[stat.key] < statistics[stat.key] && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 animate-ping"
                />
              )}
            </div>

            <div className="text-lg font-semibold mb-2">{stat.label}</div>
            
            {/* Dynamic description */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: hoveredStat === stat.key ? 1 : 0,
                height: hoveredStat === stat.key ? 'auto' : 0
              }}
              className="text-sm opacity-80 overflow-hidden"
            >
              {stat.description}
            </motion.div>

            {/* Trend indicator */}
            <div className={`text-xs mt-2 px-3 py-1 rounded-full inline-block ${
              stat.trend.includes('▲') 
                ? darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'
                : darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-600'
            }`}>
              {stat.trend}
            </div>

            {/* Live indicator for questions */}
            {stat.key === 'questions' && (
              <motion.div
                animate={{
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex items-center justify-center mt-2 space-x-2"
              >
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="text-xs opacity-70">مباشر</div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Interactive controls */}
      <div className="flex flex-wrap gap-4 justify-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            // Increase all stats by 10%
            setStatistics(prev => ({
              questions: Math.floor(prev.questions * 1.1),
              answers: Math.floor(prev.answers * 1.1),
              experts: Math.floor(prev.experts * 1.05),
              satisfaction: Math.min(prev.satisfaction + 1, 100)
            }));
          }}
          className={`px-6 py-3 rounded-xl flex items-center gap-2 ${
            darkMode
              ? 'bg-blue-900/30 hover:bg-blue-800/30 text-blue-400'
              : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
          }`}
        >
          <FontAwesomeIcon icon={faChartLine} />
          <span>محاكاة النمو</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            // Reset to initial values
            setStatistics({
              questions: 1256,
              answers: 5892,
              experts: 128,
              satisfaction: 94
            });
          }}
          className={`px-6 py-3 rounded-xl flex items-center gap-2 ${
            darkMode
              ? 'bg-slate-800/50 hover:bg-slate-700/50 text-slate-400'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
          }`}
        >
          <FontAwesomeIcon icon={faSync} />
          <span>إعادة التعيين</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            // Export stats
            const statsText = stats.map(stat => 
              `${stat.label}: ${animatedValues[stat.key]}${stat.suffix}`
            ).join('\n');
            alert(`الإحصائيات الحالية:\n\n${statsText}`);
          }}
          className={`px-6 py-3 rounded-xl flex items-center gap-2 ${
            darkMode
              ? 'bg-green-900/30 hover:bg-green-800/30 text-green-400'
              : 'bg-green-100 hover:bg-green-200 text-green-600'
          }`}
        >
          <FontAwesomeIcon icon={faDownload} />
          <span>تصدير الإحصائيات</span>
        </motion.button>
      </div>

      {/* Progress bar showing overall growth */}
      <div className="mt-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm opacity-70">نمو المجتمع</span>
          <span className="text-sm font-semibold">
            {Math.floor((animatedValues.questions + animatedValues.answers + animatedValues.experts) / 100)}%
          </span>
        </div>
        <div className={`h-2 rounded-full overflow-hidden ${
          darkMode ? 'bg-slate-700' : 'bg-gray-200'
        }`}>
          <motion.div
            className={`h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500`}
            initial={{ width: 0 }}
            animate={{ 
              width: `${Math.floor((animatedValues.questions + animatedValues.answers + animatedValues.experts) / 100)}%`
            }}
            transition={{ duration: 2 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
export default function BeautifulCommunityPage() {
  const [darkMode, setDarkMode] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('community');
  const [activeCategory, setActiveCategory] = useState('all');
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showAskForm, setShowAskForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [filterOpen, setFilterOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const pathname = usePathname();

  // Sample questions
  const initialQuestions = [
    {
      id: 1,
      title: 'كيفية تركيب بلاط الحمام بطريقة صحيحة؟',
      content: 'أريد تركيب بلاط جديد للحمام، ما هي الخطوات الصحيحة لضمان عدم تسرب المياه؟ أعاني من مشكلة التسريب في الحمام القديم وأريد تجنبها في التركيب الجديد.',
      category: 'plumbing',
      user: 'أحمد محمد',
      userRole: 'مبتدئ',
      timestamp: 'منذ 3 ساعات',
      votes: 24,
      answersCount: 8,
      views: 156,
      solved: true,
      expertAnswer: true,
      tags: ['سباكة', 'حمام', 'بلاط', 'مقاوم للماء', 'تركيب'],
      urgency: 'high'
    },
    {
      id: 2,
      title: 'مشكلة في كهرباء المطبخ تتوقف فجأة',
      content: 'الكهرباء في المطبخ تتوقف فجأة ثم تعود، خاصة عند استخدام الفرن الكهربائي أو الغسالة. ما السبب والحل المناسب؟',
      category: 'electricity',
      user: 'سارة علي',
      userRole: 'رب منزل',
      timestamp: 'منذ 5 ساعات',
      votes: 18,
      answersCount: 12,
      views: 203,
      solved: false,
      expertAnswer: true,
      tags: ['كهرباء', 'مطبخ', 'أعطال', 'سلامة', 'فرن كهربائي'],
      urgency: 'high'
    },
    {
      id: 3,
      title: 'أفضل نوع دهان للمناطق الرطبة مثل الحمام',
      content: 'أي نوع من الدهان ينصح به للحمامات والمناطق الرطبة لضمان المتانة وعدم التشقق مع مرور الوقت؟',
      category: 'painting',
      user: 'محمد الخبير',
      userRole: 'محترف',
      timestamp: 'منذ يوم',
      votes: 32,
      answersCount: 15,
      views: 289,
      solved: true,
      expertAnswer: true,
      tags: ['دهان', 'حمام', 'رطوبة', 'متانة', 'نصائح'],
      urgency: 'medium'
    },
    {
      id: 4,
      title: 'كيفية إصلاح الباب الخشبي المتشقق',
      content: 'لدي باب خشبي قديم به تشققات كبيرة، ما هي أفضل طريقة لإصلاحه مع الحفاظ على مظهره الطبيعي؟',
      category: 'carpentry',
      user: 'علي النجار',
      userRole: 'محترف',
      timestamp: 'منذ يومين',
      votes: 42,
      answersCount: 21,
      views: 367,
      solved: true,
      expertAnswer: true,
      tags: ['نجارة', 'أبواب', 'خشب', 'إصلاح', 'تشققات'],
      urgency: 'medium'
    },
  ];

  useEffect(() => {
    const savedDark = localStorage.getItem('darkMode');
    setDarkMode(savedDark ? JSON.parse(savedDark) : true);
    
    const currentPath = pathname;
    if (currentPath === '/') setActiveLink('home');
    else if (currentPath === '/about') setActiveLink('about');
    else if (currentPath === '/community') setActiveLink('community');
    else if (currentPath === '/contact') setActiveLink('contact');
    
    setQuestions(initialQuestions);
  }, [pathname]);

  useEffect(() => {
    if (darkMode !== null) {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
      
      if (darkMode) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.backgroundColor = '#0f172a';
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.backgroundColor = '#f8fafc';
      }
    }
  }, [darkMode]);

  // Load more questions function
  const loadMoreQuestions = () => {
    setLoading(true);
    setTimeout(() => {
      const newQuestions = [
        ...questions,
        {
          id: questions.length + 1,
          title: 'كيفية تركيب نظام ري للحديقة المنزلية',
          content: 'أرغب في تركيب نظام ري أوتوماتيكي للحديقة المنزلية، ما هي المكونات الأساسية وكيفية التخطيط له؟',
          category: 'gardening',
          user: 'مزارع مبتدئ',
          userRole: 'مستخدم',
          timestamp: 'منذ 6 ساعات',
          votes: 15,
          answersCount: 7,
          views: 89,
          solved: false,
          expertAnswer: false,
          tags: ['حديقة', 'ري', 'أوتوماتيكي', 'نباتات'],
          urgency: 'low'
        },
        {
          id: questions.length + 2,
          title: 'مشكلة في محرك السيارة عند التشغيل البارد',
          content: 'سيارتي تواجه صعوبة في التشغيل عند الطقس البارد، وتصدر صوتاً غريباً، ما هو السبب المحتمل؟',
          category: 'automotive',
          user: 'مالك سيارة',
          userRole: 'مبتدئ',
          timestamp: 'منذ 8 ساعات',
          votes: 27,
          answersCount: 14,
          views: 198,
          solved: true,
          expertAnswer: true,
          tags: ['سيارات', 'محرك', 'تشغيل', 'إصلاح'],
          urgency: 'medium'
        }
      ];
      setQuestions(newQuestions);
      setLoading(false);
    }, 1000);
  };

  if (darkMode === null) return null;

  return (
    <>
      {/* Beautiful Header */}
      <BeautifulHeader 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
        setShowLogin={setShowLogin}
        setShowSignUp={setShowSignUp}
      />

      {/* Main Content */}
      <div className={`min-h-screen pt-20 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950' : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-white'}`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${darkMode ? 'rgba(56, 189, 248, 0.05)' : 'rgba(56, 189, 248, 0.03)'} 0%, transparent 70%)`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className={`p-8 rounded-3xl inline-block ${
                darkMode 
                  ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50' 
                  : 'bg-gradient-to-br from-white/50 to-blue-50/50'
              } backdrop-blur-sm border ${
                darkMode ? 'border-cyan-500/20' : 'border-blue-200'
              } shadow-2xl`}>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    مجتمع المهنيين
                  </span>
                </h1>
                <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
                  اكتشف حلولاً عملية من خبراء مختصين في مختلف المجالات التقنية والعملية
                </p>
              </div>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAskForm(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all"
              >
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative z-10 flex items-center">
                  <FontAwesomeIcon icon={faPlus} className="ml-3" />
                  اطرح سؤالاً جديداً
                </span>
              </motion.button>
              
              <div className={`px-8 py-4 rounded-xl border backdrop-blur-sm ${
                darkMode ? 'border-cyan-500/30 bg-slate-800/30 text-cyan-400' : 'border-blue-300 bg-white/50 text-blue-600'
              }`}>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faUsers} className="animate-pulse" />
                  <span className="font-semibold">1,256 عضو نشط</span>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Categories Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">التصنيفات</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  darkMode={darkMode}
                  isActive={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                />
              ))}
            </div>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`mb-12 rounded-2xl p-2 ${
              darkMode 
                ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50' 
                : 'bg-gradient-to-br from-white to-blue-50'
            } shadow-2xl`}
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <FontAwesomeIcon 
                  icon={faSearch} 
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-xl ${
                    darkMode ? 'text-cyan-400' : 'text-blue-500'
                  }`} 
                />
                <input
                  type="text"
                  placeholder="ابحث عن استفسار أو مشكلة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full p-4 pr-12 rounded-xl text-lg border transition-all ${
                    darkMode 
                      ? 'bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                />
              </div>
              
              {/* Filter and Sort Buttons */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilterOpen(!filterOpen)}
                  className={`px-6 py-4 rounded-xl flex items-center gap-3 ${
                    darkMode 
                      ? 'bg-slate-800/50 hover:bg-slate-700/50' 
                      : 'bg-blue-100 hover:bg-blue-200'
                  }`}
                >
                  <FontAwesomeIcon icon={faFilter} className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
                  <span>تصفية</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSortBy(sortBy === 'recent' ? 'popular' : 'recent')}
                  className={`px-6 py-4 rounded-xl flex items-center gap-3 ${
                    darkMode 
                      ? 'bg-slate-800/50 hover:bg-slate-700/50' 
                      : 'bg-blue-100 hover:bg-blue-200'
                  }`}
                >
                  <FontAwesomeIcon icon={faSort} className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
                  <span>{sortBy === 'recent' ? 'الأحدث' : 'الأكثر شعبية'}</span>
                </motion.button>
              </div>
            </div>
            
            {/* Filter Options */}
            {filterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['محلول', 'غير محلول', 'عاجل', 'إجابات خبير'].map((filter, idx) => (
                    <motion.button
                      key={filter}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-2 rounded-lg text-sm ${
                        darkMode ? 'bg-slate-700/50' : 'bg-white/50'
                      }`}
                    >
                      {filter}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Questions List */}
          <div className="space-y-8 mb-12">
            {questions.map((question, index) => (
              <CommunityCard
                key={question.id}
                question={question}
                darkMode={darkMode}
                index={index}
              />
            ))}
          </div>

          {/* Load More Button */}
          {questions.length > 0 && (
            <div className="text-center mb-20">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={loadMoreQuestions}
                disabled={loading}
                className={`px-8 py-4 rounded-xl font-semibold ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : darkMode
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
                } text-white shadow-lg`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="mr-3"
                    >
                      <FontAwesomeIcon icon={faSync} />
                    </motion.div>
                    جاري التحميل...
                  </span>
                ) : (
                  'تحميل المزيد من الأسئلة'
                )}
              </motion.button>
            </div>
          )}

          {/* Interactive Statistics Section */}
          <StatisticsSection darkMode={darkMode} />
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl ${
              darkMode 
                ? 'bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700' 
                : 'bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
            }`}
          >
            <FontAwesomeIcon icon={faArrowUp} className="text-white text-xl" />
          </motion.button>
          
          {/* Ask Question Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowAskForm(true)}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600`}
          >
            <FontAwesomeIcon icon={faPlus} className="text-white text-xl" />
          </motion.button>
        </div>
      </div>
    </>
  );
}