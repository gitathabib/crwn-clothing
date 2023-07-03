import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../aseets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { cartContext } from "../../contexts/cart.context";

function Nevigation() {
	const { currentUser } = useContext(UserContext);
	const {isCartOpen} = useContext(cartContext);

	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-contaioner" to="/">
					<CrwnLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className="nav-link-sign-in" to="/auth">
							SIGN IN
						</Link>
					)}
					<Link className="nav-link" to="#">
						<CartIcon/>
					</Link>
				</div>
				{isCartOpen &&
				<CartDropdown/> } 
					
			</div>
			<Outlet />
		</Fragment>
	);
}

export default Nevigation;
