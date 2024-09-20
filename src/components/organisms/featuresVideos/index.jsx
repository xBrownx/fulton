import { memo, useRef } from 'react';
import { Container } from './styles';

function FeaturesVideos(props) {
    const videos = props.assets.videos;
    const videoSrcArray = Object.keys(videos).map(key => videos[key].src);
    const [currentShot, setCurrentShot] = useState(0);
    const [videoSrc, setVideoSrc] = useState(videoSrcArray[0]);
    const [isLoading, setIsLoading] = useState(false);
    const videoRef = useRef(null);

    return (
        <Container {...props}>
            {props.children}
        </Container>
    );
}


export default memo(FeaturesVideos);
