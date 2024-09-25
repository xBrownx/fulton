import { memo } from 'react';
import { Paragraph } from "../../atoms";


function PageParagraph(props) {
    return (
        <Paragraph
            $fontSize={16}
            $lineHeight={24}
            $weight={400}
            $opacity={props.$opacity || 0.8}
            {...props}
        >
            {props.children}
        </Paragraph>
    );
}


export default memo(PageParagraph);
