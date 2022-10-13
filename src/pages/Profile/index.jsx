import React, { useState } from 'react'
import { MainInput } from '../../components';
import { MdAddCircleOutline, MdDelete } from 'react-icons/md'

import './Profile.scss'

const Profile = () => {

  const [data, setData] = useState({
    userName: 'Omar Abdo',
    userEmail: 'omar@gmail.com',
    mobileNumber: '01210196313',
    address: 'cairo',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF27G3Axfji9igHk-8_ThLnvI1QGiu_cX0Sg&usqp=CAU',
    userID: '',
  })

  const sources = [
    {
      id: 'userName',
      type: 'text',
      placeholder: 'Username',
      icon: 'userName',
      checkTheValue: value => value?.length > 0,
      error: "This filed can't be empty!",
    },
    {
      id: 'userEmail',
      type: 'email',
      placeholder: 'Email Address',
      icon: 'email',
      checkTheValue: value => value?.includes('@'),
      error: "Email must includes '@'!"
    },
    {
      id: 'mobileNumber',
      type: 'number',
      placeholder: 'Mobile Number',
      icon: 'mobile',
      checkTheValue: value => value?.length > 10,
      error: "Mobile number Must be more than 10 ch!"
    },
    {
      id: 'address',
      type: 'text',
      placeholder: 'Address',
      icon: 'address',
      checkTheValue: value => value?.length > 0,
      error: "This filed can't be empty!"
    }
  ];

  const changePassword = [
    {
      id: 'currentPassword',
      type: 'password',
      placeholder: 'current Password',
      icon: 'password',
      checkTheValue: value => value?.length > 6,
      error: "Password Must be more than 6 ch!"
    },
    {id: 'empty'},
    {
      id: 'newPassword',
      type: 'password',
      placeholder: 'New Password',
      icon: 'password',
      checkTheValue: value => value?.length > 6,
      error: "Password Must be more than 6 ch!"
    },
    {
      id: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm New Password',
      icon: 'password',
      checkTheValue: (value, _, password) => value === password,
      error: "The confirm password must matched with the new password!"
    },
  ];


  // Handle Image User

  const addImageUserHandler = (e) => {

    let files = e.target.files;

    let reader = new FileReader();

    reader.onload = e => {
      setData({
        ...data,
        image: e.target.result
      });
    };

    reader.readAsDataURL(files[0]);
  };

  // Handle Image User ID

  const addImageUserIdHandler = (e) => {

    let files = e.target.files;

    let reader = new FileReader();

    reader.onload = e => {
      setData({
        ...data,
        userID: e.target.result
      });
    };

    reader.readAsDataURL(files[0]);
  };

  //  validate Basic info Password Form : =

  let validateBasicForm = false;

  if(data?.userName !== '' && data?.userEmail?.includes('@') && data?.mobileNumber?.length > 10 && data?.address !== '') {
    validateBasicForm = true    
  }

  //  validate Change Password Form : =

  let validatePasseordForm = false;

  if(data?.currentPassword?.length > 6 && data?.newPassword?.length > 6 && data?.confirmPassword === data?.newPassword) {
    validatePasseordForm = true    
  }

  return (
    <div className='container'>
      <div className="profile__page">
      <h4 className='edit__data__title'>Basic Info</h4>
        <form onSubmit={e => e.preventDefault()}>
          <div className="row">
            <div className='col-12'>
              <div className='user__image__container'>
                <input 
                  onChange={addImageUserHandler} 
                  type='file' 
                  id='user__image' 
                  className='d-none'
                />
                <label className='user__image' htmlFor="user__image">
                  <MdAddCircleOutline className='add__image__icon' />
                  <img src={data.image ? data.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdhpJ2oJ0BBsqlzQ6oTSow_O_uUjkn05BSkpEcSsSgpdR-01Mv48NsbvAvU_g0M0eWk0&usqp=CAU'} alt='user__image' />
                </label>
                <button 
                  onClick={() => setData({...data, image: null})} 
                  className='mx-auto d-block mb-2'
                  style={{color: '#af4b4b', fontSize: '14px'}}
                >
                  <MdDelete />
                </button>
                <h2 className='user__name__title'>Omar Abd-Elrhman</h2>
              </div>
            </div>
            {sources.map(input => (
              <div className="col-6" key={input.id}>
                <div className='input__controle py-3'>
                  <MainInput 
                    name={input.id}
                    placeholder={input.placeholder}
                    type={input.type}
                    data={data}
                    setData={setData}
                    icon={input.icon}
                    checkTheValue={input?.checkTheValue}
                    error={input?.error}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className='form__btns d-flex align-items-center'>
            <button className='form__btn cancel__form' type='button'>Cancel</button>
            <button className='form__btn submit__form' disabled={!validateBasicForm} type='submit'>save</button>
          </div>
        </form>
        <div className='p-5'></div>
        <form onSubmit={e => e.preventDefault()}>
          <div className="row">
            <h4 className='edit__data__title'>Change Your Password</h4>
            {changePassword.map(input => (
              <div className="col-6" key={input.id}>
                <div className='input__controle py-3'>
                  <MainInput 
                    name={input.id}
                    placeholder={input.placeholder}
                    type={input.type}
                    data={data}
                    setData={setData}
                    icon={input.icon}
                    checkTheValue={input?.checkTheValue}
                    error={input?.error}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className='form__btns d-flex align-items-center'>
            <button className='form__btn cancel__form' type='button'>Cancel</button>
            <button className='form__btn submit__form' disabled={!validatePasseordForm} type='submit'>save</button>
          </div>
        </form>
        <div className='p-5'></div>
        <h4 className='edit__data__title'>Add Image For Your ID</h4>
        <form onSubmit={e => e.preventDefault()} className='d-flex flex-row-reverse'>
          <div className='user__image__id__container'>
            <input onChange={addImageUserIdHandler} type='file' id='user__image__id' className='d-none'/>
            <label className='user__image__id' htmlFor="user__image__id">
              <MdAddCircleOutline className='add__image__icon' />
              {data.userID && <img src={data.userID} alt='user__image__id' />}
            </label>
          </div>
          <div className='form__btns d-flex align-items-center justify-content-start'>
            <button className='form__btn cancel__form' type='button'>Cancel</button>
            <button className='form__btn submit__form' disabled={!data.userID} type='submit'>save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile