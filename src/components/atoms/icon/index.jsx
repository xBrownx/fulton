import { memo } from 'react';
import { Container } from "./styles.jsx";

function Icon(props) {
    const IconSrc = props.src;  
    return(
        <Container {...props}>
            <IconSrc />
        </Container>
    );
}

export default memo(Icon);
