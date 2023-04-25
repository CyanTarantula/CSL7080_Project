import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<h1>About Page</h1>} />
				</Routes>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
