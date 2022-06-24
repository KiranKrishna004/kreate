/** @format */

import "./App.css";
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar";
import Details from "./Pages/Details";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/:id' element={<Details />} />
				<Route path='/products' element={<Products />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</Router>
	);
};

export default App;
