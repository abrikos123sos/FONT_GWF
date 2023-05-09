function getSumTriple(x, y) {
    if (x == y) {
        return 3 * (x + y);
    } else {
        return (x + y);
    }
}
console.log(getSumTriple(10, 60));
console.log(getSumTriple(80, 80));


function removeSymbol(str, str2) {
    delSymbol = str.substring(0, str2);
    delSymbol2 = str.substring(str2 + 1, str.length);
    return (delSymbol + delSymbol2);
}
console.log(removeSymbol("Привет", 0));
console.log(removeSymbol("Привет", 2));
console.log(removeSymbol("Привет", 3));


function array(nums) {
    return nums[0] + nums[1] + nums[2];
}
console.log(array([2, 5, 20]));