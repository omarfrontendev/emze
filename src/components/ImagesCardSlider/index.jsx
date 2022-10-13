import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { MdNavigateNext } from 'react-icons/md'

import './ImagesCardSlider.scss'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ImagesCardSlider = ({ images }) => {

  const [activeStep, setActiveStep] = useState(0);
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
    <div className='images__container position-realtive'>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map(img => (
          <div className='image__card' key={img.id}>
            <img src={img.url} alt='' />
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
  )
}

export default ImagesCardSlider