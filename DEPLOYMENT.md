# Victory Fit — Déploiement & CI/CD

## Prérequis

- **Node.js** ≥ 22.12.0
- **npm** (inclus avec Node)
- **Compte GitHub** avec accès au repo

## Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
# → http://localhost:4321/

# Build de production
npm run build
# → Génère le site statique dans dist/

# Prévisualiser le build
npm run preview
```

## Architecture du déploiement

```
Push sur main → GitHub Actions → Build Astro → Deploy GitHub Pages
```

Le site est automatiquement reconstruit et déployé à chaque push sur la branche `main`.

## GitHub Pages — Configuration initiale

### 1. Activer GitHub Pages

1. Aller dans **Settings** → **Pages** du repo GitHub
2. Source : sélectionner **GitHub Actions**
3. Le premier déploiement se lance automatiquement au prochain push

### 2. URL par défaut

Le site est accessible sur :
```
https://<username>.github.io/victory-fit/
```

## Domaine custom (victoryfit.fr)

### 1. Configuration DNS

Chez votre registrar (OVH, Cloudflare, etc.), ajouter ces enregistrements :

**Option A — Apex domain (victoryfit.fr)**
```
Type  Nom   Valeur
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

**Option B — Sous-domaine (www.victoryfit.fr)**
```
Type    Nom    Valeur
CNAME   www    <username>.github.io.
```

Pour les deux (apex + www), ajoutez les deux configurations.

### 2. Configuration GitHub

1. **Settings** → **Pages** → **Custom domain** : entrer `victoryfit.fr`
2. Cocher **Enforce HTTPS**
3. Attendre la propagation DNS (peut prendre jusqu'à 24h)

### 3. Mise à jour du code

Une fois le domaine custom actif, dans `astro.config.mjs` le site basculera automatiquement sur `https://victoryfit.fr` en dehors de GitHub Actions. Pour forcer le domaine custom en CI aussi, supprimez la condition `isGitHubPages` :

```js
export default defineConfig({
  site: 'https://victoryfit.fr',
  // base: '/' — pas besoin avec un domaine custom
  integrations: [sitemap()],
});
```

## CI/CD — GitHub Actions

### Workflow (`.github/workflows/deploy.yml`)

Le pipeline se déclenche sur :
- **Push sur `main`** — déploiement automatique
- **Workflow dispatch** — déploiement manuel depuis l'onglet Actions

### Étapes du pipeline

| Étape | Description |
|-------|-------------|
| Checkout | Clone le repo |
| Setup Node | Installe Node 22 + cache npm |
| Configure Pages | Prépare l'environnement GitHub Pages |
| Install | `npm ci` (install propre) |
| Build | `npm run build` → génère `dist/` |
| Upload | Envoie `dist/` comme artifact |
| Deploy | Publie l'artifact sur GitHub Pages |

### Lancer un déploiement manuel

```bash
gh workflow run deploy.yml
```

Ou depuis GitHub : onglet **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

### Voir le statut

```bash
gh run list --workflow=deploy.yml
```

## Troubleshooting

### Le build échoue
- Vérifier la version de Node (`>=22.12.0` requis)
- Lancer `npm run build` en local pour reproduire l'erreur
- Vérifier les logs dans l'onglet **Actions** du repo

### 404 sur GitHub Pages
- Vérifier que la source est bien **GitHub Actions** dans Settings → Pages
- Vérifier que le `base` path dans `astro.config.mjs` correspond au nom du repo

### Le domaine custom ne fonctionne pas
- Vérifier les enregistrements DNS avec `dig victoryfit.fr`
- La propagation DNS peut prendre jusqu'à 24h
- S'assurer que **Enforce HTTPS** est coché dans Settings → Pages

### Les liens/images sont cassés après déploiement
- Vérifier que tous les liens utilisent des chemins relatifs ou le helper Astro
- S'assurer que les assets dans `public/` sont référencés avec `/` en préfixe
