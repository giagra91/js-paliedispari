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

if (userNumber > 5 || userNumber < 1 || isNaN(userNumber)){
    alert(`Hai inserito un numero non valido`);
    userNumber = parseInt(prompt(`Inserisci un numero tra 1 e 5`));
}

// Funzione per numero randomico tra due valori
function randomNumber(minimumValue, maximumValue){
    return (Math.floor(Math.random()* (( maximumValue + 1 ) - minimumValue ) + minimumValue));
}

const pcNumber = randomNumber(1,5);

const sumNumber = parseInt( userNumber + pcNumber );

console.log(pcNumber)
console.log(sumNumber)

function checkSum(num){

    if (num % 2 == 0){
        console.log (`pari`);
        return "pari";
    } else {
        console.log(`dispari`);
        return "dispari";
    }
}

const gameSum = checkSum(sumNumber);
const oddOrEvenoOutput = document.getElementById(`oddoreven-output`);

if (gameSum == userChoice){
    console.log(`Hai vinto!`);
    oddOrEvenoOutput.innerHTML=`La somma è ${sumNumber}, quindi ${gameSum}, hai vinto!`
} else {
    console.log(`Ha vinto il computer!`);
    oddOrEvenoOutput.innerHTML=`La somma è ${sumNumber}, quindi ${gameSum}, ha vinto il computer!`
}