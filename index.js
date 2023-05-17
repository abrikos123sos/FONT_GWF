function getValueSum() {
    let sumSplit = document.getElementById("numbers").value.split(" ").map(x => parseInt(x)).reduce((x, y) => x + y);
    document.getElementById('res').innerHTML = 'Сумма: ' + sumSplit;
}


function string(str) {
    let start = 0;
    let end = str.length;
    if (str.charAt(0) == 'm' && str.charAt(str.length - 1) == 'J') {
        start = 1;
        end--;
    } else {
        return str;
    }

    return str.substring(start, end);
}
console.log(string("JavaScript"));
console.log(string("JavaScriptJ"));