/*********************  
HACKER RANK CHALLENGES 
**********************/

// // TODO: Grading Students
// function gradingStudents(grades) {
//     grades.forEach(function (grade, index) {
//         if (grade >= 38) {
//             let nextMultiple = Math.ceil(grade / 5) * 5;
//             let difference = nextMultiple - grade;

//             if (difference < 3) {
//                 grades[index] = nextMultiple;
//             } else {
//                 grades[index] = grade;
//             }
//         } else {
//             grades[index] = grade;
//         }
//     });
//     return grades;
// }

// console.log(gradingStudents([73, 67, 38, 33, 40]));

// // TODO: Counting Number Of Pairs
// function countNumberOfPairs(arr) {
//     let pairsCount = 0;
//     let counterObj = {};

//     for (let num of arr) {
//         if (!counterObj[num]) {
//             counterObj[num] = 1;
//         } else {
//             counterObj[num] = counterObj[num] + 1;

//             if (counterObj[num] === 2) {
//                 pairsCount++;
//                 counterObj[num] = 0;
//             }
//         }
//     }
//     return pairsCount
// }

// console.log(countNumberOfPairs([1, 2, 1, 2, 1, 3, 2, 3]));

// // TODO: Counting Valleys
// function countingValleys(steps, path) {
//     let numValley = 0;
//     let level = 0;

//     for (let item = 0; item < steps; item++) {
//         if (path[item] === "U") {
//             level++;
//             if (level === 0) {
//                 numValley++;
//             }
//         } else {
//             level--;
//         }
//     }

//     return numValley;
// }

// console.log(countingValleys(12, "DDUUDDUDUUUDUU"));

// TODO: The Hurdle Race
function hurdleRace(k, height) {
    let max = 0;

    for (let i = 0; i < height.length; i++) {
        if (height[i] > max) {
            max = height[i];
        }
    }

    let potionNum = max - k;
    return potionNum < 0 ? 0 : potionNum;
}

console.log(hurdleRace(10, [4, 5, 6, 20, 7, 8, 9, 10]));
