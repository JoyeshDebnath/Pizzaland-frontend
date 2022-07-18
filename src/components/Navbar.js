import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
	const cartState = useSelector((state) => state.cartReducer);
	const userState = useSelector((state) => state.loginUserReducer);
	const { currentUser } = userState;
	const { cartItems } = cartState;
	return (
		<div>
			<nav className="navbar navbar-expand-lg  shadow-lg p-3 mb-5 bg-white rounded">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						PizzaLand
						<img className="navLogo" src="/PizzaLand.png" />
					</a>

					<button
						classNameName="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ml-auto">
							{currentUser ? (
								// <div class="dropdown">
								// 	<a
								// 		class="btn btn-secondary dropdown-toggle"
								// 		type="button"
								// 		id="dropdownMenuButton"
								// 		data-toggle="dropdown"
								// 		aria-haspopup="true"
								// 		aria-expanded="false"
								// 	>
								// 		{currentUser.name}
								// 	</a>
								// 	<div
								// 		className="dropdown-menu"
								// 		aria-labelledby="dropdownMenuButton"
								// 	>
								// 		<a className="dropdown-item" href="#">
								// 			Orders
								// 		</a>
								// 		<a className="dropdown-item" href="#">
								// 			Logout
								// 		</a>
								// 	</div>
								// </div>
								<Dropdown className="mt-1">
									<Dropdown.Toggle variant="success" id="dropdown-basic">
										{currentUser.name}
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item href="#/action-2">Orders</Dropdown.Item>
										<Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
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
									Cart{cartItems.length}
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
