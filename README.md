# Homelab Wiki

Technical documentation for the homelab infrastructure. The site is the source of truth for the **target** architecture and the operations that keep it running.

Built with Next.js 16 and Fumadocs v16. Content is MDX under `content/`.

## Structure

```
content/
  index.mdx              — homepage / entry point
  architecture/          — design intent: principles, node roles, network, storage, etc.
  inventory/             — physical and logical assets
  operations/            — day-2 procedures
  services/
    core/                — platform-critical services on the management plane
    apps/                — user-facing applications
    media/               — media library and acquisition stack
    lab/                 — pre-production and test workloads
```

Sidebar order is controlled by `meta.json` files next to each section's content.

## Local development

Requirements: Node.js 22+ and pnpm 9+.

```bash
pnpm install
pnpm dev       # http://localhost:3545
```

## Production build

```bash
pnpm build
pnpm start     # http://localhost:3545
```

## Docker

```bash
docker build -t homelab-wiki .
docker run -p 3545:3545 homelab-wiki
```

## Deployment (Dokploy)

1. Connect this repository in Dokploy.
2. The `Dockerfile` at the repo root produces a standalone Next.js image.
3. Expose port **3545**.
4. Health check: `/`.

## Editing content

- Pages live under `content/`. Each `.mdx` file is a docs page; each `meta.json` controls navigation order.
- Write in English. Describe the **target** state. Use `TODO` for unconfirmed values; do not invent infrastructure facts.
- See [`content/architecture/principles`](content/architecture/principles.mdx) for editorial principles.

## License

MIT
