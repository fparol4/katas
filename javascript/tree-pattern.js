/**
 * ###Task:

You have to write a function pattern which creates the following Pattern(See Examples) upto n(parameter) number of rows.

####Rules/Note:

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
All the lines in the pattern have same length i.e equal to the number of characters in the last line.
Range of n is (-∞,100]
###Examples:

pattern(5):

    1
   121
  12321
 1234321
123454321
 */

const pattern = (n) => {
    let output = ''
    for (let i = 1; i <= n; i += 2) {
        const spaces = n - i
        const middle = Math.floor((i + 1) / 2)
        let initialPattern = ''
        for (let j = 1; j <= middle; j++) {
            initialPattern += String(j)
        }
        const endPattern = initialPattern
            .split('')
            .splice(0, initialPattern.length - 1)
            .reverse()
            .join('')

        output += initialPattern + endPattern + '\n'
    }
    return output
}

pattern(5)