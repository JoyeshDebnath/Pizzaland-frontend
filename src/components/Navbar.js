import React from "react";
import "../index.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/UserActions";
import Badge from "@mui/material/Badge";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
	const dispatch = useDispatch();
	const cartState = useSelector((state) => state.cartReducer);
	const userState = useSelector((state) => state.loginUserReducer);
	const { currentUser } = userState;
	const { cartItems } = cartState;
	return (
		<div>
			<nav className="navbar navbar-expand-sm shadow-lg p-3 mb-5 bg-white rounded ">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						PizzaLand
						<img
							// className="navLogo"
							className="rounded-circle ml-2 navLogo img-fluid"
							//  src="/PizzaLand.png"
							src="/PizzaLandLogo.gif"
						/>
					</a>

					{/* <button
						classNameName="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					> */}
					{/* <span className="navbar-toggler-icon"> */}
					{/* <GiHamburgerMenu style={{ color: "black" }} /> */}
					{/* </span> */}
					{/* </button> */}
					<div className="d-flex flex-column" id="navbarNav">
						<ul className="navbar-nav ml-auto">
							{currentUser ? (
								<Dropdown className="mt-1">
									<Dropdown.Toggle variant="success" id="dropdown-basic">
										{currentUser.name}
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item href="/orders">Orders</Dropdown.Item>
										<Dropdown.Item
											href="#/action-3"
											onClick={() => dispatch(logoutUser())}
										>
											Logout
										</Dropdown.Item>
										<Dropdown.Item href="/profile">
											About developer
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							) : (
								<li className="nav-item">
									<a className="nav-link" aria-current="page" href="/login">
										Login
									</a>
								</li>
							)}

							<li className="nav-item">
								<a className="nav-link" href="/cart">
									<Badge badgeContent={cartItems.length} color="primary">
										<FaShoppingCart
											style={{ color: "#000000", fontSize: "1.5rem" }}
										/>
									</Badge>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
