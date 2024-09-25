import { memo } from 'react';
import { location as CONST } from './constants';
import { Page } from '../../templates';
import { Column, } from "../../atoms/index.jsx";
import { PageParagraph, PageSubtitle, PageTitle } from "../../molecules/index.jsx";
import { BackgroundContainer, Container, CustomImage, CustomLink } from "./styles.jsx";
import MapOverlay from "../../organisms/mapOverlay/index.jsx";

function Location(props) {
    return (
        <Page
            id={"location"}
            $bgPrimary
            $pageRef={props.$pageRef}
        >
            <BackgroundContainer>
                <CustomImage {...CONST.assets.backgroundImg} />
            </BackgroundContainer>
            <MapOverlay />
            <Column
                $height={706}
                $paddingTop={123}
                $fitContent
            >
                <Container>
                    <Column
                        $paddingTop={32}
                        $paddingLeft={32}
                        $paddingRight={40}
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
                            <CustomLink>
                                {CONST.footerTxt}
                            </CustomLink>
                        </Column>


                    </Column>
                </Container>
            </Column>

        </Page>
    );

}

export default memo(Location);