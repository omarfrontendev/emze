import React from 'react'
import { CategoriesBar, SinglePlaceCard } from '../../components/index'
import { locations } from '../../data'

import './Home.scss'

const Home = () => {
  return (
    <>
      <CategoriesBar />
      <div className="container">
        <div className="home__content">
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
    </>
  )
}

export default Home