const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/\s+/g, '');
    let str1 = str.replace(/[,!.;?]/g, ''); 
    let str2 = Array.from(str1).reverse().join('');
    if (str1 === str2){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
