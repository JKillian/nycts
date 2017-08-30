import { media, style } from "typestyle";
import { h, render } from "preact";
import { BasePage, initPage } from '../lib/basePage';
import * as titleImg from '../../assets/title.png';
import * as titleImg2x from '../../assets/title@2x.png';
import * as csx from "csx";
import { Img2x } from "../lib/utils";

initPage();
const logoDivCls = style({
    textAlign: 'center',
    padding: csx.px(20),
});

const logoCls = style(
    media({minWidth: 0, maxWidth: 699}, {maxWidth: csx.percent(80)}),
    media({minWidth: 700}, {maxWidth: csx.percent(50)}),
);
    
const logo = h('div', {class: logoDivCls},
    h(Img2x, {class: logoCls, src: titleImg, src2x: titleImg2x}),
);
const page = h(BasePage, {},
    logo,
);
render(page, document.querySelector('#page')!);
