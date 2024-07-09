import { conectaApi } from "./conectaAPI.js";
import construirCard from "./mostrarVideos.js";

async function buscarVideos(evento) {
  evento.preventDefault();

  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
  console.log(dadosDePesquisa);
  const busca = await conectaApi.buscaVideo(dadosDePesquisa);

  const lista = document.querySelector("[data-lista]");

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  busca.forEach((elemento) =>
    lista.appendChild(
      construirCard(
        elemento.titulo,
        elemento.descricao,
        elemento.url,
        elemento.imagem
      )
    )
  );

  if(busca.length == 0 ){
    lista.innerHTML = `<h2 class="mensagem__titulo">Não vídeos com esse termo</h2>`;
  }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", (evento) => buscarVideos(evento));
