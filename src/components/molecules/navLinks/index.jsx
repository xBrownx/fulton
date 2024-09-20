import { memo } from 'react';
import { StyledUl, StyledLi } from './styles';
import { Link } from '../../atoms';

function NavLinks(props) {
    const linkList = props.linkList;

    return (
        <StyledUl>
          {linkList.map(link  => {
              return(
                  <StyledLi key={link.id} >
                      <Link
                          onClick={() => props.navigateTo(link.id)}
                      >
                          {link.label}
                      </Link>
                  </StyledLi>
              );
          })}
        </StyledUl>
    );
}

export default memo(NavLinks);
