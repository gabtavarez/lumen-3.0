# Lumen CAD Design - Website

Site profissional para estúdio de design digital de próteses dentárias.

## 🚀 Características

- **Design Moderno e Responsivo**: Layout profissional que se adapta a todos os dispositivos
- **Sistema Multi-idioma**: Suporte nativo para Português, Inglês, Alemão e Espanhol
- **Portfólio Interativo**: Galeria com modal/popup para visualização ampliada de imagens
- **Performance Otimizada**: Código limpo e otimizado para carregamento rápido
- **Fácil Manutenção**: Arquivos organizados e sistema simples para gerenciar conteúdo
- **Animações Suaves**: Transições e efeitos visuais modernos
- **SEO Friendly**: Estrutura HTML semântica otimizada para buscadores

## 📁 Estrutura de Arquivos

```
lumen-cad/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos CSS
├── js/
│   ├── main.js            # JavaScript principal
│   └── translations.js    # Sistema de traduções
├── data/
│   └── portfolio.json     # Dados do portfólio
└── README.md              # Este arquivo
```

## 🛠️ Como Usar

### 1. Abrir o Site

Basta abrir o arquivo `index.html` em qualquer navegador moderno. Não é necessário servidor web para desenvolvimento local.

### 2. Adicionar Imagens ao Portfólio

**Opção A - Usar imagens online:**

1. Abra o arquivo `data/portfolio.json`
2. Adicione um novo item no array `items`:

```json
{
  "id": 6,
  "titleKey": "portfolio.novo.title",
  "descriptionKey": "portfolio.novo.description",
  "image": "https://sua-url-da-imagem.com/imagem.jpg",
  "category": "sua-categoria"
}
```

3. Adicione as traduções em `js/translations.js`:

```javascript
// Em cada idioma (pt, en, de, es), adicione:
portfolio: {
  novo: {
    title: "Título do Projeto",
    description: "Descrição do projeto..."
  }
}
```

**Opção B - Usar imagens locais:**

1. Crie uma pasta `images/portfolio/` na raiz do projeto
2. Coloque suas imagens nessa pasta
3. No `portfolio.json`, use o caminho relativo:

```json
{
  "image": "images/portfolio/minha-imagem.jpg"
}
```

### 3. Remover Imagens do Portfólio

1. Abra `data/portfolio.json`
2. Delete o objeto correspondente à imagem que deseja remover
3. (Opcional) Remova as traduções relacionadas de `js/translations.js`

### 4. Traduzir Conteúdo

1. Abra `js/translations.js`
2. Localize a seção que deseja traduzir
3. Edite ou adicione traduções nos 4 idiomas (pt, en, de, es)

Exemplo:

```javascript
pt: {
  services: {
    novo_servico: {
      title: "Novo Serviço",
      description: "Descrição em português"
    }
  }
},
en: {
  services: {
    novo_servico: {
      title: "New Service",
      description: "Description in English"
    }
  }
}
```

### 5. Personalizar Cores e Estilos

Abra `css/styles.css` e edite as variáveis CSS no início do arquivo:

```css
:root {
    --primary-color: #5ba3d0;      /* Cor principal */
    --secondary-color: #4a8bb8;    /* Cor secundária */
    --accent-color: #6bb5e3;       /* Cor de destaque */
    --dark-bg: #1a1d29;            /* Fundo escuro */
    /* ... outras variáveis */
}
```

## 🌐 Sistema de Tradução

O site detecta automaticamente o idioma do navegador do visitante e exibe o conteúdo no idioma apropriado. O usuário também pode mudar manualmente usando os botões no topo da página.

**Idiomas suportados:**
- 🇧🇷 Português (PT)
- 🇺🇸 Inglês (EN)
- 🇩🇪 Alemão (DE)
- 🇪🇸 Espanhol (ES)

**Para adicionar um novo idioma:**

1. Abra `js/translations.js`
2. Adicione um novo objeto com o código do idioma:

```javascript
const translations = {
  pt: { /* ... */ },
  en: { /* ... */ },
  fr: {  // Novo idioma: Francês
    nav: {
      home: "Accueil",
      portfolio: "Portfolio",
      // ...
    }
  }
};
```

3. Adicione o botão no HTML (`index.html`):

```html
<button class="lang-btn" data-lang="fr">FR</button>
```

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 💻 Desktop (1920px+)
- 💻 Laptop (1366px+)
- 📱 Tablet (768px+)
- 📱 Mobile (320px+)

## 🎨 Seções do Site

1. **Hero**: Apresentação principal com call-to-action
2. **Portfólio**: Galeria de projetos com modal interativo
3. **Serviços**: Cards descrevendo os serviços oferecidos
4. **Sobre**: Informações sobre o estúdio
5. **Workflow**: Processo de trabalho em 5 etapas
6. **Garantias**: Diferenciais e garantias oferecidas
7. **Footer**: Contatos e redes sociais

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica moderna
- **CSS3**: Estilos avançados com Grid, Flexbox e animações
- **JavaScript (Vanilla)**: Sem dependências externas
- **Font Awesome**: Ícones profissionais
- **JSON**: Armazenamento de dados configuráveis

## 📈 Performance

- ⚡ Carregamento rápido com código otimizado
- 🖼️ Lazy loading de imagens
- 🎯 Animações com GPU acceleration
- 📦 Sem bibliotecas pesadas (vanilla JavaScript)

## 🔄 Atualizações Futuras

Para adicionar novas funcionalidades no futuro:

1. **Formulário de Contato**: Adicione uma seção com formulário
2. **Blog**: Integre um sistema de blog
3. **Galeria Avançada**: Use uma biblioteca como PhotoSwipe
4. **Analytics**: Adicione Google Analytics
5. **SEO Avançado**: Implemente Schema.org markup

## 💡 Dicas de Uso

### Hospedagem

Este site pode ser hospedado em qualquer serviço:
- GitHub Pages (grátis)
- Netlify (grátis)
- Vercel (grátis)
- Hostinger, GoDaddy, etc.

### Imagens

- Use imagens otimizadas (WebP quando possível)
- Tamanho recomendado para portfólio: 1200x900px
- Comprima as imagens antes de fazer upload (use TinyPNG.com)

### Backup

Sempre faça backup dos arquivos antes de fazer alterações grandes:
1. Copie toda a pasta do projeto
2. Use controle de versão (Git)

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique este README primeiro
2. Revise os comentários no código
3. Teste em modo desenvolvedor do navegador (F12)

## 📝 Licença

Este projeto foi desenvolvido para uso comercial da Lumen CAD Design.

---

**Desenvolvido com ❤️ para Lumen CAD Design**

*Última atualização: Outubro 2025*

