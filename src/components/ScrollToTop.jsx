import React from 'react'
import {BsFillArrowUpSquareFill} from 'react-icons/bs'

const ScrollToTop = () => {

    const scrollTop = () => {
        window.scrollTo(0,0)
    }

  return (
    <button onClick={scrollTop} className='fixed bottom-3 right-3 lg:bottom-8 lg:right-8'>
        <BsFillArrowUpSquareFill className='text-3xl text-light duration-200 hover:text-success'/>
    </button>
  )
}

export default ScrollToTop