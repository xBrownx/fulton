import { memo, useEffect, useRef, useState } from 'react';
import { designConst as CONST } from './constants';
import { Page } from '../../templates';
import { FeaturesList } from "../../organisms/index.jsx";
import { Column, Video } from "../../atoms/index.jsx";
import { StyledVideo, VideoContainer } from "./styles.jsx";



function Design(props) {
    const videos = CONST.assets.videos;
    const videoSrcArray = Object.keys(videos).map(key => videos[key].src);
    const [currentShot, setCurrentShot] = useState(0);
    const [videoSrc, setVideoSrc] = useState(videoSrcArray[0]);
    const [isLoading, setIsLoading] = useState(false);
    const videoRef = useRef(null);

    return (
        <Page
            $bgPrimary
            $fullScreen
            $pageRef={props.$pageRef}
        >
            <VideoContainer
                $isLoading={isLoading}
            >
                <StyledVideo ref={videoRef} muted controls={false} {...props}>
                    <source src={videoSrc} type="video/mp4" />
                </StyledVideo>
            </VideoContainer>
            <Column $paddingTop={113}>
                <FeaturesList />
            </Column>
        </Page>
    );

}

export default memo(Design);