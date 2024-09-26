import { memo } from 'react';
import Container from '../container';
import * as React from 'react';
import { Props } from "./props";

const Column: React.FC<Props> = (props) => {
    return (
        <Container
            position={'relative'}
            display={'flex'}
            flexDirection={'column'}
            {...props}
        >
            {props.children}
        </Container>
    );
}

export default memo(Column);