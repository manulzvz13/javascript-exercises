const palindromes = function (str) {
    str1 = str
            .toLowerCase()
            .replace(/[\s,!.;?]/g, ''); 
    let str2 = Array.from(str1).reverse().join('');
    if (str1 === str2){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
