import React, { memo, useEffect, useState } from 'react';
import { overview as CONST } from './constants';
import { Column, Row, Image } from "../../atoms";
import { Page } from '../../templates';
import { PageTitle, PageSubtitle, PageParagraph, BackgroundVideo } from "../../molecules";
import { OverviewDetails } from "../../organisms/index.jsx";
import { useMobile } from "../../../hooks/useMobile.jsx";
import AssetOverview from "../../organisms/assetOverview/index.jsx";
import { CustomContainer, CustomWrapper } from "./styles.jsx";
import { CustomLink } from "../location/styles.jsx";


function Overview(props) {
    const isMobile = useMobile();

    return (
        <Page
            id={"overview"}
            $pageRef={props.$pageRef}
            $bgPrimary={!isMobile}
            $fullScreen={!isMobile}
            $mobile={isMobile}
        >
            {!isMobile && <BackgroundVideo src={CONST.assets.backgroundVideo.src} />}
            <Row
                $spaceBetween
                $paddingTop={isMobile ? 64 : 123}
                $paddingBottom={isMobile ? 64 : 82}
                $paddingRight={isMobile ? 16 : 32}
                $alignStart
                $fitHeight
            >
                <CustomContainer>
                    <Column
                        $paddingTop={isMobile ? 0 : 70}
                        $paddingLeft={isMobile ? 16 : 32}
                        $width={545}
                        $gap={isMobile ? 16 : 40}
                        $fillParent
                    >
                        <Column
                            $gap={16}
                        >
                            <PageTitle
                                $colourLight
                            >
                                {CONST.titleTxt}
                            </PageTitle>
                            <PageSubtitle
                                $colourLight
                            >
                                {CONST.subtitleTxt}
                            </PageSubtitle>
                            <CustomWrapper>
                                <Column $gap={16}>
                                <Column $gap={16}>
                                    {CONST.paragraphTxt.map((paragraph, idx) => {
                                        return (
                                            <PageParagraph
                                                key={idx}
                                                $colourLight
                                                $opacity={0.8}
                                            >
                                                {paragraph}
                                            </PageParagraph>
                                        )
                                    })}
                                </Column>
                                <CustomLink href={CONST.assets.im.src} target={"_blank"}>
                                    <Image $width={32} $height={32} src={CONST.assets.downloadIcon.src} />
                                    {CONST.linkTxt}
                                </CustomLink>
                                </Column>
                            </CustomWrapper>
                        </Column>
                    </Column>
                </CustomContainer>
                {!isMobile && <OverviewDetails />}
            </Row>
        </Page>
    );
}


export default Overview;