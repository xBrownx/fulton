import { memo } from 'react';
import { Container } from './styles';
import { overview as CONST } from "../../pages/overview/constants.jsx";
import { Image } from "../../atoms/index.jsx";
import { OverviewDetails } from "../index.jsx";


function AssetOverview(props) {
    return (
        <Container {...props}>
            <div style={{ position: "absolute", width: "100%", height: "100%" }}>
                <OverviewDetails />
            </div>
            <Image src={CONST.assets.backgroundImgMobile.src} />

        </Container>
    );
}


export default memo(AssetOverview);
