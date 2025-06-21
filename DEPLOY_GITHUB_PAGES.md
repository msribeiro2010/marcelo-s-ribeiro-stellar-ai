# 🚀 Deploy para GitHub Pages

## ✅ Configurações já aplicadas:

### 1. **Vite Config** (`vite.config.ts`)
- ✅ Configurado para usar `/marcelo-s-ribeiro-stellar-ai/` como base em produção
- ✅ Mantém desenvolvimento local funcionando na raiz `/`

### 2. **GitHub Actions** (`.github/workflows/deploy.yml`)
- ✅ Workflow criado para deploy automático
- ✅ Usa Node.js 18 e actions mais recentes
- ✅ Faz build e deploy automaticamente quando você fizer push

## 📋 Passos para fazer deploy:

### **Passo 1: Fazer commit e push**
```bash
git add .
git commit -m "feat: configuração para GitHub Pages"
git push origin main
```

### **Passo 2: Configurar GitHub Pages no repositório**

1. **Vá para o repositório no GitHub**
2. **Clique em "Settings"** (Configurações)
3. **Role até "Pages"** no menu lateral
4. **Em "Source"**, selecione: **"GitHub Actions"**
   - ⚠️ **NÃO** selecione "Deploy from branch"
   - ✅ **SELECIONE** "GitHub Actions"

### **Passo 3: Aguardar o deploy**

1. **Vá para a aba "Actions"** no GitHub
2. **Veja o workflow executando**
3. **Aguarde ficar verde** ✅
4. **Sua URL será**: `https://SEU_USUARIO.github.io/marcelo-s-ribeiro-stellar-ai/`

## 🔧 Comandos úteis para testar antes do deploy:

```bash
# Testar build local
npm run build

# Testar preview (versão que irá para produção)
npm run preview

# Voltar ao desenvolvimento
npm run dev
```

## 📝 Estrutura dos arquivos criados/modificados:

```
marcelo-s-ribeiro-stellar-ai/
├── .github/
│   └── workflows/
│       └── deploy.yml          # ✅ Workflow de deploy
├── vite.config.ts              # ✅ Configurado para GitHub Pages
└── DEPLOY_GITHUB_PAGES.md      # 📖 Este guia
```

## ⚠️ Importante:

### **Se o nome do repositório for diferente:**
Se o repositório não se chamar exatamente `marcelo-s-ribeiro-stellar-ai`, você precisa:

1. **Editar `vite.config.ts`**:
   ```typescript
   base: command === 'build' ? '/NOME_DO_SEU_REPOSITORIO/' : '/',
   ```

2. **O nome deve ser exatamente igual ao nome do repositório no GitHub**

### **Branch principal:**
- ✅ Se sua branch principal for `main` → Está correto
- ⚠️ Se for `master` → Edite o arquivo `.github/workflows/deploy.yml` e mude `main` para `master`

## 🎯 URL final:

Após o deploy, sua aplicação estará disponível em:
**`https://SEU_USUARIO.github.io/marcelo-s-ribeiro-stellar-ai/`**

## 🔍 Troubleshooting:

### **Se der erro 404:**
1. Verifique se o nome do repositório está correto no `vite.config.ts`
2. Verifique se selecionou "GitHub Actions" como source no Settings > Pages

### **Se o workflow falhar:**
1. Vá na aba Actions e veja o erro
2. Geralmente é problema de dependências ou build

### **Se a página carregar mas ficar em branco:**
1. Verifique o console do navegador (F12)
2. Pode ser problema de paths dos assets

---

## 🚀 **Próximos passos:**

1. ✅ Fazer commit e push
2. ✅ Configurar GitHub Actions no repositório  
3. ✅ Aguardar deploy
4. ✅ Acessar sua URL! 