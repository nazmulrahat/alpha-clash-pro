// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden')
//     const playGroundSection = document.getElementById('play');
//     playGroundSection.classList.remove('hidden')
// }  
function continueGame() {
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet', alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColourById(alphabet)
}
// show

function play() {
    hideElementId('home')
    showElementId('play')
    continueGame()
}