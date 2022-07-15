import React, { useEffect, useState } from "react";
import pizzas from "../pizzasData";
import Pizza from "../components/Pizza";
import { useSelector, useDispatch } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";

const Homescreen = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllPizzas());
	}, []);

	return (
		<div>
			<div className="row">
				{pizzas.map((pizza) => {
					return (
						<div className="col-md-4">
							<div>
								<Pizza pizza={pizza} key={pizza.name} />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Homescreen;
