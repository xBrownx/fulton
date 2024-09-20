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
        fill: white;
    }

    ${props => props.$active && css`
        svg {
            fill: ${S.colour.primary};
        }
    `};

    ${props => props.$hoverLink && props.$isHover && css`
            transition: all 200ms ease-in-out;
            color: ${S.colour.primary};
            svg {
                fill: ${S.colour.primary};
            }
        }

    `};
`
