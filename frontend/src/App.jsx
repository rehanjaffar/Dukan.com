import React, { useEffect, Suspense, lazy, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Loader from "./pages/Loader";
import AllProducts from "./pages/AllProducts";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const Admin = lazy(() => import("./pages/Admin"));
const AddProducts = lazy(() => import("./components/Admin/AddProducts"));
const Products = lazy(() => import("./components/Admin/Products"));

const AppRoutes = () => {
  const { isAuthenticated,setIsAuthenticated, username, loading } = useAuth();

 

  if (loading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<Home username={username} />} />
      <Route
        path="/admin"
        element={isAuthenticated ? <Admin username={username} /> : <Navigate to="/login" replace />}
      >
        <Route path="add" element={<AddProducts />} />
        <Route path="products" element={<Products />} />
      </Route>
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<Login  setIsAuthenticated={setIsAuthenticated}/>}  />
      <Route path="*" element={<NotFound />} />
      <Route path="/products" element={<AllProducts username={username}/>}/>
    </Routes>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<Loader />}>
          <AppRoutes />
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
