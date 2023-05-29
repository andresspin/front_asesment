import React from "react";

export const initialContext = {
  products: {
    data: [],
  },

  redirectDetailsRoute: "",
};
export const Context = React.createContext(initialContext);
