# Landing Page ZIA (Zèphira) — conceito "Vaca Roxa"

## Contexto

O projeto é um template Vite + React + Tailwind + TypeScript em branco. A usuária (Beatriz, da empresa **Zèphira**) quer uma landing page em **português** para o produto **ZIA** — assistente de gestão financeira por IA que atende microempreendedoras (MEIs) **100% via WhatsApp**.

Foram fornecidos: o Business Model Canvas completo (dor, proposta de valor, persona Carla, planos R$ 79,90 / R$ 99–149, piloto de 10 clientes, break-even de 18) e 7 imagens de identidade visual (wordmark "ziA" em caixa baixa geométrica, texturas de satélite/aéreas, paleta terrosa + ciano + laranja-âmbar, marca "zèphira").

A landing deve seguir o conceito de marketing **"vaca roxa"** (Seth Godin): ser memorável e marcante, não um template SaaS genérico. Decisões confirmadas com a usuária:
- WhatsApp real nos CTAs: **11 99888-8703** → `https://wa.me/5511998888703`
- Quer **os dois** canais: CTA via WhatsApp **e** formulário de lista de espera (piloto) → exige backend (Enter Cloud).

## Direção de design ("Vaca Roxa")

A "vaca roxa" desta página é o **mockup de conversa do WhatsApp como peça central do hero**: o produto inteiro é uma conversa, então a página mostra a conversa. Nada de dashboard genérico.

- **Tipografia**: display geométrica em caixa baixa (sugere o wordmark "ziA") + corpo legível + **monoespaçada para todos os números/financeiro** (estética técnica/aérea).
- **Cores** (extraídas das referências): papel/creme quente para fundos claros; verde-floresta/quase-preto para seções escuras; **terracota/laranja-âmbar** como primária (CTA de destaque); **ciano** como acento da ZIA; areia como secundária; **verde do WhatsApp** nos botões de conversa.
- **Texturas**: overlay de grão (feTurbulence), padrão de linhas topográficas/contorno (radial-gradients repetidos) e mesh de gradientes "aéreas" — linguagem de satélite/Brasil sem depender de fotos.
- **Movimento**: reveals com stagger no load (framer-motion, já instalado), marquee de estatísticas, indicador de "digitando…" e balão flutuante de WhatsApp.

## Estrutura da página (uma rota `/`)

1. **Navbar** fixa — wordmark "ziA", "zèphira" discreto, âncoras (Como funciona · Resultados · Planos), botão "Chamar no WhatsApp".
2. **Hero** — eyebrow "Feito para MEIs · 100% no WhatsApp"; H1 "Entenda seus ganhos em 30 segundos."; sub "Sem app novo. Sem cadastro. Sem planilha…"; CTAs (WhatsApp + "Como funciona"); ao lado, **ChatMockup** animado (Zia calcula margem do "bolo de pote": preço R$ 5, custo R$ 2,20 → margem R$ 2,80 / 56%).
3. **Faixa de estatísticas** (marquee): "+2h50/semana de volta", "Respostas em <30 segundos", "45 respondentes na validação", "10 clientes no piloto".
4. **Problema** — "Trabalhar o dia inteiro e não saber se está lucrando": 3h/semana em contas; 60% decidem com insegurança; 67% não conseguem precificar; 75% já perderam dinheiro por falta de controle (dados do BMC).
5. **Como funciona** — 3 passos: (1) Abra o WhatsApp, sem cadastro; (2) Converse com a Zia; (3) Receba margem, lucro e fluxo de caixa em até 30 segundos.
6. **Recursos** — conversa simples; cálculo em tempo real (receita/custo/margem); precificação correta; leitura de notas fiscais (imagens); alertas proativos; resumo semanal.
7. **Persona** — card "Conheça a Carla": 25–45 anos, alimentação, autônoma/MEI, faturamento R$ 2–20k/mês, 100% WhatsApp, vende por encomenda/iFood/porta a porta.
8. **Planos** — Básico **R$ 79,90/mês** (controle financeiro, precificação, análise financeira, WhatsApp como canal único) e Premium **R$ 99–149/mês** (avançadas, suporte prioritário, insights personalizados). CTA → WhatsApp.
9. **Lista de espera** — "Seja uma das primeiras do piloto" + "Faltam 8 vagas para o ponto de equilíbrio"; formulário (nome, WhatsApp, tipo de negócio) gravando no backend; estado de sucesso após envio.
10. **Footer** — marca zèphira, © 2026, contato WhatsApp, nota de privacidade/LGPD.

