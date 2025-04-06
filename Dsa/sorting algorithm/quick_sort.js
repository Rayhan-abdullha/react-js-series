const arr = [20, 13, 3, 2, 10, 1, 5, 6]  
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex]
    const left = []
    const right = []
    for (let i = 0; i < arr.length - 1; i++) {
        const element = arr[i];
        if (element < pivot) {
            left.push(element)
        } else {
            right.push(element) 
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
const sort = quickSort(arr)
console.log(sort)