import styled, { css } from 'styled-components';
import { Style as S } from '../../util'

export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: ${S.width(16)}vw;
`

export const StyledLi = styled.li`
    transition: all 100ms ease-in-out;
    color: #FFF;
    opacity: 1;
    font-size: ${S.fontSize(20)}vw;
    font-family: 'M', serif;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
        cursor: pointer;
        opacity: 1;
        font-weight: 600;
    }
`
