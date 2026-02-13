# 🚀 Desafio Técnico Nalin

## 📌 Sobre o projeto

A aplicação possui:

-   🔐 Tela de login
-   🔄 Redirecionamento automático após autenticação
-   📦 Tela de listagem de produtos
-   📄 Paginação no frontend
-   🔎 Filtros por código, descrição e departamento
-   🚫 Tela de Not Found (404)
-   🛡️ Proteção de rotas:
    -   Usuário autenticado não acessa a tela de login
    -   Usuário não autenticado não acessa a tela de produtos

------------------------------------------------------------------------

## 🛠️ Tecnologias utilizadas

-   React
-   TypeScript
-   Vite
-   React Router DOM
-   TanStack React Query
-   Axios
-   Tailwind CSS
-   React Icons
-   React Toastify

------------------------------------------------------------------------

## 📥 Como clonar o projeto

``` bash
git clone git@github.com:LuidiPiresHub/Desafio-Nalin.git
cd Desafio-Nalin
```

------------------------------------------------------------------------

## 📦 Instalação das dependências

``` bash
npm install
```

------------------------------------------------------------------------

## ⚙️ Configuração das variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

``` bash
cp .env.example .env
```

Depois preencha a variável:

    VITE_API_URL='NALIN_API_URL_AQUI'

------------------------------------------------------------------------

## ▶️ Executar o projeto

``` bash
npm run dev
```

A aplicação estará disponível em:

    http://localhost:3000

------------------------------------------------------------------------

## 🌍 Deploy

A aplicação está disponível em:

🔗 https://luidi-pires-desafio-nalin.vercel.app

------------------------------------------------------------------------

## 🧪 Como testar a aplicação

### ▶️ Passo a passo

1. Acesse a aplicação
2. Realize o login utilizando as credenciais acima
3. Após autenticado, você será redirecionado para a listagem de produtos
4. Utilize os filtros para buscar produtos por:
   - Código
   - Descrição
   - Departamento
5. Navegue entre as páginas usando a paginação
6. Teste o comportamento de proteção de rotas:
   - Sem login → não acessa `/produtos`
   - Logado → não acessa `/`
