import React, { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BiHomeAlt, BiShow, BiHide } from 'react-icons/bi'
import { BsPerson, BsTelephone } from 'react-icons/bs'

import './MainInput.scss'

const MainInput = ({ placeholder, type, data, setData, name, icon, checkTheValue, error }) => {

  const [showPass, setShowPass] = useState(false);
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const [inputBlur, setInputBlur] = useState(false)
  const enteredValueIsValid = checkTheValue && checkTheValue(data[name], data?.password, data?.newPassword);
  const errorInput = !enteredValueIsValid && inputBlur;

  const onChangeHandler = e => {
    setData({...data, [name]: e.target.value});
  }

  const inputIcon = icon === 'email' ? 
  <HiOutlineMail /> : icon === 'password' ? 
  <RiLockPasswordLine /> : icon === 'userName' ?
  <BsPerson /> : icon === 'mobile' ? <BsTelephone /> : <BiHomeAlt />;

  return (
    <div 
      className={`main__input position-relative d-flex align-items-center ${type ? '' : 'd-none'} ${inputIsTouched ? 'is__touched' : ''}`}
    >
      {type === 'password' && (
        <button
          type='button'
          className='show__password' 
          onClick={() => setShowPass(prev => !prev)}
        >
          {showPass ? <BiHide /> : <BiShow />}
        </button>
      )}
      <input 
        id={name}
        type={type === 'password' && showPass ? 'text' : type || 'text'} 
        placeholder={placeholder}
        value={data[name] || ''}
        onChange={e => onChangeHandler(e)}
        onBlur={() => {
          setInputBlur(true)
          setInputIsTouched(false)
        }}
        onFocus={() => {
          setInputIsTouched(true)
        }}
        // required
      />
      <label htmlFor={name}>{inputIcon}</label>
      {error && errorInput && <p className='error__message'>{error}</p>}
    </div>
  )
}

export default MainInput