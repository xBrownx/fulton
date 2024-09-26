import * as React from "react";
import { StandardProps } from "../../util/StandardProps";

export type Props = StandardProps & {
    id: string;
    pageRef?: React.Ref<HTMLDivElement>;
    fullscreen?: any | false;
    background: "primary" | "secondary" | undefined;
    mobile: boolean;
    xStart?: boolean;
    xCentre?: boolean;
    xEnd?: boolean;
    yStart?: boolean;
    yCentre?: boolean;
    yEnd?: boolean;
}