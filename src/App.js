import React from "react";
import Home from "./components/routes/Home/home.component.jsx";
import { Route, Routes } from "react-router-dom";
import Nevigation from "./components/navigation/navigation.component.jsx";
import Authentication from "./components/autentication/authentication.component.jsx";
import Shop from "./components/routes/shop/shop.component.jsx";
import Checkout from "./components/chekout/checkout.component.jsx";

const App = () => {
	return (
	<Routes>
		<Route path="/" element={<Nevigation />}>			
			<Route index element={<Home />}/> 
			<Route path="/shop" element={<Shop/>}/>
			<Route path="/auth" element={<Authentication/>}/>
			<Route path="/Checkout" element={<Checkout/>}/>
		</Route>
	</Routes>
	);
};

export default App;
