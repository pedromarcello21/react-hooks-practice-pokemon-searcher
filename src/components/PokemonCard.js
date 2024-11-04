import React from "react";
import { Card } from "semantic-ui-react";
import { useState } from 'react'

function PokemonCard({id, name, hp, frontImage, backImage}) {

  const [image, setImage] = useState(frontImage)



  function handleImage(){
    image == frontImage ? setImage(backImage) : setImage(frontImage)
  }


  return (
    <Card key={id}>
      <div>
        <div className="image">
          <img alt={name} src={image} onClick={handleImage}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
