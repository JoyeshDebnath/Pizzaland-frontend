import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPizzaById, editPizza } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";
const EditPizza = ({ match }) => {
	const dispatch = useDispatch();
	const [name, setname] = useState("");
	const [smallprice, setsmallprice] = useState();
	const [mediumprice, setmediumprice] = useState();
	const [largeprice, setlargeprice] = useState();
	// const [image, setimage] = useState("");
	const [description, setdescription] = useState("");
	const [category, setcategory] = useState("");
	const getpizzabyidstate = useSelector((state) => state.getPizzaByIdReducer);

	const { pizza, loading, error } = getpizzabyidstate;

	const editpizzastate = useSelector((state) => state.editPizzaReducer);
	const { editloading, editerror, editsuccess } = editpizzastate;
	useEffect(() => {
		if (pizza) {
			if (pizza._id === match.params.pizzaid) {
				console.log("My piza ", pizza.name);
				setname(pizza.name);
				setdescription(pizza.description);
				setcategory(pizza.category);
				setsmallprice(pizza.prices[0]["small"]);
				setmediumprice(pizza.prices[0]["medium"]);
				setlargeprice(pizza.prices[0]["large"]);
				// setimage(pizza.image);
			} else {
				dispatch(getPizzaById(match.params.pizzaid));
			}
		} else {
			dispatch(getPizzaById(match.params.pizzaid));
		}
	}, [pizza, dispatch]);

	const formHandler = (e) => {
		e.preventDefault();
		const updatedPizza = {
			_id: match.params.pizzaid,
			name,
			// image,
			description,
			category,
			prices: {
				small: smallprice,
				medium: mediumprice,
				large: largeprice,
			},
		};
		console.log(updatedPizza);
		dispatch(editPizza(updatedPizza));
	};

	return (
		<div>
			<div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
				<h1>Edit Pizza🍕🍕</h1>
				{loading && <Loading />}
				{error && <Error error="Something Went Wrong !!" />}
				{editsuccess && (
					<Success success="Pizza Details Edited SuccessFully!" />
				)}
				{loading && <Loading />}
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
					{/* <input
						className="form-control"
						type="text"
						placeholder="image url"
						value={image}
						onChange={(e) => {
							setimage(e.target.value);
						}}
					/> */}
					<button className="btn mt-3" type="submit">
						Edit Pizza
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditPizza;
