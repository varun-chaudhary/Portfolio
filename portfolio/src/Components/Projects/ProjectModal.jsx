import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import styled, { useTheme } from 'styled-components'

const Card = styled.div`
background: ${({ theme }) =>
  `linear-gradient(145deg, ${theme.card_light}, ${theme.bgLight}, rgba(255, 255, 255, 0.05))`};
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 900px;
    margin: 0 auto;
  }
`

const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    z-index: 1;
    width: 36px;
    height: 36px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    &:before {
      font-size: 16px;
    }
  }

  .slick-prev {
    left: 5px;
  }

  .slick-next {
    right: 5px;
  }

  @media (min-width: 768px) {
    .slick-prev,
    .slick-next {
      width: 40px;
      height: 40px;
      &:before {
        font-size: 20px;
      }
    }
  }
`

const CarouselImage = styled.img`
  width: 100%;
  max-height: 45vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.white};
`

const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`

const Tag = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 4px 10px;
  border-radius: 10px;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`

const Date = styled.div`
  font-size: 13px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};

  @media (min-width: 768px) {
    font-size: 15px;
  }
`

const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 10px;
  text-align: justify;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`

const CloseButton = styled.button`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_secondary};
  background: transparent;
  border: none;
  cursor: pointer;
  margin-top: -10px;
  margin-right: -10px;
  padding: 4px 10px;
  align-self: flex-end;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

export default function ProjectModal({ project, close, isOpen }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const theme = useTheme()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, next) => setCurrentSlide(next),
  }

  return (
    <Dialog open={isOpen} onClose={close} className="relative z-10">
      <div
        className="fixed inset-0"
       
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-10 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
        <Dialog.Panel
          as="div"
          className="w-full max-w-4xl transform overflow-hidden rounded-2xl p-0 text-left align-middle shadow-xl transition-all"
        >
          <Card>
            <div className="flex justify-between items-start">
              <div>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
              </div>
              <CloseButton onClick={close} aria-label="Close modal">
                ×
              </CloseButton>
            </div>

            <StyledSlider {...settings}>
              {project.image?.map((image, index) => (
                <div key={index}>
                  <CarouselImage src={image} alt={`${project.title} - Image ${index + 1}`} />
                </div>
              ))}
            </StyledSlider>

            <Description>{project.description}</Description>

            <Tags>
              {project.tags?.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </Tags>

            {project.github && (
              <Link to={project.github} target="_blank">
                <Description className="underline decoration-4 hover:decoration-sky-400">
                  GitHub Link 👆
                </Description>
              </Link>
            )}

            {project.webapp && (
              <Link to={project.webapp} target="_blank">
                <Description className="underline decoration-4 hover:decoration-sky-400">
                  Deployed Link 👆
                </Description>
              </Link>
            )}
          </Card>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
