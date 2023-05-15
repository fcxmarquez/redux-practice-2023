import styled from "styled-components";

export const PokeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  padding: 1rem 0;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;
