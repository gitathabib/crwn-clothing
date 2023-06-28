import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
//Import svg as react element
import { ReactComponent as CrwnLogo } from "../../aseets/crown.svg";
import './navigation.styles.scss'

function Nevigation() {
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
					<Link className="nav-link-sign-in" to="/sign-in">
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
}

export default Nevigation;
