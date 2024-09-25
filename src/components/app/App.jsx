import { Header } from "../organisms";
import Landing from "../pages/landing";
import Overview from "../pages/overview";
import Location from "../pages/location";
import Features from "../pages/features";
import FeaturesMobile from "../pages/features/featuresMobile";
import Agency from "../pages/agency";
import Contact from "../pages/contact";
import './app.css'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Map from "../pages/map/index.jsx";
import { useMobile } from "../../hooks/useMobile.jsx";
import AssetOverview from "../organisms/assetOverview/index.jsx";
import mobileMap from '../../assets/Location-Mobile.png'
import mobileMapLegend from '../../assets/mobileMapLegend.png'
import { Image } from "../atoms/index.jsx";
import Footer from "../organisms/footer/index.jsx";


function App() {
    const location = useLocation();
    const isMobile = useMobile();

    return (
        <>
            {location.pathname !== "/map" && <Header />}
            {
                isMobile ?
                    <>
                        <Landing />
                        <Overview />
                        <AssetOverview />
                        <Location />
                        <Image src={mobileMap} />
                        <Image src={mobileMapLegend} />
                        <FeaturesMobile />
                        <Agency />
                        <Contact />
                        <Footer />
                    </>
                    :
                    <AnimatePresence mode={"wait"}>
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<Landing />} />
                            <Route path="/overview" element={<Overview />} />
                            <Route path="/location" element={<Location />} />
                            <Route path="/features" element={<Features />} />
                            <Route path="/agency" element={<Agency />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/map" element={<Map />} />
                        </Routes>
                    </AnimatePresence>


            }

        </>
    )
}

export default App
