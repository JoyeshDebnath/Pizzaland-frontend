import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";

const Filter = () => {
	const dispatch = useDispatch();
	const [searchKey, setSearchKey] = useState("");
	const [category, setCategory] = useState("all");

	return (
		<div className="container">
			<div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
				<div className="col-md-4 w-100">
					{/* div1  */}
					<input
						value={searchKey}
						onChange={(e) => setSearchKey(e.target.value)}
						type="text"
						className="form-control w-100 mt-2"
						placeholder="Search  Pizzas"
					/>
				</div>
				<div className="col-md-3 w-100">
					{/* div2--selection list  */}
					<select
						className="form-control w-100 mt-2"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value="all">ALL🍕🍕</option>
						<option value="veg">VEG🥦</option>
						<option value="nonveg">NONVEG🍤</option>
					</select>
				</div>

				<div className="col-md-3 w-100">
					{/* div3 filter button  */}
					<button
						className="btn w-100 mt-2"
						onClick={() => dispatch(filterPizzas(searchKey, category))}
					>
						FILTER
					</button>
				</div>
			</div>
		</div>
	);
};

export default Filter;
