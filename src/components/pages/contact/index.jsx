import { memo } from 'react';
import { contact as CONST } from './constants';
import { Page } from '../../templates';
import { Column, Row } from "../../atoms/index.jsx";
import { PageParagraph, PageTitle } from "../../molecules/index.jsx";
import { CarouselContainer, } from "./styles.jsx";
import EnquireForm from "../../molecules/enquireForm/index.jsx";
import { OverviewCarousel } from "../../organisms/index.jsx";
import { useMobile } from "../../../hooks/useMobile.jsx";

function Contact() {
    const isMobile = useMobile()

    return (

        <Page
            id={"contact"}
            $fullScreen
            $mobile={isMobile}
        >
            <Row
                $paddingTop={isMobile ? 64 : 155}
                $paddingRight={isMobile ? 0 : 32}
                $gap={32}
                $alignStart
                $mobileFlip
                $paddingInline={isMobile ? 16 : 0}
                $borderBox
            >
                <CarouselContainer>
                    <OverviewCarousel />
                </CarouselContainer>
                <Column $gap={isMobile ? 32 : 64} $borderBox>
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