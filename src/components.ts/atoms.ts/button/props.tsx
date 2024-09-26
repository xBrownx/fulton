import * as React from "react";
import { StandardProps } from "../../util/StandardProps";

export type Props = {
    width?: number;
    height?: number;
    fontSize?: number;
    gap?: number;
    fillParent?: any | false;
    square?: any | false;
    paddingInline?: number;
    paddingBlock?: number;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    children?: React.ReactNode;
}