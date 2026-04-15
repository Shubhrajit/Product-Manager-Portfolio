import * as https from 'https';

https.get('https://api.github.com/repos/shubhrajit/Product-Manager-Portfolio/commits/main', {
  headers: { 'User-Agent': 'Node.js' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(JSON.parse(data).sha);
    console.log(JSON.parse(data).commit.message);
  });
});
