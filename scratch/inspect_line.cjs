const fs = require('fs');
const content = fs.readFileSync('src/pages/Dining.jsx', 'utf8');
const lines = content.split('\n');
const line42 = lines[41]; // 0-indexed
console.log('Line 42 chars:');
for (let i = 0; i < line42.length; i++) {
    const char = line42[i];
    const code = char.charCodeAt(0);
    console.log(`${i}: ${char} (code: ${code})`);
}
