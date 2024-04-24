import React, { createContext, useContext, useReducer } from "react";
import db from "../../data/db.json";
const SortContext = createContext(null);
const sortReducer = (state, action) => {
  switch (action.type) {
    case "price": {
      return [...state].sort(
        (firstValue, lastValue) => lastValue.price - firstValue.price
      );
    }
    case "rooms": {
      return [...state].sort(
        (firstValue, lastValue) => lastValue.roomCount - firstValue.roomCount
      );
    }
    case "address": {
      return [...state].sort((firstValue, lastValue) =>
      lastValue.citry.localeCompare(firstValue.citry)
      );
    }
    case "size": {
      return [...state].sort(
        (firstValue, lastValue) => firstValue.meterage - lastValue.meterage
      );
    }
    default:
      return state;
  }
};

function SortProvider({ children }) {
  const [state, dispatch] = useReducer(sortReducer, [...db.homes]);
  console.log(state);
  return (
    <SortContext.Provider value={{ state, dispatch }}>
      {children}
    </SortContext.Provider>
  );
}
export const useSort = () => {
  return useContext(SortContext);
};
export default SortProvider;
