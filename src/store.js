import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import reducers
import { getAllPizzasReducer } from "./reducers/pizzaReducers";
// import reducers

// step1 :combine all reducers into a single combined reducer function
const finalReducer = combineReducers({
	getAllPizzasReducer,
});

//step2 - create a redux store with the combined reducers
// store ie create store take s 3 params 1st .. combinedreducers , 2nd is initialstate  and 3rd is composenehancers which is created with compose with  devtools
const initialState = {};
const composeEnhancers = composeWithDevTools({});
// composeenhancers(applyMiddleWare(thunk))
const store = createStore(
	finalReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
