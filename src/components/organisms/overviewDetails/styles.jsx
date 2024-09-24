import styled from 'styled-components';
import { Style as S } from '../../util'

export const Container = styled.div`
    display: flex;
    height: 100%;
`


export const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: stretch;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
    height: 100%;
`

export const StyledLi = styled.li`
    height: 100%;
`

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${S.width(134)}vw;
    height: ${S.height(48)}vh;
    border-left: 4px solid ${S.colour.primary};
    padding-left: ${S.width(16)}vw;
`