import styled, { css } from 'styled-components';
import { Style as S } from '../../util'
export const Container = styled.div`
    background: black;
    width: fit-content;
    
    clip-path: polygon(
            0% 0%, 
            100% 0%, 
            100% 95%, 
            85% 100%, 
            0% 100%
    );
`

export const StyledUl = styled.ul`
    padding-block: ${S.height(32)}vh;
    padding-inline: ${S.width(32)}vw;
    display: flex;
    flex-direction: column;
    gap: ${S.height(10)}vh;
`

export const StyledLi = styled.li`
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