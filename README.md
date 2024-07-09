<p align="center"> <img src="https://imgur.com/J3hD21O.png" alt="Javascript: criando requisições"> </p>

<hr>

<p align="center"> <img src="https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png" alt="Logo da Alura"> </p>
<p align="center">Página inicial e formulário de cadastro de vídeos da AluraPlay, uma plataforma de compartilhamento de vídeos.</p>

## Tecnologias utilizadas durante o curso
* Javascript
* NodeJS
* Json-server

## Tecnologias utilizadas no projeto
* HTML
* CSS

## Screenshots
![Screenshot da tela inicial do AluraPlay](https://imgur.com/aymxEsh.png)
![Screenshot da tela do formulário do AluraPlay](https://imgur.com/ShNADf2.png)

## Comandos do node

`npm install -g json-server@0.17.0` => (havia um problema na busca de vídeo por parâmentros usando o "?q=", no link "http://localhost:3000/videos?q=${termoDaBusca}"). Depois de muita pesquisa o problema é que as novas versões do json-server retirou esse metôdo de pesquisa, foi necessário força a versão que a instrutora usava na aula.

`npm init`;
`json-server --watch db.json`.