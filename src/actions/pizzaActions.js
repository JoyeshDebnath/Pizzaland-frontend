import axios from "axios";

//get all pizzas actions for getting all pizzas ....

export const getAllPizzas = () => async (dispatch) => {
	dispatch({
		type: "GET_PIZZAS_REQUEST",
	});

	try {
		const response = await axios.get("/api/pizzas/getallpizzas");
		console.log("response =", response);
		dispatch({
			type: "GET_PIZZAS_SUCCESS",
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: "GET_PIZZAS_FAILED",
			payload: error,
		});
	}
};

//Filtering of pizzas actions ...

export const filterPizzas = (searchKey, category) => async (dispatch) => {
	var filteredPizzas;

	dispatch({
		type: "GET_PIZZAS_REQUEST",
	});

	try {
		const response = await axios.get("/api/pizzas/getallpizzas");
		// console.log("response =", response);
		// filtering by serach key .....
		filteredPizzas = response.data.filter((pizza) => {
			return pizza.name.toLowerCase().includes(searchKey);
		});
		// filtering by category .....
		if (category !== "all") {
			filteredPizzas = response.data.filter((pizza) => {
				return pizza.category.toLowerCase() === category;
			});
		}

		dispatch({
			type: "GET_PIZZAS_SUCCESS",
			payload: filteredPizzas,
		});
	} catch (error) {
		dispatch({
			type: "GET_PIZZAS_FAILED",
			payload: error,
		});
	}
};
