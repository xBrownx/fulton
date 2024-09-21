import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100%;
    background: white;
    clip-path: polygon(
            0% 0%, 
            100% 0%, 
            100% 84%, 
            75% 100%, 
            0% 100%
    );
`

export const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    
`

export const CustomImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0% 60%;
`

