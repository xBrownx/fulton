import styled, { css } from "styled-components";
import { styles as S } from '../../util'
import { Media } from "../../util/media";
import { Props } from "./props";


export const StyledHeading = styled.h1<Props>`
    padding: 0;
    margin: 0;
    z-index: 1;
    color: ${S.colour.neutralLight};
    font-family: 'MaisonNeueExt', serif;
    white-space: pre-wrap;

    ${props => props.fontSize && css`
        font-size: ${S.fontSize(props.fontSize)};
    `};

    ${props => props.lineHeight && css`
        line-height: ${S.height(props.lineHeight)} !important;
    `};

    ${props => props.weight && css`
        font-weight: ${props.weight};
    `}
`
// ${props => props.$colourPrimary && css`
//     color: ${S.colour.primary};
// `};
//
// ${props => props.$colourDark && css`
//     color: ${S.colour.neutralDark};
// `};
//

//

//

//
// ${props => props.$letterSpacing && css`
//     letter-spacing: ${S.width(props.$letterSpacing)}vw;
// `};
//
// ${props => props.$uppercase && css`
//     text-transform: uppercase;
// `};
//
// ${props => props.$opacity && css`
//     opacity: ${props.$opacity};
// `};
//

// ${props => props.$noWrap && css`
//     white-space: nowrap;
// `};
//
// ${props => props.$active && css`
//     color: ${S.colour.primary};
// `};
//
// ${props => props.$hoverLink && props.$isHover && css`
//
//     transition: all 200ms ease-in-out;
//     color: ${S.colour.primary};
// `};
//
// ${props => props.$pointerHover && css`
//     &:hover {
//         cursor: pointer;
//     }
// `};
//
// opacity: 1;
// transition: opacity 200ms ease-in-out;
// transition-delay: 0.15s;
// ${props => props.$displayNone && css`
//     opacity: 0;
//     transition: none;
//     transition-delay: 0.0s;
// `};
//
//
//
// ${Media.md`
//     font-size: ${props => props.$fontSize}px;
//     line-height: ${props => props.$lineHeight}px;
// `}
//
//
//
//
//
