import { configureStore } from "@reduxjs/toolkit";
import BookmarkSlicer from "./reducer/BookmarkSlicer";


const store = configureStore({
    reducer:{
        Bookmark:BookmarkSlicer
    }
})

export default store