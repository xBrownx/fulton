import { PageLogo, StyledPage } from './styles'
import { motion } from 'framer-motion';
import { useMobile } from "../../../hooks/useMobile.ts";
import { Image } from "../../atoms/index.jsx";
import replikaLogo from '../../../assets/Replika.png'
import * as React from "react";

type Props = {
    id: string;
    pageRef?: React.Ref<HTMLDivElement>;
    children: React.ReactNode;
}

const Page: React.FC<Props> = (props) => {
    const isMobile: boolean = useMobile();
    const fadeTransition = {
        hide: {
            opacity: 0,
        },

        animate: {
            opacity: 1,
            transition: {
                delay: 0,
                duration: 0.7,
                type: "ease"
            }
        },

        exit: {
            opacity: 0,
            transition: {
                duration: 0.4,
                delay: 0,
                type: "ease"
            }
        }
    };

    return (
            <StyledPage ref={props.pageRef} {...props}>
                <motion.div
                    id={`motion-fade-${props.id}`}
                    key={props.id}
                    variants={fadeTransition}
                    initial="hide"
                    animate="animate"
                    exit="exit"
                    style={{ display: "flex", width: "100%", height: "100%", position: "relative" }}
                >
                    {props.children}
                    {!isMobile &&
                        <PageLogo>
                                <Image
                                    $width={77.62*1.5}
                                    $height={32 * 1.5}
                                    src={replikaLogo}
                                />
                        </PageLogo>
                    }
                </motion.div>
            </StyledPage>
    );
}

export default Page;
