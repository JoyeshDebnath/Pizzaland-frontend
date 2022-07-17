import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Screen.css";
const EmptyCart = () => {
	return (
		<div className="EmptyCard_div">
			<Card className="cardContainer shadow-lg p-3 mb-5 bg-white rounded">
				<Card.Img
					variant="top"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVgVthuk6JYE41ANXAnFN7MZRrFJSziivNQ&usqp=CAU"
				/>
				<Card.Body>
					<Card.Text>
						Your Cart Is Empty Currently.. Lets add something here😎🍕🍕
					</Card.Text>
					<a className="btn" href="/">
						Lets Order
					</a>
				</Card.Body>
			</Card>
		</div>
	);
};

export default EmptyCart;
