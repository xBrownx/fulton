import styled, { css } from 'styled-components'
import { Style as S } from '../../util'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    
    ${props => props.$relative && css`
        position: relative;
    `};
    
    ${props => props.$width && css`
        width: ${S.width(props.$width)}vw;
    `};
    
    ${props => props.$widthPerCent && css`
        width: ${props.$widthPerCent}%;
    `};
    
    ${props => props.$height && css`
        height: ${S.height(props.$height)}vh;
    `};
    
    ${props => props.$heightPerCent && css`
        height: ${props.$heightPerCent}%;
    `};
    
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
    
    ${props => props.$gap && css`
        gap: ${S.height(props.$gap)}vh;
    `};
    
    ${props => props.$centreY && css`
        margin-block: auto;
    `};
    
    ${props => props.$centreX && css`
        align-items: center;
    `};
    
    ${props => props.$justifyEnd && css`
        align-items: end;
    `};

    ${props => props.$fitContent && css`
        width: fit-content;
    `}
    
    ${props => props.$borderBox && css`
        box-sizing: border-box;
    `}
    
    
`