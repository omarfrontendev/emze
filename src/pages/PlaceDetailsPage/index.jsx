import React from 'react'
import { 
  CheckForm, 
  HeadPlaceSection, 
  PlaceDetailsImageView, 
  PlaceOffers
} from '../../components'

import './PlaceDetailsPage.scss'

const PlaceDetailsPage = () => {

  const placeDetails={
    imagesView: [
      {
        id: 1,
        img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=960',
      },
      {
        id: 2,
        img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/dd489167-14b9-464e-a291-e8390519b1dc.jpeg?im_w=480',
      },
      {
        id: 3,
        img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/458c1368-f535-4d3d-a581-5c1c2a75ea01.jpeg?im_w=480',
      },
      {
        id: 4,
        img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/d16d1f1b-c208-43d7-b907-aeddfe8c8804.jpeg?im_w=480',
      },
      {
        id: 5,
        img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=480',
      },
    ],
    allImages: [
      {
        id: 1,
        img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=960',
      },
      {
        id: 2,
        img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/dd489167-14b9-464e-a291-e8390519b1dc.jpeg?im_w=480',
      },
      {
        id: 3,
        img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/458c1368-f535-4d3d-a581-5c1c2a75ea01.jpeg?im_w=480',
      },
      {
        id: 4,
        img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/d16d1f1b-c208-43d7-b907-aeddfe8c8804.jpeg?im_w=480',
      },
      {
        id: 5,
        img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=480',
      },
      {
        id: 6,
        img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=960',
      },
      {
        id: 7,
        img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/dd489167-14b9-464e-a291-e8390519b1dc.jpeg?im_w=480',
      },
      {
        id: 8,
        img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/458c1368-f535-4d3d-a581-5c1c2a75ea01.jpeg?im_w=480',
      },
      {
        id: 9,
        img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/d16d1f1b-c208-43d7-b907-aeddfe8c8804.jpeg?im_w=480',
      },
      {
        id: 10,
        img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=480',
      },
    ],
  }

  return (
    <div className='place__details__page'>
      <div className="container">
        <PlaceDetailsImageView 
          images={placeDetails.imagesView} 
          allImages={placeDetails.allImages} 
        />
        <div className="place__details__page__content">
          <div className="row">
            <div className="col-8">
              <div className='section__place'>
                <HeadPlaceSection />
              </div>
              <div className='section__place'>
                <PlaceOffers />
              </div>
            </div>
            <div className="col-4 position-relative">
              <CheckForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceDetailsPage