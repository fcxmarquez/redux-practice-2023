import { Searcher } from "@/components/Searcher";
import { PokeList } from "@/components/PokeList";
import { SearcherContainer, AppWrapper } from "@/styles/app.style";
import { Col, Row } from "antd";
import { GlobalStyles } from "@/styles/GlobalStyles";
import logo from "@/assets/logo.svg";
import { useEffect, useState } from "react";
import { getPokemon, PokemonType } from "@/api";

function App() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await getPokemon();
      setPokemons(response);
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

export default App;
