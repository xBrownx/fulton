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
            100% calc(100% - ${S.height(35)}vh), 
            calc(100% - ${S.height(68.691)}vh) 100%, 
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
        height: 100%;
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

export const MobileMenuContainer = styled.div`
    transition: all 200ms ease-out;
    background: #000000;
    width: 100%;
    
    z-index: 10;
    position: fixed;
    display: flex;
    flex-direction: column;
    height: 0;
    
    ${props => props.$visible && css`
        height: 400px;
    `};
    
    clip-path: polygon(
            0% 0%, 
            100% 0%, 
            100% 100%, 
            calc(0% + 196.261px) 100%, 
            0% calc(100% - 120px)
    );
`

export const MobileUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    padding-right: 16px;
    gap: 40px;
    padding-bottom: 32px;
`

export const MobileLink = styled.div`
    
`
