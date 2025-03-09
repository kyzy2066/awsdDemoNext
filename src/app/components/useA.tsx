import { useState } from "react";
const useA = () => {
    const [isActive, setIsActive] = useState(false);
    // const toggle = () => setIsActive((prev) => prev = true);
    const toggle = () => setIsActive(true);

  
    return { isActive, toggle };
  };
  export default useA;