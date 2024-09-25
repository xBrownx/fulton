import styled, { css } from 'styled-components';
import { Style as S } from '../../util'
import { Media } from "../../util/Media.jsx";

export const Container = styled.div`
    z-index: 10;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    
    ${props => props.$height && css`
        height: ${S.height(props.$height)}vh;
    `};
    
    ${Media.md`
        height: 64px
    `}
    
    
`

export const Wrapper = styled.div`
    background-color: #000000CC;
    clip-path: polygon(
            0% 0%, 
            100% 0%, 
            100% 50%, 
            95% 100%, 
            0% 100%
    );
    display: flex;
    align-items: center;
    
    ${props => props.$width && css`
        width: ${S.width(props.$width)}vw;
    `};
    
    ${props => props.$height && css`
        height: ${S.height(props.$height)}vh;
    `};
    
    ${Media.md`
        width: 100%;
        clip-path: unset;
    `}
    
`
export const ImageWrapper = styled.div`
    padding-right: ${S.width(16)}vw;
    
    ${Media.md`
        display: none;
    `}
`

export const IconWrapper = styled.div`
    display: none;
    width: 32px;
    height: 32px;
    ${Media.md`
        display: flex;
    `}
`
