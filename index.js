function getValueSum() {
    let sumSplit = document.getElementById("numbers").value.split(" ").map(x => parseInt(x)).reduce((x, y) => x + y);
    document.getElementById('res').innerHTML = 'Сумма: ' + sumSplit;
}