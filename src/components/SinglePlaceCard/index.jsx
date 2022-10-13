import React, { useState } from 'react'
import { ImagesCardSlider } from '../index'
import { AiFillStar } from 'react-icons/ai'
import { BsFillHeartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
// import { HeartIcon } from '../../UI/icons'

import './SinglePlaceCard.scss'

const SinglePlaceCard = ({
  locationImages,
  location,
  days,
  price,
  rating
}) => {

  const [liked, setLiked] = useState(false);

  return (
    <div className='single__place__card position-relative'>
      <button 
        className={`like__btn position-absolute ${liked ? 'liked' : ''}`}
        onClick={() => setLiked(prev => !prev)}
      >
        <BsFillHeartFill className='heart__icon' />
      </button>
      <div className="location__images">
        <ImagesCardSlider images={locationImages} />
        <div className="location__details d-flex justify-content-between">
          <div className="left__data d-flex flex-column ">
            <h4>{location}</h4>
            <span className='days__booking'>{days}</span>
            <span className='location__price'>{price}</span>
          </div>
          <div className="rigth__data d-flex flex-column justify-content-between">
            <span className='d-flex align-items-center justify-content-end'>
              <AiFillStar className='star__icon' />
              <span>{rating}</span>
            </span>
          </div>
        </div>
        <Link to='/place-details'>View</Link>
      </div>
    </div>
  )
}

export default SinglePlaceCard