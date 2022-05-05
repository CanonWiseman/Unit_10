const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0)

const findMin = (...args) => Math.min(...args)

const mergedObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (arr, ...extraNums) => [...arr, ...extraNums.map(num => num * 2)]

const removeRandom = items => {
    let randIndex = Math.floor(Math.random() * items.length)
    return [...items.slice(0, randIndex), ...items.slice(randIndex + 1)];
}

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

const addKeyVal = (obj, key, val) =>{
    return {...obj, [key]: val};
}

const removeKey = (obj, key) =>{
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

const update = (obj, key, value) =>{
    return {...obj, [key]: value};
}