import * as React from "react";
import { StyledButton } from "./styles";
import { memo } from "react";
import {Props} from "./props";


const Button: React.FC<Props> = (props) => {
   return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
   );
}

export default memo(Button);
