const example = [{ name: 'Alex', age: 20 }, { name: 'Maria', age: 18 }, { name: 'Ion', age: 22 }]

function sortObject(array, key, sortOrder) {
    if (sortOrder === 'asc') {
        return array.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)
    } else if (sortOrder === 'desc') {
        return array.sort((a, b) => a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0)
    }
}

console.log(sortObject(example, 'name', 'asc'))
console.log(sortObject(example, 'name', 'desc'))
console.log(sortObject(example, 'age', 'asc'))
console.log(sortObject(example, 'age', 'desc'))