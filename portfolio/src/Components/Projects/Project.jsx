import React, { useState } from 'react'
import { projects } from '../../data/constants'
import ProjectCard from '../Cards/ProjectCards'
import { CardContainer, Container, Desc, Divider, Title, ToggleButton, ToggleButtonGroup, Wrapper } from './ProjectsStyle'


const Project = () => {
  const [toggle, setToggle] = useState('all');
  
  return (
    <Container id="projects" className=''> 
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active  value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'AI' ?
            <ToggleButton active value="AI" onClick={() => setToggle('AI')}>AI</ToggleButton>
            :
            <ToggleButton value="AI" onClick={() => setToggle('AI')}>AI</ToggleButton>
          }
          <Divider />
          {toggle === 'desktop app' ?
            <ToggleButton active value="desktop app" onClick={() => setToggle('desktop app')}>DESKTOP APP'S</ToggleButton>
            :
            <ToggleButton value="desktop app" onClick={() => setToggle('desktop app')}>DESKTOP APP'S</ToggleButton>
          }

          
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project, index) => (
              <ProjectCard key={index} project={project}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Project