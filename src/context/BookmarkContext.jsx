import { useState, createContext } from 'react';

const BookmarkContext = createContext({});

const BookmarkProvider = ({children}) => {
  let [bookmarks, setBookmarks] = useState([]);

  return (
    <BookmarkContext.Provider value={{bookmarks, setBookmarks}}>
      {children}
    </BookmarkContext.Provider>
  );
};

export { BookmarkContext, BookmarkProvider };
