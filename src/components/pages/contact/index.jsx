import { memo } from 'react';
import { contact as CONST } from './constants';
import { Page } from '../../templates';
import { Column, Heading, Image, Row } from "../../atoms/index.jsx";
import { PageParagraph, PageTitle } from "../../molecules/index.jsx";
import { CarouselContainer, Container, RowContainer } from "./styles.jsx";
import EnquireForm from "../../molecules/enquireForm/index.jsx";
import { OverviewCarousel } from "../../organisms/index.jsx";

function Contact() {
    return (

        <Page
            id={"contact"}
            $fullScreen
        >
            <Row
                $paddingTop={155}
                $paddingRight={32}
                $gap={32}
                $alignStart
            >
                <CarouselContainer $width={869}>
                    <OverviewCarousel />
                </CarouselContainer>
                <Column $gap={64} $borderBox>
                    <PageTitle>
                        Get in Touch
                    </PageTitle>
                    <EnquireForm />
                </Column>
            </Row>
        </Page>

    );

}

export default memo(Contact);