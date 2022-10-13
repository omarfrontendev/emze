import React from 'react'
import { BiSearch } from 'react-icons/bi'

import './HeaderOptions.scss'

const HeaderOptions = () => {

  return (
    <form className='header__options___form postion-realtive linear__bg d-flex align-items-center justify-content-between'>
      <input className='search__input' type='text' placeholder='Search....'/>
      <button type='submit' className='search__btn linear__bg postion-realtive d-flex align-items-center justify-content-center'>
        <BiSearch className='search__icon' />
      </button>
    </form>
  )
}

export default HeaderOptions