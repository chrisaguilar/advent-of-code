const fs = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

async function main() {
    try {
        const input = await readFile(resolve(__dirname, '01.txt'), 'utf8');

        /*
            --- Day 1: Not Quite Lisp ---

            Santa was hoping for a white Christmas, but his weather machine's
            "snow" function is powered by stars, and he's fresh out! To save
            Christmas, he needs you to collect fifty stars by December 25th.

            Collect stars by helping Santa solve puzzles. Two puzzles will be
            made available on each day in the advent calendar; the second
            puzzle is unlocked when you complete the first. Each puzzle grants
            one star. Good luck!

            Here's an easy puzzle to warm you up.

            Santa is trying to deliver presents in a large apartment building,
            but he can't find the right floor - the directions he got are a
            little confusing. He starts on the ground floor (floor 0) and then
            follows the instructions one character at a time.

            An opening parenthesis, (, means he should go up one floor, and a
            closing parenthesis, ), means he should go down one floor.

            The apartment building is very tall, and the basement is very deep;
            he will never find the top or bottom floors.

            For example:

            (()) and ()() both result in floor 0.
            ((( and (()(()( both result in floor 3.
            ))((((( also results in floor 3.
            ()) and ))( both result in floor -1 (the first basement level).
            ))) and )())()) both result in floor -3.

            To what floor do the instructions take Santa?
        */

        console.time('Day 01: Not Quite Lisp Part One');

        const up = (input.match(/\(/g) || []).length;
        const down = (input.match(/\)/g) || []).length;
        console.log(up - down);

        console.timeEnd('Day 01: Not Quite Lisp Part One');

        /*
            --- Part Two ---

            Now, given the same instructions, find the position of the first
            character that causes him to enter the basement (floor -1). The
            first character in the instructions has position 1, the second
            character has position 2, and so on.

            For example:

            ) causes him to enter the basement at character position 1.

            ()()) causes him to enter the basement at character position 5.

            What is the position of the character that causes Santa to first
            enter the basement?
        */

        console.time('Day 01: Not Quite Lisp Part Two');
        let position = 0;
        for (let i = 0; i < input.length; i++) {
            switch (input[i]) {
                case '(':
                    position += 1;
                    break;
                case ')':
                    position -= 1;
                    break;
            }
            if (position === -1) {
                console.log(i + 1);
                break;
            }
        }
        console.timeEnd('Day 01: Not Quite Lisp Part Two');
    } catch (e) {
        console.error(e);
    }
}

main();
