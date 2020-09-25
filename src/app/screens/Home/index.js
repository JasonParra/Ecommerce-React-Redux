import React, { useState, createRef } from "react";

//Components
import TopBar from "../../components/TopBar";
import ProductCard from "../../components/ProductCard";
import { Sticky } from "semantic-ui-react";

//Styles
import Styles from "./styles.module.css";

function Home(props) {
	const contextRef = createRef();
	const [product, setProduct] = useState([]);

	return (
		<div ref={contextRef}>
			<div className={Styles.contianer}>
				<Sticky context={contextRef}>
					<TopBar></TopBar>
				</Sticky>
				<div className={Styles.products}>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
						return <ProductCard></ProductCard>;
					})}
				</div>
			</div>
		</div>
	);
}

export default Home;
