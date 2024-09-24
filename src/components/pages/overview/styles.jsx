import styled, { css } from 'styled-components';
import { Style as S } from '../../util'


export const CarouselContainer = styled.div`
    width: ${S.width(800)}vw;
    height: ${S.height(573)}vh;
    
    clip-path: polygon(
                0% 0%, 
                100% 0%, 
                100% 100%, 
                35% 100%, 
                0% 72%,
                0% 0%
        );
`