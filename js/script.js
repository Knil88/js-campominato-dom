//Campo Minato

//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta

//nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

//se clicchiamo la bomba la cella si colora di rosso e termina la partita con apparizione scritta e punteggio

//Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

//Se clicchiamo tutte le caselle senza bombe apparirà una scritta che indicherà il punteggio


    //Creiamo la variabile container dove appenderemo i nostri elementi
let container = document.getElementById("container-grid");

// console.log(container);
//Creiamo la variabile della difficoltà
let difficult = document.getElementById("difficoltà");
//Agganciamo la variabile bottone 
let myBtn = document.querySelector("#play");


//creiamo l'evento click del bottone

myBtn.addEventListener("click",
function (){

    

    //Creiamo le condizioni per le varie difficolta sottolineando il value

    if(difficult.value == "normal"){

       // Creo l'array delle bombe
       const bombArray = genArrNumUnicRandomMinMax(16, 1, 100);
       console.log(bombArray);

        container.innerHTML= "";
        for(let i=1 ; i<=100; i++){
            
           

            let nuovoElemento = createBox("div","box");
            
            container.appendChild(nuovoElemento);
    
            //creiamo l'evento click del bottone
           
             nuovoElemento.addEventListener("click",
             function(){
                
                nuovoElemento.innerHTML = i;
                console.log("Stai cliccando il numero",i);
                if(bombArray.includes(i)){
                    nuovoElemento.classList.add("bomb");
                    let punteggio = document.getElementsByClassName("clicked").length;
                    document.getElementById("title").innerHTML = ` Il tuo punteggio è di ${punteggio} punti , hai perso`;
                   
                    console.log("il tuo punteggio è",punteggio);
                }
                else{
                    nuovoElemento.classList.add("clicked");
                    
                }
                
             }
             )
           
        }
    } 
    if(difficult.value == "hard"){
        const bombArray = genArrNumUnicRandomMinMax(16, 1, 81);
        console.log(bombArray);
        container.innerHTML= "";
        for(let i=1 ; i<=81; i++){
            
            let nuovoElemento = createBox("div","box");
            nuovoElemento.style.width="11%";
            container.style.width="45%";
            container.appendChild(nuovoElemento);
    
           //creiamo l'evento click del bottone

             nuovoElemento.addEventListener("click",
             function(){
                
                nuovoElemento.innerHTML = i;
                if(bombArray.includes(i)){
                    nuovoElemento.classList.add("bomb");
                    let punteggio = document.getElementsByClassName("clicked").length;
                    document.getElementById("title").innerHTML = ` Il tuo punteggio è di ${punteggio} punti , hai perso`;
                    console.log("il tuo punteggio è",punteggio);
                }
                else{
                    nuovoElemento.classList.add("clicked");
                  
                }
                
             }
             )
           
            
            
        
            
        }
    } 
    if(difficult.value == "very-hard"){
        const bombArray = genArrNumUnicRandomMinMax(16, 1, 49);
        console.log(bombArray);
        container.innerHTML= "";
        for(let i=1 ; i<=49; i++){
            
            let nuovoElemento = createBox("div","box");
            nuovoElemento.style.width="14%";
            container.style.width="40%";
            container.appendChild(nuovoElemento);
            
            //creiamo l'evento click del bottone
            
             nuovoElemento.addEventListener("click",
             function(){
                
                nuovoElemento.innerHTML = i;
                if(bombArray.includes(i)){
                    nuovoElemento.classList.add("bomb");
                    let punteggio = document.getElementsByClassName("clicked").length;
                    document.getElementById("title").innerHTML = ` Il tuo punteggio è di ${punteggio} punti , hai perso`;
                    console.log("il tuo punteggio è",punteggio);
                }
                else{
                    nuovoElemento.classList.add("clicked");
                   
                }
               
                
             }
             )
           
            
            
        
            
        }
    } 
    }

   

)



//Creiamo la funzione che creerà l'elemento che agganceremo al nostro container

function createBox(){
    const divElement = document.createElement("div");
    divElement.classList.add("box");
   


    return divElement;
}
// creo la funzione per generare numeri random
function randomNumberMinMax (min, max) {
    return ( Math.floor(Math.random() * ((max + 1) - min) + min));
}

// creo la funzione per creare un arrey di numeri random unici 
function genArrNumUnicRandomMinMax (maxElement, minNum, maxNum) {
    
    // creo l'array
    const arrNumUnicRandom = [];

    // genero i numeri da inserire nell'array
    while (arrNumUnicRandom.length < maxElement) {
        let newNumber = randomNumberMinMax (minNum, maxNum);
        if (!arrNumUnicRandom.includes(newNumber)){
            arrNumUnicRandom.push(newNumber);
        }
    }

    // ritorno l'array generato
    return arrNumUnicRandom;
}