import { useState, useEffect } from "react";
import { breakpoints } from "@/utils/variables/breakpoints";

type Viewport = keyof typeof breakpoints;

export const useMediaQuerie = (type?: Viewport): boolean => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWidth(width);
  };

  const breakpoint = type ? parseInt(breakpoints[type]) : parseInt(breakpoints.tablet);

  return width < breakpoint;
};
