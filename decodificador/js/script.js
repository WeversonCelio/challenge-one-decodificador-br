
// Elementos 

const buttonCriptografar = document.getElementById('button-criptografar');
const buttonDescriptografar = document.getElementById('button-descriptografar');
const buttonCopiar = document.getElementById('button-copiar');

const textAreaEntrada = document.getElementById('textarea-entrada');
const resultado = document.getElementById('conteudo-com-resultado');

const comResultado = document.getElementById('com-resultado');
const semResultado = document.getElementById('sem-resultado');



const EXIBIR_CLASS = "exibir-conteudo";
const NAO_EXIBIR_CLASS = "nao-exibir-conteudo";


// CRIPTOGRAFIA
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
const VOGAIS = ["a", "e", "i", "o", "u"];
const VOGAIS_CRIPTOGRAFADAS = ["ai", "enter", "imes", "ober", "ufat"];

function criptografar() {
    frase = getTextArea();

    if (frase !== "") {
        frase = frase.replace(/e/g, VOGAIS_CRIPTOGRAFADAS[1]);
        frase = frase.replace(/i/g, VOGAIS_CRIPTOGRAFADAS[2]);
        frase = frase.replace(/a/g, VOGAIS_CRIPTOGRAFADAS[0]);
        frase = frase.replace(/o/g, VOGAIS_CRIPTOGRAFADAS[3]);
        frase = frase.replace(/u/g, VOGAIS_CRIPTOGRAFADAS[4]);

        console.log("FRASE CRIPTOGRAFADA: " + frase);
        exibirResultado(frase);
    } else {
        ocultarResultado();
    }
}

function descriptografar() {
    frase = getTextArea();

    if (frase !== "") {
        frase = frase.replace(/ai/g, VOGAIS[0]);
        frase = frase.replace(/enter/g, VOGAIS[1]);
        frase = frase.replace(/imes/g, VOGAIS[2]);
        frase = frase.replace(/ober/g, VOGAIS[3]);
        frase = frase.replace(/ufat/g, VOGAIS[4]);

        console.log("FRASE DESCRIPTOGRAFADA: " + frase);
        exibirResultado(frase);
    } else {
        ocultarResultado();
    }

}

function copiar() {
    let textoCopiado = document.getElementById("texto-resultado");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); /* Para mobile */
  
    /* Copia o texto que está selecionado */
    document.execCommand("copy");
}

function getTextArea() {
    let texto = textAreaEntrada.value;
    console.log("FRASE DE ENTRADA : " + texto);
    if (texto !== "") {
        texto = texto.toLowerCase();
    }
    return texto;
}

buttonCriptografar.addEventListener('click', criptografar);
buttonDescriptografar.addEventListener('click', descriptografar);
 buttonCopiar.addEventListener('click', copiar);




function exibirResultado(texto) {
    comResultado.classList.remove(NAO_EXIBIR_CLASS);
    comResultado.classList.add(EXIBIR_CLASS);

    semResultado.classList.remove(EXIBIR_CLASS);
    semResultado.classList.add(NAO_EXIBIR_CLASS);
    console.log("TEXTO EXIBIR: " + texto);
    resultado.innerHTML = "<textarea cols=\"70\" rows=\"10\" class=\"texto-resultado\" id=\"texto-resultado\">" + texto + "</textarea>";
}

function ocultarResultado() {
    semResultado.classList.remove(NAO_EXIBIR_CLASS);
    semResultado.classList.add(EXIBIR_CLASS);

    comResultado.classList.remove(EXIBIR_CLASS);
    comResultado.classList.add(NAO_EXIBIR_CLASS);

}
