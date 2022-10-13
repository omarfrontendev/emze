import React from 'react'
import { Link } from 'react-router-dom'

import './UserDropdown.scss'

const UserDropdown = () => {

  const auth = true;

  return (
    <div className=' user__dropdown position-absolute d-flex flex-column justify-content-start'>
      {!auth && <Link to='/register-page' className='text-start'>Sign Up</Link>}
      {!auth && <Link to='/login-page' className='text-start'>Log in</Link>}
      {auth && <Link to='user-profile' className='text-start'>Profile</Link>}
      {auth && <Link to='user-history' className='text-start'>History</Link>}
    </div>
  )
}

export default UserDropdown