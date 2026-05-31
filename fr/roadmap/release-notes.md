# Journal des versions

## V1.7.3

1. Le filtrage des collections prend désormais en charge la recherche par mot-clé pour une découverte plus efficace des applications
2. Nouvelle fonction d'importation par reconnaissance d'image — ajoutez rapidement des applications via des captures d'écran
3. Extension de partage système optimisée, prend désormais en charge la synchronisation des évaluations et des informations d'étiquettes
4. Gestion des collections avec nouvelle fonction de suppression multi-sélection pour une organisation plus facile
5. Processus d'importation Apple Data optimisé, prend désormais en charge l'importation en arrière-plan
6. Correction d'un problème où les boutons d'édition de description et d'étiquettes étaient inutilisables après être entré dans les détails d'une application depuis la page de recherche

## V1.7.2

1. Nouvelle vue en cartes pour les applications, avec affichage configurable des étiquettes, évaluations et champs de description
2. Page Paramètres — Toutes les applications prend désormais en charge le tap pour accéder directement à l'App Store
3. Affichage optimisé du titre du nom de l'application en vue icône sur la page de détail de la collection
4. Section d'aperçu de l'application optimisée, prend en charge l'ajout d'étiquettes
5. Page de détails de l'application affiche désormais les collections auxquelles l'application appartient
6. Bouton d'actualisation ajouté sur la page de partage de collection
7. Optimisation des données d'étiquettes : prend en charge l'import, l'export et la synchronisation
8. Optimisation des régions d'application : suppression de la région automatique (region_auto)
9. Optimisation du filtrage dans les collections : le filtre par région affiche désormais les régions réelles des applications dans la collection actuelle

## V1.7

1. Adaptation complète à iOS 26, interaction des pages restructurée
2. Nouvelles fonctions de modification et de modification par lots des régions d'application
3. Nouvelle fonction d'actualisation des applications dans une collection — récupère le dernier nom et la dernière icône
4. Nouvelles étiquettes d'application et gestion des étiquettes, prend en charge la recherche, l'affichage, la synchronisation et l'édition
5. Nouveau filtrage dans les collections, prend en charge le filtrage par plateforme, région et étiquettes
6. Nouvelle prise en charge de l'importation des enregistrements de téléchargement de l'App Store depuis Apple Data & Privacy
7. Prise en charge de la configuration d'affichage pour les pages de collection et de détails d'application

## V1.6

> Date de sortie : 2026-02-14

1. Synchronisation des données restructurée, plus stable et prend en charge la synchronisation des applications personnalisées
2. Vue en grille de la page d'accueil prend en charge le tri personnalisé
3. Partage de collection — exportation, partage et importation de collections via des cartes QR Code
4. L'exportation de données inclut désormais les champs d'ordre de tri personnalisé pour les collections
5. Lors de l'ajout d'applications depuis la page d'accueil, de nouvelles collections peuvent être créées sur la page de sélection
6. Historique d'importation : suivi détaillé pour le dépannage des problèmes d'importation
7. Entrée de la fonction de reconnaissance de lien optimisée, prend en charge l'ajout individuel et par lots
8. Les descriptions de collection et d'application sont masquées quand elles sont vides et repliées automatiquement quand elles sont trop longues
9. Prend en charge la copie de texte tel que les descriptions d'application depuis la page de détails
10. Correction des chutes d'images avec trop de collections sur la page d'accueil et des ralentissements lors du changement de page
11. Actualisation des icônes d'application : prend en charge la mise à jour des icônes existantes
12. Limite de caractères pour les descriptions d'application sur la page d'extension de partage système modifiée à 2000 caractères

## V1.5.1 (Pas sur l'App Store)

> Date de build : 2026-01-18

**1. Modifications**

- Logique de mise à jour des données réécrite. Si une invite de mise à jour apparaît après la mise à jour, elle peut être effectuée en toute sécurité ; la durée dépend du nombre d'applications et peut prendre quelques minutes
- Bouton flottant d'ajout en bas à droite de la page de détail de la collection supprimé, fusionné avec l'ajout par lots dans le menu « Ajouter/Ajouter par lots » en haut à droite
- Correction des ralentissements et des chutes d'images lors du changement entre trop de collections sur la page d'accueil
- Limite de caractères pour les descriptions d'application sur la page d'extension de partage système modifiée à 2000 caractères

**2. Ajouts**

- Ajout d'applications depuis la page d'accueil : de nouvelles collections peuvent être créées sur la page de sélection
- Ajout d'applications depuis la page d'accueil : une notification de confirmation apparaît après un ajout réussi
- Ajout d'applications depuis la page d'accueil : l'onglet de lien d'application prend en charge la reconnaissance individuelle/par lots et l'affichage de l'historique
- Import/export de données : prend en charge l'import et l'export des champs d'ordre de tri personnalisé pour les collections
- Import de données : affichage de l'historique pour le dépannage des problèmes d'importation
- Les descriptions de collection et d'application se replient automatiquement quand elles sont trop longues
- Prend en charge la copie de texte tel que les descriptions d'application depuis la page de détails

## V1.5

> Date : 2025-12-26

**0. Notes importantes :**

- Par rapport à V1.4, cette version met à jour le modèle de données, donc une opération de mise à jour des données est nécessaire. Une invite apparaîtra automatiquement — confirmez simplement pour continuer
- Après la mise à jour, vous pouvez vérifier l'état dans Paramètres → Mise à jour des données → Historique des mises à jour. Pour les données ayant échoué, supprimez et réajoutez manuellement
- Pour les utilisateurs qui n'ont pas encore récupéré leurs anciennes données, utilisez les outils de développement pour tenter une récupération. Les instructions se trouvent dans Paramètres → Guide d'utilisation → FAQ

