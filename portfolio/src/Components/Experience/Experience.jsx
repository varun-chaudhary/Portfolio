import React from 'react';
import styled from 'styled-components';
import { experience } from '../../data/constants';

const Container = styled.div`
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
`;

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

const ExperienceCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 20px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border: 0.1px solid #854CE6;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(23, 92, 230, 0.3) 0px 4px 24px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.primary};
  }
`;

const CompanyLogo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const CompanyName = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Role = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
`;

const Duration = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  text-align: justify;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 10px;
`;

const SkillTag = styled.span`
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 20px;
  background: ${({ theme }) => theme.primary + 15};
  color: ${({ theme }) => theme.primary};
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          Here's a glimpse of my professional journey.
        </Desc>
        {experience.map((exp, index) => (
          <ExperienceCard key={index}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <CompanyLogo src={exp.logo} alt={exp.company} />
              <div>
                <CompanyName>{exp.company}</CompanyName>
                <Role>{exp.role}</Role>
                <Duration>{exp.duration}</Duration>
              </div>
            </div>
            <Description>{exp.description}</Description>
            <SkillsContainer>
              {exp.skills.map((skill, idx) => (
                <SkillTag key={idx}>{skill}</SkillTag>
              ))}
            </SkillsContainer>
          </ExperienceCard>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Experience; 