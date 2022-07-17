export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			const alreadyExists = state.cartItems.find(
				(item) => item._id === action.payload._id
			);

			if (alreadyExists) {
				// check if the added item already exists in the cartitems . if already exists just add the updated action.payload
				//and if already doesnot exists then we need to add the item to the cart items ............
				return {
					...state,
					cartItems: state.cartItems.map((item) =>
						item._id === action.payload._id ? action.payload : item
					),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, action.payload],
				};
			}
		case "DELETE_FROM_CART":
			return {
				...state,
				cartItems: state.cartItems.filter(
					(item) => item._id !== action.payload._id
				),
			};
		default:
			return state;
	}
};
