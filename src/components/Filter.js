import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
	const dispatch = useDispatch();

	return (
		<div className="container">
			<div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
				<div className="col-md-4 w-100">
					{/* div1  */}
					<input
						type="text"
						className="form-control w-100"
						placeholder="Search  Pizzas"
					/>
				</div>
				<div className="col-md-3 w-100">
					{/* div2--selection list  */}
					<select className="form-control w-100 mt-2">
						<option value="all">all 🍕🌶🍽</option>
						<option value="veg">veg🥦🥑</option>
						<option value="nonveg">nonveg🍗🥩</option>
					</select>
				</div>

				<div className="col-md-3 w-100">
					{/* div3 filter button  */}
					<button className="btn w-100 mt-2">FILTER</button>
				</div>
			</div>
		</div>
	);
};

export default Filter;
