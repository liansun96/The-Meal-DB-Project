import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const bookmarkSlicer = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    Add: (state, action) => {
      return [...state, action.payload];
    },
    Remove: (state, action) => {
      return state.filter((i) => i.id !== action.payload.id);
    },
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
