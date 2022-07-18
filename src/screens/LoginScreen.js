import React, { useState, useEffect } from "react";
import { loginUser } from "../actions/UserActions";
import { useSelector, useDispatch } from "react-redux";
const LoginScreen = () => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	useEffect(() => {
		if (localStorage.getItem("currentUser")) {
			window.location.href = "/";
		}
	}, []);
	const login = () => {
		const user = {
			email,
			password,
		};
		dispatch(loginUser(user));
	};

	return (
		<div>
			<div className="row justify-content-center mt-5">
				<div className="col-md-5 mt-5 text-left">
					<h2 className="text-center m-3">Login</h2>
					<div>
						<input
							type="text"
							placeholder="Enter Email"
							className="form-control"
							value={email}
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="text"
							placeholder="Enter Password"
							className="form-control"
							value={password}
							required
							onChange={(e) => setPassword(e.target.value)}
						/>

						<button onClick={login} className="btn mt-3">
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
