import React from "react";

export const initialContext = {
  store: {
    products: [],
  },

  redirectDetailsRoute:"",
};
export const Context = React.createContext(initialContext);
