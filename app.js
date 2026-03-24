console.log("Aqui estoy");
let contador =0;
const botonSumar= document.getElementById("btnSumar");
const botonRestar= document.getElementById("btnRestar");
const resultado = document.getElementById("subMensajeResultado");

function mayorDe10 (){
    if (contador >= 10){
        resultado.style.color="red";
 }
    else {
        resultado.style.color="";
    }
};

botonSumar.addEventListener("click", function(){
    contador++;
    resultado.textContent=contador;
    mayorDe10();
});

botonRestar.addEventListener("click", function(){
    if (contador >0){
        contador--;
        resultado.textContent=contador;
        mayorDe10();
    }
});
