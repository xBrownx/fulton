import {StyledTextArea} from "./styles";
import { memo } from "react";

function TextArea(props) {
    return <StyledTextArea {...props} />;
}

export default memo(TextArea);