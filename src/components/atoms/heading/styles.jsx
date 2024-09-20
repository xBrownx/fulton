import styled, { css } from "styled-components";
import {Style as S} from '../../util'


export const StyledHeading = styled.h1`
    padding: 0;
    margin: 0;
    color: ${S.colour.neutralLight};
    font-family: 'MaisonNeueExt', serif;

    white-space: pre-wrap;
    
    ${props => props.$colourPrimary && css`
        color: ${S.colour.primary};
    `};
    
    ${props => props.$colourDark && css`
        color: ${S.colour.neutralDark};
    `};
    
    ${props => props.$fontSize && css`
        font-size: ${S.fontSize(props.$fontSize)}vw;
    `};
    
    ${props => props.$weight && css`
        font-weight: ${props.$weight};
    `}
    
    ${props => props.$lineHeight && css`
        line-height: ${S.height(props.$lineHeight)}vh !important;
    `};
    
    ${props => props.$letterSpacing && css`
        letter-spacing: ${S.width(props.$letterSpacing)}vw;
    `};
    
    ${props => props.$uppercase && css`
        text-transform: uppercase;
    `};
    
    ${props => props.$opacity && css`
        opacity: ${props.$opacity};
    `};
    
    ${props => props.$paddingTop && css`
        padding-top: ${S.height(props.$paddingTop)}vh;
    `}
    
    ${props => props.$paddingRight && css`
        padding-right: ${S.width(props.$paddingRight)}vw;
    `}
    
    ${props => props.$paddingBottom && css`
        padding-bottom: ${S.height(props.$paddingBottom)}vh;
    `}
    
    ${props => props.$paddingLeft && css`
        padding-left: ${S.width(props.$paddingLeft)}vw;
    `}
    
    ${props => props.$paddingInline && css`
        padding-inline: ${S.width(props.$paddingInline)}vw;
    `}
    
    ${props => props.$paddingBlock && css`
        padding-block: ${S.height(props.$paddingBlock)}vh;
    `}
    
    ${props => props.$noWrap && css`
        white-space: nowrap;
    `};
    

    
    
    
`
