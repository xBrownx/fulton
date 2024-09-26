import React from 'react';
import { location as CONST } from './constants';
import { Page } from '../../templates';
import { Column, Image, } from "../../atoms/index.jsx";
import { PageParagraph, PageTitle } from "../../molecules/index.jsx";
import { BackgroundContainer, Container, CustomImage, CustomLink } from "./styles.jsx";
import { useMobile } from "../../../hooks/useMobile.jsx";
import { LocationModal } from "../../organisms/index.jsx";

function Location(props) {
    const isMobile = useMobile();
    const [showModal, setShowModal] = React.useState(false);
    return (
        <Page
            id={"location"}
            $bgPrimary
            $fullScreen={!isMobile}
            $pageRef={props.$pageRef}
        >
            {showModal &&
                <LocationModal
                    closemodal={() => setShowModal(false)}
                    videosrc={CONST.assets.nearbyAssets.src}
                />
            }
            {!isMobile &&
                <BackgroundContainer>
                    <CustomImage src={CONST.assets.backgroundImg.src} {...CONST.assets.backgroundImg} />
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
                        $gap={isMobile ? 16 : 32}
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
                            {!isMobile &&
                                <Column $paddingTop={16} $gap={32}>
                                    <CustomLink href="/#/map">
                                        <Image $width={32} $height={32} src={CONST.assets.mapIcon.src} />
                                        {CONST.footerTxt[0]}
                                    </CustomLink>
                                    <CustomLink onClick={() => setShowModal(true)}>
                                        <Image $width={32} $height={32} src={CONST.assets.nearbyIcon.src} />
                                        {CONST.footerTxt[1]}
                                    </CustomLink>
                                </Column>
                            }
                        </Column>
                    </Column>
                </Container>

            </Column>
        </Page>
    )
        ;

}

export default React.memo(Location);