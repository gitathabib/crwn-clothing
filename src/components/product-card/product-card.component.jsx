import {useContext} from "react";
import Button from "../button/button.componet";
import { cartContext } from "../../contexts/cart.context";
import './product-card.styles.scss'


const ProdcutCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const {addItemToCart}= useContext(cartContext);
	const addProductToCart = () => addItemToCart(product);
	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button buttonType="inverted" onClick={addProductToCart}>Add to card</Button>
		</div>
	);
};

export default ProdcutCard;
