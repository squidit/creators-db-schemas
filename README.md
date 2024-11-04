<p align="center">
    <img 
    src="https://img.icons8.com/dotty/737373/128/data-configuration.png"
    width="128px" 
    align="center" 
    alt="logo" 
    />
    <h1 align="center">Submodule | DB Schemas</h1>
    <p align="center">Submódulo responsável por agrupar e padronizar todos os schemas de bancos relacionais e suas relações.</p>
</p>

## Instalação
1. Na pasta raíz do serviço que deseja incluir esse submódulo, crie um diretório (se não existente) chamado libraries:
    ```bash
    mkdir libraries
    ```

2. Dentro da pasta libraries , adicione esse repositório como submódulo:

    ```bash
    cd libraries
    git submodule add git@github.com:squidit/creators-db-schemas.git
    ```

    > Isso faz com que o commit de sua aplicação em NodeJS seja vinculado ao hash do commit da biblioteca. Ou seja, o código fonte da biblioteca não será commitado junto com a sua aplicação, mas apenas "linkado" ao commit dela em seu próprio repositório.

3. Retorne ao diretório raiz do projeto, e inicialize todos os submódulos e suas dependências com o comando:

    ```bash
    cd ..
    git submodule update --init --recursive
    ```
    > Tal comando é o responsável por baixar todos os códigos fontes das bibliotecas e suas dependências.

4. Vincule o submódulo do git ao package.json:

    * npm
        ```bash
        npm install --save file:libraries/creators-db-schemas
        ```
    * pnpm
        ```bash
        pnpm add file:libraries/creators-db-schemas
        ```

    > Dessa forma, os as bibliotecas locais são incluidas como dependências no gerenciador de pacotes (npm, yarn, pnpm etc). Isso permite que, no código, você possa fazer uso das bibliotecas através de um require { SquidError, SquidLogger } from 'squid-observability' sem se preocupar com o diretório onde essas bibliotecas estão instaladas. Além disso, o gerenciador de pacotes garante que, caso as bibliotecas instaladas via submódulos tenham dependências em comum com sua aplicação, somente uma cópia do código fonte dessas bibliotecas será vinculada a ela, consequentemente reduzindo o tamanho final da aplicação.  
    > Outra vantagem de vincular o submódulo com o package.json é transferir a responsabilidade de instalar as dependencias dos submódulos ao package manager. Ou seja, se uma biblioteca em submódulo fizer uso da lodash, o npm ou yarn da aplicação pai é quem irá instalar essa dependência ao rodarmos npm install.

## Utilização
TODO