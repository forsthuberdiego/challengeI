// boton encriptar

var btnEncriptar = document.querySelector("#btn-encriptar")
btnEncriptar.addEventListener("click", function(event){
    event.preventDefault();

    var texto = document.getElementById("input-texto").value;
    var res = encriptarTexto(texto);

    document.getElementById("msg").value = res;

});    

// boton desencriptar

var btnDesencriptar = document.querySelector("#btn-desencriptar")
btnDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    
    var textoADes = document.getElementById("input-texto").value;
    var resultado = desencriptarTexto(textoADes);
    
    document.getElementById("msg").value = resultado;
        
});    


// boton copiar al portapapeles

var botonCopiar = document.querySelector("#btn-copy");
botonCopiar.addEventListener("click", function(event){
    event.preventDefault();
    
    var textoACopiar = document.getElementById("msg");
    textoACopiar.select();
    document.execCommand("copy");
    
    
});

function encriptarTexto(texto){
    
    var textoE = texto.replace(/e/g, "enter");
    var textoI = textoE.replace(/i/g, "imes");
    var textoA = textoI.replace(/a/g, "ai");
    var textoO = textoA.replace(/o/g, "ober");
    var textoU = textoO.replace(/u/g, "ufat");
    var textoEncripatdo = textoU;

    return textoEncripatdo;    

}



function desencriptarTexto(textoADes){
    
    var textoEnter = textoADes.replace(/enter/g, "e");
    var textoImes = textoEnter.replace(/imes/g, "i");
    var textoAi = textoImes.replace(/ai/g, "a");
    var textoOber = textoAi.replace(/ober/g, "o");
    var textoUfat = textoOber.replace(/ufat/g, "u");
    var textoDesencripatdo = textoUfat;

    return textoDesencripatdo;    

}





/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/