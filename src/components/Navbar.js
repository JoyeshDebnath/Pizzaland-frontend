import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
	const cartState = useSelector((state) => state.cartReducer);
	const { cartItems } = cartState;
	return (
		<div>
			<nav className="navbar navbar-expand-lg  shadow-lg p-3 mb-5 bg-white rounded">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						JD Pizza
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
							<li className="nav-item">
								<a className="nav-link" aria-current="page" href="#">
									Login
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
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
