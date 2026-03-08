function getUniqueElements(arr1, arr2) {
    let combined = [...arr1, ...arr2];
    let unique = [];

    for (let num of combined) {
        if (combined.indexOf(num) === combined.lastIndexOf(num)) {
            unique.push(num);
        }
    }

    return unique;
}

let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];

console.log(getUniqueElements(a, b));