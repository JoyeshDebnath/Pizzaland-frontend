import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders } from "../actions/orderActions";
const OrdersList = () => {
	const dispatch = useDispatch();
	const allordersstate = useSelector((state) => state.getAllOrdersReducer);
	// console.log("All orders..", allordersstate);
	const { loading, error, orders } = allordersstate;
	useEffect(() => {
		dispatch(getAllOrders());
	}, []);

	return (
		<div>
			{loading && <Loading />}
			{error && <Error error="Something Went Wrong!" />}

			<table className="table table-striped table-bordered table-responsive-sm">
				<thead className="thead-dark">
					<tr>
						<th>Order Id</th>
						<th>Email</th>
						<th>User Id</th>
						<th>Amount</th>
						<th>Date</th>
						<th>Status</th>
					</tr>
				</thead>

				<tbody>
					{orders &&
						orders.map((order) => {
							return (
								<tr>
									<td>{order._id}</td>
									<td>{order.email}</td>
									<td>{order.userid}</td>
									<td>{order.orderAmount}</td>
									<td>{order.createdAt.substring(0, 10)}</td>
									<td>
										{order.isDelivered ? (
											<h1>Delivered</h1>
										) : (
											<button className="btn">Deliver</button>
										)}
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default OrdersList;
