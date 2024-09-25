import styled from "styled-components";
import { Style as S } from "../../util";
import { Media } from "../../util/Media.jsx";

export const StyledInput = styled.input`
    width: 100%;
    height: ${S.height(40)}vh;
    background-color: transparent;
    
    box-sizing: border-box;
    border: 1px solid white;
    padding: 0 0 0 20px;
    font-size: ${S.fontSize(16)}vw;
    font-family: 'Questrial', serif;
    &::placeholder {
        color: rgba(255, 255, 255, 0.5);;
    }
    
    ${Media.md`
       font-size: 16px;
       height: 40px;
       line-height: 16.48px;
       font-weight: 400
    `}

`