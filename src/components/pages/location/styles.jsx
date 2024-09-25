import styled, { css } from 'styled-components';
import { Style as S } from '../../util'
import { Media } from "../../util/Media.jsx";

export const Container = styled.div`
    z-index: 0;
    display: flex;
    height: 100%;
    background: white;
    width: ${S.width(584)}vw;
    clip-path: polygon(
            0% 0%, 
            100% 0%, 
            100% 82%, 
            73% 100%, 
            0% 100%
    );

    ${Media.md`
        width: 100%;
        clip-path: unset;
        
    `}
`

export const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    
`

export const CustomImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0% 50%;
`

export const CustomLink = styled.a`
    all: unset;
    padding: 0;
    margin: 0;
    color: ${S.colour.primary};
    white-space: pre-wrap;
    font-family: 'Questrial', serif;
    font-size: ${S.fontSize(16)}vw;
    line-height: ${S.height(24)}vh;
    border-bottom: 2px solid ${S.colour.primary};
    width: fit-content;
    
    &:hover {
        cursor: pointer;
    }
`

