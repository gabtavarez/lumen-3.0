# 🖼️ Como Usar Imagens Locais no Portfólio

Este guia explica como adicionar suas próprias imagens ao portfólio do site.

## 📁 Estrutura de Pastas Recomendada

Crie a seguinte estrutura de pastas:

```
lumen-cad/
├── images/
│   ├── portfolio/        ← Coloque suas imagens aqui
│   │   ├── projeto-1.jpg
│   │   ├── projeto-2.jpg
│   │   └── projeto-3.jpg
│   └── logo.png
├── css/
├── js/
└── index.html
```

## 🎨 Passo a Passo

### 1. Prepare suas Imagens

**Especificações recomendadas:**
- **Formato**: JPG ou WebP (melhor compressão)
- **Tamanho**: 1200px de largura × 900px de altura (proporção 4:3)
- **Peso**: Máximo 200KB por imagem (use compressão)

**Ferramentas para otimizar:**
- Online: https://tinypng.com
- Online: https://squoosh.app
- Desktop: IrfanView, GIMP, Photoshop

### 2. Organize suas Imagens

1. Crie a pasta `images/portfolio/` na raiz do projeto
2. Salve suas imagens com nomes descritivos:
   - ✅ BOM: `coroa-anterior-ceramica.jpg`
   - ✅ BOM: `ponte-3-elementos.jpg`
   - ❌ RUIM: `IMG_0001.jpg`
   - ❌ RUIM: `foto.jpg`

### 3. Adicione no Portfolio.json

Abra `data/portfolio.json` e adicione:

```json
{
  "items": [
    {
      "id": 1,
      "titleKey": "portfolio.meu_projeto.title",
      "descriptionKey": "portfolio.meu_projeto.description",
      "image": "images/portfolio/coroa-anterior-ceramica.jpg",
      "category": "anterior"
    },
    {
      "id": 2,
      "titleKey": "portfolio.ponte.title",
      "descriptionKey": "portfolio.ponte.description",
      "image": "images/portfolio/ponte-3-elementos.jpg",
      "category": "bridges"
    }
  ]
}
```

### 4. Adicione as Traduções

Em `js/translations.js`, adicione as traduções:

```javascript
pt: {
  portfolio: {
    meu_projeto: {
      title: "Coroa Anterior em Cerâmica",
      description: "Restauração estética em cerâmica e.max com anatomia perfeita e translucidez natural."
    },
    ponte: {
      title: "Ponte de 3 Elementos",
      description: "Prótese fixa posterior com distribuição oclusal ideal e conectores dimensionados."
    }
  }
},
en: {
  portfolio: {
    meu_projeto: {
      title: "Anterior Ceramic Crown",
      description: "Aesthetic restoration in e.max ceramic with perfect anatomy and natural translucency."
    },
    ponte: {
      title: "3-Unit Bridge",
      description: "Posterior fixed prosthesis with ideal occlusal distribution and sized connectors."
    }
  }
}
```

## 📸 Exemplo Completo

### Estrutura de Arquivos:
```
images/
└── portfolio/
    ├── restauracao-anterior-1.jpg
    ├── restauracao-anterior-2.jpg
    ├── ponte-fixa.jpg
    ├── implante-unitario.jpg
    └── arcada-completa.jpg
```

### Em portfolio.json:
```json
{
  "items": [
    {
      "id": 1,
      "titleKey": "portfolio.rest_ant_1.title",
      "descriptionKey": "portfolio.rest_ant_1.description",
      "image": "images/portfolio/restauracao-anterior-1.jpg",
      "category": "anterior"
    },
    {
      "id": 2,
      "titleKey": "portfolio.rest_ant_2.title",
      "descriptionKey": "portfolio.rest_ant_2.description",
      "image": "images/portfolio/restauracao-anterior-2.jpg",
      "category": "anterior"
    },
    {
      "id": 3,
      "titleKey": "portfolio.ponte.title",
      "descriptionKey": "portfolio.ponte.description",
      "image": "images/portfolio/ponte-fixa.jpg",
      "category": "bridges"
    }
  ]
}
```

## 🌐 Usando Imagens de URLs Externas

Se preferir usar imagens hospedadas online (Imgur, Cloudinary, etc.):

