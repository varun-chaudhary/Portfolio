import React from 'react';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';
import styled from 'styled-components';
import { Bio } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0;
  @media (max-width: 960px) {
    padding: 20px 0;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
`

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 40px;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 768px) {
    gap: 16px;
    padding: 0 20px;
  }
`;

const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 200px;
  background: ${({ theme }) => theme.card};
  border-radius: 20px;
  padding: 20px;
  gap: 16px;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`;

const Icon = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease-in-out;
  
  ${ContactCard}:hover & {
    transform: scale(1.1);
  }
`;

const ContactTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const ContactInfo = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  word-break: break-all;
`;

const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Get in touch with me!</Desc>
        <ContactCards>
          <ContactCard href={`tel:${Bio.phone}`}>
            <Icon><FaPhone /></Icon>
            <ContactTitle>Phone</ContactTitle>
            <ContactInfo>{Bio.phone}</ContactInfo>
          </ContactCard>

          <ContactCard href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
            <Icon><FaLinkedin /></Icon>
            <ContactTitle>LinkedIn</ContactTitle>
            <ContactInfo>@{Bio.linkedinHandle}</ContactInfo>
          </ContactCard>

          <ContactCard href={`mailto:${Bio.email}`}>
            <Icon><FaEnvelope /></Icon>
            <ContactTitle>Email</ContactTitle>
            <ContactInfo>{Bio.email}</ContactInfo>
          </ContactCard>
        </ContactCards>
      </Wrapper>
    </Container>
  )
}

export default Contact