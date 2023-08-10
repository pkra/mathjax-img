import * as fs from 'node:fs';
import { mj } from './mj.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const theBigString = fs.readFileSync(__dirname +'/mathjax-img.html').toString();

fs.writeFileSync(__dirname+'/mathjax-img-output.html', mj(theBigString));
