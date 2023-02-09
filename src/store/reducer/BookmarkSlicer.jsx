import { createSlice } from "@reduxjs/toolkit";

// create a slice for managing the bookmark state
const bookmarkSlicer = createSlice({
  name: "Bookmark",
  initialState : [], // initialize the state as an empty array
  reducers: {
    // add an item to the state
    Add: (state, action) => {
      // return a new array with the item added to the state
      return [...state, action.payload];
    }, 
        
    Remove: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload);
      console.log(index);
      state.splice(index, 1);
    }
  },
});


// export the actions for adding and removing items
export const { Add, Remove } = bookmarkSlicer.actions;
// export the reducer for the bookmark state
export default bookmarkSlicer.reducer;

