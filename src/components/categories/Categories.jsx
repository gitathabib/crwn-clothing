import React from "react";
import "./categories.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Categories = ({category}) => {
	return (
		<div className="categories-container">
			{category.map(({ title, id, imageUrl }) => (
				<CategoryItem key={id} title={title} imageUrl={imageUrl} />
			))}
		</div>
	);
};

export default Categories;
