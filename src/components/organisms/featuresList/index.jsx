import { memo } from 'react';
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
                        <StyledLi
                            key={item.id}
                            onClick={() => props.setShotChange(item.id)}
                        >
                            <Row $gap={8}>
                                <Icon
                                    src={item.icon}
                                    $width={32}
                                    $height={32}
                                />
                                <Heading
                                    $fontSize={16}
                                    $weight={300}
                                    $lineHeight={19.2}
                                >
                                    {item.label}
                                </Heading>
                            </Row>
                        </StyledLi>
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

export default memo(FeaturesList);