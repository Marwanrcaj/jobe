'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, faPlus, faSearch, faEnvelope, faPhone, faBriefcase, 
  faTimes, faUserPlus, faLocationDot, faGraduationCap,
  faBuilding, faStar, faHeart, faFilter, faSort, faCheck, 
  faCrown, faChartLine, faAward, faCertificate, faGlobe,
  faNetworkWired, faHandshake, faRocket, faLightbulb,
  faFire, faMagic, faWandSparkles, faBolt
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faBehance, faDribbble, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styled, { keyframes, css } from 'styled-components';

/* ------------------------------------
   DYNAMIC ICON ANIMATIONS
------------------------------------ */
const pulseGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px currentColor,
                0 0 40px currentColor,
                0 0 60px currentColor;
  }
  50% { 
    box-shadow: 0 0 10px currentColor,
                0 0 20px currentColor,
                0 0 30px currentColor;
  }
`;

const rotate3d = keyframes`
  0% { transform: rotateY(0deg) rotateX(0deg); }
  25% { transform: rotateY(90deg) rotateX(10deg); }
  50% { transform: rotateY(180deg) rotateX(0deg); }
  75% { transform: rotateY(270deg) rotateX(10deg); }
  100% { transform: rotateY(360deg) rotateX(0deg); }
`;

const floatBounce = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(-5deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
  75% { transform: translateY(-20px) rotate(-5deg); }
`;

const spin3D = keyframes`
  0% { transform: rotateY(0deg) scale(1); }
  50% { transform: rotateY(180deg) scale(1.1); }
  100% { transform: rotateY(360deg) scale(1); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

/* ------------------------------------
   ANIMATED SOCIAL ICONS
------------------------------------ */
const AnimatedIconContainer = styled(motion.div)`
  position: relative;
  display: inline-block;
  
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      ${props => props.color1 || '#2563eb'},
      ${props => props.color2 || '#3b82f6'},
      ${props => props.color3 || '#60a5fa'},
      ${props => props.color2 || '#3b82f6'},
      ${props => props.color1 || '#2563eb'}
    );
    z-index: 0;
    animation: ${rotate3d} 4s linear infinite;
    opacity: 0.5;
    filter: blur(8px);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: ${props => props.color1 || '#2563eb'};
    border-right-color: ${props => props.color2 || '#3b82f6'};
    border-bottom-color: ${props => props.color3 || '#60a5fa'};
    border-left-color: ${props => props.color2 || '#3b82f6'};
    animation: ${rotate3d} 3s linear infinite reverse;
    opacity: 0.7;
  }
`;

const AnimatedIcon = styled(motion.a)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.gradient || 'linear-gradient(135deg, #2563eb, #3b82f6)'};
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 1;
  overflow: hidden;
  animation: ${floatBounce} 4s ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.3) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 100;
  }
  
  .icon-inner {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  
  .sparkle {
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    animation: ${pulseGlow} 2s ease-in-out infinite;
    opacity: 0;
    
    &:nth-child(1) { top: 5px; left: 5px; animation-delay: 0s; }
    &:nth-child(2) { top: 5px; right: 5px; animation-delay: 0.2s; }
    &:nth-child(3) { bottom: 5px; left: 5px; animation-delay: 0.4s; }
    &:nth-child(4) { bottom: 5px; right: 5px; animation-delay: 0.6s; }
  }
  
  &:hover {
    animation: none;
    transform: scale(1.2) rotate(360deg);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    
    &::before {
      opacity: 1;
      animation: ${gradientShift} 2s linear infinite;
    }
    
    &::after {
      opacity: 1;
    }
    
    .sparkle {
      opacity: 1;
    }
    
    .icon-inner {
      animation: ${spin3D} 1s ease-in-out;
    }
  }
`;

/* ------------------------------------
   SIMPLE TITLE WITHOUT ANIMATION
------------------------------------ */
const SimpleTitle = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
  .main-title {
    font-size: 3.5rem;
    font-weight: 800;
    letter-spacing: -0.5px;
    margin-bottom: 15px;
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: #64748b;
    font-weight: 400;
    margin-bottom: 20px;
  }
