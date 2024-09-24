import { memo } from 'react';
import { overview as CONST } from './constants';
import { Column, Row } from "../../atoms";
import { Page } from '../../templates';
import { PageTitle, PageSubtitle, PageParagraph, BackgroundVideo } from "../../molecules";
import { OverviewDetails } from "../../organisms/index.jsx";


function Overview(props) {
    return (
        <Page
            id={"overview"}
            $bgPrimary
            $fullScreen
            $pageRef={props.$pageRef}
        >
            <BackgroundVideo src={CONST.assets.backgroundVideo.src} />
            <Row
                $spaceBetween
                $paddingTop={212}
                $paddingBottom={82}
                $paddingRight={32}
                $alignStart
                $fitHeight
            >
                <Column
                    $paddingLeft={32}
                    $width={545}
                    $gap={40}
                >
                    <Column
                        $gap={16}
                    >
                        <PageTitle $colourLight>
                            {CONST.titleTxt}
                        </PageTitle>
                        <PageSubtitle $colourLight>
                            {CONST.subtitleTxt}
                        </PageSubtitle>
                        <Column $gap={16}>
                            {CONST.paragraphTxt.map((paragraph, idx) => {
                                return (
                                    <PageParagraph key={idx} $colourLight>
                                        {paragraph}
                                    </PageParagraph>
                                )
                            })}
                        </Column>

                    </Column>


                </Column>
                    <OverviewDetails />

            </Row>
        </Page>
    );
}


export default memo(Overview);