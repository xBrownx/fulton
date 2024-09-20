import { StyledButton } from "./styles";
import { memo } from "react";

function Button(props) {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    );
}

export default memo(Button);
