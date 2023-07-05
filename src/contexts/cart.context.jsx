import { createContext, useEffect, useState } from "react";

const addItemCart = (cartItems, productToAdd) => {
	// find product is available in cart
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);
	//if available then increase quanty
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	//if not available or a new product then add item into cartItems
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const cartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartCount: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setcartCount] = useState(0);
	const addItemToCart = (productToAdd) => {
		setCartItems(addItemCart(cartItems, productToAdd));
	};

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => {
			let result = total + cartItem.quantity;
			return result;
		}, 0);

		setcartCount(newCartCount);
	}, [cartItems]);
	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItems,
		cartCount,
	};

	return (
		<cartContext.Provider value={value}>{children}</cartContext.Provider>
	);
};
