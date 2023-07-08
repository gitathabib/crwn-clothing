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
const removeCartItem = (cartItems, itemToRemove) => {
	// find product is available in cart
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === itemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === itemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const clearCartItem = (cartItems, cartItemToClear) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const cartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemToCart: () => {},
	ClearItemFromCart: () => {},
	cartCount: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setcartCount] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	const addItemToCart = (productToAdd) => {
		setCartItems(addItemCart(cartItems, productToAdd));
	};
	const removeItemToCart = (itemToRemove) => {
		setCartItems(removeCartItem(cartItems, itemToRemove));
	};
	const ClearItemFromCart = (cartItemToClear) => {
		setCartItems(clearCartItem(cartItems, cartItemToClear));
	};

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => {
			let result = total + cartItem.quantity;
			return result;
		}, 0);

		setcartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const newtotalPrice = cartItems.reduce((total, cartItem) => {
			let result = total + cartItem.price * cartItem.quantity;
			return result;
		}, 0);

		setTotalPrice(newtotalPrice);
	}, [cartItems]);
	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		removeItemToCart,
		ClearItemFromCart,
		cartItems,
		cartCount,
		totalPrice,
	};

	return (
		<cartContext.Provider value={value}>{children}</cartContext.Provider>
	);
};
