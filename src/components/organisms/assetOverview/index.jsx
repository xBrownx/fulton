import React, { memo } from 'react';
import { Container } from './styles';
import { overview as CONST } from "../../pages/overview/constants.jsx";
import { Image } from "../../atoms/index.jsx";
import { OverviewDetails } from "../index.jsx";
import { BackgroundVideo } from "../../molecules/index.jsx";


function AssetOverview(props) {
    return (
        <Container {...props}>
            <BackgroundVideo src={CONST.assets.backgroundVideo.src} />

            <OverviewDetails />

        </Container>
    );
}


export default memo(AssetOverview);
