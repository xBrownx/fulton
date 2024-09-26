import { StandardProps } from "../../util/StandardProps";
import styled, { css } from "styled-components";
import { styles as vwh } from '../../util'
import { Media } from "../../util/media";

export const StyledContainer = styled.div<StandardProps>`
    
    position: relative;
    display: flex;
    
    ${props => props.position && css`
        position: ${props.position};
    `};
    
    ${props => props.display && css`
        display: ${props.display};
    `};
    
    ${props => props.flexDirection && css`
        flex-direction: ${props.flexDirection};
    `};
    
    ${props => props.width && css`
        width: ${vwh.width(props.width)};
    `};
    
    ${props => props.height && css`
        width: ${vwh.height(props.height)};
    `};
    
    ${props => props.gap && css`
        gap: 0;
    `};
    
    ${props => props.paddingInline && css`
        padding-inline: ${vwh.width(props.paddingInline)};
        ${Media.md`
            padding-inline: ${props.paddingInline}px;
        `}
    `};
    
    ${props => props.paddingBlock && css`
        padding-block: ${vwh.height(props.paddingBlock)};
        ${Media.md`
            padding-block: ${props.paddingBlock}px;
        `}
    `};
    
    ${props => props.paddingTop && css`
        padding-top: ${vwh.height(props.paddingTop)};
        ${Media.md`
            padding-top: ${props.paddingTop}px;
        `}
    `};
    
    ${props => props.paddingRight && css`
        padding-right: ${vwh.width(props.paddingRight)};
        ${Media.md`
            padding-right: ${props.paddingRight}px;
        `}
    `};
    
    ${props => props.paddingBottom && css`
        padding-bottom: ${vwh.height(props.paddingBottom)};
        ${Media.md`
            padding-bottom: ${props.paddingBottom}px;
        `}
    `};
    
    ${props => props.paddingLeft && css`
        padding-left: ${vwh.width(props.paddingLeft)};
        ${Media.md`
            padding-left: ${props.paddingLeft}px;
        `}
    `};
    
    ${props => props.justify && css`
        justify-content: ${props.justify};
    `};

    ${props => props.align && css`
        align-items: ${props.align};
    `};
    
    ${props => props.borderBox && css`
        box-sizing: border-box;
    `}
    
`

