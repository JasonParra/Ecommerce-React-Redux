import React, { createRef } from "react";

//Components
import { Header, Label, Input, Button, Icon, Sticky } from "semantic-ui-react";

//Styles
import Styles from "./styles.module.css";

function TopBar(props) {
	return (
		<div className={Styles.container}>
			<div className={Styles.logo}>
				<Header as="h2" className={Styles.title}>
					easy
				</Header>
				<Label size={"big"} as="a" color={"pink"}>
					Pick
				</Label>
				<div className={Styles.search}>
					<Input size="large" icon="search" action>
						<input></input>
						<Button className={Styles.searchButton} basic>
							Buscar
						</Button>
					</Input>
				</div>
			</div>
			<div className={Styles.rigthSide}>
				<Header className={Styles.username} as="h4">
					usuario
				</Header>
				<Button className={Styles.avatar} circular basic icon={"user"}></Button>
				<Icon className={Styles.logOut} name="log out" size={"large"}></Icon>
			</div>
		</div>
	);
}

export default TopBar;
