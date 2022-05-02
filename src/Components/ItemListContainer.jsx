import React from 'react'
import Card from './Card'
import ItemCount from './ItemCount'
import leon from '../../src/assets/images/leon.jpg'
import jirafa from '../../src/assets/images/jirafa.jpg'
import panda from '../../src/assets/images/panda.jpg'

const ItemListContainer = () => {

  const onAdd = (cantidad) => {
    console.log('Seleccionaste ${cantidad}')
  }

  return (
    <>
    <div className="bg-yellow" style={{display:'flex', flexDirection:'row'}}> 
        <Card 
            greeting={"Esta es la prop greeting"}
            image={leon}
        />
        <Card 
            greeting={"Esta es la prop greeting"}
            image={jirafa}
        />
        <Card 
            greeting={"Esta es la prop greeting"}
            image={panda}
        />

        
    </div>
    <div>
      
    <ItemCount stock={15} initial={1} onAdd={onAdd} />

    </div>
    </>
  )
}

export default ItemListContainer