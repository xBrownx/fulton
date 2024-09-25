import { memo } from 'react';
import { Link } from "react-router-dom";
import { header as CONST } from './constants'
import { Container, IconWrapper, ImageWrapper, Wrapper } from './styles';
import { Heading, Image, Row } from '../../atoms';
import { NavLinks } from "../../molecules";


function Header() {
    const replikaLogo = CONST.assets.replikaLogo
    const MenuIcon = CONST.assets.menuIcon.src;
    return (

        <Container>
            <Wrapper
                $width={971}
                $height={70}
            >
                <Row
                    $spaceBetween
                    $paddingLeft={32}
                    $paddingRight={59}
                >
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <Heading
                            $fontSize={32}
                            $fontSizeMobile={24}
                            $lineHeight={42.5}
                            $lineHeightMobile={31.87}
                            $weight={300}
                            $letterSpacing={0.02}
                            $pointerHover
                        >
                            {CONST.titleTxt}
                        </Heading>
                    </Link>
                    <NavLinks linkList={CONST.links} />
                    <IconWrapper>
                        <MenuIcon />
                    </IconWrapper>
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