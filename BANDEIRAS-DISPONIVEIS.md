# 🏴 Bandeiras Disponíveis para Idiomas

Este guia lista as bandeiras (emojis) disponíveis para usar no seletor de idiomas.

## 🌍 Bandeiras Já Implementadas

| Bandeira | Código | País | Idioma | Já no Site |
|----------|--------|------|--------|------------|
| 🇧🇷 | `🇧🇷` | Brasil | Português | ✅ SIM |
| 🇺🇸 | `🇺🇸` | EUA | English | ✅ SIM |
| 🇩🇪 | `🇩🇪` | Alemanha | Deutsch | ✅ SIM |
| 🇪🇸 | `🇪🇸` | Espanha | Español | ✅ SIM |

## 🗺️ Outras Bandeiras Disponíveis

### Europa
| Bandeira | Código | País | Idioma |
|----------|--------|------|--------|
| 🇬🇧 | `🇬🇧` | Reino Unido | English |
| 🇫🇷 | `🇫🇷` | França | Français |
| 🇮🇹 | `🇮🇹` | Itália | Italiano |
| 🇵🇹 | `🇵🇹` | Portugal | Português |
| 🇳🇱 | `🇳🇱` | Holanda | Nederlands |
| 🇸🇪 | `🇸🇪` | Suécia | Svenska |
| 🇳🇴 | `🇳🇴` | Noruega | Norsk |
| 🇩🇰 | `🇩🇰` | Dinamarca | Dansk |
| 🇫🇮 | `🇫🇮` | Finlândia | Suomi |
| 🇵🇱 | `🇵🇱` | Polônia | Polski |
| 🇨🇿 | `🇨🇿` | República Checa | Čeština |
| 🇷🇺 | `🇷🇺` | Rússia | Русский |
| 🇬🇷 | `🇬🇷` | Grécia | Ελληνικά |
| 🇹🇷 | `🇹🇷` | Turquia | Türkçe |

### Américas
| Bandeira | Código | País | Idioma |
|----------|--------|------|--------|
| 🇨🇦 | `🇨🇦` | Canadá | English/Français |
| 🇲🇽 | `🇲🇽` | México | Español |
| 🇦🇷 | `🇦🇷` | Argentina | Español |
| 🇨🇱 | `🇨🇱` | Chile | Español |
| 🇨🇴 | `🇨🇴` | Colômbia | Español |
| 🇵🇪 | `🇵🇪` | Peru | Español |

### Ásia
| Bandeira | Código | País | Idioma |
|----------|--------|------|--------|
| 🇯🇵 | `🇯🇵` | Japão | 日本語 |
| 🇰🇷 | `🇰🇷` | Coreia do Sul | 한국어 |
| 🇨🇳 | `🇨🇳` | China | 中文 |
| 🇮🇳 | `🇮🇳` | Índia | हिन्दी |
| 🇹🇭 | `🇹🇭` | Tailândia | ไทย |
| 🇻🇳 | `🇻🇳` | Vietnã | Tiếng Việt |
| 🇮🇩 | `🇮🇩` | Indonésia | Bahasa |

### Oriente Médio
| Bandeira | Código | País | Idioma |
|----------|--------|------|--------|
| 🇸🇦 | `🇸🇦` | Arábia Saudita | العربية |
| 🇦🇪 | `🇦🇪` | Emirados Árabes | العربية |
| 🇮🇱 | `🇮🇱` | Israel | עברית |

### África
| Bandeira | Código | País | Idioma |
|----------|--------|------|--------|
| 🇿🇦 | `🇿🇦` | África do Sul | English/Afrikaans |

### Oceania
| Bandeira | Código | País | Idioma |
|----------|--------|------|--------|
| 🇦🇺 | `🇦🇺` | Austrália | English |
| 🇳🇿 | `🇳🇿` | Nova Zelândia | English |

## 📝 Como Usar

### Copiar e Colar
Você pode copiar o emoji diretamente desta tabela e colar no código:

```html
<span class="lang-flag">🇫🇷</span>
```

### Usando Código Unicode
Alternativamente, você pode usar o código Unicode:

```html
<span class="lang-flag">&#x1F1EB;&#x1F1F7;</span> <!-- 🇫🇷 -->
```

