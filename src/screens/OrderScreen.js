import React, { useState, useEffect } from "react";
import { MdOutlineBorderColor } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Error from "../components/Error.js";
import Success from "../components/Success";
import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";
import Loading from "../components/Loading";
const OrderScreen = () => {
	const orderState = useSelector((state) => state.getUserOrdersReducer);
	const { orders, error, loading } = orderState;
	console.log("Order state....", orderState);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUserOrders());
	}, []);

	const onButtonClick = () => {
		let domElement = document.getElementById("my-node");
		htmlToImage
			.toPng(domElement)
			.then(function (dataUrl) {
				console.log(dataUrl);
				const pdf = new jsPDF();
				pdf.addImage(dataUrl, "PNG", 10, 40, 380, 200);
				pdf.save("download.pdf");
			})
			.catch(function (error) {
				console.error("oops, something went wrong!", error);
			});
	};

	return (
		<div>
			<h2 style={{ fontSize: "35px" }}>
				My Orders <MdOutlineBorderColor />
			</h2>
			<hr />
			<div
				className="row justify-content-center"
				style={{ width: "100%" }}
				id="my-node"
			>
				{loading && <Loading />}
				{error && <Error error="Something went wrong" />}
				{orders &&
					orders.map((order) => {
						return (
							<div
								className="col-md-8 m-2 p-1 shadow-lg p-3 mb-5 bg-black rounded"
								data-aos="fade-down"
								style={{ backgroundColor: "#000814", color: "white" }}
							>
								<div className="flex-container flex-wrap ">
									<div className="text-center w-100 m-1 ">
										<h2 style={{ fontSize: "25px" }}>Items 🍕🍕</h2>
										<hr />
										{order.orderItems.map((item) => {
											return (
												<div>
													<p>
														{item.name} [{item.varient}] * {item.quantity} ={" "}
														{item.price}
													</p>
												</div>
											);
										})}
									</div>
									<div className="text-center w-100 m-1">
										<h2 style={{ fontSize: "25px" }}>Address 🏥</h2>
										<hr style={{ color: "white" }} />
										<p>Street : {order.shippingAddress.street}</p>
										<p>City : {order.shippingAddress.city}</p>
										<p>Country : {order.shippingAddress.country}</p>
										<p>Pincode : {order.shippingAddress.pincode}</p>
									</div>
									<div className="text-center w-100 m-1">
										<h2 style={{ fontSize: "25px" }}>Order Info 🖨</h2>
										<hr />
										<p>Order Amount : {order.orderAmount}</p>
										<p>Date : {order.createdAt.substring(0, 10)}</p>
										<p>Transaction Id : {order.transactionId}</p>
										<p>Order Id : {order._id}</p>
									</div>
								</div>
							</div>
						);
					})}
			</div>
			<button className="btn m-2" onClick={onButtonClick}>
				Download Bill
			</button>
		</div>
	);
};

export default OrderScreen;
