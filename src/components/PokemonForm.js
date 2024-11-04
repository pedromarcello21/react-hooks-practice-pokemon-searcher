import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { v4 as uuid } from 'uuid'


function PokemonForm({ pokemon, setPokemon }) {
  const [name, setName] = useState("")
  const [hp, setHP] = useState("")
  const [frontImage, setFrontImage] = useState("")
  const [backImage, setBackImage] = useState("")

  const handleChangeName = e =>{
    setName(e.target.value)
  }

  const handleChangeHP = e =>{
    setHP(e.target.value)
  }

  const handleFrontImage = e =>{
    setFrontImage(e.target.value)
  }

  const handleBackImage = e =>{
    setBackImage(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const newPokemon = {
      id:uuid(),
      name:name,
      hp:hp, 
      sprites:{
        front:frontImage,
        back:backImage
      }
    }
    try{
      const response = await fetch('http://localhost:3001/pokemon', {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Accept':'application/json'
        },
        body:JSON.stringify(newPokemon)
      })
      const data = await response.json()
      const updatedPokemon = [...pokemon, data]

      setPokemon(updatedPokemon)
    }
    catch (error) {
      console.warn(error)
    }
    
    console.log("added pokemon")

  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChangeName} value = {name}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChangeHP} value = {hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFrontImage} 
            value = {frontImage}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleBackImage} 
            value = {backImage}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
