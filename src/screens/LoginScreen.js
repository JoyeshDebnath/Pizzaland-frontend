import React, { useState, useEffect } from "react";
import { loginUser } from "../actions/UserActions";
import { useSelector, useDispatch } from "react-redux";
import { loginUserReducer } from "../reducers/UserReducer";
import Error from "../components/Error.js";
import Success from "../components/Success";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet";
import { BsFillPeopleFill } from "react-icons/bs";
const LoginScreen = () => {
	const dispatch = useDispatch();
	const loginState = useSelector((state) => state.loginUserReducer);
	const { error, loading, success } = loginState;

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
		<div className="login">
			<Helmet>
				<title>Login Page</title>
				<meta name="login" content="Helmet application" />
			</Helmet>
			<div className="row justify-content-center mt-5">
				<div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
					{loading && <Loading />}
					{/* {success && <Success success="User registered SuccessFully!" />} */}
					{error && <Error error="Invalid credentials !!" />}

					<h2 className="text-center m-3">
						Login
						{
							<span className="m-3">
								<BsFillPeopleFill />
							</span>
						}
					</h2>
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
						<br />
						<br />
						<a
							style={{
								marginTop: "15px",
								color: "black",
								textDecoration: "none",
							}}
							href="/register"
						>
							Click to register{" "}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
