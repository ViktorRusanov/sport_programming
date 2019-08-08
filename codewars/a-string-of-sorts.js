/*
 https://www.codewars.com/kata/a-string-of-sorts/train/javascript
Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

sortString("foos", "of")       => "oofs"

sortString("string", "gnirts") => "gnirts"

sortString("banana", "abn")    => "aaabnn"
To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.

Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.
*/

function sortString(str,ordering) {
    let arrOrdering = [];

    ordering.split('').forEach(c => {
        if (!arrOrdering.includes(c)) arrOrdering.push(c);
    });

    const arrStr = str.split('');
    let resStr = [];

    arrOrdering.forEach(o => resStr = resStr.concat(arrStr.filter(s => s === o)));
    resStr = resStr.concat(arrStr.filter(s => !arrOrdering.includes(s)));

    return resStr.join('');
}

console.log(sortString('banana', 'abn'));
