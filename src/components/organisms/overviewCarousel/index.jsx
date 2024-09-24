import { memo } from 'react';
import { carouselConst as CONST} from "./constants.jsx";

import { SlideCarousel } from "../../molecules/slideCarousel/index.jsx";


function OverviewCarousel(props) {
    return (
        <SlideCarousel images={CONST.images} {...props} />
    );
}


export default memo(OverviewCarousel);
