/*************************************************************
 *
 *  Copyright (c) 2020 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

const Configuration = require('mathjax-full/js/input/tex/Configuration.js');
const SymbolMap = require('mathjax-full/js/input/tex/SymbolMap.js');
const TexError = require('mathjax-full/js/input/tex/TexError');

const CheckDimen = function (dimen) {
  if (dimen === '') return '';
  if (
    dimen.match(
      /^\s*([-+]?(\.\d+|\d+(\.\d*)?))\s*(pt|em|ex|mu|px|mm|cm|in|pc)\s*$/
    )
  ) {
    return dimen.replace(/ /g, '');
  }
  throw new TexError('BadImageDimen', 'Bad dimension for image: %1', dimen);
};

new SymbolMap.CommandMap(
  'img',
  { img: 'Img' },
  {
    Img(parser, name) {
      const arg = parser.GetBrackets(name, '');
      const def = {
        valign: '',
        width: '',
        height: '',
      };
      if (arg.match(/[,=]/)) {
        for (const pair of arg.split(/\s*,\s*/)) {
          const [key, ...value] = pair.split(/\s*=\s*/);
          if (!def.hasOwnProperty(key))
            throw new TexError(
              'UnknownKey',
              'Unknown parameter "%1" in %2',
              key,
              name
            );
          def[key] = CheckDimen(value.join('='));
        }
      } else {
        def.valign = CheckDimen(arg);
        def.width = CheckDimen(parser.GetBrackets(name, ''));
        def.height = CheckDimen(parser.GetBrackets(name, ''));
      }
      def.alt = parser.GetBrackets(name, '');
      def.src = parser.GetArgument(name);
      if (!def.valign) delete def.valign;
      if (!def.width) delete def.width;
      if (!def.height) delete def.height;
      if (!def.alt) delete def.alt;
      parser.Push(parser.create('token', 'mglyph', def));
    },
  }
);

exports.configuration = Configuration.Configuration.create('img', {
  handler: { macro: ['img'] },
});
