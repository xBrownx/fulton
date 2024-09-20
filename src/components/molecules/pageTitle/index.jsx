import { memo } from 'react';
import { Heading } from "../../atoms/index.jsx";

function PageTitle(props) {
    return (
        <Heading
            $colourDark
            $fontSize={64}
            $lineHeight={57.6}
            $weight={300}
            $letterSpacing={0.2}

        >
            {props.children}
        </Heading>
    );
}

export default memo(PageTitle);
