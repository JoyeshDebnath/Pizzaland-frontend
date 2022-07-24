import logo from "./logo.svg";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/Homescreen";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import CartScreen from "./screens/Cartscreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import Profile from "./Profile";
import OrderScreen from "./screens/OrderScreen";
function App() {
	return (
		<div className="App">
			<Navbar />
			<BrowserRouter>
				<Route path="/" exact component={HomeScreen} />
				<Route path="/cart" exact component={CartScreen} />
				<Route path="/login" exact component={LoginScreen} />
				<Route path="/register" exact component={RegisterScreen} />
				<Route path="/profile" exact component={Profile} />
				<Route path="/orders" exact component={OrderScreen} />
			</BrowserRouter>
		</div>
	);
}

export default App;
