import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartReducer } from "../reducers/cartReducer";
import "./Screen.css";
import EmptyCart from "./EmptyCart";
import { MdDelete } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
import { addToCart, deleteFromCart } from "../actions/cartActions";
//MdDelete
//FiPlus
const Cartscreen = () => {
	const dispatch = useDispatch();
	const cartState = useSelector((state) => state.cartReducer);
	const { cartItems } = cartState;
	console.log("My cart items ======", cartItems);
	return (
		<div>
			{cartItems.length === 0 ? (
				<EmptyCart />
			) : (
				<div className="row justify-content-center">
					<div className="col-md-6">
						<h1 className="cartHeading">My Cart</h1>
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
											src={item.image}
											alt="pizza image"
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

					<div className="col-md-4"></div>
				</div>
			)}
		</div>
	);
};

export default Cartscreen;
