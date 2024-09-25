const SCREEN_RES = {width: 1440, height: 810};

interface Colour {
    primary: string;
    neutralLight: string;
    neutralDark: string;
}

interface Styles {
    width: (w: number) => string;
    height: (h: number) => number;
    fontSize: (px: number) => number;
    customHeight?: (h: number) => number;
    colour: Colour;
}

const colour: Colour = {
    primary: '#B5BA4C',
    neutralLight: '#FFF',
    neutralDark: '#000',
}

export const styles: Styles = {
    width: w => `${w / SCREEN_RES.width * 100}vw`,
    height: h => h / SCREEN_RES.height * 100,
    fontSize: px => ((px * 0.74999943307122) * 1.3333343412075) / SCREEN_RES.width * 100,
    colour: colour
}








