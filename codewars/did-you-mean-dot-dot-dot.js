/*
https://www.codewars.com/kata/did-you-mean-dot-dot-dot/train/javascript
I'm sure, you know Google's "Did you mean ...?", when you entered a search term and mistyped a word. In this kata we want to implement something similar.

You'll get an entered term (lowercase string) and an array of known words (also lowercase strings). Your task is to find out, which word from the dictionary is most similar to the entered one. The similarity is described by the minimum number of letters you have to add, remove or replace in order to get from the entered word to one of the dictionary. The lower the number of required changes, the higher the similarity between each two words.

Same words are obviously the most similar ones. A word that needs one letter to be changed is more similar to another word that needs 2 (or more) letters to be changed. E.g. the mistyped term berr is more similar to beer (1 letter to be replaced) than to barrel (3 letters to be changed in total).

Extend the dictionary in a way, that it is able to return you the most similar word from the list of known words.

Code Examples:

fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
fruits.findMostSimilar('strawbery'); // must return "strawberry"
fruits.findMostSimilar('berry'); // must return "cherry"

things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
things.findMostSimilar('coddwars'); // must return "codewars"

languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
languages.findMostSimilar('heaven'); // must return "java"
languages.findMostSimilar('javascript'); // must return "javascript" (same words are obviously the most similar ones)
I know, many of you would disagree that java is more similar to heaven than all the other ones, but in this kata it is ;)

Additional notes:

there is always exactly one possible solution
 */

// НЕЧЁТКИЙ ПОИСК

function Dictionary(words) {
    this.words = words;
}



Dictionary.prototype.findMostSimilar = function(term) {
    const levenshtein = (word, term) => {
        if(word.length === 0) return term.length;
        if(term.length === 0) return word.length;

        let matrix = [];

        for (let i = 0; i <= term.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= word.length; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= term.length; i++) {
            for (let j = 1; j <= word.length; j++) {
                if (term.charAt(i-1) === word.charAt(j-1)) {
                    matrix[i][j] = matrix[i-1][j-1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i-1][j-1] + 1,
                        matrix[i][j-1] + 1,
                        matrix[i-1][j] + 1);
                }
            }
        }
        return matrix[term.length][word.length]
    };

    let word = '';
    let minDist = Infinity;
    for (let i = 0; i < this.words.length; i++) {
        let dist = levenshtein(this.words[i], term);
        if (dist < minDist) {
            minDist = dist;
            word = this.words[i];
        }

    }
    return word
};

const dictionary = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);

console.log(dictionary.findMostSimilar('strawbery'));
