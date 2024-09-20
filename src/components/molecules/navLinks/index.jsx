import { memo } from 'react';
import { StyledUl, StyledLi } from './styles';
import { Link as StyledLink } from '../../atoms';
import { Link } from "react-router-dom";

function NavLinks(props) {
    const linkList = props.linkList;

    return (
        <StyledUl>
            {linkList.map(link => {
                return (
                    <StyledLi key={link.id}>
                        <Link to={link.path} style={{ textDecoration: 'none' }}>
                            <p>
                                {link.label}
                            </p>
                        </Link>
                    </StyledLi>
                );
            })}
        </StyledUl>
    );
}

export default memo(NavLinks);
