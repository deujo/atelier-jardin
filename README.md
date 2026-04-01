# Atelier & Jardin — Site DIY

## Structure des fichiers

```
atelier-jardin/
│
├── index.html              ← Page d'accueil
│
├── css/
│   └── style.css           ← TOUT le design (1 seul fichier CSS)
│
├── js/
│   └── main.js             ← Menu mobile, animations, cases à cocher
│
├── pages/
│   ├── projets.html        ← Liste de tous les projets
│   ├── echafaudage.html    ← Projet : échafaudage (complet)
│   ├── abri-buches.html    ← Projet : abri à bûches (à rédiger)
│   ├── jardinieres.html    ← Projet : jardinières (à rédiger)
│   ├── table-exterieur.html← Tuto : table d'extérieur (à venir)
│   ├── cabanon-enfant.html ← Tuto : cabanon enfant (à venir)
│   ├── guides.html         ← Page guides généraux (à rédiger)
│   ├── materiaux.html      ← Page matériaux (à rédiger)
│   └── a-propos.html       ← Page à propos (à rédiger)
│
└── assets/
    └── images/             ← Vos photos (jpg, webp)
        ├── echafaudage-hero.jpg
        ├── echafaudage-1.jpg
        ├── abri-buches-hero.jpg
        └── ...
```

---

## Tester en local

### Option 1 — VS Code (recommandé, gratuit)
1. Télécharger VS Code : https://code.visualstudio.com
2. Installer l'extension **"Live Server"** (clic sur l'icône Extensions, chercher Live Server)
3. Ouvrir le dossier `atelier-jardin/` dans VS Code
4. Clic droit sur `index.html` → **"Open with Live Server"**
5. Le site s'ouvre dans votre navigateur sur `http://127.0.0.1:5500`
6. Chaque sauvegarde de fichier rafraîchit automatiquement le navigateur

### Option 2 — Python (si déjà installé)
```bash
# Dans le terminal, aller dans le dossier du site :
cd /chemin/vers/atelier-jardin
# Lancer le serveur :
python -m http.server 8000
# Ouvrir dans le navigateur :
# http://localhost:8000
```

### Option 3 — Simplement double-cliquer sur index.html
Ça marche pour voir les pages, mais les liens relatifs entre pages peuvent
ne pas fonctionner. Préférer Live Server ou Python.

---

## Ajouter une photo à un projet

1. Mettre votre photo dans `assets/images/` (format JPG ou WebP, max 1 Mo)
2. Dans la page HTML du projet, remplacer le placeholder par :
```html
<img src="../assets/images/votre-photo.jpg" alt="Description" class="proj-card-img">
```
(Depuis index.html, le chemin est `assets/images/` sans `../`)

---

## Ajouter un nouveau projet

1. Dupliquer `pages/echafaudage.html`
2. Renommer le fichier (ex: `pages/terrasse.html`)
3. Modifier : title, h1, description, tableau matériaux, étapes
4. Ajouter une carte dans `pages/projets.html` et `index.html`

---

## Hébergement (quand vous êtes prêt)

### Recommandation : GitHub Pages (gratuit, fiable)
- Gratuit pour toujours pour les sites statiques
- Votre site sera à `votre-pseudo.github.io/atelier-jardin`
- Tuto : https://pages.github.com

**Étapes :**
1. Créer un compte GitHub : https://github.com
2. Créer un repository public nommé `atelier-jardin`
3. Uploader tous vos fichiers (ou utiliser GitHub Desktop)
4. Settings → Pages → Source : main branch → Save
5. Votre site est en ligne en 2 minutes

### Alternative : Netlify (encore plus simple)
- Aller sur https://netlify.com
- Glisser-déposer le dossier `atelier-jardin/` sur la page
- Votre site est en ligne immédiatement à une URL du type `nifty-name-123.netlify.app`
- Mettre à jour : re-glisser le dossier

---

## Nom de domaine

### Conseils pour le nom
Quelques options selon votre préférence :
- **atelierjardin.fr** — simple, direct
- **bricolagejardin.fr** — plus descriptif
- **[votre-prénom]diy.fr** — personnel
- **[ville]-diy.fr** — ancrage local
- Éviter les traits d'union si possible (plus dur à dicter)
- Extension .fr pour un site francophone = crédibilité
- Extension .com si vous visez plus large

### Où acheter un nom de domaine
- **OVH** (français, fiable) : https://www.ovhcloud.com/fr/domains/ → ~7-12€/an pour un .fr
- **Gandi** (français, éthique) : https://www.gandi.net → ~15€/an
- **Namecheap** (moins cher) : https://www.namecheap.com → ~8-10€/an pour .fr

### Connecter domaine + hébergement
- Sur GitHub Pages : Settings → Pages → Custom domain → entrer votre domaine
- Sur Netlify : Site Settings → Domain management → Add custom domain
- Chez votre registrar (OVH/Gandi) : modifier les DNS pour pointer vers GitHub/Netlify
  (Netlify fournit les instructions exactes après achat)

---

## Maintenance

Le site est intentionnellement **simple à maintenir** :
- 1 seul fichier CSS — modifier la couleur ou la police une fois = change partout
- 1 seul fichier JS — sans dépendances, sans framework
- Pages HTML pures — ouvrir dans n'importe quel éditeur de texte
- Aucune base de données, aucun CMS à mettre à jour
- Photos stockées dans `assets/images/` — pas d'upload vers un service externe

Pour rédiger du contenu, vous pouvez utiliser un éditeur Markdown (Notion, Obsidian)
puis coller le texte en HTML dans le template de page projet.
