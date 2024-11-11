// funzione per generare numeri casuali
/**
 * Genera numeri randomici
 * @param {number} min  il minimo numero che puo essere generato
 * @param {number} max  il massimo numero che puo essere generato
 * @param {number} numbersToGenerate  quanti numeri deve generare
 * @returns un array di numeri generati
 */
const getRandomNumber = (min, max, numbersToGenerate) => {
    const randomNumbers = [];
    while (randomNumbers.length < numbersToGenerate) {
        const randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
    return randomNumbers;
}










/**
 * funzione che blocca il riavvio della pagina, raccoglie le risposte dell'utente e conferma il risultato
 * @param {event} 
 */
const confirm = e => {
   
    e.preventDefault();
    const inputs = document.querySelectorAll('input');

  
    const userAnswers = [];
    for (let i = 0; i < inputs.length; i++) {
       
        const field = inputs[i];
       
        const value = parseInt(field.value);

        if (isNaN(value) && value <= min && value >= max && !userAnswers.includes(value)) return;
        else userAnswers.push(value);

    }

  
    if (userAnswers.length !== numbersToGenerate) {
        scoreElement.innerText = "I valori inseriti non sono validi o sono ripetuti";
    }
   
    const rigthAnswers = [];
    for (let i = 0; i < userAnswers.length; i++) {
        const answer = userAnswers[i];
        if (numbers.includes(answer)) rigthAnswers.push(answer);
    }

    scoreElement.innerText = `Hai indovinato ${rigthAnswers.length} numeri. (${rigthAnswers})`;
}