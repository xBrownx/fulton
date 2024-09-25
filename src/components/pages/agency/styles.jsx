import styled from 'styled-components';
import { Style as S } from '../../util'
export const RowContainer = styled.div`
    border-left: ${S.width(4)}vw solid ${S.colour.primary};
    padding-left: ${S.width(8)}vw;
`

export const Container = styled.div`
    display: flex;
    min-height: 100%;
    height: 100%;
    background: black;
    width: ${S.width(472)}vw;
    padding-inline: ${S.width(64)}vw;
    margin-top: ${S.height(141)}vh;
    padding-top: ${S.height(169)}vh;
    clip-path: polygon(
                0% 0%, 
                100% 0%, 
                100% 100%, 
                0% 100%, 
                0% 15%,
                49% 0%
        );
`

export const Wrapper = styled.div`
    border-left: 2px solid white;
    height: fit-content;
    padding-left: ${S.width(16)}vw;
`