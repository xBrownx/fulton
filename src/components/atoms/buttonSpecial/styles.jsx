import styled, { css } from 'styled-components';
import { Style as S } from '../../util'

export const StyledButton = styled.button`
    color: ${S.colour.secondaryDark};
    background-color: white;
    border: 1px solid ${S.colour.secondaryDark};;
    font-size: ${S.fontSize(16)};
    align-items: center;
    line-height: ${S.height(50)};
    text-align: center;
    
    ${props => props.$inActive && css`
        color: white;
        opacity: 0.15;
        background-color: #000;
    `}
`