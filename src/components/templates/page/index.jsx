import { PageLogo, StyledPage } from './styles'
import { motion } from 'framer-motion';
import { useMobile } from "../../../hooks/useMobile.jsx";
import { Image } from "../../atoms/index.jsx";

const logo = 'https://fulton-assets.s3.ap-southeast-2.amazonaws.com/images/replika-logo.png';

function Page(props) {
    const isMobile = useMobile();

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
            <StyledPage ref={props.$pageRef} {...props}>
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
                                    src={logo}
                                />
                        </PageLogo>
                    }
                </motion.div>
            </StyledPage>
    );
}

export default Page;
