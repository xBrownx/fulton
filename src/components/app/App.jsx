import { Header } from "../organisms/";
import Landing from "../pages/landing/index.jsx";
import Overview from "../pages/overview/index.jsx";
import Location from "../pages/location/index.jsx";
import Design from "../pages/design/index.jsx";
import Contact from "../pages/contact/index.jsx";
import { useRef } from "react";
import './app.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function App() {
    return (
        <>



            <AnimatePresence mode={"wait"}>
                <Header />
                <Routes location={location} key={location.pathname}>
                    <Route path="fulton/" element={<Landing />} />
                    <Route path="fulton/overview" element={<Overview />} />
                    <Route path="fulton/location" element={<Location />} />
                    <Route path="fulton/design" element={<Design />} />
                    <Route path="fulton/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>

        </>


    )
}

export default App
