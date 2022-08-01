import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPizzas, deletePizza } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./Screen.css";
const PizzasList = () => {
	const dispatch = useDispatch();
	const pizzasState = useSelector((state) => state.getAllPizzasReducer);
	const { pizzas, loading, error } = pizzasState;
	useEffect(() => {
		dispatch(getAllPizzas());
	}, []);

	return (
		<div className="flex-container flex-wrap">
			<h1>Pizzas List</h1>
			{loading && <Loading />}
			{error && <Error error="Something went wrong" />}

			<table className="table table-bordered">
				<thead className="thead-dark">
					<tr>
						<th>Name</th>
						<th>Pricing</th>
						<th>Category</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{pizzas &&
						pizzas.map((pizza) => {
							return (
								<tr>
									<td>{pizza.name}</td>
									<td>
										Small:{pizza.prices[0]["small"]}
										<br />
										Medium:{pizza.prices[0]["medium"]}
										<br />
										Large:{pizza.prices[0]["large"]}
										<br />
									</td>
									<td>{pizza.category}</td>
									<td>
										<Link to={`/admin/editpizza/${pizza._id}`}>
											<AiFillEdit className="icn " />
										</Link>
										<AiFillDelete
											className="icn text-danger"
											onClick={() => dispatch(deletePizza(pizza._id))}
										/>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default PizzasList;
