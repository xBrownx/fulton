import React from 'react';
import { location as CONST } from './constants';
import { Page } from '../../templates';
import { Column, Image, } from "../../atoms/index.jsx";
import { PageParagraph, PageTitle } from "../../molecules/index.jsx";
import { BackgroundContainer, Container, CustomImage, CustomLink, CustomWrapper } from "./styles.jsx";
import { useMobile } from "../../../hooks/useMobile.jsx";
import { LocationModal } from "../../organisms/index.jsx";
import LocationMapModal from "../../organisms/locationMapModal/index.jsx";

function Location(props) {
    const isMobile = useMobile();

    const [showNearbyAssetsModal, setShowNearbyAssetsModal] = React.useState(false);
    const [showMapModal, setShowMapModal] = React.useState(false);

    return (
        <Page
            id={"location"}
            $bgPrimary
            $fullScreen={!isMobile}
            $pageRef={props.$pageRef}
        >
            {showNearbyAssetsModal &&
                <LocationModal
                    closemodal={() => setShowNearbyAssetsModal(false)}
                    videosrc={CONST.assets.nearbyAssets.src}
                />
            }

            {showMapModal &&
                <LocationMapModal
                    closemodal={() => setShowMapModal(false)}
                />
            }
            {!isMobile &&
                <BackgroundContainer >
                    <CustomImage src={CONST.assets.backgroundImg.src} {...CONST.assets.backgroundImg} />
                </BackgroundContainer >
            }
            <Column
                $height={706}
                $paddingTop={isMobile ? 64 : 123}
                $paddingBottom={isMobile ? 32 : 1000}
                $fitContent
                $gap={isMobile ? 32 : 0}
            >
                <Container >
                    <Column
                        $paddingTop={isMobile ? 0 : 32}
                        $paddingLeft={isMobile ? 16 : 32}
                        $paddingRight={isMobile ? 16 : 40}
                        $width={512}
                        $gap={isMobile ? 16 : 32}
                    >
                        <PageTitle $colourDark >
                            {CONST.titleTxt}
                        </PageTitle >
                        <Column $gap={32} >
                            <CustomWrapper >
                                <Column $gap={16} >
                                    {CONST.paragraphTxt[0].map(item => {
                                        return (
                                            <PageParagraph
                                                key={item}
                                                $colourDark
                                                $opacity={0.6}
                                            >
                                                {item}
                                            </PageParagraph >
                                        );
                                    })}
                                    <CustomLink onClick={() => setShowMapModal(true)} >
                                        <Image $width={32} $height={32} src={CONST.assets.mapIcon.src} />
                                        {CONST.footerTxt[0]}
                                    </CustomLink >
                                </Column >
                            </CustomWrapper >
                            <CustomWrapper >
                                <Column $gap={16} >
                                    {CONST.paragraphTxt[1].map(item => {
                                        return (
                                            <PageParagraph
                                                key={item}
                                                $colourDark
                                                $opacity={0.6}
                                            >
                                                {item}
                                            </PageParagraph >
                                        );
                                    })}
                                    <Column $paddingTop={16} $gap={32} >
                                        <CustomLink onClick={() => setShowNearbyAssetsModal(true)} >
                                            <Image $width={32} $height={32} src={CONST.assets.nearbyIcon.src} />
                                            {CONST.footerTxt[1]}
                                        </CustomLink >
                                    </Column >

                                </Column >
                            </CustomWrapper >
                        </Column >
                    </Column >
                </Container >
            </Column >
        </Page >
    )
        ;

}

export default React.memo(Location);