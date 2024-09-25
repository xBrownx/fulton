import { memo, useState } from 'react';
import { overlayConst as CONST } from "./constants.jsx";
import { BoxDistance, BoxTitle, Container, HoverContainer, Modal, VerticalBoxLine } from './styles';

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
                $yOffset={item.position.yOffset}
            >
                <BoxDistance $colour={item.colour}>
                    {item.distance}
                </BoxDistance>
                <BoxTitle>
                    {item.title}
                </BoxTitle>
            </Modal>
            <VerticalBoxLine
                $width={item.box.width}
                $height={item.box.height}
                $colour={item.colour}
                $xPos={item.position.x}
                $yPos={item.position.y}
                $hover={isHover}
                $position={item.linePosition}
                $yOffset={item.position.yOffset}
            />
            <HoverContainer
                $width={item.hover.width}
                $height={item.hover.height}
                $xPos={item.hover.x}
                $yPos={item.hover.y}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                $yOffset={item.position.yOffset}
            />

        </>
    )
        ;
}


export default memo(MapOverlay);
