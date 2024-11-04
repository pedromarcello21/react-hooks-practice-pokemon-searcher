import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import { useEffect, useState} from 'react'


function PokemonCollection({ pokemon }) {

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemon.map(p => <PokemonCard key={p.id} name={p.name} hp={p.hp} frontImage={p.sprites.front} backImage={p.sprites.back}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
