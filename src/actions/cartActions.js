// actions for cart

export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
	var cartItem = {
		name: pizza.name,
		_id: pizza._id,
		image: pizza.image,
		varient: varient,
		quantity: Number(quantity),
		prices: pizza.prices,
		price: pizza.prices[0][varient] * quantity,
	};
	// have a check if the cart items quantity exceeded 10 quantities or not ....
	if (cartItem.quantity > 10) {
		return alert("You cannot add more than 10 qunatities!!");
	} else {
		if (cartItem.quantity <= 0) {
			dispatch({ type: "DELETE_FROM_CART", payload: pizza });
		} else {
			dispatch({ type: "ADD_TO_CART", payload: cartItem });
		}
	}

	const cartItems = getState().cartReducer.cartItems;
	//after dispatching the action of the carty we need to update the local storage
	localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

// deleting from the cart .....

export const deleteFromCart = (pizza) => (dispatch, getState) => {
	dispatch({ type: "DELETE_FROM_CART", payload: pizza });

	// update in the loacal staorage
	const cartItems = getState().cartReducer.cartItems;
	localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
