import React from 'react'

const Skeleton = () => {
  return (
    <div className="group">
      <div className='w-[200px] h-[310px] flex flex-col items-center justify-between border text-center rounded-lg duration-300 group-hover:shadow-lg'>
        <div className="">
          
        </div>
        <div className="mb-3">
          <button className='py-4 px-20 bg-blue-200 duration-200 hover:bg-blue-300 rounded-lg'>
            
          </button>
        </div>
      </div>
    </div>
  )
}

export default Skeleton