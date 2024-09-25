import styled from 'styled-components';
import { Style as S } from '../../util'

export const Container = styled.div`
    position: absolute;
    display: flex;
    bottom: 0;
    right: 0;
    top: 0;
    padding-top: ${S.height(212)}vh;
    padding-bottom: ${S.height(82)}vh;
`


export const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
`

export const StyledLi = styled.li`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${S.width(134)}vw;
    height: ${S.height(48)}vh;
    border-left: 4px solid white;
    padding-left: ${S.width(16)}vw;
`