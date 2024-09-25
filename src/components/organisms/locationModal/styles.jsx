import styled from 'styled-components'
import { Style as S } from '../../util'

export const Container = styled.div`
    z-index: 10;
    width: ${S.width(1120)}vw;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
`

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9;
`

export const Wrapper = styled.div`
    
    
`

export const IconWrapper = styled.div`
    z-index: 10;
    position: absolute;
    right: 0;
    top: 0;
    margin-top: ${S.height(16)}vh;
    margin-right: ${S.width(16)}vw;

    &:hover {
        cursor: pointer;
    }
`

export const VideoContainer = styled.div`
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100%;
`


export const StyledVideo = styled.video`
    z-index: 10;
    width: 100%;
    height: 100%;
    object-fit: cover;
`