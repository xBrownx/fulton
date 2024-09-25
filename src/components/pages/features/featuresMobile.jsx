import { memo, useEffect, useRef, useState } from 'react';
import { designConst as CONST } from './constants';
import { Page } from '../../templates';
import { FeaturesList } from "../../organisms/index.jsx";
import { Column } from "../../atoms/index.jsx";
import { StyledVideoMobile, VideoContainerMobile } from "./styles.jsx";
import { PageTitle } from "../../molecules/index.jsx";
import FeaturesListMobile from "../../organisms/featuresListMobile/index.jsx";

function FeaturesMobile(props) {
    const videos = CONST.assets.videos;
    const [currentShot, setCurrentShot] = useState(0);
    const [videoSrc, setVideoSrc] = useState(videos['flythrough'].src);
    const [isLoading, setIsLoading] = useState(false);
    const videoRef = useRef(null);

    const setShotChange = (shot) => {

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

    }, [currentShot]);

    return (
        <Page
            id={"features"}
            $bgSecondary
            $fullScreen={false}
            $pageRef={props.$pageRef}
        >
            <Column $paddingTop={64} $gap={5}>
                <Column $paddingInline={16}>
                    <PageTitle >
                        Site Features
                    </PageTitle>
                </Column>
                <VideoContainerMobile $isLoading={isLoading}>
                    <StyledVideoMobile src={videoSrc} ref={videoRef} muted controls={false} {...props} />
                </VideoContainerMobile>
                <FeaturesListMobile
                    setShotChange={setShotChange}
                    currentShot={currentShot}
                />
            </Column>
        </Page>
    );

}

export default memo(FeaturesMobile);