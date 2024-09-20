import styled from "styled-components";
import { Style as S } from '../../util'

export const StyledTextArea = styled.textarea`
    height: ${S.height(109)}vh;
    width: 100%;
    background-color: transparent;
    color: white;
    box-sizing: border-box;
    border: 1px solid white;
    padding: 15px 0 0 20px;
    
    resize: none;
    
    font-size: ${S.fontSize(20)}vw;
    font-family: 'Questrial', serif;
    &::placeholder {
        color: rgba(255, 255, 255, 0.5);;
    }
    
`