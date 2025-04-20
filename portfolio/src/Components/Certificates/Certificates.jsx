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
  align-items: center;
  padding: 40px 0;
  scroll-margin-top: 10px;
  min-height: fit-content;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 20px 0;
    scroll-margin-top: 40px;
  }
`;

const Wrapper = styled.div`
  max-width: 1350px;
  width: 100%;
  padding: 10px 0 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 10px 0 30px 0;
  }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: 12px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 12px;
  }
`;

const StyledSlider = styled(Slider)`
  width: 100%;

  .slick-track {
    display: flex;
    gap: 40px;
    padding: 40px 0;
    align-items: center;
    margin-left: -7px;
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

const CardContainer = styled.div`
  padding: 5px;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const CertificateCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 20px;
  margin: 20px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: grab;
  transition: transform 0.3s ease;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  &:active {
    cursor: grabbing;
  }

  &:hover {
    transform: scale(1.02);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 50vh;
  max-height: 500px;
  object-fit: contain;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  opacity: 0.95;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  @media (max-width: 768px) {
    height: 40vh;
    max-height: 400px;
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "5%",
        },
      },
    ],
  };

  return (
    <Container id="certificates">
      <Wrapper>
        <Title>Certificates</Title>
        <Desc>Here are some of my certifications and achievements.</Desc>
        <StyledSlider {...settings}>
          {certificates.map((certificate, index) => (
            <CardContainer key={index}>
              <CertificateCard>
                <CertificateImage src={certificate.image} alt={certificate.title} />
                <CertificateTitle>{certificate.title}</CertificateTitle>
                <CertificateDate>{certificate.date}</CertificateDate>
              </CertificateCard>
            </CardContainer>
          ))}
        </StyledSlider>
      </Wrapper>
    </Container>
  );
};

export default Certificates;
