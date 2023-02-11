const hasMoreVowels = (word) => {
    word.split("");
    let vowelCount = 0;
    let vowelArr = ['a', 'i', 'o', 'u', 'e', 'A', 'E', 'I', 'O', 'U'];
    for (let i = 0; i < word.length; i++) {
        if (vowelArr.includes(word[i])) {
            vowelCount += 1;
        } else {
            vowelCount -= 1;
        }
    }
    if (vowelCount > 0) {
        console.log(`There are ${vowelCount} more vowels than consonants!`)
        return true;
    } else {
        console.log(`There are more consonants than vowels.`);
        return false;
    }
}
console.log(hasMoreVowels('Quiet'));
// console.log(hasMoreVowels('Eye'));
// console.log(hasMoreVowels('Raven'));
// console.log(hasMoreVowels('Queue'));