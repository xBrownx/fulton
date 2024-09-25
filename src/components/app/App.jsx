import { Header } from "../organisms";
import Landing from "../pages/landing";
import Overview from "../pages/overview";
import Location from "../pages/location";
import Design from "../pages/features";
import Agency from "../pages/agency";
import Contact from "../pages/contact";
import './app.css'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Map from "../pages/map/index.jsx";

function App() {
    const location = useLocation();

    return (
        <>
            <Header />
            <AnimatePresence mode={"wait"}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Landing />} />
                    <Route path="/overview" element={<Overview />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/features" element={<Design />} />
                    <Route path="/agency" element={<Agency />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/map" element={<Map />} />
                </Routes>
            </AnimatePresence>

        </>


    )
}

export default App
