import { useEffect, useState } from "react";
import { StyledPage } from './styles'
import { motion } from 'framer-motion';
import { useLocation } from "react-router-dom";

function Page(props) {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    // useEffect(() => {
    //     console.log(location.pathname);
    //     setIsVisible(location.pathname === `/fulton/${props.id}`);
    //
    // }, [location.pathname]);

    const routeTransition = {
        hide: {
            x: "-100vw"
        },

        animate: {
            x: 0,
            transition: {
                delay: 0.2,
                duration: 0.7,
                staggerChildren: 0,
                type: "ease"
            }
        },

        exit: {
            x: "-100vw",
            transition: {
                duration: 0.7,
                delay: 0.5,
                type: "ease"
            }
        }
    };

    const fadeTransition = {
        hide: {
            opacity: 0,
        },

        animate: {
            opacity: 1,
            transition: {
                delay: 1,
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


        <motion.div
            id={`motion-wipe-${props.id}`}
            key={props.id}
            variants={routeTransition}
            initial="hide"
            animate="animate"
            exit="exit">
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
                </motion.div>
            </StyledPage>

        </motion.div>

    )
        ;
}

export default Page;
