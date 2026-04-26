const fs = require('fs');
const content = fs.readFileSync('src/pages/Dining.jsx');
for (let i = 0; i < content.length; i++) {
    if (content[i] > 127) {
        console.log(`Byte at ${i}: ${content[i]} (${content[i].toString(16)}) Context: ${content.slice(Math.max(0, i-10), i+10).toString()}`);
    }
}
