import { memo } from 'react';
import { Column, Heading, Image } from "../../../components/atoms/index.jsx";
import logo from '../../../assets/Replika.png'

function Footer() {
    return (
        <Column
            $centreX
            $paddingTop={32}
            $paddingBottom={64}
            $gap={32}
        >
            <Heading $fontSize={32}>
                30 Fulton Drive
            </Heading>
            <Image
                src={logo}
                style={{
                    width: "100px",
                    height: "32px"
                }}
            />
        </Column>
    );
}


export default memo(Footer);
