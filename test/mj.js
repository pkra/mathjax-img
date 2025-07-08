import { mathjax } from '@mathjax/src/js/mathjax.js';
import { TeX } from '@mathjax/src/js/input/tex.js';
import { SVG } from '@mathjax/src/js/output/svg.js';
import { liteAdaptor } from '@mathjax/src/js/adaptors/liteAdaptor.js';
const adaptor = liteAdaptor();

import { RegisterHTMLHandler } from '@mathjax/src/js/handlers/html.js';

import {
  BaseConfiguration,
} from '@mathjax/src/js/input/tex/base/BaseConfiguration.js';
import {
  AmsConfiguration,
} from '@mathjax/src/js/input/tex/ams/AmsConfiguration.js';
import {
  BoldsymbolConfiguration,
} from '@mathjax/src/js/input/tex/boldsymbol/BoldsymbolConfiguration.js';

import { configuration as img } from '../js/img.js';

RegisterHTMLHandler(adaptor);

const tex = new TeX({
  packages: [
    BaseConfiguration.name,
    AmsConfiguration.name,
    BoldsymbolConfiguration.name,
    img.name,
  ],
});
const svg = new SVG({
  fontCache: 'global',
  displayAlign: 'left',
  displayIndent: '0',
});

export const mj = (documentstring) => {
  const mj = mathjax.document(documentstring, {
    InputJax: tex,
    OutputJax: svg,
  });
  mj.render();
  return (
    adaptor.doctype(mj.document) + adaptor.outerHTML(adaptor.root(mj.document))
  );
};
