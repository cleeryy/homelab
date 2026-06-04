# Wiki Technique Homelab

Wiki de documentation technique pour l'infrastructure homelab, construit avec Next.js 16 et Fumadocs v16.

## Prérequis

- Node.js 22+
- pnpm 9+

## Installation locale

```bash
pnpm install
pnpm dev       # http://localhost:3000
```

## Build production

```bash
pnpm build
pnpm start     # http://localhost:3000
```

## Docker

```bash
docker build -t homelab-wiki .
docker run -p 3000:3000 homelab-wiki
```

## Déploiement Dokploy

1. Connecter le dépôt Git dans Dokploy
2. Le `Dockerfile` est présent à la racine
3. Exposer le port **3000**
4. Health check : `/`

## Structure du projet

- `content/docs/` : pages MDX organisées par section
- `meta.json` : configuration de la sidebar par dossier
- `lib/source.ts` : configuration Fumadocs source
- Modifier les pages MDX dans `content/docs/` pour mettre à jour le contenu

## Décisions techniques

- **Fumadocs v16** (pas v9) pour la compatibilité Next.js 16
- **Thème neutral.css** (sobre, technique)
- **Monolangue français V1** (pas d'i18n)
- Pas de diagrammes Mermaid (MDX tables suffisent)
- Pas d'i18n, pas de CI/CD, pas d'authentification

## Licence

MIT
