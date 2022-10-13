import React, { useState } from 'react'
import { MainInput } from '../'
import { BsGoogle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import './LoginForm.scss'

const LoginForm = ({ sources, login }) => {

  const [data, setData] = useState({});

  let validate = false;

  if(!login) {
    if(data?.userName !== '' && data?.userEmail?.includes('@') && data?.mobileNumber?.length > 10 && data?.address !== '' && data?.password?.length > 6 && data?.confirmPassword === data?.password) {
      validate = true;
    }
  }else if(login) {
    if(data?.email?.includes('@') && data?.password?.length > 0) {
      validate = true;
    }
  }

  return (
    <div className='login__form__container'>
      <h3>{login ? 'Sign In' : 'Sign Up' }</h3>
      <p>{login ? 'Good To See You Back.' : 'Create Account to continue!' }</p>
      {login && (
        <>
          <div 
            className="continue__with d-flex align-items-center justify-content-between"
            >
            <h4 className='text-center'>Continue With</h4>
            <button className='button__sign__with d-flex align-items-center'>
              <BsGoogle />Google
            </button>
          </div>
          <div div className="or text-center">OR</div>
        </>
      )}
      <form 
        className='login__form d-flex flex-column'
        onSubmit={e => e.preventDefault()}
      >
        {sources.map(input => (
          <MainInput 
            key={input.id}
            name={input.id}
            placeholder={input.placeholder}
            type={input.type}
            data={data}
            setData={setData}
            icon={input.icon}
            checkTheValue={input?.checkTheValue}
            error={input?.error}
          />
        ))}
        {login && <Link className='forget__passowrd text-end'>Forgot your password?</Link>}
        <button 
          disabled={!validate}
          className='login__btn'>{login ? 'Login' : 'Register'}
        </button>
      </form>
      <div className='switch__btn'>{login ? "Don't have an Account? " : "Already have an Account? "} <span>{login ? <Link onClick={() => setData({})} to='/register-page'>Sign Up</Link> : <Link onClick={() => setData({})} to='/login-page'>Sign In</Link>}</span></div>
    </div>
  )
}

export default LoginForm