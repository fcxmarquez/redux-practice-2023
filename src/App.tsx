import { Searcher } from "@/components/Searcher";
import { PokeList } from "@/components/PokeList";
import { SearcherContainer, AppWrapper } from "@/styles/app.style";
import { Col, Row } from "antd";
import { GlobalStyles } from "@/styles/GlobalStyles";
import logo from "@/assets/logo.svg";
import { useEffect } from "react";
import { PokemonType, getPokemon } from "@/api";
import { connect } from "react-redux";
import { setPokemons as setPokemonsActions } from "@/actions";
import { PokemonPayload } from "@/types/action.type";
import { initialState } from "./reducers/pokemons";
import { Dispatch } from "redux";

type AppProps = {
  pokemons: PokemonType[];
  setPokemons: (value: PokemonPayload) => void;
};

function App({ pokemons, setPokemons }: AppProps) {
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await getPokemon();
      setPokemons({ pokemons: response });
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
        <PokeList pokemons={pokemons} />
      </AppWrapper>
    </>
  );
}

const mapStateToProps = (state: typeof initialState) => ({
  pokemons: state.pokemons,
}); // a function that takes the state and returns an object

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setPokemons: (value: PokemonPayload) => dispatch(setPokemonsActions(value)),
}); // a function that takes dispatch and returns an object

export default connect(mapStateToProps, mapDispatchToProps)(App);
