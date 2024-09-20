import { memo } from 'react';
import { contact as CONST } from './constants';
import { Page } from '../../templates';
import { Column, Heading, Image, Row } from "../../atoms/index.jsx";
import { PageParagraph } from "../../molecules/index.jsx";
import { Container, RowContainer } from "./styles.jsx";
import Agent from "../../molecules/agent/index.jsx";
import EnquireForm from "../../molecules/enquireForm/index.jsx";
import { AnimatePresence, motion } from "framer-motion";

function Contact(props) {
    return (

        <Page
            id={"contact"}
            $bgPrimary
            $fullScreen
            $pageRef={props.$pageRef}
        >
            <Row
                $paddingTop={155}
                $paddingLeft={32}
                $alignStart
            >
                <Column $gap={32} $paddingBottom={17} $borderBox>
                    <Column $gap={16}>
                        <Heading
                            $colourDark
                            $fontSize={64}
                            $lineHeight={57.6}
                            $weight={300}
                        >
                            {CONST.titleTxt}
                        </Heading>
                        <PageParagraph>
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
                                <Row $gap={32}>
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
                                <Row $gap={32}>
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
                    <Image
                        $paddingTop={44}
                        $width={CONST.assets.centuriaLogo.width}
                        $height={CONST.assets.centuriaLogo.height}
                        {...CONST.assets.centuriaLogo} />
                </Column>
                <Container>
                    <EnquireForm />
                </Container>
            </Row>
        </Page>

    );

}

export default memo(Contact);