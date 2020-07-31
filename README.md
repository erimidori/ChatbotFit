# ChatbotFit

<b><h3>1. Descrição </b></h3>
Bot desenvolvido no Lab da Digital Innovation One.

O objetivo do bot é permitir que o usuário informe o tipo de exercício físico e o bot retorna 5 vídeos do Youtube de acordo com a parte do corpo especificada na mensagem.

<b><h3>2. Pré requisitos </b></h3>

2.1. Gerar um novo token do Telegram

- Abrir o Telegram
- Pesquisar por @BotFather
- Iniciar a conversar e executar o seguinte comando: /newbot
- Será solicitado um nome para bot
- Após, será solicitado para informar um username, este deve finalizar com 'bot'.
- Estando tudo certo, será informado o token gerado.

2.2. Criar um novo agente no DialogFlow e as Intents

- Acessar o site https://dialogflow.com/
- Criar o novo agente
- Criar uma nova Intent chamada Treino Específico
- Criar uma entidade Corpo

2.3. Gerar as credenciais

- Youtube => https://console.developers.google.com/start/api?id=youtube
Criar o arquivo yt-config.json e informar a key gerada

- Dialogflow => https://console.cloud.google.com/iam-admin/serviceaccounts Lembrar de ir na conta de serviço criada pelo Dialogflow e gerar seu arquivo json com as credenciais
Com o arquivo gerado, copiar o arquivo json para o seu projeto

<b><h3>3. Sobre o programa </b></h3>
Utilizado o NodeJS e o NPM (Gerenciador de pacotes do NodeJS)
- [https://www.npmjs.com](https://www.npmjs.com)

<b><h3>4. Bibliotecas utilizadas no projeto </b></h3>
- [https://www.npmjs.com/package/youtube-node]- Buscas no Youtube
- [https://www.npmjs.com/package/dialogflow] - Comunicação com o Dialogflow
- [https://www.npmjs.com/package/node-telegram-bot-api] - Comunicação com o Telegram

