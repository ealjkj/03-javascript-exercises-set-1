function limitFunc(fn, num) {
    let counter = 0;
    return (...args) => {
        counter++;
        if (counter <= num) return fn(args);
    }
}

function myFn(name) {
    console.log(`my name is ${name}`);
    return 'hola';
}

const limited = limitFunc(myFn, 2);

console.log(limited('jorge'));
console.log(limited('jorge'));
console.log(limited('jorge'));
