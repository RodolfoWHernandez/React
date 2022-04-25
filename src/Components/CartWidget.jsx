import React, { Component } from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';

class CartWidget extends Component {
  render() {
    return <BsFillCartCheckFill style={{fontSize: '25px', marginLeft: '20px'}}/>
  }
}
export default CartWidget