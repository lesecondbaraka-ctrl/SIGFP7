# 🔐 Instructions Push vers Nouveau Compte GitHub

**Problème**: Permission denied - Git utilise l'ancien compte  
**Nouveau repo**: https://github.com/cikulegrand-hub/SIGFP

---

## ✅ Solution Rapide (3 méthodes)

### Méthode 1: GitHub CLI (Recommandé - Plus Simple)

**Installation GitHub CLI:**
```powershell
winget install --id GitHub.cli
```

**Authentification:**
```powershell
gh auth login
```

Suivre les étapes:
1. Choisir: **GitHub.com**
2. Choisir: **HTTPS**
3. Choisir: **Login with a web browser**
4. Copier le code affiché
5. Appuyer sur Entrée
6. Se connecter dans le navigateur avec **cikulegrand-hub**
7. Coller le code
8. Autoriser

**Pousser le code:**
```powershell
cd "c:\Users\LEGRAND\OneDrive\Desktop\SIGFP 5\project"
git push cikulegrand master
```

---

### Méthode 2: Personal Access Token (Classique)

#### Étape 1: Créer un Token GitHub

1. **Se connecter sur GitHub** avec compte **cikulegrand-hub**
2. **Aller sur**: https://github.com/settings/tokens
3. **Cliquer**: "Generate new token" → "Generate new token (classic)"
4. **Nom**: `SIGFP Deploy Token`
5. **Expiration**: 90 days
6. **Sélectionner scopes**:
   - ✅ `repo` (tous les sous-items)
   - ✅ `workflow`
7. **Cliquer**: "Generate token"
8. **⚠️ COPIER LE TOKEN** (il ne sera plus affiché ensuite!)
   - Format: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

#### Étape 2: Utiliser le Token

```powershell
cd "c:\Users\LEGRAND\OneDrive\Desktop\SIGFP 5\project"

# Supprimer l'ancien remote cikulegrand
git remote remove cikulegrand

# Ajouter le nouveau remote avec token
git remote add cikulegrand https://VOTRE_TOKEN@github.com/cikulegrand-hub/SIGFP.git

# Exemple (remplacer YOUR_TOKEN):
# git remote add cikulegrand https://ghp_xxxxxxxxxxxxxxxxxxxx@github.com/cikulegrand-hub/SIGFP.git

# Pousser
git push cikulegrand master
```

---

### Méthode 3: SSH (Si vous avez une clé SSH)

**Si vous avez déjà configuré une clé SSH pour cikulegrand-hub:**

```powershell
cd "c:\Users\LEGRAND\OneDrive\Desktop\SIGFP 5\project"

# Supprimer l'ancien remote
git remote remove cikulegrand

# Ajouter avec SSH
git remote add cikulegrand git@github.com:cikulegrand-hub/SIGFP.git

# Pousser
git push cikulegrand master
```

---

## 🚀 Après Authentification Réussie

Une fois l'authentification configurée, pousser tout le code:

```powershell
cd "c:\Users\LEGRAND\OneDrive\Desktop\SIGFP 5\project"
git push cikulegrand master
```

**Résultat attendu:**
```
Enumerating objects: 355, done.
Counting objects: 100% (355/355), done.
Delta compression using up to 4 threads
Compressing objects: 100% (333/333), done.
Writing objects: 100% (355/355), 512.45 KiB | 290.00 KiB/s, done.
Total 355 (delta 106), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (106/106), done.
To https://github.com/cikulegrand-hub/SIGFP.git
 * [new branch]      master -> master
```

---

## 📋 Vérification Post-Push

Après le push, vérifier sur GitHub:

1. **Aller sur**: https://github.com/cikulegrand-hub/SIGFP
2. **Vérifier**:
   - ✅ Tous les fichiers sont présents
   - ✅ netlify.toml est là
   - ✅ package.json est là
   - ✅ src/ avec tous les modules
   - ✅ Dernier commit visible

---

## 🔧 Commandes Utiles

**Voir les remotes configurés:**
```powershell
git remote -v
```

**Changer l'URL d'un remote:**
```powershell
git remote set-url cikulegrand https://NOUVEAU_TOKEN@github.com/cikulegrand-hub/SIGFP.git
```

**Supprimer un remote:**
```powershell
git remote remove cikulegrand
```

**Tester la connexion:**
```powershell
git ls-remote cikulegrand
```

---

## ⚠️ Problèmes Courants

### Erreur: "Permission denied"
**Cause**: Mauvais compte GitHub utilisé  
**Solution**: Utiliser GitHub CLI ou Token avec le bon compte

### Erreur: "Authentication failed"
**Cause**: Token expiré ou invalide  
**Solution**: Générer un nouveau token

### Erreur: "Repository not found"
**Cause**: Le repo n'existe pas ou est privé  
**Solution**: Vérifier que https://github.com/cikulegrand-hub/SIGFP existe

---

## 🎯 Recommandation

**La méthode la plus simple:**

1. **Installer GitHub CLI** (si pas déjà fait)
2. **Lancer** `gh auth login`
3. **Se connecter** avec cikulegrand-hub
4. **Pousser** avec `git push cikulegrand master`

**Temps total: 3 minutes**

---

## 📞 Besoin d'Aide ?

Si vous rencontrez des problèmes:
1. Vérifier que vous êtes connecté avec **cikulegrand-hub** (pas bahatilegrand)
2. Vérifier que le repo existe: https://github.com/cikulegrand-hub/SIGFP
3. Essayer la méthode avec Personal Access Token

**Une fois le push réussi, votre projet entier sera sur le nouveau compte GitHub ! 🚀**
