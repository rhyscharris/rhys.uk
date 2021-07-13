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
                title='Title Title Title Title Title Title Title in a title'
                text='text'
                path='/'
              />
              <CardItem
                src='images/behance.png'
                title='Title Title Title Title Title Title Title in a title'
                text='text'
                path='/'
              />
              <CardItem
                src='images/behance.png'
                title='Title Title Title Title Title Title Title in a title'
                text='text'
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