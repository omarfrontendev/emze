import React, { useState } from 'react'
import { DateRange } from 'react-date-range';
import RowCounter from '../RowCounter';
import { BsCalendarWeek, BsHouseDoor } from 'react-icons/bs'
import { TbBabyCarriage } from 'react-icons/tb'
import { format } from 'date-fns'

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './CheckForm.scss'
import { useEffect } from 'react';

const CheckForm = () => {

  const [openCalendar, setOpenCalendar] = useState(false);
  const [openGuests, setOpenGuests] = useState(false);
  const [openRoomsMenu, setOpenRoomsMenu] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  const [days, setDays] = useState(0);
  const price = 12.66;
  
  useEffect(() => {

    setDays(state[0].endDate ? (state[0].endDate.getTime() - state[0].startDate.getTime()) / (1000 * 3600 * 24) : 10)

  }, [state])

  return (
    <div className='check__form__container'>
      <form 
        className='check__form d-flex flex-column' 
        onSubmit={e => e.preventDefault()}
      >
        {/* Diffrent: {`${state[0].endDate ? (state[0].endDate.getTime() - state[0].startDate.getTime()) / (1000 * 3600 * 24) : 10}`} */}
        <div>
          <button 
            className={`check__form__btns ${openCalendar ? 'active' : ''}`}
            onClick={() => setOpenCalendar(prev => !prev)}
          >
            <BsCalendarWeek className='form__icons' /> 
            {`${state[0].startDate ? format(state[0].startDate, "MM/dd/yyyy") : 'Start Date'} - To - ${state[0]?.endDate ? format(state[0]?.endDate, "MM/dd/yyyy") : 'End Date'}`}
          </button>
          {openCalendar && (
            <div className="form__drop__menu">
              <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                className='caledar__range'
              />
            </div>
          )}
        </div>
        <div>
          <button 
            className={`check__form__btns ${openGuests ? 'active' : ''}`}
            onClick={() => setOpenGuests(prev => !prev)}
          >
            <TbBabyCarriage className='form__icons' /> {adults} Adults / {children} Children
          </button>
          {openGuests && (
            <div className='form__drop__menu'>
              <RowCounter setCount={setAdults} count={adults} type='Adults'  />
              <RowCounter setCount={setChildren} count={children} type='Children'  />
            </div>
          )}
        </div>
        <div>
          <button
            className={`check__form__btns ${openRoomsMenu ? 'active' : ''}`}
            onClick={() => setOpenRoomsMenu(prev => !prev)}
          >
            <BsHouseDoor className='form__icons' /> {rooms} Room/s
          </button>
          {openRoomsMenu && (
            <div className='form__drop__menu'>
              <RowCounter setCount={setRooms} count={rooms} type='Room/s'  />
            </div>
          )}
        </div>
        <div className='form__details__container'>
          <div className='form__details d-flex align-items-center justify-content-between'>
            <span>Days</span>
            <span>{days}</span>
          </div>
          <div className='form__details d-flex align-items-center justify-content-between'>
            <span>Totle Price</span>
            <span>{(days * price).toFixed(2)}$</span>
          </div>
        </div>
        <button type='submit' className='check__submit__btn'>Check availability</button>
      </form>
    </div>
  )
}

export default CheckForm