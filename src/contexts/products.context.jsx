import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

export const ProdcutsContext = createContext({
	products: [],
});

export const ProdcutsProvider = ({ children }) => {
	const [products, setProducts] = useState(PRODUCTS);
	const value = { products };
	return (
		<ProdcutsContext.Provider value={value}>
			{children}
		</ProdcutsContext.Provider>
	);
};
