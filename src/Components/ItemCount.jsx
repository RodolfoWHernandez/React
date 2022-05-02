import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const Restar = () => {
        if(count === 1){
            console.log('Minimo un producto')
        }else {
            setCount(count - 1)
        }
     };

    const Sumar = () => {
        if(count >= stock){
            console.log('No hay stock suficiente')
        }else {
            setCount(count + 1)
        }
    };

    const agregarCarrito = () => {
        onAdd(count)

    };




  return (

        <div style={{display:'flex',margin:'10px',justifyContent:'center'}}>
            <button style={{margin:'5px', borderRadius:'1rem', padding:'2px 8px'}} onClick={Restar}> - </button>
            <h1 style={{margin:'5px', fontSize:'25px'}}>{count}</h1>
            <button style={{margin:'5px', borderRadius:'1rem', padding:'2px 6px'}} onClick={Sumar}>+</button>
            <button style={{margin:'5px', borderRadius:'1rem', padding:'2px 6px'}} onClick={agregarCarrito}>Agregar al carrito</button>
        </div>
  )
}

export default ItemCount