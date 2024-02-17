function hideElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setBackgroundColourById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
function removeBackgroundColourById(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

function getTextElementValueBId(elementId){
    const element = document.getElementById(elementId);
    const elementValeText = element.innerText;
    const value = parseInt(elementValeText);
    return value;
}
function setTextElementValueById(elementId , value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber)
  

    const alphabet = alphabets[index];
    // console.log(alphabet)
    return alphabet;

}