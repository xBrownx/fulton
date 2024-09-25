import styled, { css } from 'styled-components';
import { Style as S } from '../../util'
export const RowContainer = styled.div`
    border-left: ${S.width(4)}vw solid ${S.colour.primary};
    padding-left: ${S.width(8)}vw;
`

export const Container = styled.div`
    display: flex;
    min-height: 100%;
    height: 100%;
    background: black;
    padding-inline: ${S.width(64)}vw;
    padding-top: ${S.height(203)}vh;
    clip-path: polygon(
                0% 0%, 
                100% 0%, 
                100% 100%, 
                0% 100%, 
                0% 12%,
                20% 0%
        );
`

export const CarouselContainer = styled.div`
    width: ${S.width(896)}vw;
    height: ${S.height(499)}vh;
    
    clip-path: polygon(
                0% 0%, 
                100% 0%, 
                100% 85%, 
                85% 100%, 
                0% 100%,
                0% 0%
        );
`