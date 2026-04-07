const fs = require('fs');
const s = fs.readFileSync('D:/JJ-TV/reelshort/www.reelshort.com/_next/static/chunks/pages/_app-13ee384a0fd50b6c.js', 'utf8');
let i = -1;
while ((i = s.indexOf('baseURL', i + 1)) >= 0) {
  console.log(s.substring(i, i + 300));
  console.log('---');
}
