import React from "react";
import Home from "./components/routes/Home/home.component.jsx";
import { Route, Routes } from "react-router-dom";
import Nevigation from "./components/navigation/navigation.component.jsx";

const Shop = ()=>{
	return(<div>
		<h1>This is Shop</h1>
	</div>)
}

const App = () => {
	return (
	<Routes>
		<Route path="/" element={<Nevigation />}>			
			<Route index element={<Home />}/> 
			<Route path="/shop" element={<Shop/>}/>
		</Route>
	</Routes>
	);
};

export default App;
