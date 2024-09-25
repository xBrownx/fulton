import { memo, useState } from 'react';
import { menuConstants as CONST } from "./constants";
import { Container, StyledLi, StyledUl } from "./styles";
import { Heading, Image, Row } from "../../atoms";

function FeaturesList(props) {
    const menu = CONST.menuItems;
    const [menuHover, setMenuHover] = useState(false);
    return (
        <Container $hover={menuHover}>
            <StyledUl
                onMouseEnter={() => setMenuHover(true)}
                onMouseLeave={() => setMenuHover(false)}
            >
                {menu.map((item) => {
                    return (
                        <MenuRow
                            key={item.id}
                            item={item}
                            setShotChange={props.setShotChange}
                            currentShot={props.currentShot}
                            menuHover={menuHover}
                        />
                    );
                })}
            </StyledUl>
        </Container>
    );
}

const MenuRow = (props) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <StyledLi
            onClick={() => props.setShotChange(props.item.id)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >

            <Row $gap={8}>
                <div>
                    <Image
                        src={isHover || props.currentShot === props.item.id ? props.item.iconActive : props.item.icon}
                        $width={32}
                        $height={32}
                        $active={props.currentShot === props.item.id}
                        $isHover={isHover}
                        $hoverLink
                    />
                </div>
                    <Heading
                        $fontSize={16}
                        $weight={300}
                        $lineHeight={19.2}
                        $active={props.currentShot === props.item.id}
                        $isHover={isHover}
                        $hoverLink
                        $displayNone={!props.menuHover}
                    >
                        {props.item.label}
                    </Heading>
            </Row>
        </StyledLi>
    );
}

export default memo(FeaturesList);