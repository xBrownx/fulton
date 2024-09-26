import { StyledHeading } from "./styles";
import { memo } from "react";
import { Props } from "./props";
import * as React from "react";

const Heading: React.FC<Props> = (props) => {
    return (
        <StyledHeading {...props}>
            {props.children}
        </StyledHeading>
    );
}

export default memo(Heading);
