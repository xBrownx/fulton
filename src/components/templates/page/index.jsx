import { memo, useEffect, useState } from "react";
import { StyledPage } from './styles'
import { AnimatePresence, motion, usePresence } from 'framer-motion';
import { useLocation } from "react-router-dom";

function Page(props) {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
        setIsVisible(location.pathname === `/fulton/${props.id}`);

    }, [location.pathname]);

    const routeTransition = {
        hide: {
            x: "100vw"
        },

        animate: {
            x: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.5
            }
        },

        exit: {
            x: "-100vw",
            transition: {
                duration: 0.5
            }
        }
    };

    return (
            <>
                {isVisible &&
                    <motion.div
                        id={`motion-${props.id}`}
                        key={props.id}
                        variants={routeTransition}
                        initial="hide"
                        animate="animate"
                        exit="exit">
                        <StyledPage ref={props.$pageRef} {...props}>
                            {props.children}
                        </StyledPage>
                    </motion.div>
                }
            </>


            );
            }

            export default Page;
