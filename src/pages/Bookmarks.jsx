import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../card/Card';
import { v4 as uuidv4 } from "uuid";


const Bookmarks = () => {

  const {Bookmark} = useSelector(state => state)

  console.log(Bookmark);
  
  return (
    <>
      {
        Bookmark.length > 0 ? (
          <div>
            <div className="flex justify-center mb-8">
            <h1 className='text-2xl font-Ubt font-bold '>Bookmarked Meals</h1>
          </div>      
        
          <div className="flex flex-wrap justify-center gap-16 lg:gap-11 lg:mb-6">
            {Bookmark?.map((meal) => (
              <Card key={uuidv4()} meal={meal}  />
            ))}
          </div>
          </div>
        ) : (
          <div>
            <p className='text-center'>There is no bookmark !</p>
          </div>
        )
      }
    </>
  )
}

export default Bookmarks