import axios from "axios";

//register user
export const registerUser = (user) => async (dispatch) => {
	dispatch({
		type: "USER_REGISTER_REQUEST",
		payload: user,
	});

	try {
		const response = await axios.post(`/api/users/register`, user);
		console.log("My user,", response);
		dispatch({ type: "USER_REGISTER_SUCCESS" });
	} catch (err) {
		dispatch({
			type: "USER_REGISTER_FAILED",
			payload: err,
		});
	}
};

//login user
export const loginUser = (user) => async (dispatch) => {
	dispatch({
		type: "USER_LOGIN_REQUEST",
		payload: user,
	});

	try {
		const response = await axios.post(`/api/users/login`, user);
		console.log("My user,", response);
		dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
		localStorage.setItem("currentUser", JSON.stringify(response.data));
		window.location.href = "/";
	} catch (err) {
		dispatch({
			type: "USER_LOGIN_FAILED",
			payload: err,
		});
	}
};
