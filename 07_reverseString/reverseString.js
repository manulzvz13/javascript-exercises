const reverseString = function(str) {
    const newWord = str
                    .split('')
                    .reverse()
                    .join('');
    return newWord;
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
