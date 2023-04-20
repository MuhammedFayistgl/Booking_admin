import { BrowserRouter, Routes, Route } from "react-router-dom";
import BarChartPage from "./Pages/BarChartPage";
import GeographymapPage from "./Pages/GeographymapPage";
import Home from "./Pages/Home";
import LinechartComponent from "./Pages/LinechartComponent";
import Piepage from "./Pages/Piepage";
import Team from "./Pages/Team";
import Uplode from "./Pages/Uplode";

function App() {
  return (
    <>
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/linechart" element={<LinechartComponent />} />
          <Route path="/geography" element={<GeographymapPage />} />
          <Route path="/Pie" element={<Piepage />} />
          <Route path="/Barchart" element={<BarChartPage />} />
          <Route path="/uplode" element={<Uplode />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
