import { memo } from 'react';
import { Container } from './styles';
import { header as CONST } from './constants'
import { Heading, Row } from '../../atoms';
import NavLinks from "../../molecules/navLinks/index.jsx";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <Container
            $height={70}
            $width={971}
        >
            <Row $spaceBetween $paddingLeft={32} $paddingRight={98}>
                <Link to={'/fulton/'} style={{ textDecoration: 'none' }} >
                    <Heading
                        $fontSize={32}
                        $lineHeight={42.5}
                        $weight={300}
                        $letterSpacing={0.02}
                        $pointerHover
                    >
                        {CONST.titleTxt}
                    </Heading>
                </Link>
                <NavLinks linkList={CONST.links} />
            </Row>
        </Container>
    );
}

export default memo(Header);