/**
* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
* For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

function sumTwoSmallestNumbers(numbers) {
    let first_min = Math.min.apply(null, numbers);
    const index = numbers.indexOf(first_min);
    if (index > -1) {
        numbers.splice(index, 1);
    }
    let second_min = Math.min.apply(null, numbers);

    return first_min + second_min;
}

console.log(sumTwoSmallestNumbers([5,2,7,9,11,1]));