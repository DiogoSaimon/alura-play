async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos");
  const conexaoConvertida = await conexao.json();
  console.table(conexaoConvertida);

  return conexaoConvertida;
}

async function criarVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem,
    }),
  });

  if(!conexao.ok){
    throw Error("Não foi possível enviar o vídeo")
  }

  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function buscaVideo(termoDaBusca) {
  const conexao = await fetch(`http://localhost:3000/videos?q=${termoDaBusca}`);
    console.log(`http://localhost:3000/videos?q=${termoDaBusca}`);
    const conexaoConvertida = conexao.json();
    console.log(conexaoConvertida);

  return conexaoConvertida;
}

export const conectaApi = {
  listaVideos,
  criarVideo,
  buscaVideo,
};
