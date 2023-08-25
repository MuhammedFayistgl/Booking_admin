import { BrowserRouter, Routes, Route } from "react-router-dom";
import BarChartPage from "./Pages/BarChartPage";
import GeographymapPage from "./Pages/GeographymapPage";
import Home from "./Pages/Home";
import LinechartComponent from "./Pages/LinechartComponent";
import Piepage from "./Pages/Piepage";
import Team from "./Pages/Team";
import Uplode from "./Pages/Uplode";
import Manage from "./components/Manage";
import Orderinfo from "./components/Orderinfo";
import "rsuite/dist/rsuite-no-reset.min.css";
import LoginComponent from "./components/auth/Login/LoginComponent";
import SingComponent from "./components/auth/Registration/SignComponent";
import { Toaster } from "react-hot-toast";
import axios from "axios";


function App() {
	axios.defaults.withCredentials = true;
	return (
		<>
			<BrowserRouter>
				<Toaster />
				<Routes >
					<Route path="/login" element={<LoginComponent />} />
					<Route path="/singup" element={<SingComponent />} />
					<Route path="/" element={<Home />} />
					<Route path="/team" element={<Team />} />
					<Route path="/linechart" element={<LinechartComponent />} />
					<Route path="/geography" element={<GeographymapPage />} />
					<Route path="/Pie" element={<Piepage />} />
					<Route path="/Barchart" element={<BarChartPage />} />
					<Route path="/uplode" element={<Uplode />} />
					<Route path="/manage" element={<Manage />} />
					<Route path="/userorder" element={<Orderinfo />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
