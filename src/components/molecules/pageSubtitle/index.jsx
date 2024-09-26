import { memo } from 'react';
import { Paragraph } from "../../atoms";
import { useMobile } from "../../../hooks/useMobile.jsx";


function PageSubtitle(props) {
    const isMobile = useMobile()
    return (
        <Paragraph
            $paddingBlock={8}
            $fontSize={24}
            $lineHeight={24}
            $weight={400}
            $gap={16}
            {...props}
        >
            {props.children}
        </Paragraph>
    );
}


export default memo(PageSubtitle);
