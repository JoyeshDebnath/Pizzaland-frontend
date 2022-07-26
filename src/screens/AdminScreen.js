import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Screen.css";
import { Switch, Route, Link } from "react-router-dom";
import UsersList from "./UsersList";
import OrdersList from "./OrdersList";
import PizzasList from "./PizzasList";
import AddPizza from "./AddPizza";
const AdminScreen = () => {
	const dispatch = useDispatch();
	const userState = useSelector((state) => state.loginUserReducer);
	const { currentUser } = userState;

	useEffect(() => {
		// if (currentUser.isAdmin === false) {
		// 	window.location.href = "/";
		// }
	}, []);
	return (
		<div>
			<div className="row justify-content-center">
				<div className="col-md-10">
					<h2 style={{ fontSize: "35px" }}>Order Screen</h2>
					<ul className="adminfunction">
						<li>
							<Link to={"/admin/userslist"}>Users List</Link>
						</li>
						<li>
							<Link to={"/admin/pizzaslist"}>Pizzas List</Link>
						</li>
						<li>
							<Link to={"/admin/addpizza"}>Add new Pizzas</Link>
						</li>
						<li>
							<Link to={"/admin/orderslist"}>Orders List</Link>
						</li>
					</ul>

					<Switch>
						<Route path="/admin" component={UsersList} exact />
						<Route path="/admin/userslist" component={UsersList} exact />
						<Route path="/admin/orderslist" component={OrdersList} exact />
						<Route path="/admin/pizzaslist" component={PizzasList} exact />
						<Route path="/admin/addpizza" component={AddPizza} exact />
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default AdminScreen;