import { memo } from 'react';
import { landing as CONST } from './constants';
import { Column, Heading, Image } from "../../atoms";
import { BackgroundVideo } from "../../molecules/";
import { Page } from '../../templates';
import { LogoContainer } from "./styles.jsx";
import { AnimatePresence, motion } from "framer-motion";

function Landing(props) {
    return (

                <Page
                    id={""}
                    $fullScreen
                    $pageRef={props.$pageRef}
                >
                    <Column
                        $centreY
                        $paddingLeft={56}
                        $borderBox
                        $gap={8}
                    >
                        <Image
                            $width={CONST.assets.logo.width}
                            $height={CONST.assets.logo.height}
                            {...CONST.assets.logo}
                        />
                        <Heading
                            $fontSize={96}
                            $lineHeight={115.2}
                            $weight={300}
                        >
                            {CONST.titleTxt}
                        </Heading>

                    </Column>

                    <BackgroundVideo src={CONST.assets.backgroundVideo} />
                </Page>

    );
}

export default Landing;