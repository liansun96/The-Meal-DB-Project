import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../card/Card';
import { v4 as uuidv4 } from "uuid";

const Bookmarks = () => {

  const {Bookmark} = useSelector(state => state)

console.log(Bookmark);
// console.log(state);

  return (
    <div className="flex flex-wrap gap-11 mb-6">
      {Bookmark?.map((meal) => (
        <Card key={uuidv4()} meal={meal} />
      ))}
    </div>
  )
}

export default Bookmarks