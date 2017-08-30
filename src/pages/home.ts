import { h, render } from "preact";

import '../lib/basePage';

const page = h('span', {}, 'Coming soon');

render(page, document.querySelector('#page')!);
