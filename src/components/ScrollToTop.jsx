import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, [pathname]); // The effect runs every time the pathname changes

  return <>{children}</>;
};

export default ScrollToTop;