`;

/* ------------------------------------
   ANIMATED COUNTER FOR STATISTICS
------------------------------------ */
const AnimatedCounter = ({ value, isDecimal = false, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = isDecimal ? parseFloat(value) : parseInt(value);
    const incrementTime = (duration * 1000) / end;

    const timer = setInterval(() => {
      start += isDecimal ? 0.1 : 1;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, incrementTime / 10);

    return () => clearInterval(timer);
  }, [inView, value, isDecimal, duration]);

  return (
    <span ref={ref} className="animated-number">
      {isDecimal ? count.toFixed(1) : count}
    </span>
  );
};

/* ------------------------------------
   ANIMATED STATISTICS CARD
------------------------------------ */
const AnimatedStatsCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['$darkMode'].includes(prop),
})`
  background: ${props => props.$darkMode ? 'rgba(30, 41, 59, 0.9)' : 'rgba(255, 255, 255, 0.95)'};
  border-radius: 16px;
  padding: 24px;
  border: 1px solid ${props => props.$darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2563eb, #7c3aed);
    background-size: 200% 200%;
    animation: ${gradientShift} 3s ease infinite;
  }
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 8px;
    color: #2563eb;
    font-family: 'Inter', sans-serif;
  }
  
  .stat-label {
    font-size: 0.875rem;
    color: ${props => props.$darkMode ? '#94a3b8' : '#64748b'};
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .stat-icon {
    width: 40px;
    height: 40px;
    background: ${props => props.$darkMode ? 'rgba(37, 99, 235, 0.1)' : 'rgba(37, 99, 235, 0.05)'};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2563eb;
    margin: 0 auto 15px;
    font-size: 18px;
    transition: all 0.3s ease;
  }
  
  &:hover {
    .stat-icon {
      transform: scale(1.2) rotate(15deg);
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      color: white;
      animation: ${pulseGlow} 1s ease-in-out;
    }
    
    .stat-number {
      animation: ${floatBounce} 0.5s ease;
    }
  }
`;

/* ------------------------------------
   ANIMATED PROFESSIONAL CARD
------------------------------------ */
const AnimatedProfessionalCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['$darkMode', '$favorite'].includes(prop),
})`
  width: 380px;
  background: ${props => props.$darkMode ? 'rgba(30, 41, 59, 0.9)' : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 25px;
  border: 1px solid ${props => props.$darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2563eb, #7c3aed);
    background-size: 200% 200%;
    animation: ${gradientShift} 3s ease infinite;
  }
  
  .floating-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    animation: ${floatBounce} 3s ease-in-out infinite;
    
    &.verified {
      background: rgba(16, 185, 129, 0.1);
      color: #10b981;
      border: 1px solid rgba(16, 185, 129, 0.2);
    }
    
    &.premium {
      background: rgba(245, 158, 11, 0.1);
      color: #f59e0b;
      border: 1px solid rgba(245, 158, 11, 0.2);
    }
  }
  
  .avatar-container {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    
    .avatar-ring {
      position: absolute;
      top: -8px;
      left: -8px;
      right: -8px;
      bottom: -8px;
      border-radius: 50%;
      border: 2px solid transparent;
      border-top-color: #2563eb;
      border-right-color: #3b82f6;
      border-bottom-color: #7c3aed;
      border-left-color: #60a5fa;
      animation: ${rotate3d} 3s linear infinite;
    }
    
    .avatar {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 32px;
      position: relative;
      z-index: 1;
      transition: all 0.3s ease;
    }
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
                0 0 60px rgba(37, 99, 235, 0.1);
    
    .avatar {
      transform: scale(1.1) rotate(10deg);
    }
    
    .floating-badge {
      animation: ${floatBounce} 1s ease-in-out infinite;
    }
  }
  
  .card-header {
    text-align: center;
    margin-bottom: 20px;
    
    h3 {
      font-size: 22px;
      font-weight: 700;
      margin: 0 0 5px 0;
      color: ${props => props.$darkMode ? '#f8fafc' : '#1e293b'};
      transition: all 0.3s ease;
    }
    
    .title {
      font-size: 16px;
      font-weight: 600;
      color: #2563eb;
      margin: 0 0 5px 0;
    }
    
    .company {
      font-size: 14px;
      color: ${props => props.$darkMode ? '#94a3b8' : '#64748b'};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
  }
  
  .info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 20px;
    
    .info-item {
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateX(5px);
        
        .icon {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          color: white;
          animation: ${pulseGlow} 1s ease;
        }
      }
      
      .icon {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: ${props => props.$darkMode ? 'rgba(37, 99, 235, 0.1)' : 'rgba(37, 99, 235, 0.05)'};
        display: flex;
        align-items: center;
        justify-content: center;
        color: #2563eb;
        font-size: 14px;
        transition: all 0.3s ease;
      }
      
      .info-content {
        flex: 1;
        
        .label {
          font-size: 11px;
          color: ${props => props.$darkMode ? '#94a3b8' : '#64748b'};
          margin-bottom: 2px;
        }
        
        .value {
          font-size: 13px;
          font-weight: 500;
          color: ${props => props.$darkMode ? '#f8fafc' : '#1e293b'};
        }
      }
    }
  }
  
  .skills {
    margin-bottom: 20px;
    
    .skills-title {
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 8px;
      color: ${props => props.$darkMode ? '#cbd5e1' : '#475569'};
    }
    
    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      
      .skill {
        padding: 5px 10px;
        background: ${props => props.$darkMode ? 'rgba(37, 99, 235, 0.1)' : 'rgba(37, 99, 235, 0.05)'};
        border: 1px solid rgba(37, 99, 235, 0.2);
        border-radius: 15px;
        font-size: 11px;
        font-weight: 500;
        color: #2563eb;
        cursor: pointer;
        transition: all 0.3s ease;
        
        &:hover {
          background: #2563eb;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
        }
      }
    }
  }
  
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    border-top: 1px solid ${props => props.$darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
    
    .rating {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #f59e0b;
      font-weight: 600;
      font-size: 14px;
      transition: all 0.3s ease;
      
      &:hover {
        transform: scale(1.1);
        
        svg {
          animation: ${floatBounce} 0.5s ease;
        }
      }
    }
    
    .actions {
      display: flex;
      gap: 8px;
      
      button {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
        
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: 0.5s;
        }
        
        &.favorite {
          background: ${props => props.$favorite ? 'rgba(239, 68, 68, 0.2)' : 
                      (props.$darkMode ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.05)')};
          color: ${props => props.$favorite ? '#ef4444' : (props.$darkMode ? '#94a3b8' : '#64748b')};
          
          &:hover {
            background: rgba(239, 68, 68, 0.2);
            color: #ef4444;
            transform: scale(1.2) rotate(360deg);
            
            &::before {
              left: 100%;
            }
          }
          
          &.active {
            animation: ${pulseGlow} 0.5s ease;
          }
        }
        
        &.connect {
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          
          &:hover {
            transform: scale(1.2);
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.5);
            
            &::before {
              left: 100%;
            }
          }
        }
      }
    }
  }
