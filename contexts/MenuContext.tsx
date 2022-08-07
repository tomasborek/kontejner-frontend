import React, { useContext, createContext, useState } from "react";

const menuContext = createContext(null);

export const useMenu = () => {
  return useContext(menuContext);
};

const MenuProvider = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <menuContext.Provider value={[open, setOpen]}>
      {children}
    </menuContext.Provider>
  );
};

export default MenuProvider;
