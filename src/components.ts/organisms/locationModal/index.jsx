import React, { memo, useState } from 'react'
import { Background, Container, IconWrapper, StyledVideo, VideoContainer, Wrapper } from './styles.jsx';
import Exit from "../../../assets/exit.svg";


function LocationModal(props) {

    return (
        <>

            <Container>


                <IconWrapper>
                    <Exit onClick={() => props.closeModal()} />
                </IconWrapper>
                <StyledVideo
                    src={"https://fulton-assets.s3.ap-southeast-2.amazonaws.com/videos/Fulton+-+Surrounding+Assets.mp4"}
                    autoPlay={true} muted controls={false} {...props} />

            </Container>
            <Background onClick={props.closeModal} />
        </>
    );
}

export default memo(LocationModal)