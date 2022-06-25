/** @format */

import "./App.css";
import Products from "./pages/Products";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";

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
