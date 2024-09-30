import { memo } from 'react'
import { Image } from '../../atoms'
import { Background, Container, IconWrapper, StyledVideo } from './styles';

const exit = "https://fulton-assets.s3.ap-southeast-2.amazonaws.com/images/icon-exit.svg";


function LocationModal(props) {
    return (
        <>
            <Container >
                <IconWrapper >
                    <Image src={exit} onClick={() => props.closemodal()} />
                </IconWrapper >
                {props.isLiveMap ?
                    <iframe src="https://my.atlist.com/map/164fda48-b25a-4046-bd6c-ea74ce9c20fa/?share=true"
                            allow="geolocation 'self' https://my.atlist.com" width="100%" height="100%" loading="lazy"
                            frameBorder="0" scrolling="no" allowFullScreen id="atlist-embed" ></iframe >
                    :
                    <StyledVideo
                        src={props.videosrc}
                        autoPlay={true} muted controls={false} {...props} />
                }

            </Container >
            <Background onClick={() => props.closemodal()} />
        </>
    );
}

export default memo(LocationModal)