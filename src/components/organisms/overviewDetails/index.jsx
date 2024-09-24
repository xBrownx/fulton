import { memo } from 'react';
import { detailsConst as CONST } from "./constants";
import { Heading, Paragraph } from "../../atoms/";
import { Container, ListWrapper, StyledLi, StyledUl } from "./styles";

function OverviewDetails() {
    return (

            <StyledUl>
                {CONST.details.map(item => {
                    return (
                        <StyledLi key={item.label}>
                            <ListWrapper>
                                <Heading
                                    $colourPrimary
                                    $fontSize={20}
                                    $lineHeight={24}
                                    $weight={300}
                                >
                                    {item.value}
                                </Heading>
                                <Paragraph
                                    $colourDark
                                    $fontSize={12}
                                    $lineHeight={24}
                                    $weight={400}
                                >
                                    {item.label}
                                </Paragraph>
                            </ListWrapper>
                        </StyledLi>
                    );
                })}
            </StyledUl>
    );
}


export default memo(OverviewDetails);
