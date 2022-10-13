import React from 'react'
import { BecomeHostPage, HistoryPage, Home, PlaceDetailsPage, Profile } from './pages';
import { Header, Footer, LoginForm } from './components';
import { Route, Routes } from 'react-router-dom';

export const App = () => {

  const loginSources = [
    {
      id: 'email',
      type: 'email',
      placeholder: 'Email Address',
      icon: 'email',
      checkTheValue: value => value?.includes('@'),
      error: "Email must includes '@'!"
    },
    {
      id: 'password',
      type: 'password',
      placeholder: 'Password',
      icon: 'password',
      checkTheValue: value => value?.length > 6,
      // error: "Password Must be more than 6 ch!"
    },
  ];

  const registerSources = [
    {
      id: 'userName',
      type: 'text',
      placeholder: 'Username',
      icon: 'userName',
      checkTheValue: value => value?.length > 0,
      error: "This filed can't be empty!"
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
    },
    {
      id: 'password',
      type: 'password',
      placeholder: 'Password',
      icon: 'password',
      checkTheValue: value => value?.length > 6,
      error: "Password Must be more than 6 ch!"
    },
    {
      id: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      icon: 'password',
      checkTheValue: (value, password) => value === password,
      error: "The confirm password must matched with password!"
    },
  ];
  return (
    <>
      <Header />
      <div style={{paddingTop: '120px'}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/place-details' element={<PlaceDetailsPage />} />
          <Route 
            path='/login-page' 
            element={
                <LoginForm 
                  sources={loginSources} 
                  login={true} 
                />
              }
            />
          <Route 
            path='/register-page' 
            element={<LoginForm sources={registerSources} />} />
          <Route path='/user-profile' element={<Profile />} />
          <Route path='/user-history' element={<HistoryPage />} />
          <Route path='/become-host' element={<BecomeHostPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
