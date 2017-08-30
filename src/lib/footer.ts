import * as csx from "csx";
import { h } from "preact";
import { style } from "typestyle";
import { Colors, fixedBar } from "./styleUtils";

const footerCls = style(fixedBar, {
    fontSize: csx.px(12),
    height: csx.px(50),
    display: 'flex',
    alignItems: 'center',
});

const darkBgLink = style({
    color: Colors.DARK_BG_TEXT.toHexString(),
    textDecoration: "none",
    $nest: {
        '&:visited': { color: Colors.DARK_BG_TEXT.toHexString() },
        '&:hover': { textDecoration: 'underline' },
    },
});

export const Footer = () =>
    h('div', {class: footerCls},
        h('a', {href: 'https://github.com', class: darkBgLink}, 'Site code on GitHub'),
    );
