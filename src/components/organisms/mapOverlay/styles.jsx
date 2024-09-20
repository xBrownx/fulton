import styled from 'styled-components';
import { Style as S } from '../../util'
export const Container = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
`

export const Modal = styled.div`
    background: black;
    width: ${props => S.width(props.$width)}vw;
    height: ${props => S.height(props.$height)}vw;
`