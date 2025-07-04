# 🚀 Guia de Deploy - Avivamento Diário

## 📋 Pré-requisitos

- Conta no GitHub
- Navegador web moderno
- Conhecimento básico de Git (opcional)

## 🎯 Método 1: Deploy Manual (Mais Fácil)

### Passo 1: Criar Repositório no GitHub

1. Acesse [GitHub.com](https://github.com) e faça login
2. Clique no botão **"New"** ou **"+"** → **"New repository"**
3. Configure o repositório:
   - **Repository name:** `avivamento-diario`
   - **Description:** Fan Page do ebook Avivamento Diário
   - **Visibility:** Public ✅
   - **Initialize this repository with:** Deixe desmarcado
4. Clique em **"Create repository"**

### Passo 2: Upload dos Arquivos

1. No repositório criado, clique em **"uploading an existing file"**
2. Arraste todos os arquivos do projeto para a área de upload:
   ```
   📁 avivamento-diario/
   ├── 📄 index.html
   ├── 📄 styles.css
   ├── 📄 script.js
   ├── 📄 manifest.json
   ├── 📄 sw.js
   ├── 📄 browserconfig.xml
   ├── 📄 README.md
   ├── 📄 PERSONALIZACAO.md
   ├── 📄 DEPLOY.md
   ├── 📄 .gitignore
   └── 📁 .github/
       └── 📁 workflows/
           └── 📄 deploy.yml
   ```
3. Clique em **"Commit changes"**

### Passo 3: Ativar GitHub Pages

1. Vá para **"Settings"** do repositório
2. No menu lateral, clique em **"Pages"**
3. Em **"Source"**, selecione **"Deploy from a branch"**
4. Em **"Branch"**, selecione **"main"** e clique em **"Save"**
5. Aguarde alguns minutos para o deploy

### Passo 4: Acessar sua Fan Page

Sua Fan Page estará disponível em:
```
https://[seu-usuario].github.io/avivamento-diario
```

**Exemplo:** Se seu usuário for `fernandobs86`, a URL será:
```
https://fernandobs86.github.io/avivamento-diario
```

## 🎯 Método 2: Deploy via Git (Avançado)

### Passo 1: Configurar Git Local

```bash
# Clone o repositório
git clone https://github.com/[seu-usuario]/avivamento-diario.git
cd avivamento-diario

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "Primeira versão da Fan Page Avivamento Diário"

# Push para GitHub
git push origin main
```

### Passo 2: Ativar GitHub Pages

Siga os mesmos passos do Método 1, Passo 3.

## 🔧 Configurações Adicionais

### Personalizar Domínio (Opcional)

1. Compre um domínio (ex: `avivamentodiario.com`)
2. Em **Settings** → **Pages**, adicione o domínio em **"Custom domain"**
3. Configure o DNS do seu provedor apontando para:
   ```
   [seu-usuario].github.io
   ```

### Configurar HTTPS

O GitHub Pages já fornece HTTPS automaticamente.

## 📱 Teste da Fan Page

### Checklist de Teste

- [ ] Página carrega corretamente
- [ ] Design responsivo em mobile
- [ ] Links de compra funcionam
- [ ] Botão WhatsApp funciona
- [ ] Formulário de contato funciona
- [ ] Navegação suave entre seções
- [ ] Animações funcionam
- [ ] SEO meta tags estão corretas

### Teste em Diferentes Dispositivos

- **Desktop:** Chrome, Firefox, Safari, Edge
- **Mobile:** iOS Safari, Chrome Mobile
- **Tablet:** iPad, Android Tablet

## 🚨 Solução de Problemas

### Página não carrega
- Verifique se o repositório é público
- Aguarde alguns minutos após ativar GitHub Pages
- Verifique se o arquivo `index.html` está na raiz

### Links não funcionam
- Verifique se os URLs estão corretos
- Teste em modo incógnito
- Verifique o console do navegador (F12)

### Design quebrado
- Verifique se todos os arquivos CSS foram enviados
- Limpe o cache do navegador
- Verifique se as fontes estão carregando

### WhatsApp não funciona
- Verifique se o número está no formato correto
- Teste o link diretamente: `https://wa.me/5511940244099`

## 📊 Analytics e Monitoramento

### Google Analytics
1. Crie conta no [Google Analytics](https://analytics.google.com)
2. Obtenha o ID de rastreamento
3. Adicione o código no `<head>` do `index.html`

### Google Search Console
1. Adicione sua propriedade no [Search Console](https://search.google.com/search-console)
2. Verifique a propriedade via HTML tag
3. Monitore o desempenho nos motores de busca

## 🔄 Atualizações

### Para atualizar a página:

**Método Manual:**
1. Edite os arquivos localmente
2. Faça upload novamente no GitHub

**Método Git:**
```bash
git add .
git commit -m "Atualização da Fan Page"
git push origin main
```

## 📞 Suporte

### Recursos Úteis
- [GitHub Pages Documentation](https://pages.github.com/)
- [GitHub Help](https://help.github.com/)
- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)

### Contato
Para suporte técnico:
- Email: [seu-email]
- WhatsApp: (11) 94024-4099

---

**🎉 Parabéns! Sua Fan Page está no ar e pronta para transformar vidas!** 