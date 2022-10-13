import React, { useState } from 'react'
import FullScreenSlider from '../FullScreenSlider';

import './PlaceDetailsImageView.scss'

const PlaceDetailsImageView = ({ images, allImages }) => {

  const [showBtn, setShowBtn] = useState(false);
  const [currentId, setcurrentId] = useState(null);
  const [openSlider, setOpenSlider] = useState(false)
  const [index, setIndex] = useState(null)

  return (
    <>
      <div className='place__images__view__container'>
        {images.map((img, i) => (
          <div
            className={`image__${img.id}`}
            key={img.id}
            onMouseEnter={() => {
              setcurrentId(img.id)
              setShowBtn(true)
            }} 
            onMouseLeave={() => {
              setcurrentId(null)
              setShowBtn(false)
            }} 
            >
            {showBtn && currentId === img.id && (
              <button 
                className='view__img__btn'
                onClick={() => {
                  setOpenSlider(true)
                  setIndex(i)
                }}
              >
                View
              </button>
            )}
          <img 
            src={img.img} 
            alt='' 
            />
          </div>
        ))}
      </div>
      {openSlider && (
        <FullScreenSlider 
          images={allImages} 
          index={index} 
          setOpenSlider={setOpenSlider} 
        />
      )}
    </>
  )
}

export default PlaceDetailsImageView