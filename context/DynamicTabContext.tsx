import React, { createContext, useContext } from "react";
import store from "../store";

const DynamicTabContext = createContext(store);

export const DynamicTabProvider: React.FC = ({ children }) => {
  return <DynamicTabContext.Provider value={store}>{children}</DynamicTabContext.Provider>;
};

export const useDynamicTabContext = () => {
  return useContext(DynamicTabContext);
};
