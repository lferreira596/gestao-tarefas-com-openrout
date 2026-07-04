# Automação de Tarefas - App de Gerenciamento

Este projeto é uma automação que lê arquivos `.txt` e gera uma aplicação web de gerenciamento de tarefas.

## Estrutura do Projeto

```
task_app/
├── app/           # Páginas Next.js App Router
│   ├── api/       # API Routes
│   ├── task/      # Página principal de tarefas
│   └── globals.css
├── components/    # Componentes reutilizáveis
├── styles/        # Estilos adicionais
├── data/          # Arquivos de tarefas de exemplo
├── public/        # Arquivos estáticos
└── ...config files
```

## Funcionalidades

- ✅ Interface limpa e moderna (Next.js + Tailwind CSS)
- ✅ Importação de tarefas via arquivo `.txt`
- ✅ Adição manual de tarefas
- ✅ Design responsivo
- ✅ Pronto para deploy no Vercel

## Como Usar

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Deploy no Vercel

1. **Conectar ao GitHub:**
   ```bash
   # Inicializar repositório Git
   git init
   git add .
   git commit -m "Initial commit"
   
   # Criar repositório no GitHub (via CLI ou web)
   gh repo create task-app --push
   ```

2. **Deploy automático no Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Importe o repositório do GitHub
   - Clique em "Deploy"

3. **Configuração automática:**
   - O Vercel detecta automaticamente Next.js
   - Configurações já pré-configuradas em `next.config.js`

## Formato do Arquivo .txt

Cada linha do arquivo representa uma tarefa:

```
Comprar pão
Fechar o contrato
Devolver a mochila
```

## Tecnologias

- [Next.js 13+](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - CSS Utility-first
- [Vercel](https://vercel.com/) - Plataforma de deploy

## Conexão GitHub → Vercel

Após criar o repositório no GitHub:

1. Faça login no Vercel
2. "New Project" → "Import Git Repository"
3. Selecione seu repositório
4. O Vercel detecta Next.js automaticamente
5. Clique em "Deploy"