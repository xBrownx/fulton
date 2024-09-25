import { useEffect, useState } from "react";
import * as React from "react";

export const useMobile: () => boolean = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const checkScreenSize = () => {
        console.log(window.innerWidth);
        setIsMobile((window.innerWidth < 900))
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return isMobile.valueOf();
}