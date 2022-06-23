/** @format */

import "./App.css";
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products' element={<Products />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
			<div>Hello</div>
		</Router>
	);
};

export default App;
