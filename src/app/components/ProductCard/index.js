import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

import Styles from "./styles.module.css";

function ProductCard(props) {
	return (
		<Card className={Styles.noBorder}>
			<Image src="https://via.placeholder.com/290x300.png"></Image>
			<Card.Content className={Styles.noBorder}>
				<Card.Header>Matthew</Card.Header>
				<Card.Meta className={Styles.noBorder}>
					<span className="date">Joined in 2015</span>
				</Card.Meta>
				<Card.Description className={Styles.noBorder}>
					Matthew is a musician living in Nashville.
				</Card.Description>
			</Card.Content>
			<Card.Content className={Styles.noBorder} extra>
				<a>
					<Icon name="user" />
					22 Friends
				</a>
			</Card.Content>
		</Card>
	);
}

export default ProductCard;
