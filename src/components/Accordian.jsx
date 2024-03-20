import React from 'react'
import AccordianItem from './AccordianItem'

const Accordian = ({data}) => {
  return (
    <div className='accordion'>
        {data?.map((item , i) => (
            <AccordianItem {...item} num={i} key={i}/>
        ))}
    </div>
  )
}

export default Accordian