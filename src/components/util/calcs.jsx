import {css} from "styled-components";

export const DESIGN = {width: 1440, height: 810};

export const pxToViewWidth = (pxWidth) => {
    return (pxWidth / DESIGN.width) * 100;
}

export const pxToViewHeight = (pxHeight) => {
    return (pxHeight / DESIGN.height) * 100;
}

export const pxToCustomHeight = (pxHeight, customHeight) => {
    return (pxHeight / customHeight) * 100;
}

export const pxToFontSize = (px) => {
    const pt = px * 0.74999943307122;
    return (pt * 1.3333343412075) / DESIGN.width * 100;
}
