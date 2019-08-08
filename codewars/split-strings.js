/* https://www.codewars.com/kata/split-strings/train/javascript
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
 */
function solution(str){

    return str.length % 2
        ? str.split(str, str.length / 1)
        : str.split(str, str.length / 1)

}

console.log(solution('abcdef'))
