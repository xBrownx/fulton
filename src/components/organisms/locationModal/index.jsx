import React, { memo, useState } from 'react'
import { Background, Container, IconWrapper, StyledVideo } from './styles';
const Exit = "https://fulton-assets.s3.ap-southeast-2.amazonaws.com/images/icon-exit.svg";


function LocationModal(props) {

    return (
        <>
            <Container>
                <IconWrapper>
                    <Exit onClick={() => props.closemodal()} />
                </IconWrapper>
                <StyledVideo
                    src={props.videosrc}
                    autoPlay={true} muted controls={false} {...props} />

            </Container>
            <Background onClick={props.closeModal} />
        </>
    );
}

export default memo(LocationModal)