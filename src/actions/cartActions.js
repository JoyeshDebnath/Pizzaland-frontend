// actions for cart

export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
	var cartItem = {
		name: pizza.name,
		_id: pizza._id,
		image: pizza.image,
		varient: varient,
		quantity: quantity,
		prices: pizza.prices,
		price: pizza.prices[0][varient] * quantity,
	};

	dispatch({ type: "ADD_TO_CART", payload: cartItem });
	const cartItems = getState().cartReducer.cartItems;
	//after dispatching the action of the carty we need to update the local storage
	localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
