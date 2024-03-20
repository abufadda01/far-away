import React, { useState } from 'react'


const AccordianItem = ({num , title , text}) => {

    const [isOpen , setIsOpen] = useState(false)

  return (
    <div onClick={() => setIsOpen(prev => !prev)} className={`item ${isOpen && "open"}`}>

        <p className='number'>{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
        <p className='text'>{title}</p>
        <p className='icon'>{isOpen ? "-" : "+"}</p>

        {isOpen && <div className='content-box'>{text}</div>}

    </div>
  )
}

export default AccordianItem