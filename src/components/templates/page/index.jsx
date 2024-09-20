import { memo } from "react";
import { StyledPage } from './styles'

function Page(props) {
    return (
        <StyledPage ref={props.$pageRef} {...props}>
            {props.children}
        </StyledPage>
    );
}

export default memo(Page);
