import { css } from 'styled-components';
import * as CALCS from './calcs';

export const Style = {}

Style.width = CALCS.pxToViewWidth;
Style.height = CALCS.pxToViewHeight;
Style.fontSize = CALCS.pxToFontSize;
Style.customHeight = CALCS.pxToCustomHeight;


Style.colour = {
    primary: '#B5BA4C',
    neutralLight: '#FFF',
    neutralDark: '#000',
}

Style.font = {
    primary: css``,
    secondary: css``,
}


