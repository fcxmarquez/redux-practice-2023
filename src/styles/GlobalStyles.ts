import { createGlobalStyle } from "styled-components";
import { breakpoints } from "@/utils/variables/breakpoints";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
  }

  body {
    padding: 0 1rem;
  }

  @media (min-width: ${breakpoints.desktop}){
   
    body {
      max-width: 1024px;
      margin: 0 auto;
    }
  }
`;
