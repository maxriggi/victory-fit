# Victory Fit — Audit & Tâches

## CRITIQUE

- [x] **Mentions légales + RGPD** — Page `/mentions-legales` créée (inclut RGPD, cookies, droits). Infos société à compléter par le client.
- [ ] **Bandeau cookies** — Google Fonts + AOS chargés depuis CDN externes sans consentement
- [ ] **Formulaire contact** — `action="#"` ne soumet nulle part, brancher Formspree ou équivalent
- [ ] **Liens réseaux sociaux** — Instagram, Facebook, TikTok pointent vers `#` (Footer + Contact)
- [ ] **"Voir tous les avis"** — Lien cassé (`href="#"`) dans ReviewCard

## IMPORTANT

- [ ] **Images Unsplash** — 54 instances de placeholder, remplacer par vraies photos (salle, cours, Nasr)
- [ ] **Contenu Planning** — Page placeholder "bientôt disponible"
- [ ] **Contenu Tarifs** — Page placeholder "bientôt disponible"
- [ ] **Page 404** — Aucune page 404 personnalisée
- [ ] **Analytics** — Aucun tracking (GA, Plausible, etc.)
- [ ] **Accents manquants** — "Prêt a" → "Prêt à" sur planning, tarifs et autres pages
- [ ] **Schema JSON-LD** — Compléter : adresse complète, téléphone, horaires, sameAs réseaux sociaux

## MOYEN

- [ ] **Contraste couleurs** — `--white-50` (ratio 2.6:1) et `--white-70` (3.7:1) échouent WCAG AA
- [ ] **Accessibilité** — Skip link, `:focus-visible` sur boutons/liens, `prefers-reduced-motion`
- [ ] **Optimisation images** — srcset responsive, format WebP, tailles adaptées
- [ ] **Apple Touch Icon** — Manquant pour iOS

## NICE TO HAVE

- [ ] **Fonts fallback** — Ajouter `-apple-system, BlinkMacSystemFont, 'Segoe UI'` aux font stacks
- [ ] **Remplacer AOS** — Par IntersectionObserver natif (~15KB économisés)
- [ ] **Font subsetting** — Ne charger que les caractères nécessaires
