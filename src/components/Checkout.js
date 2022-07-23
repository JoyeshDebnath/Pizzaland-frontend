import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import Confett from "../components/Confett.js";
import Success from "../components/Success";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";
const Checkout = ({ subTotal }) => {
	const dispatch = useDispatch();

	const tokenHandler = (token) => {
		setPaid(true);
		console.log(token);
		dispatch(placeOrder(token, subTotal));
	};

	const [paid, setPaid] = useState(false);
	return (
		<div>
			{paid ? (
				<Success success="Payment Done!" />
			) : (
				<StripeCheckout
					amount={subTotal * 100}
					shippingAddress
					token={tokenHandler}
					stripeKey="pk_test_51LOHkdSAnIGRlOwYDGBs7CQOHssCoH57mNPfnSgdJqqbunkEfiqtmnO35mxvv2esnuAMjQlf9ffpxy73jse7ulFr00d7bVsXXl"
					currency="INR"
				>
					<button
						className="btn btn-block btn-primary mt-4 mb-3 checkoutBtn"
						href="checkout.html"
					>
						Proceed to Checkout
					</button>
				</StripeCheckout>
			)}
		</div>
	);
};

export default Checkout;
