import { memo } from 'react'
import { Container } from './styles';

function Row(props) {
    return (
        <Container {...props}>
            {props.children}
        </Container>
    );
}


export default memo(Row);