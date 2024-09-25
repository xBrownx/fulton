import styled, { css } from 'styled-components';
import { Style as S } from '../../util'

export const Container = styled.div`
    transition: all 200ms ease-in-out;
    background: #000000CC;
    width: ${S.width(66)}vw;

    clip-path: polygon(
            0% 0%,
            100% 0%,
            100% 92%,
            0% 100%,
            0% 100%
    );
    
    ${props => props.$hover && css`
        width: ${S.width(194)}vw;
        clip-path: polygon(
                0% 0%,
                100% 0%,
                100% 93%,
                65% 100%,
                0% 100%
        );
    `}
`

export const StyledUl = styled.ul`
    transition: all 200ms ease-in-out;
    padding-block: ${S.height(38)}vh;
    padding-inline: ${S.width(16)}vw;
    display: flex;
    flex-direction: column;
    gap: ${S.height(10)}vh;
`

export const StyledLi = styled.li`
    transition: all 200ms ease-in-out;
    display: flex;
    justify-content: center;

    height: ${S.height(40)}vh;

    &:hover {
        cursor: pointer;
    }

    ${props => props.$paddingTop && css`
        padding-top: ${S.height(props.$paddingTop)}vh;
    `}
`

