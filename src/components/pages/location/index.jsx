import { memo } from 'react';
import { location as CONST } from './constants';
import { Page } from '../../templates';
import { Column, Image, } from "../../atoms/index.jsx";
import { PageParagraph, PageSubtitle, PageTitle } from "../../molecules/index.jsx";
import { BackgroundContainer, Container } from "./styles.jsx";
import MapOverlay from "../../organisms/mapOverlay/index.jsx";

function Location(props) {
    return (
        <Page
            $bgSecondary
            $pageRef={props.$pageRef}
        >
            <BackgroundContainer>
                <Image {...CONST.assets.backgroundImg} />
            </BackgroundContainer>
            <MapOverlay />
            <Column
                $height={706}
                $paddingTop={123}
                $fitContent
                $width={584}
            >
                <Container>
                    <Column
                        $paddingTop={32}
                        $paddingLeft={32}
                        $paddingRight={40}
                        $width={512}
                        $gap={16}

                    >
                        <PageTitle>
                            {CONST.titleTxt}
                        </PageTitle>
                        <PageSubtitle>
                            {CONST.subtitleTxt}
                        </PageSubtitle>
                        <Column $gap={16}>
                            {CONST.paragraphTxt.map(item => {
                                return (
                                    <PageParagraph key={item}>
                                        {item}
                                    </PageParagraph>
                                );
                            })}
                        </Column>


                    </Column>
                </Container>
            </Column>

        </Page>
    );

}

export default memo(Location);