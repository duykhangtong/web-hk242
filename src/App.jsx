import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/home_page/HomePage.jsx";
import ContactPage from "./components/contact_page/ContactPage.jsx";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/contact' element={<ContactPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
