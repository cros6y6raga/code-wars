// const solution = (str) => {return str.split('').reverse().join('')}

// const boolToWord = (bool) => {return bool ? 'Yes' : 'No'}

// function positiveSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) sum += arr[i]
//     }
//     return sum
// }

// function opposite(number) {
//     return -number
// }

// function numberToString(num) {
//     return num.toString();
// }

// function removeChar(str){
//     str='vova'
//     return str.slice(1,-1)
// }
//
// console.log(removeChar(''))

// const repeatStr = (n, s) => s.repeat(n)

// function squareSum(numbers){
//     let sum = 0
//     for(i = 0 ; i < numbers.length; i++){
//         sum += (numbers[i] * numbers[i])
//     }
//     return sum
// }

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         args = [3, 4, -9, 3, 5, 1, 7];
//         const minimum = Math.min(...args);
//         return (
//             args
//         )
//
//     }
// }

// var summation = function (num) {
//     let result = 0;
//     for (var i = 1; i <= num; i++) {
//         result += i;
//     }
//
//     return result;
// }

// function countSheeps(arrayOfSheep) {
//     let counter = 0
//     for(let i = 0; i < arrayOfSheep.length; i++) {
//         if(arrayOfSheep[i]) counter += 1
//     }
//     return counter
// }

// const century = (year) => {
//     let start = 0;
//
//     for (let i = 0; i < year; i++) {
//         if (i % 100 === 0) {
//             start++;
//         }
//     }
//     return start;
// }

// function greet(name) {
//     if (name === "Johnny") {
//         return "Hello, my love!";
//     } else return "Hello, " + name + "!";
// }

// const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((one, two) => one + two)

// function getPlanetName(id) {
//     let name = 'Earth';
//     switch (id) {
//         case 1:
//             name = 'Mercury'
//             break
//         case 2:
//             name = 'Venus'
//             break
//         case 3:
//             name = 'Earth'
//             break
//         case 4:
//             name = 'Mars'
//             break
//         case 5:
//             name = 'Jupiter'
//             break
//         case 6:
//             name = 'Saturn'
//             break
//         case 7:
//             name = 'Uranus'
//             break
//         case 8:
//             name = 'Neptune'
//     }
//     return name;
// }

// function createArray(number){
//     var newArray = [];
//
//     for(var counter = 1; counter <= number; counter++){
//         newArray.push(counter);
//     }
//
//     return newArray;
// }

function checkAlive(health) {
    if (health > 0) {
        return true
    } else
        return false
}