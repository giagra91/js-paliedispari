// Esercizio parola palindroma
const userWord = prompt(`Inserisci una parola`).toLowerCase().trim();
let palindromeOutput = document.getElementById(`palindrome-output`);

function palindromeCheck(word){

    const newArrayWord = word.split(``);

    const reverseNewArrayWord = newArrayWord.reverse();

    const reverseNewWord = reverseNewArrayWord.join(``);

    if (word == reverseNewWord) {
        return true;
    } else {    
        return false;
    }

}
palindromeCheck(userWord);

if (!isNaN(userWord)){
    console.log(`Non hai inserito una parola`);
    palindromeOutput.innerHTML=`Non hai inserito una parola`;
} else if (palindromeCheck(userWord)) {
    palindromeOutput.innerHTML=`La parola è palindroma`;
} else {
    palindromeOutput.innerHTML=`La parola non è palindroma`;
}

// Esercizio pari e dispari

let userChoice = prompt(`Scegli tra pari e dispari.`).toLowerCase().trim();

while (userChoice != "pari" && userChoice != "dispari" ){
    console.log("pari")
    console.log(userChoice)
    userChoice = prompt(`Scegli tra pari e dispari.`).toLowerCase().trim();
} 

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