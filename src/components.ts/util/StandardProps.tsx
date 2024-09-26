import * as React from "react";

export type StandardProps = {
    position?: 'relative'|'absolute'|'fixed'|'static';
    display?: 'none' | 'flex' | 'block';
    flexDirection?: 'column' | 'row';
    width?: number;
    widthPercent?: number;
    minWidth?: number;
    maxWidth?: number;
    height?: number;
    heightPercent?: number;
    minHeight?: number;
    maxHeight?: number;
    gap?: number;
    paddingInline?: number;
    paddingBlock?: number;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    marginInline?: number;
    marginBlock?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
    justify?: 'start' | 'center' | 'end';
    align?: 'start' | 'center' | 'end';
    borderBox?: boolean | false;
    mobile?: boolean | false;
    children?: React.ReactNode;
}