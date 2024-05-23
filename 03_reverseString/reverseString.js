const reverseString = function(input) {

    let l = input.length;
    let result = '';
    for (let i=l-1; i>=0; i--){
        result += input[i];
    }
    
    return result;
};

// Do not edit below this line
module.exports = reverseString;
