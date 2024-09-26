import { memo, useEffect } from 'react';
import { StyledUl, StyledLi } from './styles';
import { Link as StyledLink } from '../../atoms';
import { Link, useLocation } from "react-router-dom";

function NavLinks(props) {
    const linkList = props.linkList;
    const location = useLocation();

    return (
        <StyledUl>
            {linkList.map(link => {
                return (
                    <StyledLi key={link.id}>
                        <Link to={link.path} style={{ textDecoration: 'none' }}>
                            <StyledLink $isActive={location.pathname === `${link.path}`}>
                                {link.label}
                            </StyledLink>
                        </Link>
                    </StyledLi>
                );
            })}
        </StyledUl>
    );
}

export default memo(NavLinks);
