import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/home_page/HomePage.jsx";
import ContactPage from "./components/contact_page/ContactPage.jsx";
import ProductPage from "./components/Product/Product.jsx"
import IntroPage from "./components/intro_page/IntroPage.jsx";
import QuestionPage from "./components/question_page/questionPage.jsx";
import UserLayout from "./layouts/UserLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import ProductList from "./components/Product/ProductList.jsx";
import ProductUpload from "./components/Product/ProductUpload.jsx";
import ProductDetail from "./components/Product/ProductDetail.jsx"
function App() {
	return (
		<BrowserRouter>
			
			<Routes>
				<Route path='/' element={<UserLayout/>}>
					<Route path='/' element={<HomePage />} />
					<Route path='/contact' element={<ContactPage />} />
					<Route path='/products' element={<ProductPage />} />

					<Route path='/products/detail' element={<ProductDetail />} />

					<Route path="/introduction" element={<IntroPage />} />
					<Route path="/community" element={<></>} />
					<Route path="/questions" element={<QuestionPage/>} />

				</Route>
				<Route path='/admin' element={<AdminLayout/>}>
					<Route path='/admin/products/list' element={<ProductList />} />
					<Route path='/admin/products/upload' element={<ProductUpload />} />
					
				</Route>
			</Routes>
			
		</BrowserRouter>
	);
}

export default App;
