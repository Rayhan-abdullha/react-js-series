let num_set = new Set()
let res = []
let lasRand = 0
while (true) {
    lasRand = Math.ceil(Math.random() * 10)
    num_set.add(lasRand)
    res.push(lasRand)
    if (lasRand === 1) break
}
console.log({
    num_set,
    res
})


let res1 = [
    8, 10, 7,  7, 9, 9, 6, 7, 9, 7,
    8,  5, 2,  9, 4, 2, 2, 2, 2, 8,
    2,  8, 8, 10, 3, 8, 3, 4, 3, 7,
    9,  8, 2,  9, 5, 8, 5, 6, 7, 7,
    1
  ]
let num_set1 = new Set([...res])
// num_set.delete(8)

// num_set.clear()
console.log(num_set)