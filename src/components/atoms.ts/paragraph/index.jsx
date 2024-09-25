import { StyledParagraph } from './styles';
import { memo } from "react";

function Paragraph(props) {
    return (
        <StyledParagraph {...props}>
            {props.children}
        </StyledParagraph>
    );
}

export default memo(Paragraph);