**1. Modifications :**

- Prend en charge l'importation de liens pour les logiciels exclusifs Mac
- Limite de caractères pour les descriptions d'application passée de 200 à 2000 caractères
- Disposition de la page d'accueil ajustée avec une nouvelle barre d'actions en bas ; le tri et le changement de vue déplacés dans le menu d'actions en haut à droite
- Les informations d'abonnement sont désormais synchronisées lors de la copie/déplacement d'applications

**2. Nouvelles fonctionnalités :**

- Tri des collections : par nom (A-Z et Z-A) ou par date de création (plus récent-ancien et plus ancien-récent)
- Import personnalisé : les utilisateurs peuvent saisir l'icône, le nom, la source et d'autres informations
- Recherche et ajout d'applications directement par nom dans AppBox
- Page de détails de l'application avec une nouvelle section « Plus d'informations » affichant la date d'importation, la région et le lien source
- L'exportation de données se fait désormais sous forme de package compressé complet contenant les fichiers d'icônes d'application et un fichier JSON
- Page de détails affiche l'ID de l'application ; boutons de traduction ajoutés aux sections de description et d'historique des mises à jour
- Sélection de région d'application : prise en charge de la sélection de région lors de l'ajout de nouvelles applications, avec tri des régions (Paramètres → Régions d'application)
- Page de résultats de recherche avec menus de pression longue (modifier, copier/déplacer, supprimer) pour les collections et les applications
- Modèles complets et descriptions de champs fournis, prend en charge l'import par lots via des fichiers modèles
- Mise en cache des icônes : télécharge les icônes d'application localement pour un affichage hors ligne
- Prise en charge de l'édition des descriptions d'application pendant l'importation (prise en charge à la fois dans le module d'ajout de la page d'accueil et sur la page de détail de la collection)
- Outils de développement ajoutés pour la récupération des anciennes bases de données

**3. Autres :**

- Optimisation de toute la logique d'importation d'applications : AppBox extrait les ID numériques (ex : `id1234567890`) des liens et interroge l'App Store pour obtenir les informations. La stratégie de sélection de région est la suivante : priorité au code de région explicite dans le lien (ex : `/cn/`, `/us/`) ; si le lien n'a pas de code de région, l'application parcourt la liste des régions dans Paramètres → Régions d'application de haut en bas. « Universel » signifie qu'il ne s'agit pas d'un pays/région spécifique mais d'une déduction automatique par le serveur Apple en fonction de l'environnement de la requête (principalement les États-Unis). Pour plus de détails, consultez Paramètres → Guide d'utilisation → FAQ → Règles de reconnaissance des liens d'application et utilisation de la fonction de région

## V1.4

## V1.01

> Date : 2025-11-06

**1. Nouvelles fonctionnalités**

1. Nouveau suivi des abonnements : dates de début/fin personnalisées, prix, devise et informations d'abonnement — à activer manuellement dans Paramètres → Propriétés de l'application
2. Nouvelle prise en charge multilingue : changement de langue dans Paramètres → Langue. Actuellement prend en charge le chinois simplifié, le chinois traditionnel, l'anglais, l'allemand, le français, le japonais, le coréen et le turc — 8 langues au total, d'autres en cours d'adaptation
3. Nouvelle prise en charge du tri avant et arrière des applications dans une collection
4. Page de recherche optimisée, prend désormais en charge la recherche dans les descriptions d'application

**2. Corrections de bugs**

1. Correction de l'incohérence de l'ordre de la liste des collections entre l'extension de partage système et l'application principale
2. Stabilité de l'extension de partage système améliorée, correction des problèmes d'importation lorsque l'application principale ne fonctionne pas en arrière-plan

## V1.0

> Date : 2025-10-28

**1. Nouvelles fonctionnalités**

Première version officielle, fonctionnalités actuellement prises en charge :

1. Créer des collections pour catégoriser et organiser les applications
2. Importer des liens App Store dans les collections pour une reconnaissance automatique, avec vues liste et grille
3. Ajouter des notes personnalisées et des évaluations personnalisées pour les collections et les applications
4. Trier les collections, définir des couleurs, basculer entre plusieurs vues en cartes
5. Copier et déplacer des applications entre collections
6. Importation par lots de liens d'applications
7. Synchronisation iCloud pour les collections, notes et évaluations ; import/export de données au format JSON
8. Consulter les informations App Store dans l'application, accès direct à la page App Store correspondante en un tap
9. Générer des cartes pour partager des collections (actuellement 3 styles)
10. Basculer entre les modes de thème (clair, sombre, système) et les couleurs d'accentuation

**2. Corrections de bugs**

1. Correction du tri des applications par date de création sur la page de détail de la collection
2. Correction des problèmes de synchronisation iCloud : réécriture de la synchronisation automatique en synchronisation manuelle par écrasement
3. Correction du délai de réponse lors du changement de mode de thème
4. Correction du problème de hauteur de la fenêtre contextuelle sur la page des paramètres macOS
5. Ajout de la sélection multiple dans l'extension de partage système pour ajouter à plusieurs collections
6. Ajout de menus de pression longue (copier, déplacer, modifier) pour les applications sur la page de détail de la collection
7. Ajout d'une opération d'effacement des données, prend en charge la réinitialisation/suppression des données locales/cloud
8. Ajout d'une sauvegarde de l'historique des données locales/cloud, conserve les 10 derniers enregistrements complets pouvant être restaurés localement
9. Ajout d'une disposition adaptative des applications en vue icône sous macOS en fonction de la largeur de la fenêtre
10. Ajout de l'affichage des plateformes prises en charge et des informations d'achat intégré sur la page de détails de l'application
