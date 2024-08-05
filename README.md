# Exercita365

O **Exercita365** é uma aplicação Back-End que facilita o gerenciamento de exercícios e locais para atividades físicas. Os usuários podem cadastrar novos locais de exercícios, encontrar pontos próximos, visualizar informações sobre os exercícios em cada ponto e registrar suas próprias contribuições para o sistema. A aplicação é uma API REST, desenvolvida com Node.js, Express e PostgreSQL.

## Tecnologias Utilizadas
- **Node.js**

![Node.js](https://github.com/FuturoDEV-Fitness/carrinho-de-compras-frankosorio4/assets/141787907/46063f9a-53d7-461a-858d-9c8238e6984e)

- **PostgreSQL**

![PostgreSQL](https://github.com/FuturoDEV-Fitness/carrinho-de-compras-frankosorio4/assets/141787907/1d2d047d-3887-4b37-9fa4-d5e07620c1a7)

## Bibliotecas Utilizadas

- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [axios](https://axios-http.com/docs/intro)
- [swagger](https://swagger.io/docs/open-source-tools/swagger-ui/development/setting-up/?sbsearch=node)

## Como Executar

Para executar este projeto, você deve ter instalado no seu computador o [NODEJS](https://nodejs.org/en).

1. **Clone o repositório:**

    ```bash
    git clone <URL do repositório>
    ```

2. **Instale as dependências:**

    Abra o terminal do **VSCode** ou do seu editor de código no diretório do repositório e instale as bibliotecas necessárias usando o comando:

    ```bash
        npm install
    ```

3. **Instale e configure o PostgreSQL:**

    - Descarregue e instale o gerenciador de banco de dados PostgreSQL (por exemplo, pode usar o **pgAdmin** https://www.pgadmin.org/download/) e inicie-o.
    - Crie uma base de dados para testar o projeto.

4. **Configure as variáveis de ambiente:**

    - Crie o arquivo `.env` na pasta raiz do projeto e forneça as suas variáveis. Pode usar como modelo o arquivo `.env_example.js` providenciado no projeto. Você deverá atualizar os seguintes campos:

    ```dotenv
        APP_PORT=3000
        DB_HOST=localhost
        DB_DIALECT=postgres
        DB_PORT=5432
        DB_USER=postgres
        DB_DATABASE=dbName
        DB_PASSWORD=dbPassword
        JWT_SECRET=secretPhrase
    ```

5. **Inicie as migrações:**

    Rode no terminal o comando:

    ```bash
    npx sequelize db:migrate
    ```

    Este comando vai criar as tabelas necessárias na base de dados para poder iniciar o projeto.

6. **Popule as tabelas com dados iniciais:**

    Rode no terminal o comando:

    ```bash
    npx sequelize db:seed:all
    ```

7. **Carregue a documentação da API:**

    Rode no terminal o comando:

    ```bash
    npx run swagger
    ```

    Este comando foi configurado para rodar o comando `npm run node ./autoGen.swagger.js`.

8. **Inicie o servidor:**

    Rode no terminal o comando:

    ```bash
    npm run start:dev
    ```

    Este comando foi configurado para rodar o comando `npm run nodemon src/index.js`.

## Documentação e Uso da API

Uma vez iniciado o servidor, carregue a URL `http://localhost:3000/docs/` no seu navegador. Nesta URL você encontrará a documentação da API e poderá testar todas as rotas do projeto. As funcionalidades disponíveis incluem:

- **Cadastrar um usuário** (POST).
- **Conectar (Logar) um usuário** com o Back-End (POST).
- **Acessar para fazer um CRUD dos Locais de exercício**:
    - **POST** (Cadastrar um local).
    - **GET** (Listar os Locais cadastrados pelo usuário).
    - **GET - id local** (Listar um Local específico cadastrado pelo usuário).
    - **PUT - id local** (Editar um Local específico cadastrado pelo usuário).
    - **DELETE - id local** (Apagar um Local específico cadastrado pelo usuário).

## Modelo de Banco de Dados

![image](https://github.com/user-attachments/assets/e7e7dcc1-8192-4f95-b5db-e7d3eb5b04bc)


## Melhorias Sugeridas

- Configurar um projeto FRONT-END integrar todas as funcionalidades da API.
- Aplicar um sistema de permissões para diferentes tipo De usuários.
- Implementar a funcionalidade para que o usuário posa editar ou apagar seu perfil.
- Implementar um sistema de Host para o BACK-END e banco de dados.
<!-- - Melhorar a lógica de alguns componentes. -->
