# 🚗 MatchAuto — Drivezy

Questionnaire de matching automobile en 15 étapes pour trouver le véhicule idéal selon ton profil.

## Stack

- HTML / CSS / JS vanilla (front)
- Node.js + Express (serveur)
- Déploiement : Railway

---

## 🚀 Déploiement rapide

### 1. Pousser sur GitHub

```bash
git init
git add .
git commit -m "feat: initial commit MatchAuto"
git branch -M main
git remote add origin https://github.com/TON_PSEUDO/drivezy.git
git push -u origin main
```

### 2. Déployer sur Railway

1. Va sur [railway.app](https://railway.app) et connecte-toi avec GitHub
2. Clique sur **New Project → Deploy from GitHub repo**
3. Sélectionne le repo `drivezy`
4. Railway détecte automatiquement Node.js et lance `npm start`
5. Une fois déployé, clique sur **Generate Domain** pour obtenir ton URL publique

> Le fichier `railway.toml` est déjà configuré, aucun réglage manuel n'est nécessaire.

---

## 🛠️ Lancer en local

```bash
npm install
npm start
# → http://localhost:3000
```

---

## Structure du projet

```
drivezy/
├── index.html      # App complète (questionnaire + résultats)
├── server.js       # Serveur Express
├── package.json    # Dépendances Node.js
├── railway.toml    # Config Railway
├── .gitignore
└── README.md
```

---

## Fonctionnalités

- 15 questions de matching (budget, usage, motorisation, gabarit…)
- Base de ~45 véhicules avec scoring intelligent
- Affichage du top 5 + vue complète des matchs
- 100 % statique côté client, aucune base de données requise
