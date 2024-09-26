import * as React from "react";
import { StyledContainer } from "./styles";
import { StandardProps } from "../../util/StandardProps";

const Container: React.FC<StandardProps> = (props) => {
    return (
        <StyledContainer {...props}>
            {props.children}
        </StyledContainer>
    );
}

export default React.memo(Container);