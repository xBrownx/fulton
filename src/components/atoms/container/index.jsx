import { memo } from 'react';
import { StyledContainer } from './styles';


function Container(props) {
    return (
        <StyledContainer {...props}>
            {props.children}
        </StyledContainer>
    );
}

export default memo(Container);