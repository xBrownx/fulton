import { memo } from 'react';
import { Container } from './styles';
import { header as CONST } from './constants'
import { Heading, Row } from '../../atoms';
import NavLinks from "../../molecules/navLinks/index.jsx";

function Header(props) {
    return (
        <Container
            $height={70}
            $width={971}
        >
            <Row $spaceBetween $paddingLeft={32} $paddingRight={98}>
                <Heading
                    $fontSize={32}
                    $lineHeight={42.5}
                    $weight={300}
                    $letterSpacing={0.02}
                    onClick={() => props.navigateTo("landing")}
                    $pointerHover
                >
                    {CONST.titleTxt}
                </Heading>
                <NavLinks
                    linkList={CONST.links}
                    navigateTo={props.navigateTo}
                />
            </Row>
        </Container>
    );
}

export default memo(Header);