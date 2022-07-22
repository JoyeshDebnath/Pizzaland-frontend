import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import reducers
import { getAllPizzasReducer } from "./reducers/pizzaReducers";
import { cartReducer } from "./reducers/cartReducer";
import { userReducer, loginUserReducer } from "./reducers/UserReducer";
import { placeOrderReducer } from "./reducers/orderReducers";
// import reducers

// step1 :combine all reducers into a single combined reducer function
const finalReducer = combineReducers({
	getAllPizzasReducer,
	cartReducer,
	userReducer, //for rgeister user
	loginUserReducer,
	placeOrderReducer,
});

const currentUser = localStorage.getItem("currentUser")
	? JSON.parse(localStorage.getItem("currentUser"))
	: null;
const cartItems = localStorage.getItem("cartItems")
	? JSON.parse(localStorage.getItem("cartItems"))
	: [];
//step2 - create a redux store with the combined reducers
// store ie create store take s 3 params 1st .. combinedreducers , 2nd is initialstate  and 3rd is composenehancers which is created with compose with  devtools
const initialState = {
	cartReducer: { cartItems: cartItems },
	loginUserReducer: {
		currentUser: currentUser,
	},
};
const composeEnhancers = composeWithDevTools({});
// composeenhancers(applyMiddleWare(thunk))
const store = createStore(
	finalReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
