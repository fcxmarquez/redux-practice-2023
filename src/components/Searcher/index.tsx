import { Input } from "antd";
import { searchPokemon } from "@/slices/dataSlice";
import { useAppDispatch } from "@/main";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "@/reducers/rootReducer";
import { useEffect, useState } from "react";

export const Searcher = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const searchedPokemons = useSelector(
    (state: RootState) => state.data.searchedPokemons,
    shallowEqual
  );

  useEffect(() => {
    if (searchedPokemons.length === 0) {
      setValue("");
    }
  }, [searchedPokemons]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSearch = (value: string) => {
    dispatch(searchPokemon(value));
  };

  return <Input.Search value={value} onSearch={handleSearch} onChange={handleOnChange} />;
};
