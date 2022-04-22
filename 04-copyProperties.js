function copyProp(obj1, obj2, arrOfProps) {
    if(arrOfProps === undefined){
        for(let p in obj2) {
            obj1[p] = obj2[p];
        }
    } else {
        for(let p of arrOfProps) {
            obj1[p] = obj2[p];
        }
    } 
}

objA =  {
    height: 10,
    width: 12,
    name: 'Raul',
    color: 'red'
}

objB = {
    width: 800,
    look: 'cool',
    major: 'no',
    plays: 'piano'
}

//Tests
copyProp(objA, objB)
// copyProp(objA, objB, ['major', 'look'])

console.log(objA);