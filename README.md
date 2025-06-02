# 🛒 quality-assured-Saucedemo

> Repositório com planos de teste, casos de teste e automação End-to-End do site [SauceDemo](https://www.saucedemo.com). Abrange testes manuais e automatizados com Cypress, validando fluxos críticos como login, manipulação de produtos, checkout e finalização de compras.

---

## 📋 Descrição do Projeto

Este projeto tem como objetivo simular o processo de garantia de qualidade (QA) em um sistema de e-commerce fictício. Foram elaborados documentos de **Plano de Teste** e **Casos de Teste**, além da criação de testes automatizados utilizando o Cypress para cobrir os principais fluxos funcionais da aplicação.

---

## 🎯 Objetivos

- Validar os fluxos críticos do sistema SauceDemo.
- Garantir que a aplicação esteja funcionando conforme o esperado, tanto via testes manuais quanto automatizados.
- Criar uma base de portfólio para demonstração de habilidades em QA.

---

## 🧰 Tecnologias e Ferramentas Utilizadas

- **Cypress**: Ferramenta de testes End-to-End
- **JavaScript (ES6+)**
- **faker.js**: Gerador de dados fictícios para simular usuários e entradas variadas
- **Aqua IDE - JetBrains** para desenvolvimento
- **GitHub** para versionamento e documentação

---

## 🧪 Estrutura dos Testes

### 📁 Documentação Manual
- [Test Plan - Saucedemo.pdf](./evidencias/manual/Test-Plan-Saucedemo.pdf)
- [Test Case - Saucedemo.pdf](./evidencias/manual/Test-Case-Saucedemo.pdf)

> Estes documentos descrevem os critérios de teste, escopo, funcionalidades a serem validadas, dados de entrada, pré-condições, passos e resultados esperados.

---

### 💻 Testes Automatizados com Cypress

#### 🧩 Testes de Funcionalidade
- Login com credenciais válidas e inválidas
- Logout
- Validação de detalhes de produtos
- Adição de produtos ao carrinho (pela lista e pela página de detalhes)
- Fluxo de checkout com e sem preenchimento de dados obrigatórios

#### 🔁 Teste End-to-End
- Simulação completa de um fluxo de compra, da autenticação até a finalização da compra e logout.

---

## 🎥 Evidências em Vídeo dos Testes Automatizados

- [add-product-to-cart.cy.js.mp4](./evidencias/automatizados/features/add-product-to-cart.cy.js.mp4)
- [checkout-product.cy.js.mp4](./evidencias/automatizados/features/checkout-product.cy.js.mp4)
- [login.cy.js.mp4](./evidencias/automatizados/features/login.cy.js.mp4)
- [logout.cy.js.mp4](./evidencias/automatizados/features/logout.cy.js.mp4)
- [product-details.cy.js.mp4](./evidencias/automatizados/features/product-details.cy.js.mp4)
- [e2e-test.cy.js.mp4](./evidencias/automatizados/e2e-test.cy.js.mp4)

---

## 🚫 Por que **não** utilizei cy.session()?

### 🔒 Limitação no Compartilhamento de Sessões com Cypress no Projeto Saucedemo

A aplicação **SauceDemo** não possui autenticação com persistência real no backend (sem API pública e sem uso de tokens). Como a sessão é gerenciada exclusivamente pela interface (UI), tentativas de reaproveitamento de sessão com cy.session() resultam em redirecionamentos indesejados ou falhas.

🧠 **Decisão técnica**: optou-se por realizar o login pela interface em cada cenário, garantindo maior confiabilidade e aderência ao comportamento real da aplicação.

---
