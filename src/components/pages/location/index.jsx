import { memo, useState } from 'react';
import { location as CONST } from './constants';
import { Page } from '../../templates';
import { Column, } from "../../atoms/index.jsx";
import { PageParagraph, PageTitle } from "../../molecules/index.jsx";
import { BackgroundContainer, Container, CustomImage, CustomLink } from "./styles.jsx";

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
                                href="/fulton/#/map" target="_blank"
                            >
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