import { memo } from 'react';
import { landing as CONST } from './constants';
import { useMobile } from "../../../hooks/useMobile.ts";
import { ArrowWrapper } from "./styles";
import { Column, Heading, Image } from "../../atoms.ts";
import { BackgroundVideo } from "../../molecules/";
import { Page } from '../../templates.ts';
import Button from '../../atoms.ts/button/index'
import arrow from '../../../assets/downArrow.png'
import * as React from 'react';
import { Props } from "./props";

const Landing: React.FC<Props> = (props) => {
    const isMobile = useMobile();

    return (
        <Page
            id={""}
            fullscreen={true}
            background={"primary"}
            pageRef={props.pageRef}
            mobile={isMobile}
        >
            <BackgroundVideo
                src={CONST.assets.backgroundVideo}
            />

            <Column
                justify={'center'}
                paddingLeft={isMobile ? 16 : 56}
                borderBox={true}
                gap={isMobile ? 0 : 8}
            >
                <Image
                    width={isMobile ? 89.6 : 10000}
                    height={isMobile ? 32 : 10000}
                    // width={1000}
                    // height={1000}
                    {...CONST.assets.logo}

                />
                <Heading
                    fontSize={isMobile ? 48 : 96}
                    lineHeight={isMobile ? 48 : 115.2}
                    weight={300}
                >
                    {isMobile ? CONST.titleTxtMobile : CONST.titleTxt}
                </Heading>
                {isMobile &&
                    <Heading
                        fontSize={32}
                        lineHeight={48}
                        weight={300}
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