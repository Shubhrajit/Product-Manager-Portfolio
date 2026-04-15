import * as fs from 'fs';
import * as path from 'path';

const dir = 'src/assets';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

for (const file of files) {
  const filePath = path.join(dir, file);
  const data = fs.readFileSync(filePath);
  // Remove the last byte that was appended earlier
  const newData = data.slice(0, -1);
  fs.writeFileSync(filePath, newData);
  console.log(`Reverted ${file}`);
}
