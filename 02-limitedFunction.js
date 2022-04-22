function limitFunc(fn, num) {
    let counter = 0;
    return (...args) => {
        if (counter < num) fn(args);
        counter++;
    }
}

function myFn(name) {
    console.log(`my name is ${name}`);
}

var limited = limitFunc(myFn, 2);

limited('jorge');
limited('jorge');
limited('jorge');