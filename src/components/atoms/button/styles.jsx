import styled, {css} from "styled-components";
import { Style as S } from "../../util";


export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: ${S.fontSize(16)}vw;
    font-family: 'Questrial', serif;
    color: white;
    margin: 0;
    padding: 0.5em 1.5em;
    
    
    background: ${S.colour.primary};
    border-color: ${S.colour.primary};
    border-width: 1px;
    border-style: solid;
    transition: color 300ms;
    overflow: hidden;
    position: relative;
    width: fit-content;
    z-index: 1;
    
    ${props => props.$width && css`
        width: ${S.width(props.$width)}vw;
        padding: 0;
    `};

    ${props => props.$height && css`
        height: ${S.height(props.$height)}vh;
    `};

    ${props => props.$fontSize && css`
        font-size: ${S.fontSize(props.$fontSize)}vw;
    `};
    
    
    ${props => props.$gap && css`
        gap: ${S.width(props.$gap)}vw;
    `};
    
    ${props => props.$fillParent && css`
        width: 100%;
    `};
    
    ${props => props.$square && css`
        width: 150px;
        height: 150px;
    `};
    
    &:hover {
        cursor: pointer;
        color: #FFF;
        
        ${props => props.$variantOne && css`
            color: #2E4683;
            svg {
                transition: filter 300ms;
                filter: brightness(0) saturate(100%) invert(27%) sepia(14%) saturate(2601%) hue-rotate(185deg) brightness(91%) contrast(94%);
            }
        `};
        
        
    }

    &::after {
        content: "";
        background: ${S.colour.secondary};
        position: absolute;
        z-index: -1;
        padding: 0.5em 1.5em;
        display: block;
        transition: all 0.35s;
        left: 0;
        right: 0;
        top: -100%;
        bottom: 100%;
        
        ${props => props.$variantOne && css`
            background: white;
        `};
    }

    &:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.35s;
    }

    ${props => props.$variant && css`
        &::after,  &:hover::after {
            all: unset;
        }
        
        &:hover {
            cursor: pointer;
            color: black;
        }

        padding: 0;
        margin: 0;
        width: 100%;
        color: ${S.colour.secondary};
        
        background: white;

    `}
    
    ${props => props.$paddingInline && css`
        padding-inline: ${S.width(props.$paddingInline)}vw;
    `};
    
    ${props => props.$paddingBlock && css`
        padding-block: ${S.height(props.$paddingBlock)}vh;
    `};
    
    ${props => props.$paddingTop && css`
        padding-top: ${S.height(props.$paddingTop)}vh;
    `};
    
    ${props => props.$paddingRight && css`
        padding-right: ${S.width(props.$paddingRight)}vw;
    `};
    
    ${props => props.$paddingBottom && css`
        padding-bottom: ${S.height(props.$paddingBottom)}vh;
    `};
    
    ${props => props.$paddingLeft && css`
        padding-left: ${S.width(props.$paddingLeft)}vw;
    `};

`

