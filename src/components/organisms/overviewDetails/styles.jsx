import styled from 'styled-components';
import { Style as S } from '../../util'
import { Media } from "../../util/Media.jsx";

export const Container = styled.div`
    position: absolute;
    display: flex;
    bottom: 0;
    right: 0;
    top: 0;
    padding-top: ${S.height(212)}vh;
    padding-bottom: ${S.height(82)}vh;
    padding-right: ${S.width(32)}vw;
    
    ${Media.md`
        padding-top: 0;
        padding-bottom: 0;
    `}
`


export const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    ${Media.md`
        gap: 32px;
        padding-right: 16px;
        padding-top: 64px;
    `}
`

export const StyledLi = styled.li`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    ${Media.md`
        height: fit-content;
    `}
`

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${S.width(170)}vw;
    height: ${S.height(48)}vh;
    border-left: 4px solid white;
    padding-left: ${S.width(16)}vw;
    
    ${Media.md`
        width: 100%;
        height: 48px;
        padding-left: 16px;
    `}
`