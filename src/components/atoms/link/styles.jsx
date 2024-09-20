import styled from 'styled-components';
import {Style as STYLE } from '../../util';

export const StyledLink = styled.a`
    all: unset;
    font-size: ${STYLE.fontSize(16)}vw;
    line-height: ${STYLE.height(21.25)}vh;
    letter-spacing: 0;
    font-family: 'MaisonNeueExt', serif;
    color: white;

    transition: all 200ms ease-in-out;
    &:hover {
        cursor: pointer;
        color: ${STYLE.colour.primary};
    }
`
