import { memo } from 'react';
import { overview as CONST } from './constants';
import { Column, Heading, Paragraph, Row } from "../../atoms";
import { Page } from '../../templates';
import { PageTitle, PageSubtitle, PageParagraph } from "../../molecules/";
import { ListWrapper, StyledLi, StyledUl } from "./styles";
import OverviewCarousel from "../../organisms/overviewCarousel/index.jsx";
import { CarouselContainer } from "../../organisms/overviewCarousel/styles.jsx";


function Overview(props) {
    return (
        <Page
            $bgPrimary
            $fullScreen
            $pageRef={props.$pageRef}
        >
            <Row
                $spaceBetween
                $paddingTop={155}
                $paddingBottom={82}
                $alignStart
            >

                <Column
                    $paddingLeft={32}
                    $width={545}
                    $gap={40}
                >
                    <Column
                        $gap={16}
                    >
                        <PageTitle>
                            {CONST.titleTxt}
                        </PageTitle>
                        <PageSubtitle>
                            {CONST.subtitleTxt}
                        </PageSubtitle>
                        <PageParagraph>
                            {CONST.paragraphTxt}
                        </PageParagraph>
                    </Column>

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
                </Column>
                <CarouselContainer>
                    <OverviewCarousel />
                </CarouselContainer>
            </Row>
        </Page>
    );
}


export default memo(Overview);