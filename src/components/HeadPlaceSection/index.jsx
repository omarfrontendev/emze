import React from 'react'

import './HeadPlaceSection.scss'

const HeadPlaceSection = () => {
  return (
    <div className='head__section d-flex align-items-center justify-content-between'>
      <div>
        <h2 className='place__section__title'>Entire villa hosted by Bookiply</h2>
        <p>6 guests / 3 bedrooms / 4 beds / 3 baths</p>
        <p className='price'>Price: <span>12.66$</span> / day</p>
      </div>
      <div className='host__image'>
        <img src="https://a0.muscache.com/im/pictures/user/5659bc1e-69de-4439-b158-f3d9a7f597b1.jpg?im_w=240" alt="" />
      </div>
    </div>
  )
}

export default HeadPlaceSection