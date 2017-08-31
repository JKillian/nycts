import * as csx from "csx";
import { h } from "preact";
import { style } from "typestyle";
import { darkBgLink, fixedBar } from "./styleUtils";

const footerCls = style(fixedBar, {
    fontSize: csx.px(12),
    height: csx.px(50),
    display: 'flex',
    alignItems: 'center',
});

export const Footer = () =>
    h('div', {class: footerCls},
        h('a', {href: 'https://github.com', class: style(darkBgLink)}, 'Site code on GitHub'),
    );
