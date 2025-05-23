import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

import { keyframes } from "styled-components";

const wave = keyframes`
  0% { transform: rotate(0deg); }
  15% { transform: rotate(14deg); }
  30% { transform: rotate(-8deg); }
  40% { transform: rotate(14deg); }
  50% { transform: rotate(-4deg); }
  60% { transform: rotate(10deg); }
  70% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

export const WavingHand = styled.span`
  display: inline-block;
  transform-origin: 70% 70%;
  &:hover {
    animation: ${wave} 1s ease-in-out;
  }
`;

export const Nav = styled.div`
    background-color: ${({ theme, isAtTop }) => isAtTop ? theme.card_light : `${theme.card_light}dd`};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: blur(3px);
    
    @media (max-width: 960px) {
        transition: background-color 0.8s ease, box-shadow 0.8s ease;
        background-color: ${({ theme }) => theme.card_light};
    }
`;


export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
  gap: 20px;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;
export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 40px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 1490px) {
      display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 8px;
    position: relative;
    
    :hover {
      color: ${({ theme }) => theme.primary};
      background: ${({ theme }) => theme.primary + 20};
      transform: translateY(-2px);
    }

    &.active {
      color: ${({ theme }) => theme.primary};
      background: ${({ theme }) => theme.primary + 20};
      transform: translateY(-2px);
      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${({ theme }) => theme.primary};
        box-shadow: 0 0 10px ${({ theme }) => theme.primary};
      }
    }
`;


export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 1490px) { 
    font-size: 14px;
    }
`;

export const ButtonContainer = styled.div`
  width: auto;  
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 6px;
  position: relative;

  a {
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    
    &:hover {
      transform: scale(1.2);
    }
    
    &:hover::after {
      content: attr(title);
      position: absolute;
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);
      background: ${({ theme }) => theme.card_light};
      color: ${({ theme }) => theme.text_primary};
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 14px;
      white-space: nowrap;
      z-index: 1000;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
  }

  @media screen and (max-width: 1490px) {
    display: none;
  }
`;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 1490px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    // transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
    position: fixed;
    top: 80px;
    right: 0;
    width: 250px;
    max-height: calc(100vh - 80px);
    padding: 20px;
    background: ${({ theme }) => theme.card_light};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    border-radius: 0 0 0 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.card_light};
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.primary};
        border-radius: 3px;
    }

    div {
      a {
        position: relative;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
        
        &:hover {
          transform: scale(1.2);
        }
        
        &:hover::after {
          content: attr(title);
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: ${({ theme }) => theme.card_light};
          color: ${({ theme }) => theme.text_primary};
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 14px;
          white-space: nowrap;
          z-index: 1000;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
      }
    }
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  margin: 4px 0;
  
  :hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary + 20};
    transform: translateY(-2px);
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary + 20};
    transform: translateY(-2px);
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.primary};
      box-shadow: 0 0 10px ${({ theme }) => theme.primary};
    }
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;