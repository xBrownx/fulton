import styled, { css } from 'styled-components';
import { styles as S } from '../../util'
import { Media } from "../../util/media";
export const LogoContainer = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 0;
    padding-left: ${S.width(32)}vw;
    padding-bottom: ${S.height(17)}vh;
`

export const ArrowWrapper = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    padding-bottom: 32px;
    z-index: 1;
    display: none;
    
`
// ${Media.md`
    //     display: block;
    // `}