import styled, { css } from 'styled-components';
import { Style as S } from '../../util'
import { Media } from "../../util/Media.jsx";

export const CustomContainer = styled.div`
    display: flex;
    background: black;
    max-width: ${S.width(608)}vw;
    min-width: ${S.width(608)}vw;
    height: ${S.height(589)}vh;
    
    clip-path: polygon(
            0% 0%,
            calc(100% - 6vw) 0%,
            100% calc(0% + 3.057vw),
            100% 100%,
            0% 100%
    );

    ${Media.md`
        width: 100%;
        clip-path: unset;
        min-width: 100%;
        max-width: 100%;
        padding-right: 16px;
        height: fit-content;
    `}
    
`

export const CustomWrapper = styled.div`
    border-left: 2px solid ${S.colour.primary};
    padding-left: ${S.width(16)}vw;
    width: ${S.width(512)}vw;
    
    ${Media.md`
        width: 100%;
        padding-left: 16px;
        padding-right: 1px;
        box-sizing: border-box;
    `}
`
