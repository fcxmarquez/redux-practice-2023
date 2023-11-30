import { Searcher } from "@/components/Searcher";
import { PokeList } from "@/components/PokeList";
import { SearcherContainer, AppWrapper } from "@/styles/app.style";
import { Col, Row, Button } from "antd";
import { GlobalStyles } from "@/styles/GlobalStyles";
import logo from "@/assets/logo.svg";
import { useEffect } from "react";
import { PokemonType } from "@/api";
import { shallowEqual, useSelector } from "react-redux";
import { useAppDispatch } from "@/main";
import { RootState } from "./reducers/rootReducer";
import { fetchPokemonsWithDetails, resetSearch } from "./slices/dataSlice";

function App() {
  const pokemons = useSelector((state: RootState) => state.data.pokemons, shallowEqual);
  const searchedPokemons = useSelector(
    (state: RootState) => state.data.searchedPokemons,
    shallowEqual
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  const handleResetFilter = () => {
    dispatch(resetSearch());
  };

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
        {searchedPokemons.length > 0 ? (
          <Row justify={"center"}>
            <Col xs={8}>
              <Button
                type="primary"
                style={{ width: "100%" }}
                onClick={handleResetFilter}
              >
                Reset Filter
              </Button>
            </Col>
          </Row>
        ) : null}
        <PokeList
          pokemons={
            searchedPokemons.length > 0 ? searchedPokemons : (pokemons as PokemonType[])
          }
        />
      </AppWrapper>
    </>
  );
}

export default App;
