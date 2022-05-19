function limitFunc(fn, num) {
    let counter = 0;
    return (...args) => {
        counter++;
        if (counter <= num) return fn(...args);
    }
}

function myFn(name) {
    console.log(`my name is ${name}`);
    return 'hola';
}

const limited = limitFunc((a,b)=> a+b, 2);

console.log(limited(3, 4));
console.log(limited(9, 2));
console.log(limited(11, 20));
