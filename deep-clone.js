// object deep clone
function deepClone(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    var newObj = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key]);
        }
    }
    return newObj;
}

const obj = { a: 1, b: 2, c: { d: 3, e: 4 } };
const obj2 = deepClone(obj);

console.log(obj)
console.log(obj2)