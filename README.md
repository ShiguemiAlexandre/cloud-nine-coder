## 📌 Informações do Projeto

**URL em produção:**  
https://shiguemi.storage.googleapis.com/index.html

Projeto SPA (Single Page Application) construído com **Vite + React + TypeScript**, utilizando **Tailwind CSS** e **shadcn-ui**, com deploy em **Google Cloud Storage (Static Website)**.

---

## 🛠️ Como editar o projeto

### 🔹 Usando sua IDE local (recomendado)

#### Pré-requisitos
- Node.js (recomendado usar nvm)
- npm
- Git
- gsutil configurado (Google Cloud SDK)

#### Passo a passo

```bash
# 1. Clonar o repositório
git clone <URL_DO_REPOSITORIO>

# 2. Entrar na pasta do projeto
cd <NOME_DO_PROJETO>

# 3. Instalar dependências
npm install

# 4. Rodar o ambiente de desenvolvimento
npm run dev
```

---
## 🚀 Deploy (Google Cloud Storage)

### Sempre que alterar algo no site, siga este passo a passo:

#### 1️⃣ Gerar o build
```bash
npm run build
```

#### 2️⃣ Limpar o bucket (remove arquivos antigos)
```bash
gsutil -m rm -r gs://shiguemi/**
```

#### 3️⃣ Enviar o novo build
```bash
gsutil -m cp -r dist/* gs://shiguemi/
```

#### 4️⃣ Acessar o site
https://shiguemi.storage.googleapis.com/index.html

### ⏱️ Cache (importante)

O Google Cloud Storage pode manter cache por alguns minutos.
Se a alteração não aparecer:
- Aguarde 1 a 5 minutos
- Use Ctrl + F5
- Teste em aba anônima
