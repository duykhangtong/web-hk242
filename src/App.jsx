import "./Mazer/compiled/css/app.css";
import "./Mazer/compiled/css/app-dark.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import CommunityAdminPage from "./components/community_page/CommunityAdminPage.jsx";
import { CommunityDetailPage } from "./components/community_page/CommunityDetailPage.jsx";
import CommunityPage from "./components/community_page/CommunityPage.jsx";
import ContactPage from "./components/contact_page/ContactPage.jsx";
import HomePage from "./components/home_page/HomePage.jsx";
import IntroPage from "./components/intro_page/IntroPage.jsx";
import ProfilePage from "./components/profile_page/UserProfilePage.jsx";
import UsersPage from "./components/users_page/UserManagementPage.jsx";

import ProductPage from "./components/Product/Product.jsx";
import ProductDetail from "./components/Product/ProductDetail.jsx";

import ProductList from "./components/Product/ProductList.jsx";
import ProductUpload from "./components/Product/ProductUpload.jsx";

import QuestionPage from "./components/question_page/questionPage.jsx";
import QuestionDetail from "./components/question_page/questionDetail.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import UserLayout from "./layouts/UserLayout.jsx";

import Login from "./components/login/Login.jsx";
import Register from "./components/login/Register.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductPage />} />

          <Route path="/products/detail" element={<ProductDetail />} />

          <Route path="/introduction" element={<IntroPage />} />

          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/:id" element={<CommunityDetailPage />} />

          <Route path="/questions" element={<QuestionPage />} />
          <Route path="/questions/:id" element={<QuestionDetail />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/products/list" element={<ProductList />} />
          <Route path="/admin/products/upload" element={<ProductUpload />} />

          <Route path='/admin/community' element={<CommunityAdminPage />} />
					<Route path="/admin/profile" element={<ProfilePage />} />
          <Route path="/admin/users" element={<UsersPage />} />

        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>

  );
}

export default App;
