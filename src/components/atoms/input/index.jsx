import { StyledInput } from "./styles";
import { memo } from "react";

function Input(props) {
    return (
        <StyledInput type="text"{...props}>
            {props.children}
        </StyledInput>
    );
}

export default memo(Input);