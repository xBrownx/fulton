import styled from "styled-components";
import { Style as S } from "../../util";

export const StyledInput = styled.input`
    width: 100%;
    height: ${S.height(40)}vh;
    background-color: transparent;
    
    box-sizing: border-box;
    border: 1px solid white;
    padding: 0 0 0 20px;
    font-size: ${S.fontSize(20)}vw;
    font-family: 'Questrial', serif;
    &::placeholder {
        color: rgba(255, 255, 255, 0.5);;
    }

`