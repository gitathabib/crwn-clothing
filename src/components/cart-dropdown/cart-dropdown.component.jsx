import {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../button/button.componet'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'
import { cartContext } from '../../contexts/cart.context'


const CartDropdown = () => {
  const {cartItems} = useContext(cartContext);
  const navigate = useNavigate();

  const gotoCheckOutHandler = () => {
    navigate('/checkout');
  }
  return (
    <div className='cart-dropdown-container'>
    <div className="cart-items">
    {cartItems.map((item) => 
      <CartItem key={item.id} cartItem={item}/>
    )}
    </div>
    <Button onClick={gotoCheckOutHandler}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown