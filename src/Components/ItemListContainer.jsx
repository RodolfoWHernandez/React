import React from 'react'
import Card from './Card'

const ItemListContainer = () => {
  return (
    <div className="bg-yellow"> 
        <Card 
            greeting={"Esta es la prop greeting"}
        />
        <Card 
            greeting={"Esta es la prop greeting"}
        />
        <Card 
            greeting={"Esta es la prop greeting"}
        />
        
    </div>
  )
}

export default ItemListContainer