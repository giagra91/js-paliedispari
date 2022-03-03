// Esercizio parola palindroma
const userWord = prompt(`Inserisci una parola`).toLowerCase().trim();
let palyndromeOutput = document.getElementById(`palyndrome-output`);

function palyndromeCheck(word){

    const newArrayWord = word.split(``);

    const reverseNewArrayWord = newArrayWord.reverse();

    const reverseNewWord = reverseNewArrayWord.join(``);

    if (!isNaN(word)){
        console.log(`Non hai inserito una parola`);
        palyndromeOutput.innerHTML=`Non hai inserito una parola`;
    } else if (word == reverseNewWord) {
        palyndromeOutput.innerHTML=`La parola è palindroma`;
        return true;
    } else {
        palyndromeOutput.innerHTML=`La parola non è palindroma`;
        return false;
    }

}

console.log(palyndromeCheck(userWord))

// Esercizio pari e dispari

const userChoice = prompt(`Scegli tra pari e dispari.`).toLowerCase().trim();
const userNumber = parseInt(prompt(`Inserisci un numero tra 1 e 5`));


function randomNumber(minimumValue, maximumValue){
    return (Math.floor(Math.random()* (( maximumValue + 1 ) - minimumValue ) + minimumValue));
}

const pcNumber = randomNumber(1,5);

const sumNumber = parseInt( userNumber + pcNumber);

console.log(pcNumber)
console.log(sumNumber)

function checkSum(number){

    if (number % 2 == 0){
        console.log (`pari`)
    } else {
        console.log(`dispari`)
    }
}

// const gameSum = checkSum(sumNumber);
console.log(checkSum(sumNumber))

if (userChoice == "pari"){
    console.log(`Hai vinto!`);
} else {
    console.log(`Ha vinto il computer`)
}