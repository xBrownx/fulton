import { memo } from 'react';
import { StyledLink } from './styles';

function Link(props) {
    return (
        <StyledLink {...props}>
          {props.children}
        </StyledLink>
    );
}

export default memo(Link);
