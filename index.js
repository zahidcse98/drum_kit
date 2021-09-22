let DrumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < DrumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', fnBtn);
}


function fnBtn() {
    let button = this.innerHTML;
    playMusic(button);


}
// console.log(buttons);

document.addEventListener("keypress", function (event) {
    playMusic(event.key);
});

function playMusic(key) {

    switch (key) {
        case 'w':
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;

        case 'a':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;

        case 's':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;

        case 'j':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;

        case 'k':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;

        default:
            pass

    }
}