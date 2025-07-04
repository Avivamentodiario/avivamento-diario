# 🎨 Guia de Personalização - Avivamento Diário

## 📱 Informações de Contato

### WhatsApp
**Localização no código:** `index.html` (linhas 280, 320, 380)
```html
<a href="https://wa.me/5511940244099" target="_blank">
```
**Número atual:** `5511940244099` (11 94024-4099)

**Para alterar:** Substitua pelo seu número no formato:
- Código do país (55 para Brasil)
- DDD (sem o 0)
- Número do telefone

**Exemplo:** Para (11) 99999-9999 → `5511999999999`

### Email
**Localização no código:** `index.html` (linha 285)
```html
<p>fernando@avivamentodiario.com</p>
```
**Substitua:** Pelo seu email real

## 🔗 Links de Redes Sociais

**Localização no código:** `index.html` (linhas 390-394)
```html
<div class="social-links">
    <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
    <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
</div>
```

**Substitua os `href="#"` pelos links reais:**
- Facebook: `https://facebook.com/seu-perfil`
- Instagram: `https://instagram.com/seu-perfil`
- YouTube: `https://youtube.com/@seu-canal`

## 🎨 Cores do Site

**Localização no código:** `styles.css` (linhas 6-16)
```css
:root {
    --primary-color: #8B4513;      /* Marrom escuro */
    --secondary-color: #D2691E;    /* Marrom claro */
    --accent-color: #FF6B35;       /* Laranja */
    --text-dark: #2C3E50;          /* Azul escuro */
    --text-light: #7F8C8D;         /* Cinza */
    --white: #FFFFFF;              /* Branco */
    --light-bg: #F8F9FA;           /* Cinza claro */
}
```

**Sugestões de paletas de cores:**

### Paleta Espiritual (Atual)
```css
--primary-color: #8B4513;
--secondary-color: #D2691E;
--accent-color: #FF6B35;
```

### Paleta Azul Celestial
```css
--primary-color: #1E3A8A;
--secondary-color: #3B82F6;
--accent-color: #06B6D4;
```

### Paleta Verde Esperança
```css
--primary-color: #166534;
--secondary-color: #16A34A;
--accent-color: #22C55E;
```

### Paleta Roxo Real
```css
--primary-color: #581C87;
--secondary-color: #7C3AED;
--accent-color: #A855F7;
```

## 📊 Preços dos Produtos

**Localização no código:** `index.html` (linhas 200-220)

### Ebook Digital
```html
<span class="amount">47</span>
<span class="period">,00</span>
```

### Livro Físico
```html
<span class="amount">67</span>
<span class="period">,00</span>
```

## 🖼️ Imagens e Ícones

### Favicon e Ícones PWA
Crie ícones nos seguintes tamanhos e salve na pasta `assets/`:
- `favicon.ico` (16x16, 32x32)
- `favicon-16x16.png` (16x16)
- `favicon-32x32.png` (32x32)
- `icon-150x150.png` (150x150)
- `icon-152x152.png` (152x152)
- `icon-167x167.png` (167x167)
- `icon-180x180.png` (180x180)
- `icon-192x192.png` (192x192)
- `icon-512x512.png` (512x512)

### Imagem para Redes Sociais
Crie uma imagem `og-image.jpg` (1200x630px) para compartilhamento nas redes sociais.

## 📝 Conteúdo Textual

### Título Principal
**Localização:** `index.html` (linha 60)
```html
<h1 class="hero-title">
    Avivamento Diário
    <span class="highlight">Do Lodo ao Avivamento</span>
</h1>
```

### Subtítulo
**Localização:** `index.html` (linha 65)
```html
<p class="hero-subtitle">
    Ebook para avivar a alma todos os dias...
</p>
```

### Sobre o Autor
**Localização:** `index.html` (linhas 150-160)
```html
<h3>Fernando Borges de Souza</h3>
<p class="author-title">Administrador de Empresas, de alma e de Vidas</p>
<p class="author-bio">Fernando Borges de Souza é um eterno aprendiz...</p>
```

## 🔧 Funcionalidades Avançadas

### Ativar Contador Regressivo
**Localização:** `script.js` (linha 180)
```javascript
// Descomente a linha abaixo para ativar o contador regressivo
// createCountdown();
```

### Google Analytics
**Adicione no `<head>` do `index.html`:**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel
**Adicione no `<head>` do `index.html`:**
```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=SEU_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
```

## 📱 Teste de Responsividade

Após as alterações, teste em:
- **Desktop:** 1920x1080px
- **Tablet:** 768x1024px
- **Mobile:** 375x667px

## 🚀 Deploy

1. Faça commit das alterações
2. Push para o GitHub
3. Aguarde o deploy automático
4. Teste a página online

## 📞 Suporte

Para dúvidas sobre personalização:
- Verifique o console do navegador (F12) para erros
- Teste em diferentes dispositivos
- Valide o HTML em: https://validator.w3.org/
- Teste a performance em: https://pagespeed.web.dev/ 