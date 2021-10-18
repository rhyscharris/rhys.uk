import React, { useState, useEffect } from 'react';
import { Button } from './Buttons';
import 'aos/dist/aos.css';
import Aos from 'aos';


export function CardItem(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  useEffect(() => {
    Aos.init({duration:500});
  }, []);  

  return (
    <>
      <li className='cards-item' data-aos='fade-right'>
        <div className='cards-item-container'>
          <div className='cards-item-text'>
            <h5 className='cards-item-title'>{props.title}</h5>
            <p>{props.text}</p>
            <div className='button-group'>
              {props.buttonText && <Button buttonStyle='btn--outline--two' linkTo={props.buttonLink} buttonIcon={props.buttonIcon}>{props.buttonText}</Button>} {/*if there actually is text, render the button*/}
              {props.buttonText2 && <Button buttonStyle='btn--outline--two' linkTo={props.buttonLink2} buttonIcon={props.buttonIcon2}>{props.buttonText2}</Button>}
              {props.buttonText3 && <Button buttonStyle='btn--outline--two' linkTo={props.buttonLink3} buttonIcon={props.buttonIcon3}>{props.buttonText3}</Button>}
              {props.buttonText4 && <Button buttonStyle='btn--outline--two' linkTo={props.buttonLink4} buttonIcon={props.buttonIcon4}>{props.buttonText4}</Button>}
              {props.buttonText5 && <Button buttonStyle='btn--outline--two' linkTo={props.buttonLink5} buttonIcon={props.buttonIcon5}>{props.buttonText5}</Button>}
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
            <div className='button-group'>
              {props.buttonText && <Button buttonStyle='btn--outline--two' linkTo={props.buttonLink} buttonIcon={props.buttonIcon}>{props.buttonText}</Button>} {/*if there actually is text, render the button*/}
              {props.buttonText2 && <Button buttonStyle='btn--outline--two' linkTo={props.buttonLink2} buttonIcon={props.buttonIcon2}>{props.buttonText2}</Button>}
              {props.buttonText3 && <Button buttonStyle='btn--outline--two' linkTo={props.buttonLink3} buttonIcon={props.buttonIcon3}>{props.buttonText3}</Button>}
              {props.buttonText4 && <Button buttonStyle='btn--outline--two' linkTo={props.buttonLink4} buttonIcon={props.buttonIcon4}>{props.buttonText4}</Button>}
              {props.buttonText5 && <Button buttonStyle='btn--outline--two' linkTo={props.buttonLink5} buttonIcon={props.buttonIcon5}>{props.buttonText5}</Button>}
            </div>
          </div>
        </div>
      </li>
    </>
  );
}