`;

/* ------------------------------------
   ANIMATED SEARCH COMPONENT - FIXED
------------------------------------ */
const AnimatedSearchContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 30px auto;
  position: relative;
  
  .search-wrapper {
    position: relative;
    
    input {
      width: 100%;
      padding: 16px 24px;
      padding-right: 160px;
      font-size: 16px;
      border-radius: 15px;
      border: 2px solid transparent;
      background: ${props => props.$darkMode ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.9)'};
      color: ${props => props.$darkMode ? '#fff' : '#000'};
      transition: all 0.3s ease;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      
      &:focus {
        outline: none;
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1),
                    0 10px 30px rgba(37, 99, 235, 0.2);
        animation: ${pulseGlow} 2s infinite;
      }
    }
    
    .search-button {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      color: white;
      border: none;
      border-radius: 10px;
      padding: 10px 20px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      animation: ${floatBounce} 3s ease-in-out infinite;
      
      &:hover {
        transform: translateY(-50%) scale(1.1);
        animation: none;
        box-shadow: 0 0 30px rgba(37, 99, 235, 0.5);
        
        svg {
          animation: ${spin3D} 0.5s ease;
        }
      }
    }
  }
  
  .search-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 15px;
    
    .filter-tag {
      padding: 8px 16px;
      background: ${props => props.$darkMode ? 'rgba(37, 99, 235, 0.1)' : 'rgba(37, 99, 235, 0.05)'};
      border: 1px solid rgba(37, 99, 235, 0.2);
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      color: #2563eb;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        transition: 0.5s;
      }
      
      &:hover {
        background: ${props => props.$darkMode ? 'rgba(37, 99, 235, 0.2)' : 'rgba(37, 99, 235, 0.1)'};
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 5px 15px rgba(37, 99, 235, 0.2);
        
        &::before {
          left: 100%;
        }
      }
      
      &.active {
        background: #2563eb;
        color: white;
        border-color: #2563eb;
        animation: ${pulseGlow} 2s ease-in-out infinite;
        
        &:hover {
          animation: none;
        }
      }
    }
  }
`;

