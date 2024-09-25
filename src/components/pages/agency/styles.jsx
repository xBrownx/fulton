import styled from 'styled-components';
import { Style as S } from '../../util'
import { Media } from "../../util/Media.jsx";
export const RowContainer = styled.div`
    border-left: ${S.width(4)}vw solid ${S.colour.primary};
    padding-left: ${S.width(8)}vw;
    
    ${Media.md`
        padding-left: 16px;
        border-left: 4px solid ${S.colour.primary};
    `}
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
                0% calc(0% + 8.5vw),
                calc(0% + 16.682vw) 0%
        );
    

`
export const Wrapper = styled.div`
    border-left: 2px solid white;
    height: fit-content;
    padding-left: ${S.width(16)}vw;
    
    ${Media.md`
        padding-left: 16px;
    `}
`

export const MobileContainer = styled.div`
    display: flex;
    min-height: 100%;
    height: 100%;
    background: black;
    width: 100%;
    padding-inline: 16px;
    padding-top: 103px;
    padding-bottom: 16px;
    clip-path: polygon(
                0% 0%, 
                100% 0%, 
                100% 100%, 
                0% 100%, 
                0% 5%,
                40% 0%
        );
`