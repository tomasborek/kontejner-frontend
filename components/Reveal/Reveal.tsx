import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Reveal = ({ children, delay = 0, className = "", stay = true }) => {
  const { ref, inView } = useInView();
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    if (stay) {
      if (inView) {
        setVisible(true);
      }
    } else {
      setVisible(inView);
    }
  }, [inView]);
  return (
    <motion.div
      className={className}
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 100 }}
      transition={{ duration: 1, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
