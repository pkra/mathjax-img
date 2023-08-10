import { mathjax } from 'mathjax-full/js/mathjax.js';
import { TeX } from 'mathjax-full/js/input/tex.js';
import { SVG } from 'mathjax-full/js/output/svg.js';
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
const adaptor = liteAdaptor();

import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';

import {
  BaseConfiguration,
} from 'mathjax-full/js/input/tex/base/BaseConfiguration.js';
import {
  AmsConfiguration,
} from 'mathjax-full/js/input/tex/ams/AmsConfiguration.js';
import {
  BoldsymbolConfiguration,
} from 'mathjax-full/js/input/tex/boldsymbol/BoldsymbolConfiguration.js';

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
