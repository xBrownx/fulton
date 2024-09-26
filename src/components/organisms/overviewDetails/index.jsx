import { memo } from 'react';
import { detailsConst as CONST } from "./constants";
import { Heading, Paragraph } from "../../atoms/";
import { Container, ListWrapper, StyledLi, StyledUl } from "./styles";
import { useMobile } from "../../../hooks/useMobile.jsx";

function OverviewDetails() {
    const isMobile = useMobile();
    return (
        <Container>
            <StyledUl>
                {CONST.details.map(item => {
                    return (
                        <StyledLi key={item.label}>
                            <ListWrapper>
                                <Heading
                                    $colourLight
                                    $fontSize={isMobile ? 24 : 30}
                                    $lineHeight={isMobile ? 27 : 30}
                                    $weight={300}
                                >
                                    {item.value}
                                </Heading>
                                <Paragraph
                                    $colourLight
                                    $fontSize={isMobile ? 16: 18}
                                    $lineHeight={isMobile ? 16 : 36}
                                    $weight={400}
                                >
                                    {item.label}
                                </Paragraph>
                            </ListWrapper>
                        </StyledLi>
                    );
                })}
            </StyledUl>
        </Container>
    );
}


export default memo(OverviewDetails);
