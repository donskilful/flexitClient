import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const INITIAL_STATE = {
  alert: null,
  type: ''
};

export const AlertContext = createContext(INITIAL_STATE);

export const AlertContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AlertReducer, INITIAL_STATE);

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        type: state.type,
        dispatch
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
