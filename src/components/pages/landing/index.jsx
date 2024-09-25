import { memo } from 'react';
import { landing as CONST } from './constants';
import { useMobile } from "../../../hooks/useMobile.jsx";
import { ArrowWrapper } from "./styles.jsx";
import { Column, Heading, Image } from "../../atoms";
import { BackgroundVideo } from "../../molecules/";
import { Page } from '../../templates';
import Button from '../../atoms.ts/button/index'

import arrow from '../../../assets/downArrow.png'
function Landing(props) {
    const isMobile = useMobile();

    return (

        <Page
            id={""}
            $fullScreen
            $bgPrimary
            $pageRef={props.$pageRef}
        >
            <BackgroundVideo src={CONST.assets.backgroundVideo} />
            <Button />
            <Column
                $centreY
                $paddingLeft={isMobile ? 16 : 56}

                $borderBox
                $gap={isMobile ? 0 : 8}
            >
                <Image
                    $width={isMobile ? 89.6 : CONST.assets.logo.width}
                    $height={isMobile ? 32 : CONST.assets.logo.height}
                    {...CONST.assets.logo}
                />
                <Heading
                    $fontSize={isMobile ? 48 : 96}
                    $lineHeight={isMobile ? 48 : 115.2}
                    $weight={300}
                >
                    {isMobile ? CONST.titleTxtMobile : CONST.titleTxt}
                </Heading>
                {isMobile &&
                    <Heading
                        $fontSize={32}
                        $lineHeight={48}
                        $weight={300}
                    >
                        {CONST.subtitleTxtMobile}
                </Heading>}

            </Column>
            <ArrowWrapper>
                <Image src={arrow} style={{width: "32px", height: "32px", marginInline: "auto"}}/>
            </ArrowWrapper>

        </Page>

    );
}

export default memo(Landing);