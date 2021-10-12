let array = []

array.push('boom.wav', 'tom.wav', 'kick.wav', 'clap.wav', 'hihat.wav', 'openhat.wav', 'tink.wav', 'snare.wav', 'ride.wav')

const cbox = document.querySelectorAll("div");

for (let i = 0; i < cbox.length; i++) {
    window.addEventListener("keydown", function (e) {
        if(e.key === cbox[i].innerHTML){
            let audio = new Audio(array[i]);
            audio.play();
        }
    });
}
