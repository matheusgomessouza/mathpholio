import { useEffect, useState } from "react";

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState<number>(0);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);

      const handleResize = () => setScreenSize(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return screenSize;
}
