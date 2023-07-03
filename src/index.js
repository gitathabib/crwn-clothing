import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { ProdcutsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<ProdcutsProvider>
				<CartProvider>
					<App />
				</CartProvider>
				</ProdcutsProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
