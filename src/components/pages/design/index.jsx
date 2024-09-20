import { memo } from 'react';
import { designConst as CONST } from './constants';
import { Page } from '../../templates';
import { FeaturesList } from "../../organisms/index.jsx";
import { Column, Video } from "../../atoms/index.jsx";
import { StyledVideo, VideoContainer } from "./styles.jsx";


function Design(props) {
    return (
        <Page
            $bgPrimary
            $fullScreen
            $pageRef={props.$pageRef}
        >
            <VideoContainer>
                <StyledVideo autoPlay loop muted controls={false} {...props}>
                    <source src={CONST.assets.videos.loadingDocks.src} type="video/mp4" />
                </StyledVideo>
            </VideoContainer>
            <Column $paddingTop={113}>
                <FeaturesList />
            </Column>
        </Page>
    );

}

export default memo(Design);