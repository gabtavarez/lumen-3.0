# 🎨 Loading Screen & Dark/Light Mode

## ✨ Funcionalidades Implementadas

### 🚀 **Loading Screen Animado**
- **Logo pulsante** com animação suave
- **Texto traduzido** em 4 idiomas
- **Spinner rotativo** com cores da marca
- **Transição elegante** de saída
- **Tempo configurável** (padrão: 1.5s)

### 🌓 **Dark/Light Mode Toggle**
- **Botão na navbar** com ícone dinâmico
- **Memória da preferência** (localStorage)
- **Transições suaves** entre temas
- **Cores otimizadas** para ambos os modos
- **Acessibilidade completa**

## 🎬 Loading Screen

### 🎯 **Elementos Visuais**
- **Logo**: 120x120px com animação de pulsação
- **Texto**: "Carregando..." traduzido
- **Spinner**: Círculo rotativo azul
- **Fundo**: Mesmo tema do site

### 🌐 **Traduções**
- ✅ **🇧🇷 Português**: "Carregando..."
- ✅ **🇺🇸 Inglês**: "Loading..."
- ✅ **🇩🇪 Alemão**: "Laden..."
- ✅ **🇪🇸 Espanhol**: "Cargando..."

### ⚙️ **Personalização**

#### Alterar Tempo de Carregamento
```javascript
// Em js/main.js, linha ~396
setTimeout(() => {
    // ... código ...
}, 1500); // Altere 1500 para o tempo desejado (ms)
```

#### Alterar Texto
```javascript
// Em js/translations.js
loading: {
    text: "Seu texto aqui"
}
```

#### Alterar Cores do Spinner
```css
/* Em css/styles.css */
.loading-spinner {
    border: 3px solid rgba(91, 163, 208, 0.2);
    border-top: 3px solid var(--primary-color); /* Cor do spinner */
}
```

## 🌓 Dark/Light Mode

### 🎨 **Cores dos Temas**

#### Dark Mode (Padrão)
```css
--dark-bg: #1a1d29;
--darker-bg: #13151f;
--card-bg: #252834;
--text-light: #e8eaed;
--text-gray: #a0a4b8;
```

#### Light Mode
```css
--dark-bg: #f8f9fa;
--darker-bg: #ffffff;
--card-bg: #ffffff;
--text-light: #2c3e50;
--text-gray: #6c757d;
```

### 🔧 **Funcionalidades**

#### Botão Toggle
- **Posição**: Navbar, ao lado do seletor de idiomas
- **Ícone**: 🌙 (dark) / ☀️ (light)
- **Comportamento**: Clique alterna entre temas
- **Memória**: Salva preferência no localStorage

#### Transições
- **Duração**: 300ms
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
- **Elementos**: Background, texto, bordas, sombras

### ⚙️ **Personalização**

#### Alterar Cores do Light Mode
```css
/* Em css/styles.css */
[data-theme="light"] {
    --dark-bg: #sua-cor-aqui;
    --darker-bg: #sua-cor-aqui;
    --card-bg: #sua-cor-aqui;
    --text-light: #sua-cor-aqui;
    --text-gray: #sua-cor-aqui;
}
```

#### Desabilitar Light Mode
1. Abra `index.html`
2. Remova o botão de tema:
```html
<!-- Remover esta seção -->
<div class="theme-toggle">
    <button class="theme-btn" id="themeToggle">
        <i class="fas fa-moon" id="themeIcon"></i>
    </button>
</div>
```

#### Adicionar Mais Temas
```css
/* Exemplo: Modo Azul */
[data-theme="blue"] {
    --primary-color: #007bff;
    --dark-bg: #001529;
    --darker-bg: #000c17;
    /* ... outras variáveis */
}
```

## 📱 Responsividade

### Loading Screen
- **Desktop**: Logo 120px, texto 1.2rem
- **Tablet**: Logo 100px, texto 1rem
- **Mobile**: Logo 80px, texto 0.9rem

### Theme Toggle
- **Desktop**: Botão 40x40px
- **Tablet**: Botão 36x36px
- **Mobile**: Botão 32x32px

## 🎯 **Impacto na UX**

### Loading Screen
- ✅ **Profissionalismo** - Primeira impressão impactante
- ✅ **Reduz bounce rate** - Usuários aguardam carregamento
- ✅ **Branding** - Logo sempre visível
- ✅ **Feedback visual** - Usuário sabe que está carregando

### Dark/Light Mode
- ✅ **Acessibilidade** - Preferência do usuário
- ✅ **Reduz fadiga ocular** - Especialmente em ambientes escuros
- ✅ **Modernidade** - Padrão atual de UX
- ✅ **Flexibilidade** - Adapta-se ao contexto

## 🔧 **Funcionalidades Técnicas**

### Loading Screen
- ✅ **Z-index alto** (9999) - Sempre no topo
- ✅ **Transições CSS** - Performance otimizada
- ✅ **Event listeners** - Responde ao carregamento
- ✅ **Cleanup automático** - Remove após uso

### Theme Toggle
- ✅ **localStorage** - Persiste preferência
- ✅ **CSS Variables** - Mudança global
- ✅ **Acessibilidade** - aria-label
- ✅ **Performance** - Transições GPU

## 📊 **Métricas Recomendadas**

### Loading Screen
- Tempo de carregamento real
- Taxa de abandono durante loading
- Engajamento pós-loading

### Theme Toggle
- Uso do modo claro vs escuro
- Preferência por dispositivo
- Horários de uso de cada tema

## 🚨 **Solução de Problemas**

### Loading Screen não desaparece
```javascript
// Verificar se o evento load está sendo disparado
window.addEventListener('load', () => {
    console.log('Page loaded'); // Debug
});
```

### Theme não persiste
```javascript
// Verificar localStorage
console.log(localStorage.getItem('preferred-theme'));
```

### Cores não mudam
```css
/* Verificar se as variáveis estão definidas */
:root {
    --primary-color: #5ba3d0; /* Deve existir */
}
```

### Transições travadas
```css
/* Verificar se transition está aplicada */
* {
    transition: all 0.3s ease; /* Fallback */
}
```

## 💡 **Dicas Avançadas**

### Loading Screen com Progress Bar
```html
<div class="loading-progress">
    <div class="progress-bar" id="progressBar"></div>
</div>
```

### Theme baseado no Sistema
```javascript
// Detectar preferência do sistema
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDark.matches) {
    applyTheme('dark');
}
```

### Loading Screen com Contador
```javascript
let progress = 0;
const interval = setInterval(() => {
    progress += 10;
    document.getElementById('progressBar').style.width = progress + '%';
    if (progress >= 100) clearInterval(interval);
}, 100);
```

### Múltiplos Temas
```javascript
const themes = ['dark', 'light', 'blue', 'green'];
let currentThemeIndex = 0;

function cycleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    applyTheme(themes[currentThemeIndex]);
}
```

## 🎨 **Customizações Visuais**

### Loading Screen Personalizado
```css
.loading-screen {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.loading-logo {
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
}
```

### Theme Toggle Animado
```css
.theme-btn {
    position: relative;
    overflow: hidden;
}

.theme-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: var(--primary-color);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s;
}

.theme-btn:active::before {
    width: 100px;
    height: 100px;
}
```

---

**Última atualização**: Outubro 2025

**Status**: ✅ Implementado e funcionando

**Próximos passos**: Monitorar uso dos temas e otimizar baseado no feedback
