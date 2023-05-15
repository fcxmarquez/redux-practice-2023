import { Searcher } from "@/components/Searcher";
import { PokeList } from "@/components/PokeList";
import { SearcherContainer, AppWrapper } from "@/styles/app.style";
import { Row } from "antd";
import { GlobalStyles } from "@/styles/GlobalStyles";

const PokemonsMock = Array(10).fill("");

function App() {
  return (
    <>
      <GlobalStyles />
      <AppWrapper className="App">
        <Row justify={"center"}>
          <SearcherContainer xs={16} sm={24}>
            <Searcher />
          </SearcherContainer>
        </Row>
        <PokeList pokemons={PokemonsMock} />
      </AppWrapper>
    </>
  );
}

export default App;
