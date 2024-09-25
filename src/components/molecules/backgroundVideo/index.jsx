import { useEffect, useRef, memo, useState } from "react";
import { Container, StyledVideo } from "./styles";

export function BackgroundVideo(props) {
    const videoRef = useRef(null);
    // useEffect(() => {
    //     let options = {
    //         rootMargin: "0px",
    //         threshold: [0.25, 0.75]
    //     };
    //
    //     // let handlePlay = (entries) => {
    //     //     entries.forEach((entry) => {
    //     //         if (entry.isIntersecting) {
    //     //             videoRef.current.play();
    //     //         } else {
    //     //             videoRef.current.pause();
    //     //         }
    //     //     });
    //     // };
    //
    //     // let observer = new IntersectionObserver(handlePlay, options);
    //     //
    //     // observer.observe(videoRef.current);
    // });


    const [isLoading, setIsLoading] = useState(false);

    return (
        <Container>
            {isLoading && <div>LOADING</div>}
            <StyledVideo
                autoPlay
                loop
                muted
                controls={false}
                ref={videoRef}
                onCanPlayThrough={() => setIsLoading(false)}
            >
                <source src={props.src} type="video/mp4" />
            </StyledVideo>

        </Container>
    );
}

export default memo(BackgroundVideo);