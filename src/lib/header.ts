import { h } from "preact";
import { style } from "typestyle";
import { fixedBar } from "./styleUtils";
import * as titleInverse from '../../assets/titleInverse.png';
import * as titleInverse2x from '../../assets/titleInverse@2x.png';
import { Img2x } from "./utils";
import * as csx from "csx";

const headerCls = style(fixedBar, {
    display: 'flex',
    alignItems: "center",
});

const imgCls = style({
    height: csx.px(50),
    marginTop: csx.px(5), // the trailing p in meetup means we have to adjust this a little
});

export const Header = () =>
    h('div', {class: headerCls},
        h(Img2x, {class: imgCls, src: titleInverse, src2x: titleInverse2x}),
        h('span', {}, 'welcome'),
    );
