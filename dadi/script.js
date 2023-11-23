let score = 0;
for(i=1; i <= rounds; i++){
    //numero da 1 a 6 del pc
    let number_pc = Math.floor(Math.random()* (6 - 1) + 1);

    //numero da 1 a 6 dell'utente
    let number_user = Math.floor(Math.random()* (6 - 1) + 1);

     //verifica vincitore
     if(number_user > number_pc){

        //punteggio utente maggiore 
        score += 1;
        console.log('WIN!!!! round n',i);

    }else{
        //punteggio computer maggiore
        console.log('Lose! round n', i);
    }
}
console.log('Il tuo punteggio totale è ', score,'su ', rounds);