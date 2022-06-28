const fs =  require('fs');
const mj = require('./mj');

const theBigString = fs.readFileSync(__dirname +'/mathjax-img.html').toString();

fs.writeFileSync(__dirname+'/mathjax-img-output.html', mj(theBigString));
