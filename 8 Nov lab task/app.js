// const fruit = ['grapes', 'apple', 'pineapple']
// console.log(fruit.sort)

// let sum = 0
// const n = 100

// for (let i=1; i<=n; i++) {
//     sum +=i
// }

// console.log('sum: ', sum);

// const students = ['John','Hash','Smith']

// for (let i of students) {
//     console.log(i)
// }


/////////////// TASk 1 ////////////

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function evenNumsum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 == 0) {

            sum = sum + arr[i] 
            
        }
    }
    return sum
}

let result = evenNumsum(arr)
console.log(result)