import * as csx from "csx";

export const Colors = {
    BLUE: csx.color('#294E80'),
    DARK_BG_TEXT: csx.color('#f8f8f8'),
    DARK_BG_TEXT_HOVER: csx.color('#dfdbe5'),
};

export const Fonts = {
    BODY: "'Noto Sans', sans-serif",
};

export const fixedBar = {
    backgroundColor: Colors.BLUE.toHexString(),
    color: Colors.DARK_BG_TEXT.toHexString(),
    padding: csx.px(5),
    flex: '0 0 auto',
};
