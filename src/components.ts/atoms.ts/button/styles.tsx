import styled, { css } from "styled-components";
import { styles as S } from '../../util';
import { Props } from "./props";

export const StyledButton = styled.button<Props>`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: ${S.fontSize(16)}vw;
    font-family: 'Questrial', serif;
    color: white;
    margin: 0;
    padding: 0.5em 1.5em;


    background: ${S.colour.primary};
    border-color: ${S.colour.primary};
    border-width: 1px;
    border-style: solid;
    transition: color 300ms;
    overflow: hidden;
    position: relative;
    width: fit-content;
    z-index: 1;

    ${(props: { width?: number; }) => props.width && css`
        width: ${S.width(props.width)};
        padding: 0;
    `};

    ${(props: { height?: number; }) => props.height && css`
        height: ${S.height(props.height)}vh;
    `};

    ${(props: { fontSize?: number; }) => props.fontSize && css`
        font-size: ${S.fontSize(props.fontSize)}vw;
    `};


    ${(props: { gap?: number; }) => props.gap && css`
        gap: ${S.width(props.gap)};
    `};

    ${(props: { fillParent?: any; }) => props.fillParent && css`
        width: 100%;
    `};

    ${(props: { square?: any; }) => props.square && css`
        width: 150px;
        height: 150px;
    `};

    &:hover {
        cursor: pointer;
        color: #FFF;
    }

    &::after {
        content: "";
        background: ${S.colour.primary};
        position: absolute;
        z-index: -1;
        padding: 0.5em 1.5em;
        display: block;
        transition: all 0.35s;
        left: 0;
        right: 0;
        top: -100%;
        bottom: 100%;
    }

    &:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.35s;
    }

    ${(props: { paddingInline?: number; }) => props.paddingInline && css`
        padding-inline: ${S.width(props.paddingInline)};
    `};

    ${(props: { paddingBlock?: number; }) => props.paddingBlock && css`
        padding-block: ${S.height(props.paddingBlock)}vh;
    `};

    ${(props: { paddingTop?: number; }) => props.paddingTop && css`
        padding-top: ${S.height(props.paddingTop)}vh;
    `};

    ${(props: { paddingRight?: number; }) => props.paddingRight && css`
        padding-right: ${S.width(props.paddingRight)};
    `};

    ${(props: { paddingBottom?: number; }) => props.paddingBottom && css`
        padding-bottom: ${S.height(props.paddingBottom)}vh;
    `};

    ${(props: { paddingLeft?: number; }) => props.paddingLeft && css`
        padding-left: ${S.width(props.paddingLeft)};
    `};


`

