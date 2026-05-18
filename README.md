
# 🛍️ MyShop

**MyShop** é um e‑commerce em desenvolvimento criado com React, TypeScript , Styled‑Components e Redux.  
O projeto serve como portfólio técnico e base para um produto real: catálogo de produtos, visualização de itens e carrinho.  
Atualmente os dados são mockados em `src/data/products.ts`, mas serão substituídos futuramente por uma API e gerenciamento de estado com Redux.

---

##  Tecnologias
- React  
- TypeScript  
- Styled‑Components  
- React Icons  
- Redux  

---

##  Descrição
MyShop apresenta uma interface de catálogo com componentes reutilizáveis como **ProductCard**, **ProductsList**, **Header** e **Cart**.  
A arquitetura está organizada para permitir evolução contínua, incluindo integração com API e gerenciamento global de estado com Redux.

---

##  Status
- ✅ UI e componentes principais implementados  
- ✅ Dados mockados em `src/data/products.ts`  
- ✅ Tipagem com TypeScript aplicada nos componentes 
- ✅ Redux para gerenciamento global do estado   

### Próximos passos
- 🔄 Substituir dados mockados por API  
- 🔄 Adicionar testes unitários e de integração  
- 🔄 Configurar CI/CD e deploy  

---

##  Como rodar localmente
**Pré‑requisitos**: Node.js e npm ou Yarn

```bash
# clonar repositório
git clone https://github.com/luankgf/My-Shop.git

# entrar na pasta
cd myshop

# instalar dependências
npm install
# ou
yarn

# rodar em modo desenvolvimento
npm start
# ou
yarn start


O projeto estará disponível em http://localhost:3000


