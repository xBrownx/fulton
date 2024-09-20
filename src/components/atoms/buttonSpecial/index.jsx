import { memo } from 'react';
import { StyledButton } from './styles';


function ButtonSpecial(props) {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    );
}

export default memo(ButtonSpecial);
