import { memo } from 'react';
import { StyledSubheading } from './styles'

function Subheading(props) {
    return (
        <StyledSubheading {...props}>
          {props.children}
        </StyledSubheading>
    );
}

export default memo(Subheading);
