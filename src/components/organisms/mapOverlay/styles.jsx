import styled from 'styled-components';
import { Style as S } from '../../util'
export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
`

export const Modal = styled.div`
    transition: all 200ms ease-in-out;
    position: absolute;
    background: black;
    //width: ${props => S.width(props.$width)}vw;
    height: ${props => S.height(props.$height)}vh;
    margin-left: ${props => S.width(props.$xPos)}vw;
    margin-top: ${props => S.height(props.$yPos)}vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid ${props => props.$colour};
    padding-inline: ${S.width(8)}vw;
        
    opacity: ${props => props.$hover ? 1 : 0}; 
`

export const BoxDistance = styled.p`
    margin: 0;
    padding: 0;
    font-size: ${S.fontSize(14)}vw;
    line-height: ${S.height(18.59)}vh;
    font-weight: 300;
    font-family: 'MaisonNeueExt', serif;
    color: ${props => props.$colour};
    text-align: start;
    width: 100%
`

export const BoxTitle = styled.p`
    margin: 0;
    padding: 0;
    white-space: pre-wrap;
    font-size: ${S.fontSize(14)}vw;
    line-height: ${S.height(14.2)}vh;
    font-weight: 300;
    font-family: 'Questrial', serif;
    width: 100%;
    color: white;
`

export const HoverContainer = styled.div`
    position: absolute;
    width: ${props => S.width(props.$width)}vw;
    height: ${props => S.height(props.$height)}vh;
    margin-left: ${props => S.width(props.$xPos)}vw;
    margin-top: ${props => S.height(props.$yPos)}vh;
`