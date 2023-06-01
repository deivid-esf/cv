const botao = document.querySelector("button");

const texto_botao = document.querySelector(".texto-botao")
const botao_claro = 'Modo claro';
const botao_escuro = 'Modo escuro';

const fundo = document.querySelector(".w3-light-grey");
const fundo_claro = "w3-light-grey";
const fundo_escuro = "w3-black";

const container = document.querySelectorAll('.w3-white');
const container_claro = "w3-white";
const container_escuro = "w3-dark-grey";

const texto = document.querySelectorAll('.w3-text-grey');
const texto_claro = "w3-text-grey";
const texto_escuro = "w3-text-white";

const elementos = document.querySelectorAll('.w3-text-indigo');
const elementos_claro = "w3-text-indigo";
const elementos_escuro = "w3-text-white";

const barras = document.querySelectorAll('.w3-indigo');
const barras_claro = "w3-indigo";
const barras_escuro = "w3-grey";

const button = document.querySelector('i');
const button_lua = "fa-moon-o";
const button_sol = "fa-sun-o";

function trocar(){
  if(fundo.classList.contains(fundo_claro)){
    texto_botao.textContent = botao_claro;
    button.classList.replace(button_lua, button_sol);
    fundo.classList.replace(fundo_claro, fundo_escuro)
    for (var i = 0; i < container.length; i++) {
      container[i].classList.replace(container_claro, container_escuro);
    }
    for (let i = 0; i < texto.length; i++) {
      texto[i].classList.replace(texto_claro, texto_escuro);
    }
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].classList.replace(elementos_claro, elementos_escuro);
    }
    for (let i = 0; i < barras.length; i++) {
      barras[i].classList.replace(barras_claro, barras_escuro);
    }
  }else{
    texto_botao.textContent = botao_escuro;
    button.classList.replace(button_sol, button_lua)
    fundo.classList.replace(fundo_escuro, fundo_claro)
    for (var i = 0; i < container.length; i++) {
      container[i].classList.replace(container_escuro, container_claro);
    }
    for (let i = 0; i < texto.length; i++) {
      texto[i].classList.replace( texto_escuro, texto_claro);
    }
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].classList.replace(elementos_escuro, elementos_claro);
    }
    for (let i = 0; i < barras.length; i++) {
      barras[i].classList.replace(barras_escuro, barras_claro);
    }
  }
}
function test(){
  div.classList
}
botao.onclick = trocar;