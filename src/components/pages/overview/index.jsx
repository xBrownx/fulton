import { memo, useEffect, useState } from 'react';
import { overview as CONST } from './constants';
import { Column, Row, Image } from "../../atoms";
import { Page } from '../../templates';
import { PageTitle, PageSubtitle, PageParagraph, BackgroundVideo } from "../../molecules";
import { OverviewDetails } from "../../organisms/index.jsx";
import { useMobile } from "../../../hooks/useMobile.jsx";
import AssetOverview from "../../organisms/assetOverview/index.jsx";


function Overview(props) {
    const isMobile = useMobile();

    return (
        <Page
            id={"overview"}
            $bgPrimary
            $fullScreen={!isMobile}
            $mobile={isMobile}
        >
            {!isMobile && <BackgroundVideo src={CONST.assets.backgroundVideo.src} />}
            <Row
                $spaceBetween
                $paddingTop={isMobile ? 64 : 212}
                $paddingBottom={isMobile ? 64 : 82}
                $paddingRight={isMobile ? 16 : 32}
                $alignStart
                $fitHeight
            >
                <Column
                    $paddingLeft={isMobile ? 16 : 32}
                    $width={545}
                    $gap={isMobile ? 16 : 40}
                >
                    <Column
                        $gap={16}
                    >
                        <PageTitle
                            $colourLight={!isMobile}
                            $colourDark={isMobile}
                        >
                            {CONST.titleTxt}
                        </PageTitle>
                        <PageSubtitle
                            $colourLight={!isMobile}
                            $colourPrimary={isMobile}
                        >
                            {CONST.subtitleTxt}
                        </PageSubtitle>
                        <Column $gap={16}>
                            {CONST.paragraphTxt.map((paragraph, idx) => {
                                return (
                                    <PageParagraph
                                        key={idx}
                                        $colourLight={!isMobile}
                                        $colourDark={isMobile}
                                    >
                                        {paragraph}
                                    </PageParagraph>
                                )
                            })}
                        </Column>

                    </Column>

                </Column>
                {!isMobile && <OverviewDetails />}
            </Row>

        </Page>
    );
}


export default Overview;