import styled, { css } from 'styled-components';
import { Style as S } from '../../util'

export const Container = styled.div`
    
    ${props => props.$width && css`
        width: ${S.width(props.$width)}vw;
    `};
`