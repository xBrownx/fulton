import { memo } from 'react';
import { carouselConst as CONST} from "./constants.jsx";
import { SlideCarousel } from "../../molecules/slideCarousel/index.jsx";


function ContactCarousel(props) {
    return (
        <SlideCarousel images={CONST.images} {...props} />
    );
}


export default memo(ContactCarousel);
