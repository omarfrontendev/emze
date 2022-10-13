import React from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'

import './RowCounter.scss'

const RowCounter = ({ count, setCount, type}) => {

  return (
      <div className='row__counter d-flex align-items-center justify-content-between'>
        <span>{count} {type}</span>
        <div className='count__container d-flex align-items-center justify-content-end'>
          <button
            onClick={() => setCount(prev => prev - 1)}
            disabled={count === 0}
          ><BiMinus /></button>
          <span>{count}</span>
          <button
            onClick={() => setCount(prev => prev + 1)}
          ><BiPlus /></button>
        </div> 
      </div>
  )
}

export default RowCounter