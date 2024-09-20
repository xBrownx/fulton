import styled, { css } from 'styled-components';
import { Style as S } from '../../util'

export const Container = styled.div`
    z-index: 10;
    position: fixed;
    top: 0;
    
    background-color: #000;
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
`