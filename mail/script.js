let emails= ["esempio@gmail.com","esempio@icloud.com","esempio@outlook.it","esempio@hotmail.com"];

let email = prompt('Inserisci l\'email');

let flag = false;
for (let i = 0; i < emails.length; i++) {
    if(email == emails[i]){
        console.log('La tua email è presente');
        flag = true;
    }
}
//controlliamo se il ciclo for non ha trovato nessun email
if(!flag){
    //se flag è false, significa che il ciclo for non ha trovato nessun email presente nell'array
    console.log('L\'email che hai inserito non è presente');
}