const { mathjax } = require('mathjax-full/js/mathjax.js');
const { TeX } = require('mathjax-full/js/input/tex.js');
const { SVG } = require('mathjax-full/js/output/svg.js');
const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor.js');
const adaptor = liteAdaptor();

const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html.js');

const {
  BaseConfiguration,
} = require('mathjax-full/js/input/tex/base/BaseConfiguration.js');
const {
  AmsConfiguration,
} = require('mathjax-full/js/input/tex/ams/AmsConfiguration.js');
const {
  BoldsymbolConfiguration,
} = require('mathjax-full/js/input/tex/boldsymbol/BoldsymbolConfiguration.js');

const img = require('../img.js').configuration;

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

module.exports = (documentstring) => {
  const mj = mathjax.document(documentstring, {
    InputJax: tex,
    OutputJax: svg,
  });
  mj.render();
  return (
    adaptor.doctype(mj.document) + adaptor.outerHTML(adaptor.root(mj.document))
  );
};
