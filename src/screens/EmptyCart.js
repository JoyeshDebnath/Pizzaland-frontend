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
					style={{ borderRadius: "30%", border: "none" }}
					// src="https://media.istockphoto.com/vectors/couch-potato-emoticon-vector-id813141786"
					src="https://i.gifer.com/26Pf.gif"
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
