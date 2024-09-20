import { memo } from 'react';
import { overlayConst as CONST } from "./overlayConst.jsx";
import { BoxDistance, BoxTitle, Container, Modal } from './styles';

function MapOverlay(props) {
    return (
        <Container {...props}>
            {Object.keys(CONST).map(i => {
                const item = CONST[i];
                return (
                    <Modal
                        $width={item.box.width}
                        $height={item.box.height}
                        $colour={item.colour}
                        $xPos={item.position.x}
                        $yPos={item.position.y}
                    >
                        <BoxDistance $colour={item.colour}>
                            {item.distance}
                        </BoxDistance>
                        <BoxTitle>
                            {item.title}
                        </BoxTitle>
                    </Modal>
                );
            })}
        </Container>
    );
}


export default memo(MapOverlay);
