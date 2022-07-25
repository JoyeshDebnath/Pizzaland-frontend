import React, { useEffect, useState } from "react";
// import pizzas from "../pizzasData";
import Pizza from "../components/Pizza";
import { useSelector, useDispatch } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import ReactLoading from "react-loading";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";

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
			<Filter />
			<div className="row justify-content-center">
				{loading ? (
					// <h1>Loading ......</h1>
					<Loading />
				) : error ? (
					<Error error="OOPS!! something Went wrong!!" />
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
