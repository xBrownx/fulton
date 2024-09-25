import { memo, useState } from 'react';
import { location as CONST } from './constants';
import { Page } from '../../templates';
import { Column, Image, } from "../../atoms/index.jsx";
import { PageParagraph, PageTitle } from "../../molecules/index.jsx";
import { BackgroundContainer, Container, CustomImage, CustomLink } from "./styles.jsx";
import { useMobile } from "../../../hooks/useMobile.jsx";

function Location(props) {
    const isMobile = useMobile();

    return (
        <Page
            id={"location"}
            $bgPrimary
            $fullScreen={!isMobile}
        >
            {!isMobile &&
                <BackgroundContainer>
                    <CustomImage {...CONST.assets.backgroundImg} />
                </BackgroundContainer>
            }
            <Column
                $height={706}
                $paddingTop={isMobile ? 64 : 123}
                $paddingBottom={isMobile ? 32 : 0}
                $fitContent
                $gap={isMobile ? 32 : 0}
            >
                <Container>
                    <Column
                        $paddingTop={isMobile ? 0 : 32}
                        $paddingLeft={isMobile ? 16 : 32}
                        $paddingRight={isMobile ? 16 : 40}
                        $width={512}
                        $gap={16}
                    >
                        <PageTitle $colourDark>
                            {CONST.titleTxt}
                        </PageTitle>
                        <Column $gap={16}>
                            {CONST.paragraphTxt.map(item => {
                                return (
                                    <PageParagraph
                                        key={item}
                                        $colourDark
                                        $opacity={0.6}
                                    >
                                        {item}
                                    </PageParagraph>
                                );
                            })}
                            {!isMobile && <CustomLink
                                href="/fulton/#/map" target="_blank"
                            >
                                {CONST.footerTxt}
                            </CustomLink>
                            }
                        </Column>
                    </Column>
                </Container>

            </Column>
        </Page>
    );

}

export default memo(Location);