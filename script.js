let obj = {
    fontWeight: '900',
    fontSize: '24px',
    cursor: 'default'
};
let firstname = document.getElementById('names');
Object.assign(firstname.style, obj);

let birt = document.getElementsByClassName('birthdate');
for (let i = 0; i < birt.length; i++) {
    birt[i].style.color = 'green';
    birt[i].style.fontSize = '18px';
    birt[i].style.cursor = 'default';
}
let champ = document.getElementsByClassName('champion');
for (let i = 0; i < champ.length; i++) {
    champ[i].style.color = 'red';
    champ[i].style.fontSize = '18px';
    champ[i].style.cursor = 'default';
}
let txt = document.getElementsByClassName('text');
for (let i = 0; i < txt.length; i++) {
    txt[i].style.color = 'blue';
    txt[i].style.fontSize = '18px';
    txt[i].style.fontStyle = 'italic';
    txt[i].style.cursor = 'default';
}
let txt2 = document.getElementsByClassName('text2');
for (let i = 0; i < txt2.length; i++) {
    txt2[i].style.color = 'white';
    txt2[i].style.fontSize = '18px';
    txt2[i].style.fontStyle = 'oblique';
    txt2[i].style.textShadow = '0px 0px 6px black';
    txt2[i].style.cursor = 'default';
}

let txt3 = document.getElementsByClassName('text3');
for (let i = 0; i < txt3.length; i++) {
    txt3[i].style.color = 'purple';
    txt3[i].style.fontSize = '19px';
    txt3[i].style.fontStyle = 'oblique';
    txt3[i].style.fontWeight = 'bold';
    txt3[i].style.borderStyle = 'dashed';
    txt3[i].style.cursor = 'default';
}