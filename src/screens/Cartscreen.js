import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartReducer } from "../reducers/cartReducer";
import "./Screen.css";
import Checkout from "../components/Checkout";
import EmptyCart from "./EmptyCart";
import { MdDelete } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import Badge from "react-bootstrap/Badge";
//MdDelete
//FiPlus
const Cartscreen = () => {
	const dispatch = useDispatch();
	const cartState = useSelector((state) => state.cartReducer);
	const { cartItems } = cartState;
	var subTotal = cartItems.reduce((x, item) => x + item.price, 0);

	console.log("My cart items ======", cartItems);
	return (
		<div>
			{cartItems.length === 0 ? (
				<EmptyCart />
			) : (
				<div className="row justify-content-center">
					<div className="col-md-6">
						<h1 className="cartHeading">My Cart</h1>
						<Badge
							bg="secondary"
							className="text-left m-1 w-100"
							style={{ fontSize: "2rem" }}
						>
							Orders🍕:{" "}
							<span style={{ color: "#e63946", marginLeft: "10px" }}>
								{cartItems.length}
							</span>
						</Badge>
						<hr />
						{cartItems.map((item) => {
							return (
								<div className="flex-container">
									<div className="text-left m-1 w-100">
										{/* for basic pizza inf o */}
										<h1>
											{item.name}[{item.varient}]
										</h1>
										<h1>
											Price: {item.quantity}*{item.prices[0][item.varient]}={" "}
											{item.price}
										</h1>
										<h1 className="Quantity_h1">
											Quantity:
											<FiPlus
												className="plusIcon"
												onClick={() =>
													dispatch(
														addToCart(item, item.quantity + 1, item.varient)
													)
												}
											/>
											<b>{item.quantity}</b>
											<FiMinus
												className="minusIcon"
												onClick={() =>
													dispatch(
														addToCart(item, item.quantity - 1, item.varient)
													)
												}
											/>{" "}
										</h1>
										<hr />
									</div>

									<div className="m-1 w-100">
										{/* for the pizza image  */}
										<img
											className="cart_image"
											src={item.image[0]}
											alt="pizza images"
										/>
									</div>
									<div className="m-1 w-100">
										{/* for the delete btn  */}
										<MdDelete
											className="delete_icon"
											onClick={() => {
												dispatch(deleteFromCart(item));
											}}
										/>
									</div>
								</div>
							);
						})}
					</div>

					<div className="col-md-4 text-center">
						{/* subtotal card section here ... */}
						{/* <h2 style={{ fontSize: "35px" }}>SubTotal:{subTotal} RS./-</h2> */}
						<div className="row m-auto ">
							<div className="col-12 col-sm-8 shadow-lg p-3 mb-5 bg-white rounded">
								<div className="card border-light p-4">
									<div className="card-body p-0">
										<h5>Cart Summary</h5>
										<ul className="list-group list-group-sm mt-3">
											<li className="list-group-item d-flex">
												{" "}
												<span>Subtotal</span>{" "}
												<span className="ml-auto">{subTotal}</span>{" "}
											</li>
											<li className="list-group-item d-flex font-weight-bold h5 rounded-bottom">
												{" "}
												<span>Total</span>{" "}
												<span className="ml-auto">{subTotal}</span>{" "}
											</li>
										</ul>
										{/* <a
											className="btn btn-block btn-primary mt-4 mb-3 checkoutBtn"
											href="checkout.html"
										>
											Proceed to Checkout
										</a>{" "} */}
										<Checkout subTotal={subTotal} />
										<small>Taxes may apply before placing an order.</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cartscreen;
