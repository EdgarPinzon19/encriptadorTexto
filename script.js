

var boton1 = document.querySelector(".encriptar");
var boton2 = document.querySelector(".desencriptar");
var inputTexto = document.querySelector(".input-texto");
var munieco = document.querySelector(".contenedor-munieco")
var texto = document.querySelector(".contenedor-texto");
var mensaje = document.querySelector(".contenedor-mensaje");
var areamensaje = document.querySelector(".mensaje");



inputTexto.focus();

boton1.onclick = btnEncriptarR;
boton2.onclick = desencriptar;
    
function  btnEncriptarR (){
   ocultarAdelanto();
   var texto = recuperartexto();
   texto = texto.toLowerCase();
   
   areamensaje.value = encriptarTexto(texto);
    

}
function desencriptar(){
    ocultarAdelanto();
    var texto = recuperartexto();
    areamensaje.value = desencriptarTexto(texto);
}

function recuperartexto () {
    
    return inputTexto.value
}

function ocultarAdelanto () {
    munieco.classList.add("ocultar")
    texto.classList.add("ocultar")
    

}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    

    for(var i=0;i<texto.length;i++){

        if(texto[i]=="a"){

            textoFinal = textoFinal + "ai";
        }

        
        else if(texto[i]=="e"){

            textoFinal = textoFinal + "enter";
        }
        else if(texto[i]=="i"){

            textoFinal = textoFinal + "imes";
        }

        else if(texto[i]=="o"){

            textoFinal = textoFinal + "ober";
        }

        else if(texto[i]=="u"){

            textoFinal = textoFinal + "ufat";
        }
        else{

            textoFinal = textoFinal +texto[i]
        }
    }

    return textoFinal;
        
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    

    for(var i=0;i<texto.length;i++){

        if(texto[i]=="a"){

            textoFinal = textoFinal + "a";
            i=i+1
        }

        
        else if(texto[i]=="e"){

            textoFinal = textoFinal + "e";
            i=i+4
        }
        else if(texto[i]=="i"){

            textoFinal = textoFinal + "i";
            i = i+3
        }

        else if(texto[i]=="o"){

            textoFinal = textoFinal + "o";
            i = i +3
        }

        else if(texto[i]=="u"){

            textoFinal = textoFinal + "u";
            i = i +3
        }
        else{

            textoFinal = textoFinal +texto[i]
        }
    }

    return textoFinal;
        
}

   


function copiar(){
    areamensaje.select();
    navigator.clipboard.writeText(areamensaje.value)
    
    alert("Texto copiado")



}