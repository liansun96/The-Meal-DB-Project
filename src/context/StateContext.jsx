import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const initialState = {
    bookmarks: [],
  };

  console.log(initialState.bookmarks);

  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "ADD_BOOKMARK":
        const item = action.payload;
        return {
          ...state,
          bookmarks: [...state.bookmarks, { ...item }],
        };
        // const isExisted = state.bookmarks.find((c) => c.id === item.id);
        // if (isExisted) {
        //   console.log("if");
        //   return {
        //     ...state,
        //     bookmarks: state.bookmarks.map((c) =>
        //       c.id === item.id ? { ...item } : { ...c }
        //     ),
        //   };
        // } else {
        //   console.log("else");
        //   return {
        //     ...state,
        //     bookmarks: [...state.bookmarks, { ...item }],
        //   };
        // }
      case "REMOVE_BOOKMARK":
        return {
          ...state,
          bookmarks: state.bookmarks.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      case "CART_BOOKMARK":
        return { ...state, bookmarks: (state.bookmarks = []) };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { state, dispatch };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
