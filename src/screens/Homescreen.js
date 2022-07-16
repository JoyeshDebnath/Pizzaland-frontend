import React, { useEffect, useState } from "react";
// import pizzas from "../pizzasData";
import Pizza from "../components/Pizza";
import { useSelector, useDispatch } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import ReactLoading from "react-loading";

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
					// <h1>Loading ......</h1>
					<div
						style={{
							display: "flex",
							height: "100vh",
							width: "100vw",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<ReactLoading
							type="bars"
							color="#3a86ff"
							height={80}
							width={100}
							// style={{ position: "absolute", top: "50%" }}
						/>
					</div>
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
