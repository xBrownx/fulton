import styled from 'styled-components'
import { Style as S } from '../../util'
import { Media } from "../../util/Media.jsx";

export const Container = styled.div`
    z-index: 100;
    width: ${S.width(1120)}vw;
    height: ${S.height(630)}vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    ${Media.md`
        width: 100%;
        height: 100%;
        padding-top: 300px;
    `};
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

export const IconWrapper = styled.div`
    z-index: 10;
    position: absolute;
    right: 0;
    top: 0;
    margin-top: ${S.height(16)}vh;
    margin-right: ${S.width(16)}vw;

    ${Media.md`
        margin-top: 0;
        padding-top: 316px;
        padding-right: 16px;
        margin: 0;
    `}
    
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