import styled from 'styled-components';
import { Style as S } from '../../util';

export const Container = styled.div`
    width: ${props => S.width(props.$width)}vw;
    height: ${props => S.height(props.$height)}vh;
`

export const StyledVideo = styled.video`
    width: 100%;
    height: 100%;
    
`