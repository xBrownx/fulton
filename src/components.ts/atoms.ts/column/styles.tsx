import styled, { css } from 'styled-components'
import { styles as S } from '../../util'
import { Media } from "../../util/media";
import { Props } from "./props";


export const Container = styled.div<Props>`
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 2;
    
    ${props => props.relative && css`
        position: relative;
    `};
    
    ${props => props.width && css`
        width: ${S.width(props.width)}vw;
        ${Media.md`
            width: 100%;
        `}
    `};
    
    ${props => props.widthPercent && css`
        width: ${props.widthPercent}%;
    `};
    
    ${props => props.height && css`
        height: ${S.height(props.height)}vh;
        
        ${Media.md`
            height: 100%;
            overflow: visible;
        `}
    `};
    
    ${props => props.heightPercent && css`
        height: ${props.heightPercent}%;
    `};
    
   ${props => props.paddingInline && css`
        padding-inline: ${S.width(props.paddingInline)}vw;
        ${Media.md`
            padding-inline: ${props.paddingInline}px;
        `}
    `};
    
    ${props => props.paddingBlock && css`
        padding-block: ${S.height(props.paddingBlock)}vh;
        ${Media.md`
            padding-block: ${props.paddingBlock}px;
        `}
    `};
    
    ${props => props.paddingTop && css`
        padding-top: ${S.height(props.paddingTop)}vh;
        ${Media.md`
            padding-top: ${props.paddingTop}px;
        `}
    `};
    
    ${props => props.paddingRight && css`
        padding-right: ${S.width(props.paddingRight)}vw;
        ${Media.md`
            padding-right: ${props.paddingRight}px;
        `}
    `};
    
    ${props => props.paddingBottom && css`
        padding-bottom: ${S.height(props.paddingBottom)}vh;
        ${Media.md`
            padding-bottom: ${props.paddingBottom}px;
        `}
    `};
    
    ${props => props.paddingLeft && css`
        padding-left: ${S.width(props.paddingLeft)}vw;
        ${Media.md`
            padding-left: ${props.paddingLeft}px;
        `}
    `};
    
    ${props => props.gap && css`
        gap: ${S.height(props.gap)}vh;
        ${Media.md`
            gap: ${props.gap}px;
        `}
    `};
    
    // 
    
    
`

