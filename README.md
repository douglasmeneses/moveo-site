# 🚀 Moveo — Landing Page Institucional & Soluções em Saúde

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)

Landing page institucional moderna, de alta performance e visualmente sofisticada desenvolvida para a **Moveo (Tecnologia e Inovação em Saúde & Neurociência)**, utilizando **React 19**, **TypeScript**, **Vite** e containerização com **Docker** e **Nginx**.

---

## 📌 Funcionalidades

- ✨ **Design Moderno & Responsivo:** Layout adaptável para smartphones, tablets e desktops com estética minimalista e grid dinâmico.
- ⚡ **Performance com Vite & React 19:** Carregamento quase instantâneo e bundle otimizado.
- 🧭 **Navegação Interativa:** Efeitos de scroll suave, navbar adaptativa e seções de Recursos, Soluções e Contato.
- 🎨 **Ícones & Estilos:** Integração com **Lucide React** e estilização customizada de componentes e gradientes.
- 🐳 **Deploy Otimizado com Docker:** Build multi-stage com servidor leve Nginx para entrega rápida de arquivos estáticos.

---

## 🏗️ Estrutura do Projeto

```text
moveo-site/
├── src/
│   ├── assets/           # Logotipos, ícones e mídias visuais
│   ├── App.tsx           # Estrutura principal da landing page e seções
│   ├── App.css           # Estilos e animações específicas dos componentes
│   ├── index.css         # Reset global e variáveis de design system
│   └── main.tsx          # Ponto de entrada React
├── Dockerfile            # Multi-stage build (Node build -> Nginx alpine)
├── nginx.conf            # Configuração de proxy e cache estático Nginx
├── index.html            # Estrutura HTML base e meta tags
└── package.json
```

---

## 🛠️ Tecnologias Utilizadas

- **Biblioteca:** [React 19](https://react.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Ferramenta de Build:** [Vite](https://vitejs.dev/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Deploy:** Docker & Nginx Alpine

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)

### 1. Clonar o repositório
```bash
git clone https://github.com/douglasmeneses/moveo-site.git
cd moveo-site
```

### 2. Instalar as dependências e iniciar
```bash
npm install
npm run dev
```
Acesse `http://localhost:5173` no seu navegador.

### 3. Executar via Docker
```bash
docker build -t moveo-site .
docker run -d -p 80:80 moveo-site
```
Acesse `http://localhost:80`.

---

## 👨‍💻 Autor

Desenvolvido por **Douglas Meneses**.

- 💼 GitHub: [@douglasmeneses](https://github.com/douglasmeneses)
- ✉️ Email: [meneses.doug@gmail.com](mailto:meneses.doug@gmail.com)
