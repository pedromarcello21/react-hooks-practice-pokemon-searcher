import React from "react";

function Search({ setSearchPokemon }) {

  const handleInput = e =>{
    setSearchPokemon(e.target.value)
  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" type="text" onChange={handleInput}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
