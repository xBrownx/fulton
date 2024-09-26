import * as React from 'react';
import { StyledImage } from './styles';
import Container from "../container";
import { StandardProps } from "../../util/StandardProps";

type Props = StandardProps & {}

const Image: React.FC<Props> = (props) => {
    return (
        <Container {...props}>
            <StyledImage {...props} />
        </Container>
    )
}

export default React.memo(Image);
