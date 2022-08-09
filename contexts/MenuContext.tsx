import React, { useContext, createContext, useState, useEffect } from "react";

const menuContext = createContext(null);

export const useMenu = () => {
  return useContext(menuContext);
};

const MenuProvider = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    if (open) {
      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.overflowY = "scroll";
    }
  }, [open]);
  return (
    <menuContext.Provider value={[open, setOpen]}>
      {children}
    </menuContext.Provider>
  );
};

export default MenuProvider;
