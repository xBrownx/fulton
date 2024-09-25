import { memo } from 'react';
import { Heading } from "../../atoms";

function PageTitle(props) {
    return (
        <Heading
            $fontSize={64}
            $lineHeight={57.6}
            $weight={300}
            $letterSpacing={0.2}
            {...props}
        >
            {props.children}
        </Heading>
    );
}

export default memo(PageTitle);
