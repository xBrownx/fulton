import styled, { css } from 'styled-components';
import { Style as S } from '../../util';

export const Container = styled.div`
    
    ${props => props.$width && css`
        width: ${S.width(props.$width)}vw;
    `};

    ${props => props.$height && css`
        height: ${S.height(props.$height)}vh;
    `};
    
    svg {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
