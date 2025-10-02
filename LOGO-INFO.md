# 🎨 Informações sobre a Logo

## 📍 Onde a Logo Aparece

A logo da Lumen CAD Design aparece em **4 locais** no site:

### 1. **Navbar (Navegação)**
- **Localização**: Canto superior esquerdo
- **Tamanho**: 45x45px
- **Comportamento**: Hover com zoom sutil

### 2. **Hero Section (Topo Principal)**
- **Localização**: Centro da seção principal
- **Tamanho**: 180x180px (140px em mobile)
- **Comportamento**: Animação flutuante suave

### 3. **Footer (Rodapé)**
- **Localização**: Canto inferior esquerdo
- **Tamanho**: 45x45px
- **Comportamento**: Estático

### 4. **Favicon (Aba do Navegador)**
- **Localização**: Aba do navegador
- **Formato**: PNG
- **Comportamento**: Ícone padrão

## 🔗 Logo Atual

**URL**: https://i.ibb.co/wFcFY77d/Ativo-1.png

A logo está hospedada no [ImgBB](https://imgbb.com) - um serviço gratuito de hospedagem de imagens.

## 🔄 Como Alterar a Logo

### Opção 1: Usar Outra URL

1. Faça upload da nova logo em um serviço de hospedagem:
   - [ImgBB](https://imgbb.com) (grátis)
   - [Imgur](https://imgur.com) (grátis)
   - [Cloudinary](https://cloudinary.com) (grátis com limite)

2. Copie o link direto da imagem

3. Abra `index.html`

4. Use Find & Replace (Ctrl+H ou Cmd+H):
   - **Procurar**: `https://i.ibb.co/wFcFY77d/Ativo-1.png`
   - **Substituir por**: `SUA_NOVA_URL_AQUI`
   - Substituir todas as ocorrências

### Opção 2: Usar Imagem Local

1. Crie a pasta `images/` na raiz do projeto (se não existir)

2. Coloque sua logo como `images/logo.png`

3. Abra `index.html`

4. Use Find & Replace:
   - **Procurar**: `https://i.ibb.co/wFcFY77d/Ativo-1.png`
   - **Substituir por**: `images/logo.png`
   - Substituir todas as ocorrências

## 📐 Especificações Recomendadas

### Formato
- **Preferencial**: PNG com fundo transparente
- **Alternativo**: SVG (melhor qualidade)
- **Evite**: JPG (não suporta transparência)

### Tamanho
- **Ideal**: 512x512px
- **Mínimo**: 256x256px
- **Máximo**: 1024x1024px

### Peso do Arquivo
- **Ideal**: 50-100KB
- **Máximo**: 200KB
- **Compressão**: Use [TinyPNG](https://tinypng.com) ou [Squoosh](https://squoosh.app)

### Formato da Logo
- ✅ Quadrada ou circular funciona melhor
- ✅ Fundo transparente para melhor integração
- ✅ Contraste adequado (logo deve ser visível no fundo escuro)
- ❌ Evite logos muito alongadas (horizontais ou verticais demais)

## 🎨 Dicas de Design

### Para Melhor Resultado:

1. **Espaço Respiratório**
   - Deixe margem interna na imagem
   - Logo não deve encostar nas bordas

2. **Cores**
   - A logo atual funciona bem no tema escuro do site
   - Se sua logo for muito clara, considere adicionar sombra

3. **Simplicidade**
   - Logos simples funcionam melhor em tamanhos pequenos
   - Detalhes muito finos podem não aparecer na navbar

4. **Teste em Diferentes Tamanhos**
   - Visualize em desktop e mobile
   - Certifique-se de que está legível em todos os tamanhos

## 🛠️ Personalização Avançada

### Alterar Tamanhos da Logo

Edite `css/styles.css`:

```css
/* Logo da Navbar */
.logo-icon {
    width: 45px;    /* Altere aqui */
    height: 45px;   /* Altere aqui */
}

/* Logo Hero (topo) */
.hero-logo-icon {
    width: 180px;   /* Altere aqui */
    height: 180px;  /* Altere aqui */
}

/* Logo Mobile */
@media (max-width: 640px) {
    .hero-logo-icon {
        width: 140px;   /* Altere aqui */
        height: 140px;  /* Altere aqui */
    }
    
    .logo-icon {
        width: 40px;    /* Altere aqui */
        height: 40px;   /* Altere aqui */
    }
}
```

### Desabilitar Animação Flutuante

Se não quiser a animação na logo do hero:

```css
.hero-logo-image {
    animation: none;  /* Adicione esta linha */
}
```

### Alterar Efeito Hover

```css
.logo:hover {
    transform: scale(1.1);  /* Aumentar zoom */
}

.logo:hover .logo-image {
    filter: drop-shadow(0 6px 12px rgba(91, 163, 208, 0.6));  /* Sombra mais forte */
}
```

## 🖼️ Converter Logo para Favicon

Se quiser um favicon customizado diferente da logo principal:

1. Acesse: https://favicon.io/favicon-converter/
2. Faça upload da sua logo
3. Baixe o pacote de favicons
4. Substitua no `<head>` do `index.html`:

```html
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
```

## ✅ Checklist de Verificação

Após alterar a logo, verifique:

- [ ] Logo aparece corretamente na navbar
- [ ] Logo aparece corretamente no hero (topo)
- [ ] Logo aparece corretamente no footer
- [ ] Favicon aparece na aba do navegador
- [ ] Logo está nítida em desktop
- [ ] Logo está nítida em mobile
- [ ] Logo tem bom contraste com o fundo
- [ ] Animações funcionam suavemente
- [ ] Efeito hover funciona na navbar

## 🚨 Problemas Comuns

### Logo não aparece
- Verifique se a URL está correta
- Teste a URL abrindo em nova aba do navegador
- Verifique o console (F12) por erros

### Logo aparece cortada
- Verifique o aspect ratio (proporção)
- Use `object-fit: contain` no CSS

### Logo muito pequena/grande
- Ajuste width e height no CSS
- Use valores em px para controle preciso

### Logo pixelada
- Use imagem em resolução maior
- Formato PNG ou SVG para melhor qualidade
- Evite fazer zoom excessivo no CSS

## 💡 Recomendação

Para melhor qualidade e flexibilidade, considere:

1. **Criar versão SVG da logo**
   - Escalável sem perda de qualidade
   - Peso de arquivo muito menor
   - Melhor para animações

2. **Manter backup local**
   - Sempre tenha cópia da logo no projeto
   - Não dependa 100% de serviços externos

3. **Otimizar para web**
   - Comprima a imagem antes de usar
   - Formato WebP para melhor compressão (se o navegador suportar)

---

**Última atualização**: Outubro 2025

**Logo atual hospedada em**: ImgBB

