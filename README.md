# Exercita365

O Exercita365 é uma aplicação Back-End que facilita o gerenciamento de exercícios e locais para atividades físicas serem praticadas. Os usuários podem cadastrar novos locais de exercícios, encontrar pontos próximos, visualizar informações sobre os exercícios em cada ponto e registrar suas próprias contribuições para o sistema. O Exercita365 aplicação Back-End, é API Rest, codificada com uso do Node, Express e PostgreSQL.


## Tecnologias utilizadas
- NODEJS

![image](https://github.com/FuturoDEV-Fitness/carrinho-de-compras-frankosorio4/assets/141787907/46063f9a-53d7-461a-858d-9c8238e6984e)

- PGSQL

![image](https://github.com/FuturoDEV-Fitness/carrinho-de-compras-frankosorio4/assets/141787907/1d2d047d-3887-4b37-9fa4-d5e07620c1a7)


## Livrarias utilizadas:

- express https://expressjs.com/
- sequelize https://sequelize.org/
- jsonwebtoken https://www.npmjs.com/package/jsonwebtoken
- bcryptjs https://www.npmjs.com/package/bcryptjs
- axios https://axios-http.com/docs/intro
- swagger https://swagger.io/docs/open-source-tools/swagger-ui/development/setting-up/?sbsearch=node


## Como executar

Para executar este projeto, voce debe ter instalado no seo computador o sofware Node.(https://nodejs.org/en)

- Clone o repositório.

- Abra o terminal do **vscode** o do seu editor de codigo no diretório do repositório e instale as bibliotecas necesarias usando o comando ```npm install```.

- Descarregue e instaleo gerenciador de banco de dados PostgreSQL (por exemplo, pode usar **pgadmin** https://www.pgadmin.org/download/) e inicielo. Crie uma base de dados para testar o projeto.

- Crie o arquivo das variáveis de ambiente ```.env``` na pasta raiz do projeto y forneça as suas variáveis. Pode usar como modelo o arquivo ```.env_example.js``` providenciado no projeto. Voce debera atualizar os siguintes campos:

    - APP_PORT=3000 // Padrão, porta do server (express)
    - DB_HOST=localhost // Padrão, para rodar local
    - DB_DIALECT=postgres // Padrão, tipo de base de dados
    - DB_PORT=5432 // Padrao, porta da data base
    - DB_USER=postgres // Padrão, nome de usuário
    - DB_DATABASE=dbName // Nome da base de dados
    - DB_PASSWORD=dbPassword // senha do banco de dados
    - JWT_SECRET=secretPhrase // Frase secreta para gerar o Token

- Rode no terminal o comando ```npx sequelize db:migrate``` para iniciar as migrações. Este comando vai criar as tabelas necessárias na base de dados para poder iniciar o projeto.

- Rode no terminal o comando ```npx sequelize db:seed:all``` para popular as tabelas com os dados iniciais configurados nos seeders.

- Rode no terminal o comando ```npx run swagger``` to generate all the documentation for the swagger file. Este comando foi configurado para rodar o comando ```npm run node ./autoGen.swagger.js```.

- Rode no terminal o comando ```npm run start:dev``` para Iniciar o servidor. Este comando foi configurado para rodar o comando ```npm run nodemon src/index.js```.


## Descrever quais técnicas e tecnologias utilizadas. Aqui você também pode inserir alguma imagem ou diagrama para melhor entendimento


## Documentação e uso da API

Uma vez iniciado o servidor, carregue a URL ```http://localhost:3000/docs/``` usando seu navegador. 

Nesta URL você encontrara a documentação da API y poderá testar todas as rotas de requeste do projeto. Você poderá aceder as seguintes funcionalidades:

- Cadastrar um usuário (POST).
- Conectar (Logar) um usuário com o Back-End (POST).
- Acessar para fazer um CRUD dos Locais de exercício:
    - POST (Cadastrar um local).
    - GET (Listar os Locais cadastrados pelo usuário).
    - GED-id local (Lista um Local específico cadastrado pelo usuário).
    - PUT-id loca (Editar um Local específico cadastrado pelo usuário).
    - DELETE-id loca (Apagar um Local específico cadastrado pelo usuário).


## Modelo de banco de dados

## Descrever quais melhorias podem ser aplicadas

Entre outras coisas.