## 🛠️ Como Adicionar um Novo Idioma

### Exemplo: Adicionar Francês

**1. Em `index.html`:**
```html
<button class="lang-option" data-lang="fr">
    <span class="lang-flag">🇫🇷</span>
    <span class="lang-name">Français</span>
</button>
```

**2. Em `js/main.js`:**
```javascript
const languageData = {
    pt: { flag: '🇧🇷', name: 'Português', code: 'PT' },
    en: { flag: '🇺🇸', name: 'English', code: 'EN' },
    de: { flag: '🇩🇪', name: 'Deutsch', code: 'DE' },
    es: { flag: '🇪🇸', name: 'Español', code: 'ES' },
    fr: { flag: '🇫🇷', name: 'Français', code: 'FR' }  // NOVO
};
```

**3. Em `js/translations.js`:**
```javascript
const translations = {
    pt: { /* ... */ },
    en: { /* ... */ },
    de: { /* ... */ },
    es: { /* ... */ },
    fr: {  // NOVO
        nav: {
            home: "Accueil",
            portfolio: "Portfolio",
            services: "Services",
            about: "À propos",
            workflow: "Flux de travail",
            guarantees: "Garanties"
        },
        hero: {
            subtitle: "STUDIO DE DENTISTERIE NUMÉRIQUE",
            title: "Design",
            description: "Créer des sourires et des prothèses dentaires avec des solutions de haute précision",
            cta: "Demander un devis"
        }
        // ... resto das traduções
    }
};
```

## 💡 Dicas

### ✅ Boas Práticas

1. **Use a bandeira mais reconhecível**
   - Para Inglês: 🇺🇸 (EUA) ou 🇬🇧 (Reino Unido)
   - Para Espanhol: 🇪🇸 (Espanha) geralmente é padrão
   - Para Português: 🇧🇷 (Brasil) ou 🇵🇹 (Portugal)

2. **Mantenha consistência**
   - Se escolher usar EUA para inglês, mantenha em todo o site

3. **Ordem alfabética ou por importância**
   - Coloque o idioma principal primeiro
   - Depois por ordem de relevância para seu público

### ❌ Evite

1. **Muitos idiomas sem tradução**
   - Só adicione idiomas que você realmente suporta

2. **Bandeiras controversas**
   - Alguns países têm questões políticas sensíveis

3. **Idiomas sem demanda**
   - Foque nos idiomas do seu mercado-alvo

## 🌐 Sugestões por Mercado

### Mercado Global Odontológico
Recomendado:
- 🇧🇷 Português (Brasil - grande mercado)
- 🇺🇸 English (internacional)
- 🇩🇪 Deutsch (Europa Central)
- 🇪🇸 Español (América Latina e Espanha)
- 🇮🇹 Italiano (Itália tem forte mercado dental)

### Mercado Europeu
Recomendado:
- 🇬🇧 English
- 🇩🇪 Deutsch
- 🇫🇷 Français
- 🇮🇹 Italiano
- 🇪🇸 Español

### Mercado Americano
Recomendado:
- 🇺🇸 English
- 🇪🇸 Español
- 🇧🇷 Português

## 🔧 Teste de Compatibilidade

A maioria dos navegadores modernos suporta emojis de bandeiras:
- ✅ Chrome 70+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+

**Nota:** Alguns sistemas operacionais antigos podem não exibir todas as bandeiras corretamente.

## 📱 Alternativas

Se preferir não usar emojis, você pode:

1. **Usar ícones SVG**
   - Biblioteca: [FlagKit](https://github.com/madebybowtie/FlagKit)
   - Biblioteca: [Flag Icons](https://flagicons.lipis.dev/)

2. **Usar apenas texto**
   - PT, EN, DE, ES (códigos ISO)

3. **Imagens PNG**
   - Baixe bandeiras de sites como [Flaticon](https://www.flaticon.com/packs/countrys-flags)

## 🎨 Customização Visual

Se quiser mudar o tamanho da bandeira, edite em `css/styles.css`:

```css
.lang-flag {
    font-size: 20px;  /* Tamanho da bandeira */
    line-height: 1;
}
```

---

**Última atualização:** Outubro 2025

**Suporte:** Todas as bandeiras listadas são emojis Unicode padrão

