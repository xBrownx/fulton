import styled, { css } from 'styled-components'
import { Style as S } from '../../util'
import { Media } from "../../util/Media.jsx";

export const Container = styled.div`
    transition: all 200ms ease-in-out;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    
     ${props => props.$paddingInline && css`
        padding-inline: ${S.width(props.$paddingInline)}vw;
        ${Media.md`
            padding-inline: ${props.$paddingInline}px;
        `}
    `};
    
    ${props => props.$paddingBlock && css`
        padding-block: ${S.height(props.$paddingBlock)}vh;
        ${Media.md`
            padding-block: ${props.$paddingBlock}px;
        `}
    `};
    
    ${props => props.$paddingTop && css`
        padding-top: ${S.height(props.$paddingTop)}vh;
        ${Media.md`
            padding-top: ${props.$paddingTop}px;
        `}
    `};
    
    ${props => props.$paddingRight && css`
        padding-right: ${S.width(props.$paddingRight)}vw;
        ${Media.md`
            padding-right: ${props.$paddingRight}px;
        `}
    `};
    
    ${props => props.$paddingBottom && css`
        padding-bottom: ${S.height(props.$paddingBottom)}vh;
        ${Media.md`
            padding-bottom: ${props.$paddingBottom}px;
        `}
    `};
    
    ${props => props.$paddingLeft && css`
        padding-left: ${S.width(props.$paddingLeft)}vw;
        ${Media.md`
            padding-left: ${props.$paddingLeft}px;
        `}
    `};
    
    ${props => props.$gap && css`
        gap: ${S.height(props.$gap)}vh;
        ${Media.md`
            gap: ${props.$gap}px;
        `}
    `};
    
    ${props => props.$pointer && css`
        &:hover {
            cursor: pointer;
        }
    `};
    
    ${props => props.$fitContent && css`
        width: fit-content;
    `};
    
    ${props => props.$fitHeight && css`
        height: fit-content;
    `};
    
    ${props => props.$justifyEnd && css`
        justify-content: end;
    `};
    
    ${props => props.$justifyStart && css`
        justify-content: start;
    `};
    
    ${props => props.$alignEnd && css`
        align-items: end;
    `};
    
    ${props => props.$alignStart && css`
        align-items: start;
    `};
    
    ${props => props.$spaceBetween && css`
        justify-content: space-between;
    `};
    
    ${props => props.$borderBox && css`
        box-sizing: border-box;
    `}
    
    ${props => props.$mobileFlip && css`
        ${Media.md`
            flex-direction: column;
        `}
    `}
`