import { memo, useState } from 'react';
import { Container, StyledLi, StyledUl } from "./styles.jsx";
import { menuConstants as CONST } from "./constants.jsx";
import { Heading, Icon, Row } from "../../atoms/index.jsx";

function FeaturesList(props) {
    const menu = CONST.menuItems;


    return (
        <Container>
            <StyledUl>
                {menu.map((item) => {
                    return (
                        <MenuRow
                            key={item.id}
                            item={item}
                            setShotChange={props.setShotChange}
                            currentShot={props.currentShot}
                        />
                    );
                })}
                <StyledLi
                    $paddingTop={92}
                >
                    <Row $gap={8}>
                        <Icon
                            src={CONST.flythrough.icon}
                            $width={32}
                            $height={32}
                        />
                        <Heading
                            $fontSize={16}
                            $weight={300}
                            $lineHeight={19.2}
                        >
                            {CONST.flythrough.label}
                        </Heading>
                    </Row>
                </StyledLi>
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
                <Icon
                    src={props.item.icon}
                    $width={32}
                    $height={32}
                    $active={props.currentShot === props.item.id}
                    $isHover={isHover}
                    $hoverLink
                />
                <Heading
                    $fontSize={16}
                    $weight={300}
                    $lineHeight={19.2}
                    $active={props.currentShot === props.item.id}
                    $isHover={isHover}
                    $hoverLink
                >
                    {props.item.label}
                </Heading>
            </Row>
        </StyledLi>
    );
}

export default memo(FeaturesList);