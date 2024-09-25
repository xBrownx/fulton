import { StyledHeading } from "./styles";
import { memo } from "react";

function Heading(props) {
    return (
        <StyledHeading {...props}>
            {props.children}
        </StyledHeading>
    );
}

export default memo(Heading);
