import * as React from "react";
import { StyledButton } from "./styles";
import { memo } from "react";

type Props = {
    width?: number;
    height?: number;
    fontSize?: number;
    gap?: number;
    fillParent?: any | false;
    square?: any | false;
    paddingInline?: number;
    paddingBlock?: number;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    children: React.ReactNode;
}

const Button: React.FC<Props> = (props) => {
   return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
   );
}

export default memo(Button);
