//Campo Minato
    //Creiamo la variabile container dove appenderemo i nostri elementi
let container = document.getElementById("container-grid");

console.log(container);
//Creiamo la variabile della difficoltà
let difficult = document.getElementById("difficoltà");
//Agganciamo la variabile bottone 
let myBtn = document.querySelector("#play");

//creiamo l'evento click del bottone

myBtn.addEventListener("click",
function (){

    //Creiamo le condizioni per le varie difficolta sottolineando il value

    if(difficult.value == "normal"){
        container.innerHTML= "";
        for(let i=1 ; i<=100; i++){
            
            let nuovoElemento = createBox("div","box");
            
            container.appendChild(nuovoElemento);
    
            //creiamo l'evento click del bottone
           
             nuovoElemento.addEventListener("click",
             function(){
                nuovoElemento.classList.add("clicked");
                nuovoElemento.innerHTML = i;
                console.log("Stai cliccando il numero",i);
             }
             )
           
            
            
        
            
        }
    } 
    if(difficult.value == "hard"){
        container.innerHTML= "";
        for(let i=1 ; i<=81; i++){
            
            let nuovoElemento = createBox("div","box");
            nuovoElemento.style.width="11%";
            container.style.width="45%";
            container.appendChild(nuovoElemento);
    
           //creiamo l'evento click del bottone

             nuovoElemento.addEventListener("click",
             function(){
                nuovoElemento.classList.add("clicked");
                nuovoElemento.innerHTML = i;
             
                console.log("Stai cliccando il numero",i);
             }
             )
           
            
            
        
            
        }
    } 
    if(difficult.value == "very-hard"){
        container.innerHTML= "";
        for(let i=1 ; i<=49; i++){
            
            let nuovoElemento = createBox("div","box");
            nuovoElemento.style.width="14%";
            container.style.width="40%";
            container.appendChild(nuovoElemento);
            
            //creiamo l'evento click del bottone
            
             nuovoElemento.addEventListener("click",
             function(){
                nuovoElemento.classList.add("clicked");
                nuovoElemento.innerHTML = i;
               
                console.log("Stai cliccando il numero",i);
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