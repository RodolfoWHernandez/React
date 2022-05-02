import React from 'react'
const Card = (props) => {


  return (
    
    <div className="bg-white text-black" style={{fontSize: '25px', margin: '20px'}}>
      <img style={{width:'250px'}} src={props.image}/>
      <h1>Titulo</h1>
      <p>{props.greeting}</p>
     </div>
    
    
  )
}

export default Card