let getCount;
let getCapital;
let getTake;
let apiCount;
let getScroll;
let delCountry;
let countryZ = {};


get.onclick = function() {
    getCount = prompt('Введите название страны');
    getCapital = prompt('Введите название стoлицы');
    addCountry(getCount, getCapital);
}
take.onclick = function() {
    getTake = prompt('Введите название страны');
    alert(getCountryInfo(getTake));
}

scrolls.onclick = function() {
    alert(listCountry(getScroll));
}
del.onclick = function() {
    delCountry = prompt('Введите название страны');
    deleteCountry(delCountry);
}

function addCountry(countryName, capitalName) {
    countryZ[countryName] = capitalName;
}

function deleteCountry(countryName, capitalName) {
    delete countryZ[countryName];
}

function getCountryInfo(countryName) {
    if (countryName in countryZ) {
        return 'Страна: ' + countryName + ' Столица: ' + countryZ[countryName];
    } else
        return 'Нет информаций о стране' + countryName + '! ';
}

function listCountry() {
    let res = "";
    for (let CN in countryZ)
        res += '\n' + getCountryInfo(CN);
    return res;
}
addCountry('Беларусь', 'Минск');
addCountry('Бразилия', 'Рио-де-Жанейро');
addCountry('Япония', 'Токио');