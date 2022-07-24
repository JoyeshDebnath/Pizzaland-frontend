import axios from "axios";

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
	const currentUser = getState().loginUserReducer.currentUser;
	const cartItems = getState().cartReducer.cartItems;
	dispatch({ type: "PLACE_ORDER_REQUEST" });

	try {
		const response = await axios.post("/api/orders/placeorder", {
			token,
			subTotal,
			currentUser,
			cartItems,
		});
		dispatch({ type: "PLACE_ORDER_SUCCESS" });
		console.log("response,", response);
	} catch (error) {
		dispatch({ type: "PLACE_ORDER_FAILED" });
		console.error(error);
	}
};

export const getUserOrders = () => async (dispatch, getState) => {
	const currentUser = getState().loginUserReducer.currentUser;
	dispatch({
		type: "GET_USER_ORDERS_REQUEST",
	});

	try {
		const response = await axios.post("/api/orders/getuserorders", {
			userid: currentUser._id,
		});
		console.log("response =", response);
		dispatch({
			type: "GET_USER_ORDERS_SUCCESS",
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: "GET_USER_ORDERS_FAILED",
			payload: error,
		});
	}
};
