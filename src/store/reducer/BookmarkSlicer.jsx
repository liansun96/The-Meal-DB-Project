import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   BookmarkItem : []
};

const bookmarkSlicer = createSlice({
  name: "Bookmark",
  initialState : [],
  reducers: {
    Add: (state, action) => {
      return [...state, action.payload];
    },
    // Add: (state, { payload }) => {
    //   const inBookmark= state.find((item) => item.id === payload.id);
    
    //       if (inBookmark) {
    //         return [...state , payload];
    //       } else {
    //         return [...state, payload];            
    //       }
    // },

    Remove: (state, action) => {
      return state.filter((i) => i.id !== action.payload.id);
    },

    // Remove: (state, action) => {
    //   const itemId = action.payload;
    //   state.BookmarkItem = state.BookmarkItem.filter((item) => item.id !== itemId);
    // },

    Edit: (state, action) => {
      return state.map((i) =>
        i.id === action.payload.id
          ? { id: i.id, name: action.payload.name, phone: action.payload.phone }
          : i
      );
    },
  },
});

export const { Add, Remove, Edit } = bookmarkSlicer.actions;
export default bookmarkSlicer.reducer;
