import { memo } from 'react';
import { Paragraph } from "../../atoms";


function PageSubtitle(props) {
    return (
        <Paragraph
            $paddingBlock={8}
            $fontSize={16}
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
