import styled, { css } from 'styled-components';
import { Style as S } from '../../util';

export const Container = styled.div`
    z-index: 1;
    width: ${props => S.width(props.$width)}vw;
    height: ${props => S.height(props.$height)}vh;
    
    ${props => props.$paddingTop && css`
        padding-top: ${S.height(props.$paddingTop)}vh;
    `}
`

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
