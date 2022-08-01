import React, { useState, useEffect } from "react";
import { addPizza } from "../actions/pizzaActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

const AddPizza = () => {
	const [name, setname] = useState("");
	const [smallprice, setsmallprice] = useState();
	const [mediumprice, setmediumprice] = useState();
	const [largeprice, setlargeprice] = useState();
	const [image, setimage] = useState("");
	const [description, setdescription] = useState("");
	const [category, setcategory] = useState("");
	const dispatch = useDispatch();
	const addpizzastate = useSelector((state) => state.addPizzaReducer);

	const { error, loading, success } = addpizzastate;
	const formHandler = (e) => {
		e.preventDefault();
		const pizza = {
			name,
			image,
			description,
			category,
			prices: {
				small: smallprice,
				medium: mediumprice,
				large: largeprice,
			},
		};
		console.log(pizza);
		dispatch(addPizza(pizza));
	};

	return (
		<div>
			<div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
				<h1>Add Pizza</h1>
				{loading && <Loading />}
				{error && <Error error="Something Went Wrong !!" />}
				{success && <Success success="New Pizza Added SuccessFully!" />}

				<form onSubmit={formHandler}>
					<input
						type="text"
						placeholder="Enter pizza name"
						value={name}
						className="form-control"
						onChange={(e) => {
							setname(e.target.value);
						}}
					/>
					<input
						type="text"
						placeholder="Enter Small Varient Prize"
						className="form-control"
						value={smallprice}
						onChange={(e) => {
							setsmallprice(e.target.value);
						}}
					/>
					<input
						className="form-control"
						type="text"
						placeholder="medium varient price"
						value={mediumprice}
						onChange={(e) => {
							setmediumprice(e.target.value);
						}}
					/>
					<input
						className="form-control"
						type="text"
						placeholder="large varient price"
						value={largeprice}
						onChange={(e) => {
							setlargeprice(e.target.value);
						}}
					/>
					<input
						className="form-control"
						type="text"
						placeholder="category"
						value={category}
						onChange={(e) => {
							setcategory(e.target.value);
						}}
					/>
					<input
						className="form-control"
						type="text"
						placeholder="description"
						value={description}
						onChange={(e) => {
							setdescription(e.target.value);
						}}
					/>
					<input
						className="form-control"
						type="text"
						placeholder="image url"
						value={image}
						onChange={(e) => {
							setimage(e.target.value);
						}}
					/>
					<button className="btn mt-3" type="submit">
						Add Pizza
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddPizza;
