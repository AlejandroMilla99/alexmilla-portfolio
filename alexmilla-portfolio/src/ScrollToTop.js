import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Forzar que el scroll comience en la parte superior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Cambia a "smooth" si quieres animación
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
