import { memo } from 'react';
import { overlayConst as CONST } from "./overlayConst.jsx";
import { Container, Modal } from './styles';

function MapOverlay(props) {

    const wh = CONST.westernHighway;
    return (
        <Container {...props}>
            {/*<Modal ${}>*/}
            {/*    {wh.title}*/}
            {/*</Modal>*/}
        </Container>
    );
}


export default memo(MapOverlay);
