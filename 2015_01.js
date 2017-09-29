const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

async function main() {
    try {
        const input = await readFile('./2015_01.txt', { encoding: 'utf8' });
        
        console.time('Day 01: Not Quite Lisp Part One');
        let position = 0
        for (let i = 0; i < input.length; i++) {
            switch (input[i]) {
                case '(': position += 1; break;
                case ')': position -= 1; break;
            }
        }
        console.log(position);
        console.timeEnd('Day 01: Not Quite Lisp Part One');

        
        console.time('Day 01: Not Quite Lisp Part Two');
        position = 0
        for (let i = 0; i < input.length; i++) {
            switch (input[i]) {
                case '(': position += 1; break;
                case ')': position -= 1; break;
            }
            if (position === -1) {
                console.log(i + 1);
                break;
            }
        }
        console.timeEnd('Day 01: Not Quite Lisp Part Two');

    } catch (e) {
        throw new Error(e);
    }
}

main();
