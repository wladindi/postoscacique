# Arquitetura

## Visao geral

O projeto esta estruturado como monorepo para separar aplicacoes e pacotes compartilhados sem complicar o desenvolvimento local.

```text
POSTOS CACIQUE/
  apps/
    web/
      public/assets/          # Logos, fotos e imagens originais aprovadas
      src/app/                # Rotas, paginas e APIs Next.js
      src/components/         # Componentes reutilizaveis
      src/features/           # Dominios da aplicacao
      src/lib/                # Utilitarios de backend/frontend
  docs/
    ARCHITECTURE.md
  TASKS.md
```

## Front-end

- Next.js App Router com React e TypeScript.
- CSS global controlado por tokens visuais.
- Cada pagina dos PNGs deve ser implementada separadamente para facilitar validacao.
- Assets finais devem ser colocados em `apps/web/public/assets`.

## Backend

- APIs ficam em `apps/web/src/app/api`.
- Entradas externas passam por validacao com Zod.
- Formularios usam rate limit basico por IP.
- Dados de postos estao em uma camada de feature para depois migrar para banco sem reescrever a UI.

## Rotas iniciais

- `GET /api/health`: status da aplicacao.
- `POST /api/contact`: cadastro do formulario de frotas.
- `GET /api/stations`: listagem de postos com filtros opcionais.

## Validacao antes do GitHub

Antes de qualquer publicacao:

```bash
npm run typecheck
npm run lint
npm run build
```

Depois disso ainda precisa revisao visual contra os PNGs aprovados.
