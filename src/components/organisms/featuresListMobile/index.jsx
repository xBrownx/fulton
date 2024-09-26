import { memo } from 'react';
import { menuConstants as CONST } from "../featuresList/constants";
import { MobileContainer, MobileLi, MobileUl } from "./styles";
import { Heading, Image, Row } from "../../atoms";

function FeaturesList(props) {
    const menu = CONST.menuItems;
    return (
        <MobileContainer>
            <MobileUl>
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
            </MobileUl>
        </MobileContainer>
    );
}

const MenuRow = (props) => {
    return (
        <MobileLi onClick={() => props.setShotChange(props.item.id)}>
            <Row $gap={8}>
                <div>
                    <Image
                        src={props.currentShot === props.item.id ? props.item.iconActive : props.item.icon}
                        $width={32}
                        $height={32}
                        $active={props.currentShot === props.item.id}
                        $hoverLink
                    />
                </div>
                    <Heading
                        $fontSize={12}
                        $weight={300}
                        $lineHeight={15.94}
                        $active={props.currentShot === props.item.id}
                        $noWrap
                    >
                        {props.item.label}
                    </Heading>
            </Row>
        </MobileLi>
    );
}

export default memo(FeaturesList);