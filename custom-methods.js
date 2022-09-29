// map method using reduce
Array.prototype.mapCustomMethod = function (callback) {
    return this.reduce((acc, val) => {
        acc.push(callback(val));
        return acc;
    }, []);
};

console.log([1, 2, 3, 4, 5].mapCustomMethod(x => x * 2));

// filter method using reduce
Array.prototype.filterCustomMethod = function (callback) {
    return this.reduce((acc, val) => {
        if (callback(val)) {
            acc.push(val);
        }
        return acc;
    }, []);
}

console.log([1, 2, 3, 4, 5].filterCustomMethod(x => x % 2 === 0));

// every method using reduce
Array.prototype.everyCustomMethod = function (callback) {
    return this.reduce((acc, val) => {
        if (!callback(val)) {
            acc = false;
        }
        return acc;
    }, true);
}

console.log([1, 2, 3, 4, 5].everyCustomMethod(x => x % 2 === 0));

// some method using reduce
Array.prototype.someCustomMethod = function (callback) {
    return this.reduce((acc, val) => {
        if (callback(val)) {
            acc = true;
        }
        return acc;
    }, false);
}

console.log([1, 2, 3, 4, 5].someCustomMethod(x => x % 2 === 0));

// find method using reduce
Array.prototype.findCustomMethod = function (callback) {
    return this.reduce((acc, val) => {
        if (callback(val)) {
            acc = val;
        }
        return acc;
    }, undefined);
}

console.log([1, 2, 3, 4, 5].findCustomMethod(x => x % 2 === 0));

// indexOf method using reduce
Array.prototype.indexOfCustomMethod = function (val) {
    return this.reduce((acc, curr, index) => {
        if (curr === val) {
            acc = index;
        }
        return acc;
    }, -1);
}

console.log([1, 2, 3, 4, 5].indexOfCustomMethod(3));