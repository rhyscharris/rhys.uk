import React from 'react';
import { Link } from 'react-router-dom';

export function CardItem(props) {
  return (
    <>
      <li className='cards-item'>
        <div className='cards-item-container'>
          <div className='cards-item-text'>
            <h5 className='cards-item-title'>{props.title}</h5>
            <p>{props.text}</p>
          </div>
          <img
            className='cards-item-img'
            alt=''
            src={props.src}
          />
        </div>
      </li>
    </>
  );
}

export function CardItemNoImage(props) {
  return (
    <>
      <li className='cards-item'>
        <div className='cards-item-container'>
          <div className='cards-item-text'>
            <h5 className='cards-item-title'>{props.title}</h5>
            <p>{props.text}</p>
          </div>
        </div>
      </li>
    </>
  );
}
