# 🚀 Automação de Testes de API com Cypress

![Cypress](https://img.shields.io/badge/Cypress-15.15.0-69D3A7?logo=cypress&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?logo=github-actions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Report-blue?logo=github)
![License: MIT](https://img.shields.io/github/license/Bruno-Dotto/Automacao-API-Cypress)

Projeto desenvolvido para automação de testes de API utilizando **Cypress**, aplicando boas práticas de automação, organização do framework, geração de relatórios e integração contínua com **GitHub Actions**.

---

# 📋 Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- FakerJS
- Mochawesome
- GitHub Actions
- GitHub Pages
- Cypress Grep

---

# 📁 Estrutura do Projeto

```text
.
├── cypress
│   ├── e2e
│   ├── fixtures
│   ├── reports
│   ├── support
│   └── payloads
├── .github
│   └── workflows
├── cypress.config.js
├── package.json
└── README.md
```

---

# ⚙️ Instalação

Clone o projeto

```bash
git clone https://github.com/Bruno-Dotto/Automacao-API-Cypress.git
```

Entre na pasta

```bash
cd Automacao-API-Cypress
```

Instale as dependências

```bash
npm install
```

---

# 📦 Dependências utilizadas

Instalação do Cypress

```bash
npm install cypress --save-dev
```

Instalação do Faker

```bash
npm install @faker-js/faker
```

Instalação do Cypress Grep

```bash
npm install @cypress/grep --save-dev
```

Instalação do Mochawesome

```bash
npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev
```

---

# ▶️ Executando os testes

Abrir o Cypress

```bash
npm run cy:open
```

Executar todos os testes

```bash
npm run cy:run
```

Executar apenas Smoke Tests

```bash
npm run smoke
```

Executar apenas Regression Tests

```bash
npm run regression
```

Executar testes de Booking

```bash
npm run booking
```

---

# 📊 Gerando Relatórios

Gerar relatório

```bash
npm run report
```

Executar Smoke + Relatório

```bash
npm run smoke-report
```

Executar Regression + Relatório

```bash
npm run regression-report
```

---

# 🔖 Tags disponíveis

| Tag | Descrição |
|------|-----------|
| @smoke | Executa apenas os testes Smoke |
| @regression | Executa toda a suíte de regressão |
| @booking | Executa apenas os testes relacionados a Booking |

---

# 🔄 Integração Contínua

O projeto possui pipeline automatizada utilizando **GitHub Actions**.

A pipeline executa:

- Smoke Tests
- Regression Tests
- Geração do relatório Mochawesome
- Publicação automática do relatório no GitHub Pages
- Upload dos artefatos da execução

---

# 📈 Relatório dos Testes

Os relatórios são publicados automaticamente após cada execução da pipeline.

**GitHub Pages**

https://bruno-dotto.github.io/Automacao-API-Cypress/

---

# 📜 Licença

Este projeto está licenciado sob a licença MIT.

---

# 👨‍💻 Autor

Bruno Dotto

GitHub:

https://github.com/Bruno-Dotto