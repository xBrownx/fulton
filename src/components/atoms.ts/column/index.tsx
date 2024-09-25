import { memo } from 'react';
import { Container } from './styles';

type Props = {

}

function Column(props) {
    return (
        <Container {...props}>
            {props.children}
        </Container>
    );
}
export default memo(Column);