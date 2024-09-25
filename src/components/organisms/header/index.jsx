import { memo, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { header as CONST } from './constants'
import { Container, IconWrapper, ImageWrapper, MobileMenuContainer, MobileUl, Wrapper } from './styles';
import { Column, Heading, Image, Row } from '../../atoms';
import { NavLinks } from "../../molecules";
import { useMobile } from "../../../hooks/useMobile.jsx";
import Exit from '../../../assets/exit.svg'

function Header() {
    const isMobile = useMobile();
    const [isShowMenu, setIsShowMenu] = useState(false);
    const replikaLogo = CONST.assets.replikaLogo
    const MenuIcon = CONST.assets.menuIcon.src;

    return (
        <>
            <Container>
                <Wrapper
                    $width={971}
                    $height={70}
                >
                    <Row
                        $spaceBetween
                        $paddingLeft={isMobile ? 16 : 32}
                        $paddingRight={isMobile ? 16 : 59}
                    >
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
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
                        <IconWrapper>
                            <MenuIcon onClick={() => setIsShowMenu(true)} />
                        </IconWrapper>
                    </Row>
                </Wrapper>


            </Container>
            {isMobile && isShowMenu && <MobileMenuContainer>
                <Column
                    $paddingTop={16}
                    $gap={32}
                    $justifyEnd>

                    <Exit
                        style={{marginRight: "16px"}}
                        onClick={() => setIsShowMenu(false)}
                    />
                    <MobileUl>
                        <Heading $fontSize={20} $lineHeight={20} $weight={300}>
                            HOME
                        </Heading>
                        <Heading $fontSize={20} $lineHeight={20} $weight={300}>
                            OVERVIEW
                        </Heading>
                        <Heading $fontSize={20} $lineHeight={20} $weight={300}>
                            LOCATION
                        </Heading>
                        <Heading $fontSize={20} $lineHeight={20} $weight={300}>
                            DESIGN
                        </Heading>
                        <Heading $fontSize={20} $lineHeight={20} $weight={300}>
                            CONTACT
                        </Heading>
                    </MobileUl>
                </Column>
            </MobileMenuContainer>
            }
        </>
    );
}

export default memo(Header);