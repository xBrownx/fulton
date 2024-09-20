import { memo, useEffect, useRef } from 'react';
import { Container, StyledVideo } from './styles';


function Video(props) {

    const videoRef = useRef(null);
    useEffect(() => {
        let options = {
            rootMargin: "0px",
            threshold: [0.25, 0.75]
        };

        let handlePlay = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        };

        let observer = new IntersectionObserver(handlePlay, options);

        observer.observe(videoRef.current);
    });

    return (
        <Container {...props}>
            <StyledVideo ref={videoRef} autoPlay loop muted controls={false} {...props}>
                <source src={props.src} type="video/mp4" />
            </StyledVideo>
        </Container>
    );
}

export default memo(Video);