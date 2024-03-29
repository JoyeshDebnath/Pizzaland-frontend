import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiOutlineClose } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
//AiOutlineClose

const Pizza = ({ pizza }) => {
	Aos.init();
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);
	const [varient, setVarient] = useState("small");

	// for modals
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// adding to the cart ...
	function addtocart() {
		dispatch(addToCart(pizza, quantity, varient));
	}

	// foer modal
	return (
		<div
			// style={{ margin: "70px" }}
			data-aos="flip-left"
			data-aos-easing="ease-out-cubic"
			data-aos-duration="2000"
			className="shadow-lg p-3 mb-5 bg-white rounded"
		>
			<div onClick={handleShow}>
				<h1>{pizza.name}</h1>
				<img
					src={pizza.image[0]}
					className="img-fluid"
					style={{ height: "200px", width: "200px" }}
					alt="pizza imahge "
				/>
			</div>
			<div className="flex-container">
				<div className="w-100 m-1">
					{/* varient goes here  */}
					<p>Varients</p>
					<select
						className="form-control"
						value={varient}
						onChange={(e) => setVarient(e.target.value)}
					>
						{pizza.varients.map((varient) => {
							return <option value={varient}>{varient}</option>;
						})}
					</select>
				</div>

				{/* separte */}
				<div className="w-100 m-1">
					{/* Quantity  goes ghere  */}
					<p>Quantity</p>
					<select
						className="form-control"
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
					>
						{[...Array(10).keys()].map((x, i) => {
							return <option value={i + 1}>{i + 1}</option>;
						})}
					</select>
				</div>
			</div>

			{/* 2nd flex container for price and add to cart section */}
			<div className="flex-container">
				<div className="m-1 w-100">
					{/* price  */}
					<h1 className="mt-1">
						Price: {pizza.prices[0][varient] * quantity} Rs./-
					</h1>
				</div>
				<div className="m-1 w-100">
					{/* add to cart  */}
					<button className="btn" onClick={addtocart}>
						Add To Cart
					</button>
				</div>
			</div>

			{/* pizza modal ..... */}
			<Modal show={show}>
				<Modal.Header>
					<Modal.Title>{pizza.name}</Modal.Title>
					<AiOutlineClose
						style={{ fontSize: "2rem", fontWeight: "bold", cursor: "pointer" }}
						onClick={handleClose}
					/>
				</Modal.Header>

				<Modal.Body>
					{/* <img
						src={pizza.image[0]}
						alt="pizza imagse "
						className="img-fluid"
						style={{ height: "400px !important" }}
					/> */}
					<Carousel>
						{pizza.image.map((pic) => {
							return (
								<img
									src={pic}
									alt="pizza imagse "
									className="img-fluid"
									style={{ height: "400px !important" }}
								/>
							);
						})}
					</Carousel>
					<p>{pizza.description}</p>
				</Modal.Body>

				<Modal.Footer>
					<button className="btn" onClick={handleClose}>
						close
					</button>
				</Modal.Footer>
			</Modal>
			{/* pizza modal  */}
		</div>
	);
};

export default Pizza;
