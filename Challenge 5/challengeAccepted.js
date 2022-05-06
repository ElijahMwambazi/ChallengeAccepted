/*********************  
HACKER RANK CHALLENGES 
**********************/

// TODO: Grading Students
function gradingStudents(grades) {
    grades.forEach(function (grade, index) {
        if (grade >= 38) {
            let nextMultiple = Math.ceil(grade / 5) * 5;
            let difference = nextMultiple - grade;

            if (difference < 3) {
                grades[index] = nextMultiple;
            } else {
                grades[index] = grade;
            }
        } else {
            grades[index] = grade;
        }
    });
    return grades;
}

console.log(gradingStudents([73, 67, 38, 33, 40]));

// TODO: Counting Number Of Pairs
function countNumberOfPairs(arr) {
    let pairsCount = 0;
    let counterObj = {};

    for (let num of arr) {
        if (!counterObj[num]) {
            counterObj[num] = 1;
        } else {
            counterObj[num] = counterObj[num] + 1;

            if (counterObj[num] === 2) {
                pairsCount++;
                counterObj[num] = 0;
            }
        }
    }
    return pairsCount;
}

console.log(countNumberOfPairs([1, 2, 1, 2, 1, 3, 2, 3]));

// TODO: Counting Valleys
function countingValleys(steps, path) {
    let numValley = 0;
    let level = 0;

    for (let item = 0; item < steps; item++) {
        if (path[item] === "U") {
            level++;
            if (level === 0) {
                numValley++;
            }
        } else {
            level--;
        }
    }

    return numValley;
}

console.log(countingValleys(12, "DDUUDDUDUUUDUU"));

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

// TODO: Mask String
function maskify(str) {
    const ls = str.split("");

    for (i = ls.length - 1; i >= 0; i--) {
        if (i < ls.length - 4) {
            ls[i] = "#";
        } else {
            ls[i];
        }
    }

    const maskify = ls.join("");

    return maskify;
}

console.log(maskify(12345678));

// TODO: Find Numbers
function findDigits(n) {
    let splitN = n.toString().split("").map(Number);
    let counter = 0;

    for (let i = 0; i < splitN.length; i++) {
        if (n % split[i] === 0) {
            counter++;
        }
    }

    return counter;
}

console.log(findDigits(158));

// TODO: Jumping on the Clouds
function jumpingOnClouds(c) {
    let counter = 0;

    for (let i = 0; i < c.length; i++) {
        if (c[i + 2] === 0) {
            counter++;
            i += 1;
            console.log("a");
        } else if (c[i + 1] === 0) {
            console.log("b");
            counter++;
        }
    }

    return counter;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 1, 0, 0, 0, 1, 0]));

// TODO:Beauitiful Day At The Movies
function beautifulDays(i, j, k) {
    let beautifulDays = 0;

    for (i; i <= j; i++) {
        let reverseI = parseInt(i.toString().split("").reverse().join(""));
        let t = (i - reverseI) % k;

        if (t === 0) {
            beautifulDays++;
        }
    }

    return beautifulDays;
}

console.log(beautifulDays(20, 23, 6));

// Designer PDF Viewer
const alpha = Array.from(Array(26)).map((temp, i) => i + 97);
const alphabet = alpha.map((x) => String.fromCharCode(x));
const heights = [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    7,
];
const word = "zaba";

let letterIndex = [];
let max = 0;

function designerPdfViewer(height, word) {
    for (i = 0; i < word.length; i++) {
        letterIndex.push(alphabet.indexOf(word[i]));

        for (j = 0; j < letterIndex.length; j++) {
            if (height[letterIndex[j]] > max) {
                max = height[letterIndex[j]];
            }
        }
    }
    const area = max * word.length;

    return area;
}

console.log(designerPdfViewer(heights, word));
