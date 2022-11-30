let array = [99, -18, -78, 23, 11, -10, -92, 43, -32, -3, -91, -77, 46, -59, -53, 28, 30, 19, -33, 7];

function sortArrayAscOrder(number1, number2) {
    return number1 - number2;
}

array.sort(sortArrayAscOrder);
console.log(array);
array.reverse();
console.log(array);

function getPositive(number) {
    return number > 0;
}

function getNegative(number) {
    return number < 0;
}

let positiveNumbersArray = array.filter(getPositive).sort(sortArrayAscOrder);
console.log(positiveNumbersArray);

let negativeNumbersArray = array.filter(getNegative).sort(sortArrayAscOrder);
console.log(negativeNumbersArray);