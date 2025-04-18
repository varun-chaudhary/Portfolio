import { useEffect, useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import { FaBars, FaCode, FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdWavingHand } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { Bio } from '../../data/constants';
import {
  ButtonContainer,
  MobileIcon,
  MobileLink,
  MobileMenu,
  Nav,
  NavItems,
  NavLink,
  NavLogo,
  NavbarContainer,
  Span
} from './NavbarStyledComponent';

const Navbar = ({ toggleTheme }) => {
  const [enabled, setEnabled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0 || window.scrollY < 80);

      const sections = ['about', 'skills', 'experience', 'projects', 'certificates', 'education'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleThemeChange = () => {
    setEnabled(!enabled);
    toggleTheme();
  };

  return (
    <Nav className='h-screen' theme={theme} isAtTop={isAtTop}>
      <NavbarContainer>
        <NavLogo to='/'>
          <div
            className='hover:animate-pulse'
            style={{ display: "flex", alignItems: "center", color: theme.primary, marginBottom: '20', cursor: 'pointer' }}
          >
            <MdWavingHand size="2rem" /> <Span>Varun</Span>
          </div>
        </NavLogo>

        <MobileIcon>
          <div className='flex mt-6 mr-6'>
            <DarkModeToggle
              onChange={handleThemeChange}
              checked={!enabled}
              size={60}
              speed={2.5}
              className='me-2 -mt-0.5'
            />
            <FaBars onClick={() => setIsOpen(!isOpen)} />
          </div>
        </MobileIcon>

        <NavItems>
          <NavLink href="#about" className={activeSection === 'about' ? 'active' : ''}>About</NavLink>
          <NavLink href='#skills' className={activeSection === 'skills' ? 'active' : ''}>Skills</NavLink>
          <NavLink href='#experience' className={activeSection === 'experience' ? 'active' : ''}>Experience</NavLink>
          <NavLink href='#projects' className={activeSection === 'projects' ? 'active' : ''}>Projects</NavLink>
          <NavLink href='#certificates' className={activeSection === 'certificates' ? 'active' : ''}>Certificates</NavLink>
          <NavLink href='#education' className={activeSection === 'education' ? 'active' : ''}>Education</NavLink>

          <DarkModeToggle
            onChange={handleThemeChange}
            checked={!enabled}
            speed={2.5}
            size={70}
          />
        </NavItems>

        <ButtonContainer>
          <a href={Bio.github} target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px', color: theme.primary }}>
            <FaGithub size={30} />
          </a>
          <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px', color: theme.primary }}>
            <FaLinkedin size={30} />
          </a>
          <a href={`mailto:${Bio.email}`} target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px', color: theme.primary }}>
            <FaEnvelope size={30} />
          </a>
          <a href={Bio.leetcode} target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px', color: theme.primary }}>
            <FaCode size={30} />
          </a>
          <a href={Bio.resume} target="_blank" rel="noopener noreferrer" style={{ color: theme.primary }}>
            <FaFileAlt size={30} />
          </a>
        </ButtonContainer>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsOpen(false)}>About</MobileLink>
            <MobileLink href='#skills' className={activeSection === 'skills' ? 'active' : ''} onClick={() => setIsOpen(false)}>Skills</MobileLink>
            <MobileLink href='#experience' className={activeSection === 'experience' ? 'active' : ''} onClick={() => setIsOpen(false)}>Experience</MobileLink>
            <MobileLink href='#projects' className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsOpen(false)}>Projects</MobileLink>
            <MobileLink href='#certificates' className={activeSection === 'certificates' ? 'active' : ''} onClick={() => setIsOpen(false)}>Certificates</MobileLink>
            <MobileLink href='#education' className={activeSection === 'education' ? 'active' : ''} onClick={() => setIsOpen(false)}>Education</MobileLink>

            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
              <a href={Bio.github} target="_blank" rel="noopener noreferrer" style={{ color: theme.primary }}>
                <FaGithub size={25} />
              </a>
              <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: theme.primary }}>
                <FaLinkedin size={25} />
              </a>
              <a href={`mailto:${Bio.email}`} target="_blank" rel="noopener noreferrer" style={{ color: theme.primary }}>
                <FaEnvelope size={25} />
              </a>
              <a href={Bio.leetcode} target="_blank" rel="noopener noreferrer" style={{ color: theme.primary }}>
                <FaCode size={25} />
              </a>
              <a href={Bio.resume} target="_blank" rel="noopener noreferrer" style={{ color: theme.primary }}>
                <FaFileAlt size={25} />
              </a>
            </div>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
