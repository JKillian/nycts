import { setupPage, normalize } from "csstips";
import * as csx from 'csx';
import { FunctionalComponent, h } from "preact";
import { style } from 'typestyle';
import { Footer } from "./footer";
import { Header } from "./header";
import { Fonts } from "./styleUtils";

export const initPage = () => {
    setupPage('#page');
    normalize();
};

const basePageCls = style({
    minHeight: csx.percent(100),
    width: csx.percent(100),
    fontFamily: Fonts.BODY,
    display: 'flex',
    flexDirection: 'column',
});

const contentCls = style({
    flex: '1 1 auto',
});

export const BasePage: FunctionalComponent<{}> = ({children}) =>
    h('div', {class: basePageCls},
        h(Header, {}),
        h('div', {class: contentCls}, 
            ...(children || []),
        ),
        h(Footer, {}),
    );
