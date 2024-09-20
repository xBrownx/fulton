import { memo } from 'react';
import { Paragraph } from "../../atoms";


function PageParagraph(props) {
    return (
        <Paragraph
            $colourDark
            $fontSize={16}
            $lineHeight={24}
            $weight={400}
            $opacity={0.6}
        >
            {props.children}
        </Paragraph>
    );
}


export default memo(PageParagraph);
