# 🔥 Avivamento Diário - Fan Page

Uma Fan Page moderna e responsiva para o ebook "Avivamento Diário - Do Lodo ao Avivamento" do autor Fernando Borges de Souza.

## 📋 Características

- ✅ Design moderno e responsivo
- ✅ Otimizado para SEO
- ✅ Animações suaves e interativas
- ✅ Botão flutuante do WhatsApp
- ✅ Formulário de contato funcional
- ✅ Links para todas as plataformas de venda
- ✅ Compatível com dispositivos móveis
- ✅ Carregamento rápido
- ✅ Acessibilidade melhorada

## 🚀 Como Hospedar no GitHub Pages

### Passo 1: Criar um repositório no GitHub

1. Acesse [GitHub.com](https://github.com)
2. Clique em "New repository"
3. Nome do repositório: `avivamento-diario`
4. Deixe público (Public)
5. Clique em "Create repository"

### Passo 2: Fazer upload dos arquivos

1. No seu repositório criado, clique em "uploading an existing file"
2. Arraste todos os arquivos do projeto:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Clique em "Commit changes"

### Passo 3: Ativar GitHub Pages

1. Vá para "Settings" do repositório
2. Role até "Pages" no menu lateral
3. Em "Source", selecione "Deploy from a branch"
4. Em "Branch", selecione "main" e clique em "Save"
5. Aguarde alguns minutos para o deploy

### Passo 4: Acessar sua Fan Page

Sua Fan Page estará disponível em:
`https://[seu-usuario].github.io/avivamento-diario`

## 📱 Personalização

### Alterar número do WhatsApp

No arquivo `index.html`, procure por:
```html
<a href="https://wa.me/5511940244099" target="_blank">
```

**Número atual:** `5511940244099` (11 94024-4099)

Para alterar, substitua `5511940244099` pelo seu número do WhatsApp (formato: código do país + DDD + número).

**Exemplo:** Para (11) 99999-9999 → `5511999999999`

### Alterar email de contato

No arquivo `index.html`, procure por:
```html
<p>fernando@avivamentodiario.com</p>
```

Substitua pelo seu email real.

### Alterar links de redes sociais

No arquivo `index.html`, procure por:
```html
<div class="social-links">
    <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
    <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
</div>
```

Substitua os `href="#"` pelos links das suas redes sociais.

## 🎨 Personalização de Cores

Para alterar as cores da página, edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-color: #8B4513;      /* Cor principal */
    --secondary-color: #D2691E;    /* Cor secundária */
    --accent-color: #FF6B35;       /* Cor de destaque */
    /* ... outras cores */
}
```

## 📊 Analytics e Tracking

O arquivo `script.js` inclui funções para tracking de eventos. Para integrar com Google Analytics:

1. Crie uma conta no [Google Analytics](https://analytics.google.com)
2. Obtenha seu ID de rastreamento
3. Adicione o código do Google Analytics no `<head>` do `index.html`:

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

## 🔧 Funcionalidades Incluídas

- **Navegação suave**: Scroll suave entre seções
- **Header responsivo**: Menu que se adapta a dispositivos móveis
- **Animações**: Elementos animam conforme aparecem na tela
- **Formulário de contato**: Simula envio de mensagens
- **Botão WhatsApp flutuante**: Acesso rápido ao contato
- **Tooltips**: Informações adicionais nos preços
- **Contador de caracteres**: No formulário de contato
- **Lazy loading**: Para imagens (quando adicionadas)
- **PWA ready**: Preparado para Progressive Web App

## 📱 Responsividade

A página é totalmente responsiva e funciona perfeitamente em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🚀 Performance

- Otimizado para carregamento rápido
- Fontes carregadas via CDN
- CSS e JavaScript minificados
- Imagens otimizadas (quando adicionadas)

## 📞 Suporte

Para dúvidas ou suporte:
- WhatsApp: (11) 94024-4099
- Email: [Seu email]

## 📄 Licença

Este projeto é de uso livre para o ebook "Avivamento Diário".

---

**Desenvolvido com ❤️ para transformar vidas através da Palavra de Deus** 