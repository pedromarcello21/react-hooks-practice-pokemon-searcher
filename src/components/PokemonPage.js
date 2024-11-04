import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useState, useEffect } from 'react'

function PokemonPage() {

  const [pokemon, setPokemon] = useState([])
  const [searchPokemon, setSearchPokemon] = useState("")

  const filteredPokemon = pokemon.filter(p => p.name.toLowerCase().startsWith(searchPokemon.toLowerCase()))

  // useEffect(() => {
  //   console.log("Search term:", searchPokemon);
  // }, [searchPokemon]);


  async function getPokemon(){
    const response = await fetch('http://localhost:3001/pokemon')
    const pokemonData = await response.json()
    setPokemon(pokemonData)
  }

  useEffect(() =>{
    getPokemon()
  }, [])


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemon={pokemon} setPokemon={setPokemon}/>
      <br />
      <Search setSearchPokemon={setSearchPokemon}/>
      <br />
      <PokemonCollection pokemon = {filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
