// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden')
//     const playGroundSection = document.getElementById('play');
//     playGroundSection.classList.remove('hidden')
// }  
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player Pressed', playerPressed);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    console.log(playerPressed,expectedAlphabet);

    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const currentScore = getTextElementValueBId('current-score')
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // ----------------------------------------------
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;
       

        removeBackgroundColourById(expectedAlphabet)
        continueGame()
    }
    else{
        console.log('you lose a life')

        const currentLife = getTextElementValueBId('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife)

        if(updatedLife === 0){
            gameOver();
        }
        // ----------------------------------------
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup',handleKeyboardKeyUpEvent)

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
    showElementId('final-score')
    showElementId('play')
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame()
}
function gameOver(){
    hideElementId('play')
    showElementId('final-score')
    const lastScore = getTextElementValueBId('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);
}