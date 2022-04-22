function myCount(strOrNum) {
    if(typeof strOrNum === 'string') {
        let counter = 0;
        for(let letter of strOrNum) {
            if ('aeiou'.includes(letter.toLowerCase())) counter++
        }
        return counter
    } 
    else if(typeof strOrNum === 'number') return Math.floor(Math.log10(strOrNum)) + 1;
}

console.log(myCount('eolic')); //3
console.log(myCount(1293)); //4
console.log(myCount(1)); //1
console.log(myCount(10000)); //5 