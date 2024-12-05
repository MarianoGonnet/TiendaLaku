import { useState, useEffect } from 'react';

function useTamañoVentana() {
  const [versionMobile, setVersionMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    function checkearSiMobile() {
      setIsMobile(window.innerWidth <= 1000);
    }

    window.addEventListener('resize', checkearSiMobile);
    return () => window.removeEventListener('resize', checkearSiMobile);
  }, []);

  return versionMobile;
}

export default useTamañoVentana;
