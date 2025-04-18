import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from 'styled-components';
import { certificates } from '../../data/constants';

const Container = styled.div`
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0;
  min-height: fit-content;
  scroll-margin-top: 30px;
  @media (max-width: 768px) {
    padding: 20px 0;
    scroll-margin-top: 40px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 50px 0;
  gap: 12px;
  @media (max-width: 768px) {
    padding: 10px 0px 30px 0;
  }
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

const StyledSlider = styled(Slider)`
  width: 100%;
  .slick-track {
    display: flex;
    gap: 40px;
    padding: 40px 0;
    align-items: center;
  }
  .slick-slide {
    transition: transform 0.3s ease;
    padding: 0 20px;
    transform: scale(0.8);
  }
  .slick-center {
    transform: scale(1.2);
    z-index: 1;
  }
  .slick-prev,
  .slick-next {
    z-index: 1;
    width: 50px;
    height: 50px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    &:before {
      font-size: 24px;
    }
    @media (max-width: 768px) {
      display: none !important;
    }
  }
  .slick-prev {
    left: 20px;
  }
  .slick-next {
    right: 20px;
  }
`;

const CertificateCard = styled.div`
  background: transparent;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: all 0.3s ease;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
  &:hover {
    transform: scale(1.02);
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 50vh;
  max-height: 500px;
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    height: 40vh;
    max-height: 400px;
    object-fit: contain;
  }
`;

const CertificateTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const CertificateDate = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

const Certificates = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15%",
    focusOnSelect: true,
    autoplay: false,
    draggable: true,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "10%",
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "5%",
        }
      }
    ]
  };

  return (
    <Container id="certificates">
      <Wrapper>
        <Title>Certificates</Title>
        <Desc>
          Here are some of my certifications and achievements.
        </Desc>
        <StyledSlider {...settings}>
          {certificates.map((certificate, index) => (
            <CertificateCard key={index}>
              <CertificateImage src={certificate.image} alt={certificate.title} />
              <CertificateTitle>{certificate.title}</CertificateTitle>
              <CertificateDate>{certificate.date}</CertificateDate>
            </CertificateCard>
          ))}
        </StyledSlider>
      </Wrapper>
    </Container>
  );
};

export default Certificates; 