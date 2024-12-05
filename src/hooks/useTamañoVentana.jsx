import { useState, useEffect } from 'react';

function useTamañoVentana() {
  const [versionMobile, setVersionMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function checkearSiMobile() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', checkearSiMobile);
    return () => window.removeEventListener('resize', checkearSiMobile);
  }, []);

  return versionMobile;
}

export default useTamañoVentana;
