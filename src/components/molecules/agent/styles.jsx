import styled from 'styled-components';
import { Style as S } from '../../util'
import { Media } from "../../util/Media.jsx";
export const Container = styled.div`
    width: ${S.width(215)}vw;
    
    ${Media.md`
        width: 100%;
    `}
`

export const StyledImg = styled.img`
    width: ${S.height(88)}vh;
    
    ${Media.md`
        width: 88px;
        height: 88px;
    `}
`

export const StyledParagraph = styled.p`
    font-family: 'ArchivoNarrow', serif;
    margin: 0;
    padding: 0;
    font-size: ${S.fontSize(20)}vw;
    color: #000;
    opacity: 0.5;
    
    ${Media.md`
        font-size: 16px;
      
    `}
`
