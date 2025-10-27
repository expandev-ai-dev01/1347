# Sistema Gerador de Senhas Seguras

Sistema web que gera senhas aleatórias customizáveis com controle de tamanho (6-64 caracteres) e tipos de caracteres (minúsculas, maiúsculas, números, especiais). Inclui análise de força em tempo real com pontuação de 0-100 e oferece ações rápidas como copiar a senha.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Axios 1.7.7
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   └── router.tsx         # Configuração de rotas
├── core/                  # Componentes e lógica compartilhada
│   ├── components/        # Componentes genéricos
│   ├── lib/              # Configurações de bibliotecas
│   ├── types/            # Tipos globais
│   └── utils/            # Funções utilitárias
├── pages/                # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Home/             # Página inicial
│   └── NotFound/         # Página 404
└── assets/               # Recursos estáticos
    └── styles/           # Estilos globais
```

## Instalação

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Iniciar servidor de desenvolvimento
npm run dev
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build de produção
- `npm run lint` - Executa linter

## Variáveis de Ambiente

```env
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Recursos

- ✅ Geração de senhas aleatórias (6-64 caracteres)
- ✅ Customização de tipos de caracteres
- ✅ Análise de força em tempo real (0-100)
- ✅ Cópia rápida para área de transferência
- ✅ Interface responsiva para todos os dispositivos

## Arquitetura

O projeto segue uma arquitetura modular baseada em domínios:

- **app/**: Configuração central da aplicação
- **core/**: Componentes e lógica reutilizáveis
- **pages/**: Componentes de página para rotas
- **domain/**: Módulos de domínio (a serem implementados)

## Padrões de Código

- TypeScript strict mode habilitado
- Componentes funcionais com hooks
- Separação de responsabilidades (main.tsx, types.ts, variants.ts)
- Documentação JSDoc para todos os componentes
- Tailwind CSS para estilização
- React Query para gerenciamento de estado do servidor

## Próximos Passos

A estrutura base está pronta para receber a implementação dos recursos:

1. Implementar domínio de geração de senhas
2. Criar componentes de formulário de configuração
3. Implementar análise de força de senha
4. Adicionar funcionalidade de cópia
5. Integrar com API backend

## Licença

Private