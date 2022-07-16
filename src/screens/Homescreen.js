import React, { useEffect, useState } from "react";
// import pizzas from "../pizzasData";
import Pizza from "../components/Pizza";
import { useSelector, useDispatch } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";

const Homescreen = () => {
	const dispatch = useDispatch();
	const pizzasState = useSelector((state) => state.getAllPizzasReducer);
	console.log(pizzasState);
	const { pizzas, loading, error } = pizzasState;
	console.log("pizzas state=", pizzas);

	useEffect(() => {
		dispatch(getAllPizzas());
	}, []);

	return (
		<div>
			<div className="row justify-content-center">
				{loading ? (
					<h1>Loading ......</h1>
				) : error ? (
					<h1>Something went wrong ....</h1>
				) : (
					pizzas.map((pizza) => {
						return (
							<div className="col-md-3 m-3" key={pizza._id}>
								<div>
									<Pizza pizza={pizza} />
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};

export default Homescreen;
