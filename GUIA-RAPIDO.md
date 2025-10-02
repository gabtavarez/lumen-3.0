# 📋 Guia Rápido - Lumen CAD Design

## ⚡ Ações Mais Comuns

### 1. Adicionar Nova Imagem ao Portfólio

**Passo a passo:**

1. Abra o arquivo: `data/portfolio.json`
2. Adicione um novo item no array `items`:

```json
{
  "id": 6,
  "titleKey": "portfolio.meu_projeto.title",
  "descriptionKey": "portfolio.meu_projeto.description",
  "image": "SUA_URL_AQUI",
  "category": "categoria"
}
```

3. Abra o arquivo: `js/translations.js`
4. Adicione as traduções em cada idioma:

```javascript
// Em pt:
portfolio: {
  meu_projeto: {
    title: "Meu Projeto",
    description: "Descrição em português"
  }
}

// Em en:
portfolio: {
  meu_projeto: {
    title: "My Project",
    description: "Description in English"
  }
}

// Repita para de e es
```

### 2. Remover Imagem do Portfólio

1. Abra `data/portfolio.json`
2. Delete o objeto com o ID da imagem que quer remover
3. Salve o arquivo

Pronto! A imagem não aparecerá mais no site.

### 3. Alterar Cores do Site

1. Abra `css/styles.css`
2. No topo do arquivo, altere as variáveis:

```css
:root {
    --primary-color: #5ba3d0;  /* Azul principal - ALTERE AQUI */
    --secondary-color: #4a8bb8; /* Azul secundário */
    --accent-color: #6bb5e3;    /* Azul claro */
}
```

### 4. Atualizar Link do WhatsApp

1. Abra `index.html`
2. Procure por `https://wa.link/g7x7mp` (aparece 3 vezes)
3. Substitua pelo seu link do WhatsApp

**Como criar seu link:**
- Acesse: https://wa.me/SEU_NUMERO
- Exemplo: https://wa.me/5511917175059

**Locais do link:**
- Botão Hero: "Solicite um Orçamento"
- Botão Garantias: "Solicitar Caso Grátis"
- Botão Flutuante: Canto inferior direito

### 5. Atualizar Informações de Contato no Rodapé

1. Abra `index.html`
2. Procure por "footer-contact"
3. Altere telefone, email e endereço

### 6. Mudar Logo

A logo atual está hospedada em: `https://i.ibb.co/wFcFY77d/Ativo-1.png`

**Para mudar:**

1. Faça upload da sua logo em um serviço (ImgBB, Imgur, Cloudinary)
2. Copie o link direto da imagem
3. Em `index.html`, procure por `https://i.ibb.co/wFcFY77d/Ativo-1.png` (aparece 5 vezes)
4. Substitua todas as ocorrências pelo link da sua nova logo

**Ou usar imagem local:**

1. Coloque sua logo em `images/logo.png`
2. Substitua a URL por `images/logo.png`

**Especificações recomendadas:**
- Formato: PNG com fundo transparente
- Tamanho: 512x512px
- Peso: Menos de 100KB

### 7. Personalizar Loading Screen

**Alterar tempo de carregamento:**
1. Abra `js/main.js`
2. Procure por `setTimeout(() => {`, 1500
3. Altere 1500 para o tempo desejado (em milissegundos)

**Alterar texto do loading:**
1. Abra `js/translations.js`
2. Procure por `loading.text`
3. Altere em todos os idiomas

### 8. Personalizar Dark/Light Mode

**Alterar cores do modo claro:**
1. Abra `css/styles.css`
2. Procure por `[data-theme="light"]`
3. Ajuste as variáveis CSS conforme necessário

**Desabilitar modo claro:**
1. Abra `index.html`
2. Remova o botão de tema da navbar

## 🌐 Adicionar Novo Idioma ao Dropdown

1. Abra `index.html` e adicione a nova opção no dropdown:

```html
<button class="lang-option" data-lang="fr">
    <span class="lang-flag">🇫🇷</span>
    <span class="lang-name">Français</span>
</button>
```

