const sortArray = (arr) => {
    let sorted = arr.sort((a, b) => a - b)
    let odd = sorted.filter(item => item % 2 !== 0)
    let even = sorted.filter(item => item % 2 === 0)
    return [...even, ...odd.reverse()]
}

console.log(sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9]))