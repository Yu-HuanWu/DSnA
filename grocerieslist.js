// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5

// write a function "return a total cost/sum"
// tell machine what the items and their costs are
//itterate and some with the sum? -> make a counter for sum

function costOfGroceries(groceries) {
    let arraymath = 0
    for (let i = 0; i < groceries.length; i++) {
        let el = groceries[i]
        if (el === "butter") {
            arraymath += 1
        }
        else if (el === "eggs") {
            arraymath += 2
        }
        else if (el === "milk") {
            arraymath += 3
        }
        else if (el === "bread") {
            arraymath += 4
        }
        else if (el === "cheese") {
            arraymath += 5
        }
    }
    return arraymath
}

//function
//highestcost = []
//subarray = [highestcost]

function mostExpensiveGroceries(groceriesList) {
    let highestcost = 0
    let highestindex = 0
    for (let i = 0; i < groceriesList.length - 1; i++) {
        let currCost = costOfGroceries(groceriesList[i]);
        let nextCost = costOfGroceries(groceriesList[i+1]);

        if (currCost>nextCost){
            if (currCost > highestcost) {
                highestcost = currCost;
                highestindex = i
            }
        } else {
            if (nextCost > highestcost) {
                highestcost = nextCost;
                highestindex = i+1
            }
        }
    }
    return highestindex
}

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE
//						
const groceriesA = ['cheese', 'butter', 'eggs']; //8
const groceriesB = ['eggs', 'milk', 'bread', 'bread']; //13
const groceriesC = ['cheese', 'bread']; //9
const groceriesD = ['eggs', 'butter']; // 3

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;
if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");