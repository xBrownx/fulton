import { memo } from 'react';
import { contact as CONST } from './constants';
import { Page } from '../../templates';
import { Column, Heading, Image, Paragraph, Row } from "../../atoms/index.jsx";
import { PageParagraph, PageTitle } from "../../molecules/index.jsx";
import { Container, MobileContainer, RowContainer, Wrapper } from "./styles.jsx";
import Agent from "../../molecules/agent/index.jsx";
import { useMobile } from "../../../hooks/useMobile.jsx";

function Agency() {
    const isMobile = useMobile();

    return (

        <Page
            id={'agency'}
            $bgPrimary
            $fullScreen={!isMobile}
            $mobile={isMobile}
        >
            <Column>
                <Row
                    $paddingLeft={isMobile ? 16 : 32}
                    $alignStart
                    $mobileFlip
                >
                    <Column
                        $paddingTop={isMobile ? 64 : 183}
                        $paddingBottom={isMobile ? 64 : 17}
                        $gap={isMobile ? 32 : 64}
                        $borderBox={!isMobile}
                        $fitContent={isMobile}
                    >
                        <Column $gap={isMobile ? 32 : 32}>
                            <PageTitle
                                $colourDark
                                $fontSize={isMobile ? 36 : 64}
                                $lineHeight={isMobile ? 43.2 : 57.6}
                                $weight={300}
                            >
                                {CONST.titleTxt}
                            </PageTitle>
                            <PageParagraph $colourDark $opacity={0.6}>
                                {CONST.subtitleTxt}
                            </PageParagraph>
                        </Column>
                        <Column $gap={32}>
                            <RowContainer>
                                <Column $gap={16}>
                                    <Image
                                        $width={CONST.assets.cbreLogo.width}
                                        $height={CONST.assets.cbreLogo.height}
                                        {...CONST.assets.cbreLogo}
                                    />
                                    <Row
                                        $gap={isMobile ? 32 : 64}
                                        $mobileFlip
                                        $alignStart
                                    >
                                        {CONST.agencies.crbe.agents.map(agent => {
                                            return (
                                                <Agent
                                                    key={agent.name}
                                                    name={agent.name}
                                                    phone={agent.mobile}
                                                    photo={agent.photo}
                                                />
                                            );
                                        })}
                                    </Row>
                                </Column>
                            </RowContainer>

                            <RowContainer>
                                <Column $gap={16}>
                                    <Image
                                        $width={CONST.assets.colliersLogo.width}
                                        $height={CONST.assets.colliersLogo.height}
                                        {...CONST.assets.colliersLogo}
                                    />
                                    <Row
                                        $gap={isMobile ? 32 : 64}
                                        $mobileFlip
                                        $alignStart
                                    >
                                        {CONST.agencies.colliers.agents.map(agent => {
                                            return (
                                                <Agent
                                                    key={agent.name}
                                                    name={agent.name}
                                                    phone={agent.mobile}
                                                    photo={agent.photo}
                                                />
                                            );
                                        })}
                                    </Row>
                                </Column>
                            </RowContainer>
                        </Column>

                    </Column>
                    {!isMobile && <Container>
                        <Wrapper>
                            <Column $gap={29}>
                                <Image
                                    $width={CONST.assets.centuriaLogo.width}
                                    $height={CONST.assets.centuriaLogo.height}
                                    {...CONST.assets.centuriaLogo} />

                                {CONST.centuria.map((city) => {
                                    return (
                                        <Column
                                            key={city.heading}
                                        >
                                            <Heading
                                                $fontSize={16}
                                                $lineHeight={21.25}
                                            >
                                                {city.heading}
                                            </Heading>
                                            <Paragraph
                                                $fontSize={14}
                                                $lineHeight={24}
                                                $opacity={0.6}
                                            >
                                                {city.phone}
                                            </Paragraph>
                                            <Paragraph
                                                $fontSize={10}
                                                $lineHeight={10.3}
                                                $opacity={0.7}
                                            >
                                                {city.addressLineOne}
                                            </Paragraph>
                                            <Paragraph
                                                $fontSize={10}
                                                $lineHeight={10.3}
                                                $opacity={0.7}
                                            >
                                                {city.addressLineTwo}
                                            </Paragraph>
                                        </Column>
                                    );
                                })}
                            </Column>
                        </Wrapper>
                    </Container>}
                </Row>
                {isMobile && <MobileContainer>
                    <Wrapper>
                        <Column $gap={32}>
                            <Image
                                $width={CONST.assets.centuriaLogo.width}
                                $height={CONST.assets.centuriaLogo.height}
                                {...CONST.assets.centuriaLogo} />

                            {CONST.centuria.map((city) => {
                                return (
                                    <Column
                                        key={city.heading}
                                    >
                                        <Heading
                                            $fontSize={16}
                                            $lineHeight={21.25}
                                        >
                                            {city.heading}
                                        </Heading>
                                        <Paragraph
                                            $fontSize={14}
                                            $lineHeight={24}
                                            $opacity={0.6}
                                        >
                                            {city.phone}
                                        </Paragraph>
                                        <Paragraph
                                            $fontSize={10}
                                            $lineHeight={10.3}
                                            $opacity={0.7}
                                        >
                                            {city.addressLineOne}
                                        </Paragraph>
                                        <Paragraph
                                            $fontSize={10}
                                            $lineHeight={10.3}
                                            $opacity={0.7}
                                        >
                                            {city.addressLineTwo}
                                        </Paragraph>
                                    </Column>
                                );
                            })}
                        </Column>
                    </Wrapper>
                </MobileContainer>
                }
            </Column>
        </Page>

    );
}

export default memo(Agency);