import { useEffect, useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import { DiFsharp } from "react-icons/di";
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Bio } from '../../data/constants';
import { ButtonContainer, GitHubButton, MobileIcon, MobileLink, MobileMenu, Nav, NavItems, NavLink, NavLogo, NavbarContainer, Span } from './NavbarStyledComponent';

const Navbar = ({ toggleTheme }) => {

  const [enabled, setEnabled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0 || window.scrollY < 80);
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
  }

  const [isOpen, setIsOpen] = useState(false);
  var theme = useTheme();

  return (
    <Nav className='h-screen' theme={theme} isAtTop={isAtTop}>
      <NavbarContainer>
        <NavLogo to='/'>
          <div className='hover:animate-pulse' style={{ display: "flex", alignItems: "center", color: theme.primary, marginBottom: '20', cursor: 'pointer' }}>
            <DiFsharp size="3rem" /> <Span>Portfolio</Span>
          </div>
        </NavLogo>

        <MobileIcon>
          <div className='flex mt-6 mr-6' >
            <DarkModeToggle
              onChange={handleThemeChange}
              checked={!enabled}
              size={60}
              speed={2.5}
              className='me-2 -mt-0.5'
            />
            <FaBars onClick={() => {
              setIsOpen(!isOpen)
            }} />
          </div>
        </MobileIcon>


        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#certificates'>Certificates</NavLink>
          <NavLink href='#education'>Education</NavLink>

          <DarkModeToggle
            onChange={handleThemeChange}
            checked={!enabled}
            speed={2.5}
            size={70}
          />

        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#certificates' onClick={() => {
              setIsOpen(!isOpen)
            }}>Certificates</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>

            <GitHubButton style={{ background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>

    </Nav>
  )
}

export default Navbar