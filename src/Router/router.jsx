import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "../Components/NavBar/NavBar";
import HomePage from "../Pages/HomePage/HomePage";
import Footer from "../Components/Footer/Footer";




const AppRouter = () => {
  return (
		<BrowserRouter>
			<NavBar/>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
			<Footer/>
		</BrowserRouter>
	);
}

export default AppRouter