import { memo } from 'react';
import { Heading } from "../../atoms";
import { useMobile } from "../../../hooks/useMobile.jsx";

function PageTitle(props) {
    const isMobile = useMobile();
    return (
        <Heading
            $fontSize={isMobile ? 36 : 64}
            $lineHeight={isMobile ? 43.2 : 57.6}
            $weight={300}
            $letterSpacing={0.2}
            {...props}
        >
            {props.children}
        </Heading>
    );
}

export default memo(PageTitle);
