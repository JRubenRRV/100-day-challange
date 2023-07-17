function sumTwoSmallestNumbers(numbers) {
    let first_min = Math.min.apply(null, numbers);
    const index = numbers.indexOf(first_min);
    if (index > -1) {
        numbers.splice(index, 1);
    }
    let second_min = Math.min.apply(null, numbers);

    return first_min + second_min;
}

sumTwoSmallestNumbers([5,2,7,9,11,1]);