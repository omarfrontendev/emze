import React from 'react'
import { CategoriesBar, SinglePlaceCard } from '../../components/index'
import { locations } from '../../data'

import './HistoryPage.scss'

const HistoryPage = () => {
  
  return (
    <div className="container">
      <div className="history__page">
        <h2 className='history__title '>Your History With Us.</h2>
        <CategoriesBar />
        <div className="home__content history__content">
          {locations?.map(location => (
              <SinglePlaceCard
                key={location.id}
                locationImages={location.locationImages}
                location={location.location}
                days={location.days}
                price={location.price}
                isNew={location.isNew}
                rating={location.rating}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default HistoryPage