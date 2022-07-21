import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/UserActions";
import Error from "../components/Error.js";
import Success from "../components/Success";
import Loading from "../components/Loading";

const RegisterScreen = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cpassword, setcPassword] = useState("");
	const registerState = useSelector((state) => state.userReducer);
	const { error, loading, success } = registerState;

	const register = () => {
		if (password !== cpassword) {
			return alert("Password Does not match!");
		} else {
			const user = {
				name,
				email,
				password,
			};
			console.log(user);
			dispatch(registerUser(user));
		}
	};

	return (
		<div>
			<div className="row justify-content-center mt-5">
				<div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
					{loading && <Loading />}
					{success && <Success success="User registered SuccessFully!" />}
					{error && <Error error="Email is already registered!!" />}

					<h2 className="text-center m-3">Register</h2>
					<div>
						<input
							type="text"
							placeholder="Enter name"
							className="form-control"
							value={name}
							required
							onChange={(e) => setName(e.target.value)}
						/>
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
						<input
							type="text"
							placeholder="Confirm Password"
							className="form-control"
							value={cpassword}
							required
							onChange={(e) => setcPassword(e.target.value)}
						/>
						<button onClick={register} className="btn mt-3">
							Register
						</button>
						<br />
						<br />
						<a
							style={{
								marginTop: "15px",
								color: "black",
								textDecoration: "none",
							}}
							href="/login"
						>
							Click to Login{" "}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterScreen;
