// TODO: Grading Students With Typescript
function gradingStudents(grades: number[]): void {
    grades.forEach(function (grade: number, index: number): void {
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
    console.log(grades);
}

gradingStudents([73, 67, 38, 33, 40]);

// TODO: Counting Number Of Pairs With Typescipt
function countNumberOfPairs(arr: number[]): void {
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
    console.log(pairsCount);
}

countNumberOfPairs([1, 2, 1, 2, 1, 3, 2, 3]);

// TODO: Counting Valleys With Typescript
function countingValleys(step: number, path: string): void {
    let numValley = 0;
    let level = 0;

    for (let item = 0; item < step; item++) {
        if (path[item] === "U") {
            level++;
            if (level === 0) {
                numValley++;
            }
        } else {
            level--;
        }
    }

    console.log(numValley);
}

countingValleys(12, "DDUUDDUDUUUDUU");
