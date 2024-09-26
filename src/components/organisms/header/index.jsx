import { memo, useState } from 'react';
import { Link } from "react-router-dom";
import { header as CONST } from './constants'
import { Container, IconWrapper, MobileMenuContainer, MobileUl, Wrapper } from './styles';
import { Column, Heading, Row } from '../../atoms';
import { NavLinks } from "../../molecules";
import { useMobile } from "../../../hooks/useMobile.jsx";
import Exit from '../../../assets/exit.svg'

function Header(props) {
    const isMobile = useMobile();
    const [isShowMenu, setIsShowMenu] = useState(false);
    const MenuIcon = CONST.assets.menuIcon.src;

    const scrollTo = (page) => {
        setIsShowMenu(false);
        props.scrollTo(page)
    }

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
                        <Link to={'/'} style={{textDecoration: 'none'}}>
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
            {isMobile &&
                <MobileMenuContainer $visible={isShowMenu}>
                    <Column
                        $paddingTop={16}
                        $gap={32}
                        $justifyEnd
                    >

                        <Exit
                            style={{marginRight: "16px"}}
                            onClick={() => setIsShowMenu(false)}
                        />
                        <MobileUl>
                            <Heading
                                $fontSize={20}
                                $lineHeight={20}
                                $weight={300}
                                onClick={() => scrollTo("landing")}
                            >
                                HOME
                            </Heading>
                            <Heading
                                $fontSize={20}
                                $lineHeight={20}
                                $weight={300}
                                onClick={() => scrollTo("overview")}
                            >
                                OVERVIEW
                            </Heading>
                            <Heading
                                $fontSize={20}
                                $lineHeight={20}
                                $weight={300}
                                onClick={() => scrollTo("location")}
                            >
                                LOCATION
                            </Heading>
                            <Heading
                                $fontSize={20}
                                $lineHeight={20}
                                $weight={300}
                                onClick={() => scrollTo("features")}
                            >
                                DESIGN
                            </Heading>
                            <Heading
                                $fontSize={20}
                                $lineHeight={20}
                                $weight={300}
                                onClick={() => scrollTo("contact")}
                            >
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