import styled from 'styled-components';
import { Style as S } from '../../util'
import { Media } from "../../util/Media.jsx";

export const Container = styled.div`
    z-index: 0;
    display: flex;
    height: 100%;
    background: white;
    width: ${S.width(584)}vw;
    margin-bottom: ${S.height(96)}vh;
    clip-path: polygon(
            0% 0%, 
            100% 0%, 
            100% calc(100% - 6.114vw), 
            calc(100% - 12vw) 100%, 
            0% 100%
    );

    ${Media.md`
        width: 100%;
        clip-path: unset;
        margin: 0;
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
    object-position: 0 50%;
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
    display: flex;
    flex-direction: row;
    gap: ${S.width(8)}vw;
    justify-content: center;
    align-items: center;
    width: fit-content;
    
    &:hover {
        cursor: pointer;
        transition: all 200ms ease-in-out;
        filter: brightness(0.5) saturate(0%);
    }

    ${Media.md`
        font-size: 16px;
        line-height: 24px;
        gap: 8px;
    `}
`

export const CustomWrapper = styled.div`
    border-left: 2px solid ${S.colour.primary};
    padding-left: ${S.width(16)}vw;
    width: ${S.width(512)}vw;
    
    ${Media.md`
        width: 100%;
        padding-left: 16px;
        padding-right: 1px;
        box-sizing: border-box;
    `}
`