## Backend (lista de espera)

- **Habilitar Enter Cloud** (`supabase_enable`) no início da implementação — necessário para guardar leads.
- Carregar a skill `enter_cloud` antes de escrever SQL/código de banco.
- Criar tabela `waitlist` (`id`, `name`, `whatsapp`, `business_type`, `created_at`) com **RLS permitindo insert anônimo** (apenas inserção de público; sem leitura).
- O formulário grava via `@supabase/supabase-js` (já instalado), seguindo o padrão de cliente do skill.
- Validação no frontend: nome e telefone obrigatórios (máscara brasileira), tipo de negócio em select; feedback de erro/sucesso no próprio card.

## Arquivos

**Modificar:**
- `index.html` — title "ZIA · Gestão financeira no WhatsApp", meta description, Google Fonts (display + corpo + mono).
- `src/index.css` — novos design tokens (paleta terrosa/ciano/âmbar, fontes, texturas de grão e topográficas, keyframes de marquee/digitando).
- `tailwind.config.ts` — `fontFamily`, `colors` semânticas, `keyframes`/`animation` novos.
- `src/pages/Index.tsx` — compõe as seções (sem i18n; texto em pt-BR fixo — i18n existente fica intacto).

**Criar** (em `src/components/landing/`):
- `Navbar.tsx`, `Hero.tsx`, `ChatMockup.tsx`, `StatsStrip.tsx`, `Problem.tsx`, `HowItWorks.tsx`, `Features.tsx`, `Persona.tsx`, `Pricing.tsx`, `Waitlist.tsx`, `Footer.tsx`
- Utilitário `src/lib/whatsapp.ts` — link `wa.me` com mensagem pré-preenchida (reusado em todos os CTAs).
- Cliente Supabase (seguindo o skill `enter_cloud`) para o insert da `waitlist`.

**Não alterar**: i18n (`src/i18n/*`, `public/locales/*`), roteamento (`src/router.tsx` continua com a rota `/`), demais componentes UI shadcn.

## Implementation checklist

- [ ] Habilitar Enter Cloud (`supabase_enable`) e carregar skill `enter_cloud`.
- [ ] Criar tabela `waitlist` com RLS de insert anônimo; configurar cliente Supabase no frontend.
- [ ] `index.html`: título, meta description, Google Fonts (display/corpo/mono).
- [ ] `src/index.css` + `tailwind.config.ts`: tokens de cor (papel, floresta, terracota, ciano, areia, verde WhatsApp), fontes, texturas (grão + topográficas), animações (marquee, digitando, reveal).
- [ ] Criar `src/lib/whatsapp.ts` com URL `https://wa.me/5511998888703` e mensagem pré-preenchida.
- [ ] `ChatMockup.tsx`: conversa animada Zia↔usuária com cálculo de margem, indicador "digitando…" e timestamps.
- [ ] Seções `Navbar`, `Hero`, `StatsStrip`, `Problem`, `HowItWorks`, `Features`, `Persona`, `Pricing`, `Footer` com os conteúdos do BMC e CTAs apontando para o WhatsApp.
- [ ] `Waitlist.tsx`: formulário (nome, WhatsApp, tipo de negócio) gravando na tabela `waitlist`; validação, loading, estados de sucesso e erro.
- [ ] `Index.tsx` compõe todas as seções em ordem; responsivo (grid/typography adaptam em mobile).
- [ ] Botões de WhatsApp (navbar, hero, planos, footer) e envio do formulário funcionando sem erros de console.

## Verification checklist

- [ ] `pnpm run check` (lint + `tsc --noEmit`) sem erros.
- [ ] `pnpm run build` conclui sem erros.
- [ ] `website_screenshot` da rota `/` em `desktop_1280` e `mobile_390` — hero, chat mockup, planos e formulário legíveis e sem overflow horizontal.
- [ ] Clique nos CTAs abre `wa.me/5511998888703` com mensagem pré-preenchida (validar via `read_network_requests`).
- [ ] Enviar formulário válido → `POST` registra linha em `waitlist` (validar via `read_network_requests`/console); estado de sucesso visível.
- [ ] Enviar formulário vazio → erros de validação exibidos, nenhum insert.
- [ ] `get_console_logs` sem erros de runtime (React/Supabase).
- [ ] Layout dark/light: página usa tema próprio (fundo papel + seções escuras), sem conflitos de contraste de texto em botões/cta.
