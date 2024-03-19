import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from "./pages/countries/Countries.jsx";
import CountryDetails from "./pages/countries/CountryDetails.jsx";
import Map from "./pages/map/Map.jsx";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Countries />}/>
          <Route path="/mapa" element={<Map />}/>
          <Route path="/paises/:countryname" element={<CountryDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
