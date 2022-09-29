function findIndexOfNumbers(array, k) {
    let leftIndex = 0, rightIndex = array.length - 1
    while (leftIndex < rightIndex) {
        let sum = array[leftIndex] + array[rightIndex]
        if (sum === k) {
            return [leftIndex, rightIndex]
        } else if (sum < k) {
            leftIndex++
        } else {
            rightIndex--
        }
    }
    return []
}

console.log(findIndexOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 10))