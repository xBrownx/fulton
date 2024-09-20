import { Header } from "../organisms/";
import Landing from "../pages/landing/index.jsx";
import Overview from "../pages/overview/index.jsx";
import Location from "../pages/location/index.jsx";
import Design from "../pages/design/index.jsx";
import Contact from "../pages/contact/index.jsx";
import { useRef } from "react";
import './app.css'
function App() {

    const pageRefs = {
        landing: useRef(),
        overview: useRef(),
        location: useRef(),
        design: useRef(),
        contact: useRef(),
    }

    const navigateTo = (pageId) => {

        setTimeout(() => {
            pageRefs[pageId].current.scrollIntoView({
                behavior: "smooth",
                block: 'start'
            })
        }, 100);
    }

    return (
        <div>
            <Header
                navigateTo={navigateTo}
            />
            <Landing
                $pageRef={pageRefs.landing}
                navigateTo={navigateTo}
            />
            <Overview
                $pageRef={pageRefs.overview}
            />
            <Location
                $pageRef={pageRefs.location}
            />
            <Design
                $pageRef={pageRefs.design}
            />
            <Contact
                $pageRef={pageRefs.contact}
            />
        </div>
    )
}

export default App
