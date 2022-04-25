import React from 'react'
import image1 from '../assets/images/jirafa.jpg'

const Card = (props) => {
  return (
    
    <div className="d-inline-block bg-white text-black" style={{fontSize: '25px', margin: '20px'}}>
      <img className="w-100" src={image1}/>
      <h1>Titulo</h1>
      <p>{props.greeting}</p>
      <p>Descripcion</p>

    </div>
    
    
  )
}

export default Card