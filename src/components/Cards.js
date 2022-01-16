import React from 'react';
import {CardItem,CardItemNoImage} from './CardItem';
import './Cards.css';
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'


function Cards() {
    return (
      <div className='cards'>
        <div className='cards-container'>
          <div className='cards-wrapper'>
            <ul className='cards-items'>
              <CardItemNoImage
                title='About'
                text='I currently work at Cisco as a Systems Engineer (technical pre-sales), based in London. I hold a BSc in Digital and Tech Solutions from the University of Roehampton, as well as CCNP and DevNet Associate certifications. I am interested in design, coding, and technical projects.'
                path='/'
                buttonIcon={faLinkedinIn}
                buttonText='LinkedIn'
                buttonLink='https://www.linkedin.com/in/rhyscharris/'
                buttonIcon2={faFile}
                buttonText2='CV'
                buttonLink2='/cv'
                buttonIcon3={faTwitter}
                buttonText3='Twitter'
                buttonLink3='https://twitter.com/ciscorhys'
                buttonIcon4={faBehance}
                buttonText4='Behance'
                buttonLink4='https://www.behance.net/RhysCHarris'
                buttonIcon5={faGithub}
                buttonText5='GitHub'
                buttonLink5='https://github.com/rhyscharris'
              />
              <CardItem
                id='design'
                src='images/behance.png'
                buttonIcon={faBehance}
                title='Design Projects'
                text='Since 2012, I have had a strong interest in digital design, including branding, logos, UI, UX, and web development. An assortment of my design projects can be found on my Behance page. This website was also designed and created by me.'
                path='/'
                buttonText='Behance'
                buttonLink='https://www.behance.net/RhysCHarris'
              />
              <CardItem
                id='coding'
                src='images/behance.png'
                buttonIcon={faStar}
                title='SongScore'
                text='A social music website for reviewing music, following friends, and for discovering new music. Built using Python, Flask, and PostgreSQL - with security integrated.'
                buttonText='Visit'
                buttonLink='https://www.linkedin.com/in/rhyscharris/'
                path='/'
              />
              <CardItem
                src='images/behance.png'
                buttonIcon={faHeadset}
                title='CC Agent'
                text='Using APIs to monitor the network connection of contact centre agents, and automatically put them as not available for calls. Then, if needed, using Webex to fail them over to LTE/5G'
                buttonText='View'
                buttonLink='https://www.linkedin.com/in/rhyscharris/'
                path='/'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;