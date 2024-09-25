import { memo } from 'react';
import { detailsConst as CONST } from "./constants";
import { Heading, Paragraph } from "../../atoms/";
import { Container, ListWrapper, StyledLi, StyledUl } from "./styles";

function OverviewDetails() {
    return (
        <Container>
            <StyledUl>
                {CONST.details.map(item => {
                    return (
                        <StyledLi key={item.label}>
                            <ListWrapper>
                                <Heading
                                    $colourLight
                                    $fontSize={30}
                                    $lineHeight={30}
                                    $weight={300}
                                >
                                    {item.value}
                                </Heading>
                                <Paragraph
                                    $colourLight
                                    $fontSize={18}
                                    $lineHeight={36}
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
