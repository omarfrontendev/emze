import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { MdNavigateNext } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'

import './FullScreenSlider.scss'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const FullScreenSlider = ({ images, index, setOpenSlider }) => {

  const [activeStep, setActiveStep] = useState(index || 0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className='full__screen__slider'>
      <button className='close__btn' onClick={() => setOpenSlider(false)}><AiOutlineClose /></button>
      <div className="overlay" onClick={() => setOpenSlider(false)}></div>
        <div className='full__slider__parent position-realtive'>
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map(img => (
            <div className='full__slider__image' key={img.id}>
              <img src={img.img} alt='' />
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <button 
          className='slider__btn next__btn d-flex align-items-center justify-content-center position-absolute'
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          <MdNavigateNext />
        </button>
        <button 
          className='slider__btn prev__btn d-flex align-items-center justify-content-center position-absolute'
          onClick={handleBack} 
          disabled={activeStep === 0}
        >
          <MdNavigateNext style={{transform: 'rotate(180deg)'}} />
        </button>
        <ul className="bulltes position-absolute">
          {images.map((_, i) => (
            <li 
              className={`bullet__btn ${activeStep === i ? 'active' : ''}`}
              key={i} 
              onClick={() => setActiveStep(i)}
            ></li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default FullScreenSlider