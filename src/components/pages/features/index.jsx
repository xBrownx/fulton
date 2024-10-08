import { memo, useEffect, useRef, useState } from 'react';
import { designConst as CONST } from './constants';
import { Page } from '../../templates';
import { FeaturesList } from "../../organisms/index.jsx";
import { Column, Video } from "../../atoms/index.jsx";
import { StyledVideo, VideoContainer } from "./styles.jsx";
import { AnimatePresence, motion } from "framer-motion";

function Features(props) {
    const videos = CONST.assets.videos;
    const [currentShot, setCurrentShot] = useState('flythrough');
    const [videoSrc, setVideoSrc] = useState(videos['flythrough'].src);
    const [isLoading, setIsLoading] = useState(false);
    const videoRef = useRef(null);

    const setShotChange = (shot) => {
        videoRef.current.scrollIntoView({ behavior: "smooth" });
        if (currentShot !== shot) {
            console.log("currentShot: ", currentShot, "shot: ", shot);
            setCurrentShot(shot);
            setVideoSrc(videos[shot].src);
            setTimeout(function () {
                videoRef.current.play();
            }, 1)

        }
    }

    useEffect(() => {
        console.log("useEffect triggered")

        setIsLoading(false);
        setTimeout(function () {
                videoRef.current.play();
            }, 500)

    }, [currentShot]);

    return (

        <Page
            id={"features"}
            $bgPrimary
            $fullScreen
            $pageRef={props.$pageRef}
        >
            <VideoContainer
                $isLoading={isLoading}
            >
                <StyledVideo src={videoSrc} ref={videoRef} muted controls={false} {...props}>
                </StyledVideo>
            </VideoContainer>
            <Column $paddingTop={113}>
                <FeaturesList
                    setShotChange={setShotChange}
                    currentShot={currentShot}
                />
            </Column>
        </Page>
    );

}

export default memo(Features);