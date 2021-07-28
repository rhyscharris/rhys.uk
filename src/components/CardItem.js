import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Buttons';

export function CardItem(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  return (
    <>
      <li className='cards-item'>
        <div className='cards-item-container'>
          <div className='cards-item-text'>
            <h5 className='cards-item-title'>{props.title}</h5>
            <p>{props.text}</p>
            <div className='button-group'>
              {button && <Button buttonStyle='btn--outline--two'>{props.buttonText}</Button>}
              {button && <Button buttonStyle='btn--outline--two'>{props.buttonText2}</Button>}
            </div>
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
