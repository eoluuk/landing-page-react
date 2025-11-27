# 🚀 Linear Landing Page

Uma landing page moderna e minimalista construída com React, inspirada no design premium de empresas como Linear, Stripe e Apple.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3.x-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Características](#características)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Deploy](#deploy)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Customização](#customização)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Contato](#contato)

## 🎯 Sobre o Projeto

Este projeto é uma landing page completa e responsiva, desenvolvida com foco em:

- **Design Minimalista**: Paleta monocromática preta e branca
- **Performance**: Otimizada para carregamento rápido
- **Responsividade**: Funciona perfeitamente em todos os dispositivos
- **Animações Suaves**: Experiência de usuário premium
- **Código Limpo**: Fácil de entender e modificar

### 🎨 Design System

- **Tipografia**: SF Pro Display / Inter
- **Cores**: Preto (#000000), Branco (#FFFFFF), Tons de Cinza
- **Bordas**: Rounded-3xl (24px) para elementos grandes
- **Espaçamento**: Sistema consistente baseado em múltiplos de 4px

## ✨ Características

### 📄 Seções Incluídas

- ✅ **Hero Section** - Apresentação impactante com CTA
- ✅ **Interface Simulada** - Demonstração visual do produto
- ✅ **Grid de Componentes** - Cards com ícones coloridos
- ✅ **Roadmap Timeline** - Linha do tempo do JavaScript
- ✅ **Features Grid** - Principais recursos do produto
- ✅ **Estatísticas** - Números e métricas importantes
- ✅ **Pricing** - 3 planos com destaque para o popular
- ✅ **Depoimentos** - Testemunhos de clientes
- ✅ **CTA Final** - Chamada para ação com formulário
- ✅ **Footer** - Links e informações da empresa

### 🎬 Animações

- Fade in/out suaves
- Hover effects elegantes
- Stagger animations (entrada sequencial)
- Scale e translate effects
- Pulse animations

### 📱 Responsividade

- Mobile First
- Breakpoints otimizados
- Grid responsivo
- Navegação adaptativa

## 🛠️ Tecnologias

Este projeto foi construído com as seguintes tecnologias:

- **[React](https://reactjs.org/)** - Biblioteca JavaScript para construção de interfaces
- **[Vite](https://vitejs.dev/)** - Build tool ultra-rápida
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones
- **[Recharts](https://recharts.org/)** - Biblioteca de gráficos para React

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- **Node.js** (versão 16.x ou superior)
- **npm** ou **yarn**
- **Git**

Para verificar se tem o Node instalado:

```bash
node --version
npm --version
```

## 🚀 Instalação

Siga estes passos para rodar o projeto localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
```

### 2. Entre na pasta do projeto

```bash
cd seu-projeto
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure o Tailwind CSS

O Tailwind já está configurado, mas se precisar reinstalar:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O projeto estará rodando em `http://localhost:5173/`

## 💻 Como Usar

### Desenvolvimento

```bash
# Rodar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

### Estrutura de Comandos

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build otimizada para produção |
| `npm run preview` | Preview local da build de produção |
| `npm run lint` | Executa linter no código |

## 🌐 Deploy

### Vercel (Recomendado)

1. **Via Interface:**
   - Acesse [vercel.com](https://vercel.com)
   - Conecte seu repositório GitHub
   - Clique em "Deploy"

2. **Via CLI:**
```bash
npm install -g vercel
vercel login
vercel
```

### Netlify

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

### GitHub Pages

```bash
npm install --save-dev gh-pages

# Adicione no package.json:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

npm run deploy
```

## 📁 Estrutura do Projeto

```
seu-projeto/
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/         # Imagens, fontes, etc
│   ├── components/     # Componentes React
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Ponto de entrada
│   └── index.css       # Estilos globais (Tailwind)
├── index.html          # HTML principal
├── package.json        # Dependências e scripts
├── vite.config.js      # Configuração do Vite
├── tailwind.config.js  # Configuração do Tailwind
├── postcss.config.js   # Configuração do PostCSS
└── README.md          # Este arquivo
```

## 🎨 Customização

### Alterar Cores

Edite o arquivo `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
      },
    },
  },
}
```

### Alterar Tipografia

No componente, modifique o `fontFamily`:

```javascript
style={{ fontFamily: 'Sua Fonte, sans-serif' }}
```

### Adicionar Novas Seções

Siga o padrão das seções existentes:

```jsx
<section className="py-20 px-6 border-t border-neutral-900">
  <div className="max-w-7xl mx-auto">
    {/* Seu conteúdo aqui */}
  </div>
</section>
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas!

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a Branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

### Diretrizes

- Siga o style guide do projeto
- Escreva commits claros e descritivos
- Adicione testes se possível
- Atualize a documentação

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

Seu Nome - [@seutwitter](https://twitter.com/seutwitter) - seu.email@exemplo.com

Link do Projeto: [https://github.com/seu-usuario/seu-projeto](https://github.com/seu-usuario/seu-projeto)

Link do Deploy: [https://seu-projeto.vercel.app](https://seu-projeto.vercel.app)

---

## 🙏 Agradecimentos

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel](https://vercel.com/)
- Inspiração de design: [Linear](https://linear.app/), [Stripe](https://stripe.com/)

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

Feito com ❤️ por [Seu Nome](https://github.com/seu-usuario)

</div>