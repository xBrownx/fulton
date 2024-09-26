import { StandardProps } from "../../util/StandardProps";

export type Props = StandardProps & {
    fontSize: number;
    lineHeight: number;
    weight?: number | 300;
}