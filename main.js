const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll("contador");
for(let i=0; i <botoes.length; i++){
    botoes[i].onclick =function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            texto[j].classList.remove("ativo");

        }
}
botoes[i].classList.add("ativo");
textos[1].classlist.add("ativo")


}
 const tempoObjetivo1 = new Date("2024-12-21Too:00:00");
 contadores[0].textContent = tempoObjetivo1;