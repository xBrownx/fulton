import styled, { css } from 'styled-components';
import { Style as S } from '../../util'
import { Media } from "../../util/Media.jsx";

export const Container = styled.div`
    
    ${props => props.$width && css`
        width: ${S.width(props.$width)}vw;
    `};
    
    ${Media.md`
        width: 100%;
    `}
`