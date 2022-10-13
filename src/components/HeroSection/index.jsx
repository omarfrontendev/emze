import React, { useState, useRef, useEffect } from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

import './HeroSection.scss'

const HeroSection = () => {

  const [play, setPlay] = useState(true);
  const video = useRef();

  useEffect(() => {
    video.current.play();
  }, [])

  useEffect(() => {
    if(play) {
      video.current.play();
    }else if(!play) {
      video.current.pause();
    }
  }, [play])

  return (
    <section className='hero__section'>
      <div className="hero__content d-flex align-items-center justigy-content-between">
        <div className="hero__text__content d-flex flex-column align-items-center justify-content-center">
          <h1 className='text-center hero__text__title'>Open your door<br/>to hosting</h1>
          <button className='hero__text__btn'>Try hosting</button>
        </div>
        <div className="hero__video position-relative">
          <button 
            className='play__video__btn'
            onClick={() => setPlay(prev => !prev)}
            autoPlay
          >
            {play ? <BsPauseFill /> : <BsFillPlayFill /> }
          </button>
          <video
            ref={video}
            className='hero__video__d'
            src='https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4'
            autoPlay
            onPause={() =>  setPlay(false)}
            onPlay={() =>  setPlay(true)}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection