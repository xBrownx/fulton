import styled, { css } from 'styled-components';

export const VideoContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`



export const StyledVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const VideoContainerMobile = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    min-height: 225px;
`

export const StyledVideoMobile = styled.video`
    width: 100%;
    height: auto;
`