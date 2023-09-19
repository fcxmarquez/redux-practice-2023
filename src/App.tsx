import { Searcher } from "@/components/Searcher";
import { PokeList } from "@/components/PokeList";
import { SearcherContainer, AppWrapper } from "@/styles/app.style";
import { Col, Row } from "antd";
import { GlobalStyles } from "@/styles/GlobalStyles";
import logo from "@/assets/logo.svg";
import { useEffect } from "react";
import { PokemonType, getPokemon } from "@/api";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getPokemonsWithDetails, setLoading } from "@/actions";
import { AppDispatch } from "@/main";
import { RootState } from "./reducers/rootReducer";
import { List } from "immutable";

function App() {
  const pokemons = useSelector(
    (state: RootState) =>
      state.getIn(["data", "pokemons"], shallowEqual) as List<PokemonType>
  )?.toJS();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchPokemon = async () => {
      dispatch(setLoading(true));
      const response = await getPokemon();
      await dispatch(getPokemonsWithDetails(response));
      dispatch(setLoading(false));
    };

    fetchPokemon();
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
