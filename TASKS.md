# Victory Fit — Audit & Tâches

## CRITIQUE

- [x] **Mentions légales + RGPD** — Page `/mentions-legales` créée (inclut RGPD, cookies, droits). Infos société à compléter par le client.
- [x] **Bandeau cookies** — Bandeau avec accepter/refuser, persisté en localStorage
- [x] **Formulaire contact** — Branché sur Formspree → maxime@riggi.tech
- [ ] **Liens réseaux sociaux** — Instagram, Facebook, TikTok pointent vers `#` (Footer + Contact) *(dépend du client)*
- [ ] **"Voir tous les avis"** — Lien cassé (`href="#"`) dans ReviewCard *(dépend du client — URL Google Reviews)*

## IMPORTANT

- [ ] **Images Unsplash** — 54 instances de placeholder, remplacer par vraies photos *(dépend du client)*
- [ ] **Contenu Planning** — Page placeholder "bientôt disponible" *(dépend du client)*
- [ ] **Contenu Tarifs** — Page placeholder "bientôt disponible" *(dépend du client)*
- [x] **Page 404** — Page 404 brandée avec CTAs retour accueil + cours
- [ ] **Analytics** — Aucun tracking (GA, Plausible, etc.) *(dépend du client — ID de suivi)*
- [x] **Accents manquants** — 70 erreurs corrigées sur toutes les pages
- [x] **Schema JSON-LD** — Type SportsActivityLocation, horaires, fondateur, keywords, code postal

## MOYEN

- [x] **Contraste couleurs** — white-50 → 0.6, white-70 → 0.78 pour WCAG AA
- [x] **Accessibilité** — Skip link, :focus-visible, prefers-reduced-motion
- [ ] **Optimisation images** — srcset responsive, format WebP, tailles adaptées
- [x] **Apple Touch Icon** — Ajouté (logo-version-b-icon.png)

## NICE TO HAVE

- [x] **Fonts fallback** — System font stack ajouté (-apple-system, BlinkMacSystemFont, Segoe UI)
- [ ] **Remplacer AOS** — Par IntersectionObserver natif (~15KB économisés)
- [ ] **Font subsetting** — Ne charger que les caractères nécessaires
