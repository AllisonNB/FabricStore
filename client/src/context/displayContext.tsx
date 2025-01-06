import { createContext, useState } from "react";
import dummyData from "../dummyData.json";

export const displayContext = createContext({
  selectedFilters: [],
  filteredItems: [{}],
});

export default function DisplayContextProvider({ children }) {
  const [mainDisplay, setMainDisplay] = useState({
    selectedFilters: [],
    filteredItems: [{}],
  });

  const ctxValue = {
    selectedFilters: mainDisplay.selectedFilters,
    filteredItems: mainDisplay.filteredItems,
  };

  return (
    <displayContext.Provider value={ctxValue}>
      {children}
    </displayContext.Provider>
  );
}
