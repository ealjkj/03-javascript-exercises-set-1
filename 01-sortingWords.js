

function countConsonants(word) {
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    let counter = 0;
    for(let letter of word) {
        if(consonants.includes(letter.toLowerCase())) counter++
    }
    return counter;
}


function sortWords(arr, custom) {
    compare = (x,y) => x < y;
    if(custom === 'desc') compare = (x,y) => x > y;
    else if(custom === 'len-asc') compare = (x,y) => x.length < y.length;
    else if(custom === 'len-desc') compare = (x,y) => x.length > y.length;
    else if(custom === 'consonants-asc') compare = (x,y) => countConsonants(x) < countConsonants(y);
    else if(custom === 'consonants-desc') compare = (x,y) => countConsonants(x) > countConsonants(y);

    sorted = []
    for(let a of arr){
        let foundPos = false;
        for(let i = 0; i < sorted.length; i++) {
            if(compare(a, sorted[i])) {
                sorted = sorted.slice(0, i).concat([a]).concat(sorted.slice(i));
                foundPos = true;
                break
            }
        }
        if(!foundPos) sorted = sorted.concat([a]);
    }
    return sorted;
}

//Tests
console.log(sortWords(['hi', 'alo', 'wup!'], 'consonants-asc' ));