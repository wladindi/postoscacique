# Rede Cacique — Site institucional

Site institucional da **Rede Cacique** com as marcas Posto Cacique, Cacique Lub, Tem Conveniência, Cacique Frotas, Cacique Fidelidade e Sobre.

## Stack

- **Next.js 15** (App Router) + React 19 + TypeScript
- **Poppins** via `next/font/google`
- **lucide-react** para ícones
- **CSS global modular** (variáveis CSS + classes BEM)
- **Workspaces npm** (monorepo) com app principal em `apps/web`

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | Home: hero com foto da equipe, REDE CACIQUE, carrossel, Cacique Frotas, formulário B2B |
| `/postos-cacique` | Lista filtrada de postos por estado/serviço + busca textual |
| `/cacique-lub` | Hero escuro Cacique Lubrificantes + 4 perfis B2B |
| `/tem-conveniencia` | Hero, 4 cards coloridos (Conveniência, Autoatendimento, Beer, Premium) + carrossel das fachadas |
| `/fidelidade` | Programa de pontos, "como funciona", diferencial Cacique, CTA download app |
| `/sobre` | História, números, valores e estrutura da rede |

## API Routes

| Endpoint | Função |
|---|---|
| `GET /api/health` | Health check |
| `GET /api/stations?state=PI&service=Conveniência&search=...` | Filtro server-side dos postos |
| `POST /api/contact` | Form de contato B2B com validação Zod + rate limit |

## Features visuais

- **Page transitions** (`template.tsx`): fade + slide-up em cada navegação
- **Scroll reveal** (`<Reveal>`): IntersectionObserver com 6 variantes (up/down/left/right/fade/zoom)
- **Carrossel autoplay** (`<Carousel>`): chevrons, dots, pausa no hover
- **Hover effects**: lift + sombra + scale em fotos, cards e botões
- **Hamburger menu** em mobile com drawer lateral + backdrop
- **Acessibilidade**: respeita `prefers-reduced-motion`, ARIA labels, touch targets ≥44px

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acessar `http://localhost:3000`.

### Comandos de validação

```bash
npm run typecheck    # TypeScript --noEmit
npm run lint         # ESLint
npm run format       # Prettier (escrita)
npm run build        # Build de produção
```

## Estrutura

```
apps/web/
├── public/assets/        # Imagens (home, cacique-lub, tem-conveniencia, fidelidade)
├── src/
│   ├── app/              # Rotas + layout + template
│   ├── components/       # ui, layout, brand
│   └── features/         # contact, stations
docs/                     # Arquitetura e QA visual
TASKS.md                  # Backlog por fase
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local` localmente. Na Vercel, configurar:

```
NEXT_PUBLIC_SITE_URL=https://<seu-dominio>.vercel.app
CONTACT_RATE_LIMIT_WINDOW_MS=60000
CONTACT_RATE_LIMIT_MAX=8
```

## Deploy na Vercel

1. Push do projeto para um repositório GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importar o repo.
3. **Root Directory**: deixar vazio (monorepo detecta `apps/web` automaticamente via `next.config`).
4. **Framework Preset**: Next.js (detectado).
5. **Build Command**: `npm run build` (root).
6. **Output Directory**: `apps/web/.next` (detectado).
7. Configurar as variáveis acima na aba *Environment Variables*.
8. Deploy.

## Assets

Imagens reais ficam em `apps/web/public/assets/<página>/`. Os assets atuais cobrem hero, galerias e ícones do home, cacique-lub, tem-conveniencia e fidelidade. Para fidelidade pixel-a-pixel substitua placeholders pelos arquivos finais.

## Documentação

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- [`docs/VISUAL-QA.md`](docs/VISUAL-QA.md)
- [`TASKS.md`](TASKS.md) — backlog por fase
