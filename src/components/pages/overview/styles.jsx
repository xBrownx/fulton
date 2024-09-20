import styled, { css } from 'styled-components';
import { Style as S } from '../../util'
export const StyledUl = styled.ul`
    list-style: none;
    -webkit-columns: 3;
    -moz-columns: 3;
    columns: 3;
    margin: 0;
    padding: 0;
    gap: 0;
    overflow:hidden;
`

export const StyledLi = styled.li`
    padding-bottom: ${S.height(20)}vh;
    -webkit-column-break-inside: avoid; 
`

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${S.width(134)}vw;
    height: ${S.height(48)}vh;
    border-left: 4px solid ${S.colour.primary};
    padding-left: ${S.width(16)}vw;
    
    
`