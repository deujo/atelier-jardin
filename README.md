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

    
## Maintenance

Le site est intentionnellement **simple à maintenir** :
- 1 seul fichier CSS — modifier la couleur ou la police une fois = change partout
- 1 seul fichier JS — sans dépendances, sans framework
- Pages HTML pures — ouvrir dans n'importe quel éditeur de texte
- Aucune base de données, aucun CMS à mettre à jour
- Photos stockées dans `assets/images/` — pas d'upload vers un service externe

Pour rédiger du contenu, vous pouvez utiliser un éditeur Markdown (Notion, Obsidian)
puis coller le texte en HTML dans le template de page projet.
