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
palyndromeCheck(userWord);

// Esercizio pari e dispari

let userChoice = prompt(`Scegli tra pari e dispari.`).toLowerCase().trim();

// if (userChoice.valueOf() != "pari" || userChoice.valueOf() != "dispari" ){
//     alert(`Hai inserito un numero non valido`);
//     console.log("pari")
//     console.log(userChoice)
//     userChoice = prompt(`Scegli tra pari e dispari.`).toLowerCase().trim();
// }

let userNumber = parseInt(prompt(`Inserisci un numero tra 1 e 5`));

while (userNumber > 5 || userNumber < 1 || isNaN(userNumber)){
    alert(`Hai inserito un numero non valido`);
    userNumber = parseInt(prompt(`Inserisci un numero tra 1 e 5`));
}

// Funzione per numero randomico tra due valori
function randomNumber(minimumValue, maximumValue){
    return (Math.floor(Math.random()* (( maximumValue + 1 ) - minimumValue ) + minimumValue));
}

const pcNumber = randomNumber(1,5);

const sumNumber = parseInt( userNumber + pcNumber );

// Funzione di verifica se un numero è pari
function isEven(num){

    if (num % 2 == 0){
        return "pari";
    } else {
        return "dispari";
    }
}

const gameSum = isEven(sumNumber);
const oddOrEvenOutput = document.getElementById(`oddoreven-output`);

if (gameSum == userChoice){
    console.log(`Hai vinto!`);
    oddOrEvenOutput.innerHTML=`La somma è ${sumNumber}, quindi ${gameSum}, hai vinto!`;
} else {
    console.log(`Ha vinto il computer!`);
    oddOrEvenOutput.innerHTML=`La somma è ${sumNumber}, quindi ${gameSum}, ha vinto il computer!`;
}