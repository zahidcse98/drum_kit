let DrumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < DrumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', fnBtn);
}


function fnBtn() {
    var carsh = new Audio('./sounds/crash.mp3');
    carsh.play();
}
// console.log(buttons);