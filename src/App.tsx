import { Searcher } from "@/components/Searcher";
import { PokeList } from "@/components/PokeList";
import { SearcherContainer, AppWrapper } from "@/styles/app.style";
import { Col, Row } from "antd";
import { GlobalStyles } from "@/styles/GlobalStyles";
import logo from "@/assets/logo.svg";
import { useEffect } from "react";
import { PokemonType } from "@/api";
import { shallowEqual, useSelector } from "react-redux";
import { useAppDispatch } from "@/main";
import { RootState } from "./reducers/rootReducer";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";

function App() {
  const pokemons = useSelector((state: RootState) => state.data.pokemons, shallowEqual);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: "TEST_ACTION" });
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <>
      <GlobalStyles />
      <AppWrapper className="App">
        <Row justify={"center"}>
          <Col xs={12} md={8} className="logo-container">
            <img src={logo} alt="logo" />
          </Col>
        </Row>
        <Row justify={"center"}>
          <SearcherContainer xs={16} sm={24}>
            <Searcher />
          </SearcherContainer>
        </Row>
        <PokeList pokemons={pokemons as PokemonType[]} />
      </AppWrapper>
    </>
  );
}

export default App;
