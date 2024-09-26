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
import { Image } from "../atoms/index.jsx";
import Footer from "../organisms/footer/index.jsx";
import { useEffect, useRef } from "react";
import { constants as CONST } from './constants'


function App() {
    const location = useLocation();
    const isMobile = useMobile();
    const pageRefs = {
        landing: useRef(),
        overview: useRef(),
        location: useRef(),
        features: useRef(),
        contact: useRef()
    }
    function scrollTo(pageId) {
        setTimeout(() => {
            pageRefs[pageId].current.scrollIntoView({
                behavior: "smooth",
                block: 'start'
            })
        }, 100);
    }

    console.log(location.pathname);

    useEffect(() => {

    });

    return (
        <>
            <Header scrollTo={scrollTo}/>
            {
                isMobile ?
                    <>
                        <Landing $pageRef={pageRefs.landing} />
                        <Overview $pageRef={pageRefs.overview} />
                        <AssetOverview />
                        <Location $pageRef={pageRefs.location} />
                        <Image src={CONST.assets.mobile.map.src} />
                        <Image src={CONST.assets.mobile.mapLegend.src} />
                        <FeaturesMobile $pageRef={pageRefs.features} />
                        <Agency />
                        <Contact $pageRef={pageRefs.contact} />
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
