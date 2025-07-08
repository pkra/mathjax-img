import {combineWithMathJax} from '../../node_modules/@mathjax/src/mjs/components/global.js';
import {VERSION} from '../../node_modules/@mathjax/src/mjs/components/version.js';

import * as module1 from '../../js/img.js';

if (MathJax.loader) {
  MathJax.loader.checkVersion('[img]/img', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  img: module1
}});
