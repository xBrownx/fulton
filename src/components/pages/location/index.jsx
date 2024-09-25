import { memo, useState } from 'react';
import { location as CONST } from './constants';
import { Page } from '../../templates';
import { Column, } from "../../atoms/index.jsx";
import { PageParagraph, PageTitle } from "../../molecules/index.jsx";
import { BackgroundContainer, Container, CustomImage, CustomLink } from "./styles.jsx";
import MapOverlay from "../../organisms/mapOverlay/index.jsx";

function Location(props) {

    const [loadMiniMap, setLoadMiniMap] = useState(false);

    return (
        <Page
            id={"location"}
            $bgPrimary
            $pageRef={props.$pageRef}
        >
            {/*{loadMiniMap ?*/}
            {/*    <iframe src="https://my.atlist.com/map/164fda48-b25a-4046-bd6c-ea74ce9c20fa/?share=true"*/}
            {/*        allow="geolocation 'self' https://my.atlist.com" width="100%" height="400px" loading="lazy"*/}
            {/*        frameBorder="0" scrolling="no" allowFullScreen id="atlist-embed"></iframe>*/}
            {/*    :*/}
                <>
                <BackgroundContainer>
                <CustomImage {...CONST.assets.backgroundImg} />
            </BackgroundContainer>
            {/*<MapOverlay />*/}
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
                            <CustomLink
                                href="/map" target="_blank"
                            >
                                {CONST.footerTxt}
                            </CustomLink>
                        </Column>


                    </Column>
                </Container>
            </Column>
                </>
            {/*}*/}


        </Page>
    );

}

export default memo(Location);