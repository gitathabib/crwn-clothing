import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../aseets/shopping-bag.svg";
import React, { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount} = useContext(cartContext);

	const cartOpenClose = () => {
		setIsCartOpen(!isCartOpen);
	};
	return (
		<div className="cart-icon-container" onClick={cartOpenClose}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</div>
	);
};

export default CartIcon;
