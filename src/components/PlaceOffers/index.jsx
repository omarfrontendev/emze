import React from 'react'
import { MdOutlineRadioButtonChecked } from 'react-icons/md'
import './PlaceOffers.scss'

const PlaceOffers = () => {

  const offers = ['Kitchen', 'Pool', 'Washer', 'Air conditioning', 'Carbon monoxide alarm', 'Wifi', 'TV', 'Dryer', 'Bathtub', 'Smoke alarm']

  return (
    <div>
      <h2 className='place__section__title'>What this place offers</h2>
      <div className="row">
        {offers.map((offer, i) => (
          <div className="col-6" key={i}>
            <div className="single__offer d-flex align-items-center">
              <MdOutlineRadioButtonChecked className='offer__icon' /> {offer}
            </div>
          </div>
          ))}
      </div>
    </div>
  )
}

export default PlaceOffers