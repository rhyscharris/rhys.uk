import React from 'react';
import {CardItem,CardItemNoImage} from './CardItem';
import './Cards.css';

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
                buttonText='LinkedIn'
                buttonLink='https://www.linkedin.com/in/rhyscharris/'
                buttonText2='CV'
                buttonLink2='/cv'
                buttonText3='Twitter'
                buttonLink3='https://twitter.com/ciscorhys'
                buttonText4='Behance'
                buttonLink4='https://www.behance.net/RhysCHarris'
                buttonText5='GitHub'
                buttonLink5='https://github.com/rhyscharris'
              />
              <CardItem
                src='images/behance.png'
                title='Design Projects'
                text='Since 2012, I have had a strong interest in digital design, including branding, logos, UI, UX, and web development. An assortment of my design projects can be found on my Behance page. This website was also designed and created by me.'
                path='/'
                buttonText='Behance'
                buttonLink='https://www.behance.net/RhysCHarris'
              />
              <CardItem
                src='images/behance.png'
                title='SongScore'
                text='A social music website for reviewing music, following friends, and for discovering new music. Built in Python, Flask, and PostgreSQL - with security in mind.'
                path='/'
              />
              <CardItem
                src='images/behance.png'
                title='Title Title Title Title Title Title Title in a title'
                text='text'
                path='/'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;