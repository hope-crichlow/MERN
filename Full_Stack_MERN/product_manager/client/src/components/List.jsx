// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const List = ({products}) => {
	return (
		<div>
			<h2>All Products</h2>
			<div className="container">
				<ul className="list-group list-group-flush">
					{
            products.map((product, i) => {
						  return (
                <li
                  key={i}
                  id={i}
                  className="list-group-item d-flex justify-content-between align-items-center "
                >
								  {product.title}
							  </li>
						);
				})};
				</ul>
			</div>
		</div>
	);
};

export default List;
