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

//logout user from
export const logoutUser = () => (dispatch) => {
	localStorage.removeItem("currentUser");

	window.location.href = "/login";
};
//get all users actions
export const getAllUsers = () => async (dispatch) => {
	dispatch({ type: "GET_USERS_REQUEST" });

	try {
		const response = await axios.get("/api/users/getallusers");
		console.log(response.data);
		dispatch({ type: "GET_USERS_SUCCESS", payload: response.data });
	} catch (error) {
		dispatch({ type: "GET_USERS_FAILED", payload: error });
	}
};

export const deleteUser = (userid) => async (dispatch) => {
	try {
		await axios.post("/api/users/deleteuser", { userid });
		alert("User deleted successfully");
		window.location.reload();
	} catch (error) {
		alert("Something went wrong");
		console.log(error);
	}
};
