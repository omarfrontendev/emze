import React from 'react'
import { useState } from 'react'

import './CategoriesBar.scss'

const CategoriesBar = () => {

  const [active, setActive] = useState('places')

  return (
    <div className='categories__bar d-flex align-items-center justify-content-center'>
      <button 
        onClick={() => setActive('places')} 
        className={`category__btn ${active === 'places' ? 'active' : ''}`}
      >
        Places
      </button>
      <button 
        onClick={() => setActive('cars')} 
        className={`category__btn ${active === 'cars' ? 'active' : ''}`}
      >
        Cars
      </button>
    </div>
  )
}

export default CategoriesBar