import { h, FunctionalComponent } from "preact";

export const Img2x: FunctionalComponent<{src: string, src2x: string, class?: string}> = ({src, src2x, class: cls}) =>
    h('img', {src: src, srcSet: `${src2x} 2x`, class: cls});