```json
{
  "id": 1,
  "titleKey": "portfolio.projeto.title",
  "descriptionKey": "portfolio.projeto.description",
  "image": "https://i.imgur.com/SUA-IMAGEM.jpg",
  "category": "anterior"
}
```

**Vantagens:**
- ✅ Não aumenta o tamanho do projeto
- ✅ CDN global (carregamento mais rápido)

**Desvantagens:**
- ❌ Depende de serviço externo
- ❌ Link pode quebrar se serviço sair do ar

## 🎯 Dicas Importantes

### ✅ Boas Práticas

1. **Sempre otimize imagens antes de usar**
   - Imagens grandes = site lento
   - Use TinyPNG ou Squoosh

2. **Use nomes descritivos**
   - Facilita organização
   - Melhor para SEO

3. **Mantenha proporções consistentes**
   - Todas as imagens 4:3 ou 16:9
   - Visual mais profissional

4. **Faça backup das imagens originais**
   - Guarde versões em alta resolução
   - Nunca se sabe quando vai precisar

### ❌ Evite

1. **Imagens muito pesadas**
   - Máximo 200KB por imagem
   - Comprima sempre!

2. **Formatos inadequados**
   - Evite BMP, TIFF
   - Use JPG ou WebP

3. **Nomes genéricos**
   - IMG_001.jpg ❌
   - coroa-ceramica-caso-1.jpg ✅

4. **Resolução muito alta**
   - Não precisa de 4000px
   - 1200px é suficiente

## 🔧 Solução de Problemas

### Imagem não aparece

**Problema**: Imagem não carrega no site

**Soluções**:
1. Verifique o caminho no portfolio.json
2. Verifique se o arquivo existe na pasta
3. Verifique maiúsculas/minúsculas (case-sensitive)
4. Abra o Console (F12) e veja erros

### Imagem aparece quebrada

**Problema**: Ícone de imagem quebrada

**Soluções**:
1. Verifique se o formato é suportado (JPG, PNG, WebP)
2. Abra a imagem em outro programa para ver se está corrompida
3. Reexporte a imagem

### Imagem demora para carregar

**Problema**: Site fica lento

**Soluções**:
1. Comprima a imagem em TinyPNG.com
2. Reduza a resolução para 1200px
3. Converta para formato WebP

## 📱 Teste em Diferentes Dispositivos

Após adicionar imagens, teste em:
- 💻 Desktop
- 📱 Celular
- 🖥️ Tablet

Pressione F12 no navegador e use o modo responsivo.

## 🎨 Edição Básica de Imagens

### Redimensionar (online)
1. Acesse: https://www.iloveimg.com/resize-image
2. Faça upload da imagem
3. Defina largura: 1200px (altura ajusta automaticamente)
4. Baixe a imagem redimensionada

### Comprimir (online)
1. Acesse: https://tinypng.com
2. Arraste suas imagens
3. Aguarde a compressão
4. Baixe as imagens otimizadas

### Ambos em um (online)
1. Acesse: https://squoosh.app
2. Arraste a imagem
3. Redimensione e comprima
4. Compare qualidade
5. Baixe

## 📊 Quantas Imagens Adicionar?

**Recomendações**:
- Mínimo: 5-6 imagens (para parecer estabelecido)
- Ideal: 10-15 imagens (variedade boa)
- Máximo: 20-30 imagens (não exagerar)

**Categorias sugeridas**:
- Restaurações anteriores: 3-5 imagens
- Próteses fixas: 3-5 imagens
- Restaurações posteriores: 2-4 imagens
- Implantes: 2-4 imagens
- Encerramentos: 2-3 imagens

## 🚀 Checklist Final

Antes de publicar, verifique:

- [ ] Todas as imagens estão otimizadas (< 200KB)
- [ ] Todas as imagens têm a mesma proporção
- [ ] Nomes dos arquivos são descritivos
- [ ] Caminhos no portfolio.json estão corretos
- [ ] Traduções existem em todos os 4 idiomas
- [ ] Testou o site em desktop e mobile
- [ ] Modal abre corretamente ao clicar
- [ ] Navegação entre imagens funciona

---

**Dica Final**: Comece com poucas imagens e vá adicionando aos poucos. É melhor ter 5 imagens excelentes do que 20 medianas!

