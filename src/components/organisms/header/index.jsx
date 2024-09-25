import { memo } from 'react';
import { Link } from "react-router-dom";
import { header as CONST } from './constants'
import { Container, ImageWrapper, Wrapper } from './styles';
import { Heading, Image, Row } from '../../atoms';
import { NavLinks } from "../../molecules";


function Header() {
    const replikaLogo = CONST.assets.replikaLogo
    return (

        <Container>
            <Wrapper
                $width={971}
                $height={70}
            >
                <Row $spaceBetween $paddingLeft={32} $paddingRight={59}>
                    <Link to={'/fulton/'} style={{ textDecoration: 'none' }}>
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
            </Wrapper>
            <ImageWrapper>
                <Image
                    $width={replikaLogo.width}
                    $height={replikaLogo.height}
                    {...replikaLogo}
                />
            </ImageWrapper>
        </Container>

    );
}

export default memo(Header);