2. Abra `js/main.js` e adicione os dados do idioma:

```javascript
const languageData = {
    pt: { flag: '🇧🇷', name: 'Português', code: 'PT' },
    en: { flag: '🇺🇸', name: 'English', code: 'EN' },
    de: { flag: '🇩🇪', name: 'Deutsch', code: 'DE' },
    es: { flag: '🇪🇸', name: 'Español', code: 'ES' },
    fr: { flag: '🇫🇷', name: 'Français', code: 'FR' }  // NOVO
};
```

3. Adicione as traduções em `js/translations.js`

## 🗺️ Onde Está Cada Texto?

| Seção | Arquivo | Localização |
|-------|---------|-------------|
| Navegação | `js/translations.js` | `nav.*` |
| Hero (Topo) | `js/translations.js` | `hero.*` |
| Portfólio | `js/translations.js` | `portfolio.*` |
| Serviços | `js/translations.js` | `services.*` |
| Sobre | `js/translations.js` | `about.*` |
| Workflow | `js/translations.js` | `workflow.*` |
| Garantias | `js/translations.js` | `guarantees.*` |
| Rodapé | `js/translations.js` | `footer.*` |
| WhatsApp Flutuante | `js/translations.js` | `whatsapp.*` |
| Loading Screen | `js/translations.js` | `loading.*` |
| Theme Toggle | `js/translations.js` | `theme.*` |
| Seletor de Idioma | `index.html` e `js/main.js` | Dropdown |

## 🖼️ Formatos de Imagem Recomendados

- **Portfólio**: 1200x900px, formato JPG ou WebP
- **Logo**: 200x200px, formato PNG com fundo transparente
- **Ícones**: Use Font Awesome (já incluído)

## 🚀 Como Publicar o Site

### Opção 1: GitHub Pages (Grátis)

1. Crie uma conta no GitHub
2. Crie um novo repositório
3. Faça upload de todos os arquivos
4. Vá em Settings > Pages
5. Escolha a branch main
6. Seu site estará em: `usuario.github.io/repositorio`

### Opção 2: Netlify (Grátis)

1. Acesse netlify.com
2. Arraste a pasta do projeto
3. Site publicado instantaneamente!

### Opção 3: Hospedagem Tradicional

1. Compre um domínio e hospedagem
2. Faça upload via FTP
3. Configure o domínio

## 🐛 Problemas Comuns

### Imagens não aparecem
- Verifique se a URL está correta
- Teste a URL em uma nova aba do navegador
- Verifique se o caminho é relativo correto

### Traduções não funcionam
- Verifique a sintaxe do JSON (vírgulas, aspas)
- Use um validador JSON online
- Verifique se a chave existe em todos os idiomas

### Modal não abre
- Abra o Console (F12) e veja se há erros
- Verifique se todos os arquivos JS estão carregando

## 📱 Testar Responsividade

1. Abra o site no navegador
2. Pressione F12
3. Clique no ícone de dispositivo móvel
4. Teste diferentes tamanhos de tela

## ✅ Checklist Antes de Publicar

- [ ] Todas as imagens carregam corretamente
- [ ] Texto em todos os 4 idiomas está correto
- [ ] Links do rodapé apontam para lugares corretos
- [ ] Informações de contato estão atualizadas
- [ ] Site funciona em mobile (teste no celular)
- [ ] Todas as seções aparecem corretamente
- [ ] Modal de portfólio funciona
- [ ] Navegação suave funciona

## 💡 Dicas Pro

1. **Use CTRL+F** para encontrar texto específico nos arquivos
2. **Faça backup** antes de mudanças grandes
3. **Teste sempre** após cada alteração
4. **Otimize imagens** em tinypng.com antes de usar
5. **Use nomes descritivos** para IDs e chaves de tradução

## 🆘 Precisa de Ajuda?

1. Releia este guia
2. Veja o README.md completo
3. Verifique comentários no código
4. Use o Console do navegador (F12) para ver erros

---

**Última atualização**: Outubro 2025