const AnimatedSearch = ({ darkMode, children }) => {
  return (
    <AnimatedSearchContainer $darkMode={darkMode}>
      {children}
    </AnimatedSearchContainer>
  );
};

/* ------------------------------------
   ANIMATED ADD BUTTON
------------------------------------ */
const AnimatedAddButton = styled(motion.button)`
  padding: 12px 24px;
  background: linear-gradient(135deg, #2563eb, #7c3aed, #d946ef);
  background-size: 200% 200%;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px auto;
  position: relative;
  overflow: hidden;
  animation: ${gradientShift} 3s ease infinite, ${floatBounce} 4s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: 0.5s;
  }
  
  &:hover {
    animation: none;
    transform: scale(1.1);
    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3),
                0 0 60px rgba(124, 58, 237, 0.2);
    
    &::before {
      left: 100%;
    }
    
    svg {
      animation: ${spin3D} 0.5s ease;
    }
  }
`;

/* ------------------------------------
   MAIN COMPONENT - CORRECTED: ALWAYS SHOW ANIMATIONS
------------------------------------ */
export default function ProfessionalNetwork({ darkMode, fontMode }) {
  const [visible, setVisible] = useState(6);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState('all');

  const [newPerson, setNewPerson] = useState({
    name: "",
    email: "",
    phone: "",
    job: "",
    company: "",
    location: "",
    education: "",
    skills: "",
    experience: ""
  });
// Replace the professional with id 1 (Ahmed El Fassi) with Hany Deals
const [data, setData] = useState([
  {
    id: 1,
    name: "Mohamed El Banna",
    email: "mohamed.banna@construction.com",
    phone: "+212 600 11 22 33",
    job: "Builder",
    company: "El Banna Constructions",
    location: "Casablanca",
    education: "Building Institute",
    skills: ["Construction Supervision", "Project Management", "Civil Engineering"],
    experience: "15 years",
    rating: 4.7,
    verified: true,
    premium: false,
    favorite: false
  },
  {
    id: 2,
    name: "Youssef Najjar",
    email: "youssef.najjar@woodwork.com",
    phone: "+212 600 44 55 66",
    job: "Carpenter",
    company: "Najjar Woodworks",
    location: "Rabat",
    education: "Technical School of Woodwork",
    skills: ["General Carpentry", "Furniture Making", "Woodworking"],
    experience: "10 years",
    rating: 4.8,
    verified: true,
    premium: true,
    favorite: true
  },
  {
    id: 3,
    name: "Khadija Sabagh",
    email: "khadija.sabagh@painting.com",
    phone: "+212 600 77 88 99",
    job: "Painter",
    company: "Sabagh Painting Services",
    location: "Marrakech",
    education: "Art & Design School",
    skills: ["Interior Painting", "Building Painting", "Decorative Finishes"],
    experience: "8 years",
    rating: 4.6,
    verified: true,
    premium: false,
    favorite: false
  },
  {
    id: 4,
    name: "Amine Kharraz",
    email: "amine.kharraz@electric.com",
    phone: "+212 600 22 33 44",
    job: "Electrician",
    company: "Kharraz Electrics",
    location: "Fes",
    education: "Technical School of Electricity",
    skills: ["Building Electricity", "Device Maintenance", "Electrical Systems Installation"],
    experience: "12 years",
    rating: 4.7,
    verified: true,
    premium: false,
    favorite: true
  },
  {
    id: 5,
    name: "Salma Idrissi",
    email: "salma.idrissi@plumbing.com",
    phone: "+212 600 12 11 22",
    job: "Plumber",
    company: "Idrissi Plumbing",
    location: "Fes",
    education: "Technical School of Plumbing",
    skills: ["Plumbing Works", "Pipe Repair", "Water System Maintenance"],
    experience: "9 years",
    rating: 4.7,
    verified: true,
    premium: false,
    favorite: false
  },
  {
    id: 6,
    name: "Rachid Haddou",
    email: "rachid.haddou@metalwork.com",
    phone: "+212 600 33 44 55",
    job: "Blacksmith",
    company: "Haddou Metalworks",
    location: "Tangier",
    education: "Technical Metal School",
    skills: ["Metal Works", "Doors & Windows", "Metal Fabrication"],
    experience: "12 years",
    rating: 4.8,
    verified: true,
    premium: true,
    favorite: false
  },
  {
    id: 7,
    name: "Fatima Lamrini",
    email: "fatima.lamrini@flooring.com",
    phone: "+212 600 55 66 77",
    job: "Floor Installer",
    company: "Lamrini Floors",
    location: "Marrakech",
    education: "Technical School of Flooring",
    skills: ["Tile Installation", "Ceramic Installation", "Marble Installation"],
    experience: "10 years",
    rating: 4.7,
    verified: true,
    premium: false,
    favorite: true
  },
  {
    id: 8,
    name: "Yassine Fassi",
    email: "yassine.fassi@painting.com",
    phone: "+212 600 66 77 88",
    job: "Exterior Painter",
    company: "Fassi Exterior Painting",
    location: "Casablanca",
    education: "Art & Design School",
    skills: ["Exterior Painting", "Wall Coating", "Facade Finishing"],
    experience: "11 years",
    rating: 4.6,
    verified: true,
    premium: false,
    favorite: false
  },
  {
    id: 9,
    name: "Adil Merzouki",
    email: "adil.merzouki@auto.com",
    phone: "+212 600 77 88 99",
    job: "Auto Mechanic",
    company: "Merzouki Auto Repair",
    location: "Rabat",
    education: "Technical School of Mechanics",
    skills: ["Car Maintenance", "Engine Repair", "Fault Diagnosis"],
    experience: "13 years",
    rating: 4.8,
    verified: true,
    premium: true,
    favorite: true
  },
  {
    id: 10,
    name: "Amine Haddad",
    email: "amine.haddad@fitness.com",
    phone: "+212 600 88 99 00",
    job: "Sports Coach",
    company: "Haddad Fitness Center",
    location: "Casablanca",
    education: "Bachelor of Sports Science",
    skills: ["Fitness Training", "Sports Coaching", "Team Training"],
    experience: "7 years",
    rating: 4.9,
    verified: true,
    premium: true,
    favorite: true
  },
  {
    id: 11,
    name: "Sara Bennis",
    email: "sara.bennis@gardening.com",
    phone: "+212 600 99 00 11",
    job: "Gardener",
    company: "Bennis Gardens",
    location: "Marrakech",
    education: "Horticulture School",
    skills: ["Garden Design", "Garden Maintenance", "Plant Coordination"],
    experience: "8 years",
    rating: 4.7,
    verified: true,
    premium: false,
    favorite: false
  }
]);


  const handleAddPerson = () => {
    if (!newPerson.name.trim()) return;
    const newId = Math.max(...data.map(d => d.id)) + 1;
    setData(prev => [
      {
        id: newId,
        ...newPerson,
        skills: newPerson.skills.split(',').map(s => s.trim()),
        rating: 4.0,
        verified: false,
        premium: false,
        favorite: false
      },
      ...prev
    ]);
    setNewPerson({
      name: "",
      email: "",
      phone: "",
      job: "",
      company: "",
      location: "",
      education: "",
      skills: "",
      experience: ""
    });
    setShowForm(false);
  };

  const toggleFavorite = (id) => {
    setData(prev =>
      prev.map(item =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  const filteredData = data.filter(item => {
    const matchesSearch = search === "" || 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.job.toLowerCase().includes(search.toLowerCase()) ||
      item.company.toLowerCase().includes(search.toLowerCase()) ||
      item.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase()));
    
    const matchesFilter = 
      activeFilter === 'all' ? true :
      activeFilter === 'premium' ? item.premium :
      activeFilter === 'verified' ? item.verified :
      activeFilter === 'favorites' ? item.favorite :
      true;
    
    return matchesSearch && matchesFilter;
  });

  const animatedSocialIcons = [
    { 
      icon: faLinkedin, 
      gradient: 'linear-gradient(135deg, #0077b5, #00a0dc)',
      tooltip: 'LinkedIn Network',
      delay: '0s',
      colors: ['#0077b5', '#00a0dc', '#0091da']
    },
    { 
      icon: faGithub, 
      gradient: 'linear-gradient(135deg, #333, #6e5494)',
      tooltip: 'GitHub Portfolio',
      delay: '0.2s',
      colors: ['#333', '#6e5494', '#4078c0']
    },
    { 
      icon: faDribbble, 
      gradient: 'linear-gradient(135deg, #ea4c89, #c32361)',
      tooltip: 'Design Portfolio',
      delay: '0.4s',
      colors: ['#ea4c89', '#c32361', '#ff4088']
    },
    { 
      icon: faBehance, 
      gradient: 'linear-gradient(135deg, #0057ff, #00a0ff)',
      tooltip: 'Creative Work',
      delay: '0.6s',
      colors: ['#0057ff', '#00a0ff', '#0099ff']
    },
    { 
      icon: faTwitter, 
      gradient: 'linear-gradient(135deg, #1da1f2, #1a91da)',
      tooltip: 'Follow Updates',
      delay: '0.8s',
      colors: ['#1da1f2', '#1a91da', '#0d8bd9']
    },
    { 
      icon: faNetworkWired, 
      gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      tooltip: 'Network Hub',
      delay: '1s',
      colors: ['#8b5cf6', '#7c3aed', '#6d28d9']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Professionals', icon: faUser },
    { id: 'premium', label: 'Premium', icon: faCrown },
    { id: 'verified', label: 'Verified', icon: faCheck },
    { id: 'favorites', label: 'Favorites', icon: faHeart },
    { id: 'engineering', label: 'Engineering', icon: faRocket },
    { id: 'healthcare', label: 'Healthcare', icon: faPlus },
    { id: 'finance', label: 'Finance', icon: faChartLine },
    { id: 'education', label: 'Education', icon: faGraduationCap }
  ];

  const stats = [
    { 
      label: 'Total Professionals', 
      value: data.length, 
      icon: faUser,
      gradient: 'from-blue-500/20 to-blue-600/20'
    },
    { 
      label: 'Verified Profiles', 
      value: data.filter(d => d.verified).length, 
      icon: faCheck,
      gradient: 'from-green-500/20 to-green-600/20'
    },
    { 
      label: 'Premium Members', 
      value: data.filter(d => d.premium).length, 
      icon: faCrown,
      gradient: 'from-purple-500/20 to-purple-600/20'
    },
    { 
      label: 'Avg Rating', 
      value: (data.reduce((a, b) => a + b.rating, 0) / data.length).toFixed(1),
      icon: faStar,
      gradient: 'from-pink-500/20 to-pink-600/20',
      isDecimal: true
    }
  ];

  // Apply dark mode class to body for proper styling
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div
      className={`${darkMode ? 'dark bg-gray-950 text-white' : 'light bg-gray-50 text-gray-900'} min-h-screen pt-24 flex flex-col items-center`}
    >
      {/* Header */}
      <div className="w-full max-w-6xl px-4 mb-12">
        <SimpleTitle>
          <h1 className="main-title">PROFESSIONAL NETWORK</h1>
          
          <div className="subtitle">
            Connect with Morocco's top professionals across all industries
          </div>
        </SimpleTitle>
        
        {/* Animated Social Icons - CORRECTED: Animations always play */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {animatedSocialIcons.map((iconData, idx) => (
            <AnimatedIconContainer
              key={idx}
              color1={iconData.colors[0]}
              color2={iconData.colors[1]}
              color3={iconData.colors[2]}
            >
              <AnimatedIcon
                href="#"
                data-tooltip={iconData.tooltip}
                gradient={iconData.gradient}
                $delay={iconData.delay}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: idx * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <div className="icon-inner">
                  <FontAwesomeIcon icon={iconData.icon} />
                </div>
                <div className="sparkle" />
                <div className="sparkle" />
                <div className="sparkle" />
                <div className="sparkle" />
              </AnimatedIcon>
            </AnimatedIconContainer>
          ))}
        </div>
      </div>

      {/* Animated Search Section */}
      <div className="w-full max-w-6xl px-4 mb-8">
        <AnimatedSearch darkMode={darkMode}>
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search by name, skills, company, or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={darkMode ? 'dark' : 'light'}
            />
            <button className="search-button">
              <FontAwesomeIcon icon={faSearch} />
              Search Network
            </button>
          </div>
          
          <div className="search-filters">
            {filters.map(filter => (
              <div
                key={filter.id}
                className={`filter-tag ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <FontAwesomeIcon icon={filter.icon} className="mr-2" />
                {filter.label}
              </div>
            ))}
          </div>
        </AnimatedSearch>

        {/* Animated Add Button */}
        <AnimatedAddButton
          onClick={() => setShowForm(!showForm)}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={showForm ? faTimes : faUserPlus} />
          {showForm ? 'Close Form' : 'Add Professional Profile'}
          {!showForm && <FontAwesomeIcon icon={faWandSparkles} className="ml-1" />}
        </AnimatedAddButton>
      </div>

      {/* Add Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            className="w-full max-w-2xl px-4 mb-8"
          >
            <div className={`rounded-xl p-6 shadow-lg border ${darkMode ? 'bg-gray-800 border-blue-500/20' : 'bg-white border-blue-300'}`}>
              <motion.h3 
                className="text-xl font-bold mb-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <FontAwesomeIcon icon={faUserPlus} className="mr-2 text-blue-500" />
                <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                  Add New Professional Profile
                </span>
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { key: 'name', placeholder: 'Full Name', icon: faUser },
                  { key: 'email', placeholder: 'Email', icon: faEnvelope },
                  { key: 'phone', placeholder: 'Phone', icon: faPhone },
                  { key: 'job', placeholder: 'Job Title', icon: faBriefcase },
                  { key: 'company', placeholder: 'Company', icon: faBuilding },
                  { key: 'location', placeholder: 'Location', icon: faLocationDot },
                  { key: 'education', placeholder: 'Education', icon: faGraduationCap },
                  { key: 'experience', placeholder: 'Years of Experience', icon: faChartLine },
                  { key: 'skills', placeholder: 'Skills (comma separated)', icon: faAward, colSpan: 2 }
                ].map(field => (
                  <motion.div 
                    key={field.key} 
                    className={field.colSpan === 2 ? 'col-span-2' : ''}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (field.colSpan === 2 ? 0.8 : 0.4) }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FontAwesomeIcon icon={field.icon} className="text-blue-500" />
                      <label className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {field.placeholder}
                      </label>
                    </div>
                    <input
                      type="text"
                      value={newPerson[field.key]}
                      onChange={(e) => setNewPerson({ ...newPerson, [field.key]: e.target.value })}
                      className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500 transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}
              </div>
              <motion.button
                onClick={handleAddPerson}
                className="mt-6 w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Add Professional
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ANIMATED STATISTICS - CORRECTED: Animations always play */}
      <div className="w-full max-w-6xl px-4 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <AnimatedStatsCard
              key={idx}
              $darkMode={darkMode}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6,
                delay: idx * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="stat-icon">
                <FontAwesomeIcon icon={stat.icon} />
              </div>
              <div className="stat-number">
                <AnimatedCounter 
                  value={stat.value} 
                  isDecimal={stat.isDecimal} 
                  duration={1.5}
                />
              </div>
              <div className="stat-label">{stat.label}</div>
            </AnimatedStatsCard>
          ))}
        </div>
      </div>

      {/* Professional Cards - CORRECTED: Animations always play */}
      <div className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.slice(0, visible).map((item, idx) => (
            <AnimatedProfessionalCard
              key={item.id}
              $darkMode={darkMode}
              $favorite={item.favorite}
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.6,
                delay: idx * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              {item.verified && (
                <div className="floating-badge verified">
                  <FontAwesomeIcon icon={faCheck} className="mr-1" />
                  Verified
                </div>
              )}
              {item.premium && (
                <div className="floating-badge premium">
                  <FontAwesomeIcon icon={faCrown} className="mr-1" />
                  Premium
                </div>
              )}
              
              <div className="avatar-container">
                <div className="avatar-ring" />
                <div className="avatar">
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
              
              <div className="card-header">
                <h3>{item.name}</h3>
                <p className="title">{item.job}</p>
                <p className="company">
                  <FontAwesomeIcon icon={faBuilding} size="sm" />
                  {item.company}
                </p>
              </div>
              
              <div className="info-grid">
                <div className="info-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div className="info-content">
                    <div className="label">Location</div>
                    <div className="value">{item.location}</div>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>
                  <div className="info-content">
                    <div className="label">Education</div>
                    <div className="value">{item.education}</div>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faChartLine} />
                  </div>
                  <div className="info-content">
                    <div className="label">Experience</div>
                    <div className="value">{item.experience}</div>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="info-content">
                    <div className="label">Contact</div>
                    <div className="value">{item.email}</div>
                  </div>
                </div>
              </div>
              
              <div className="skills">
                <div className="skills-title">Skills</div>
                <div className="skills-list">
                  {item.skills.slice(0, 4).map((skill, idx) => (
                    <div key={idx} className="skill">{skill}</div>
                  ))}
                  {item.skills.length > 4 && (
                    <div className="skill">+{item.skills.length - 4}</div>
                  )}
                </div>
              </div>
              
              <div className="card-footer">
                <div className="rating">
                  <FontAwesomeIcon icon={faStar} />
                  {item.rating.toFixed(1)}
                </div>
                <div className="actions">
                  <button 
                    className={`favorite ${item.favorite ? 'active' : ''}`}
                    onClick={() => toggleFavorite(item.id)}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <button className="connect">
                    <FontAwesomeIcon icon={faHandshake} />
                  </button>
                </div>
              </div>
            </AnimatedProfessionalCard>
          ))}
        </div>
      </div>

      {/* Load More */}
      {visible < filteredData.length && (
        <motion.button
          onClick={() => setVisible(prev => prev + 6)}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <FontAwesomeIcon icon={faBolt} className="mr-2" />
          Load More Professionals ({filteredData.length - visible} remaining)
        </motion.button>
      )}

      {/* Empty State */}
      {filteredData.length === 0 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mt-12 py-16"
        >
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <FontAwesomeIcon 
              icon={faSearch} 
              className="text-6xl text-gray-400 relative z-10"
            />
          </div>
          <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            No professionals found
          </h3>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            Try adjusting your search or filters
          </p>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="w-full max-w-6xl px-4 mt-20 mb-12">
        <div className="text-center">
          <h4 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Professional Network
          </h4>
          <p className={`mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Connecting professionals across Morocco
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Privacy
            </a>
            <a href="#" className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Terms
            </a>
            <a href="#" className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Contact
            </a>
            <a href="#" className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Careers
            </a>
          </div>
          <p className={`mt-8 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            © {new Date().getFullYear()} Professional Network
          </p>
        </div>
      </footer>
    </div>
  );
}