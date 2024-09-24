import { memo, useState } from 'react';
import { overlayConst as CONST } from "./overlayConst.jsx";
import { BoxDistance, BoxTitle, Container, HoverContainer, Modal } from './styles';

function MapOverlay(props) {
    return (
        <Container {...props}>
            {Object.keys(CONST).map(item => (<MapItem key={item.id} item={item} />))}
        </Container>
    );
}

const MapItem = (props) => {
    const item = CONST[props.item];
    const [isHover, setHover] = useState(false);
    return (
        <>
            <Modal
                $width={item.box.width}
                $height={item.box.height}
                $colour={item.colour}
                $xPos={item.position.x}
                $yPos={item.position.y}
                $hover={isHover}
            >
                <BoxDistance $colour={item.colour}>
                    {item.distance}
                </BoxDistance>
                <BoxTitle>
                    {item.title}
                </BoxTitle>
            </Modal>
            <HoverContainer
                $width={item.hover.width}
                $height={item.hover.height}
                $xPos={item.hover.x}
                $yPos={item.hover.y}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />
        </>
    )
        ;
}


export default memo(MapOverlay);
