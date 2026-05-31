# Comment utiliser les régions d’application
La **région d’application** désigne : le **pays ou la région de l’App Store** utilisé par AppBox lorsqu’il **récupère des informations telles que les descriptions, icônes, etc.**.

Cette fonctionnalité vous permet de : **trouver des applications disponibles dans une région donnée**, **afficher les noms et icônes correspondant à cette région**, ainsi que **effectuer des recherches de région de manière groupée et unifiée**.

:::info
**Remarque :** La disponibilité des applications, les traductions des noms, etc. dépendent du contenu de l’App Store de la région concernée. Si une application est indiquée comme indisponible dans cette région, il s’agit d’un résultat renvoyé par l’App Store et non d’une perte de vos favoris.
:::

## Dans quels cas cette fonction est utile
+ **Impossible de trouver une application par son nom** → Essayez de changer de région et de rechercher à nouveau (certaines applications ne sont disponibles que dans certains App Store).  
+ **Applications portant le même nom** → Utilisez la région pour différencier les informations affichées.  
+ **Le lien contient déjà une région** → AppBox reconnaît **en priorité la région à partir du lien** (voir ci-dessous).  
+ **Listes multi-pays** → Utilisez **Filtrer · Région** pour les afficher, ou effectuez d’abord une **modification groupée des régions** avant d’actualiser.

## Gérer les régions d’application dans les « Réglages »
**Réglages → Applications → Région de l’application**

<!-- Ceci est une image, contenu OCR : -->
![](/assets/region/region-settings.png)

Il s’agit de la **« Liste des régions de recherche »** : les pays ou régions activés. L’ordre **de haut en bas** correspond à la priorité (les éléments placés plus haut sont utilisés en premier ; cet ordre est également pris en compte lorsqu’il faut essayer plusieurs régions).

| Action | Description |
| --- | --- |
| **Ajouter une région** | Touchez « Ajouter une région » puis choisissez une région dans la liste. Vous pouvez ajouter **jusqu’à 10 régions** ; un message s’affichera une fois la limite atteinte. |
| **Supprimer** | **Faites glisser vers la gauche** sur une ligne pour la supprimer. Il faut conserver **au moins 1 région**. |
| **Trier** | Touchez **Trier** en haut à droite, réorganisez les éléments puis validez avec **Confirmer**. En général, la région placée **tout en haut** est utilisée par défaut (notamment lorsque la région ne peut pas être déduite du lien). |
| **Liste vide** | La page affichera un message vous invitant à ajouter des régions via « Ajouter une région ». |

### Différence avec la liste « Sélectionner une région »
Dans des sections comme **Ajouter une application** ou **Détails de l’application**, la fenêtre **« Sélectionner une région »** n’affiche généralement que les régions déjà activées dans les réglages (c’est-à-dire la « Liste des régions de recherche » mentionnée ci-dessus), afin de faciliter les changements rapides.

En revanche, la fonction **Ajouter une région** dans les réglages permet de choisir parmi le **répertoire complet des régions** afin d’élargir la liste des régions activées.

## Liens App Store et régions : règles de reconnaissance
Lorsque vous collez ou partagez un **lien d’application App Store**, AppBox tente d’identifier automatiquement le **pays ou la région** à partir du lien, par exemple :

+ Si l’adresse contient quelque chose comme `…/cn/app/…` ou `…/us/app/…` — généralement un **code à deux lettres** (souvent en minuscules) — celui-ci sera normalement reconnu comme la région correspondante (par exemple cn → App Store Chine continentale, us → App Store américain).

| Situation | Comportement |
| --- | --- |
| **La région peut être identifiée à partir du lien** | Dans **Ajouter une application → Lien d’application**, la ligne « Pays ou région » n’apparaît généralement **pas**, car la région est déjà définie par le lien. Modifier l’ordre des régions dans les réglages **ne change pas** cette logique de priorité donnée au lien. |
| **La région ne peut pas être identifiée à partir du lien** | L’option **« Pays ou région »** s’affichera (par exemple « Chine continentale (cn) »), en utilisant la région actuellement sélectionnée dans vos réglages. |
| **Collage de plusieurs liens à la fois** | Si l’ensemble du contenu **ne peut pas** être interprété comme un lien unique contenant une région, l’option « Pays ou région » sera généralement **affichée**. Tous les liens utiliseront alors la même stratégie régionale choisie cette fois-ci. |

**En résumé :** si le lien précise clairement la région, AppBox suit le lien. Sinon, AppBox utilise la région sélectionnée dans vos réglages.

## Définir une région lors de l’ajout d’une application
<!-- Ceci est une image, contenu OCR : -->
![](/assets/region/add-app-region.png)

## Afficher et modifier la région depuis la page de détails d’une application
<!-- Ceci est une image, contenu OCR : -->
![](/assets/region/app-detail-region.png)

### Afficher la région
Dans les détails de l’application, ouvrez **« Plus d’informations »**. La ligne **« Région »** affiche le nom de la boutique actuellement associé au code de région de cette application enregistrée.

### Modifier la région (applications provenant de l’App Store uniquement)
1. Dans le menu **« ⋯ »** en haut à droite de la page de détails, touchez **« Modifier la région »**.  
2. Sélectionnez une région dans **« Sélectionner une région »**, puis confirmez.  
3. AppBox interrogera à nouveau l’App Store afin de vérifier si l’application existe dans la nouvelle région sélectionnée.  
    - **Succès :** le nom, l’icône et d’autres informations seront mis à jour (si disponibles dans le Store), puis un message **« Modification réussie »** apparaîtra.  
    - **Échec :** par exemple, si le message **« Cette application n’est pas disponible dans l’App Store sélectionné »** apparaît, la région sera automatiquement restaurée à sa valeur précédente afin d’éviter tout état incorrect.

> Les **applications personnalisées** n’affichent actuellement pas l’option **« Modifier la région »**, car leurs informations sont renseignées manuellement.
>

## Gérer les régions d’application dans une collection
<!-- Ceci est une image, contenu OCR : -->
![](/assets/region/collection-region.png)

### Modifier les régions en lot
Lorsque plusieurs applications provenant de l’App Store sont sélectionnées dans une même **collection d’applications**, vous pouvez les basculer simultanément vers une même région afin d’actualiser leurs informations d’affichage.

#### Étapes
1. Ouvrez une **collection d’applications**.  
2. Touchez **« ⋯ »** en haut à droite → **« Sélectionner des applications »**.  
3. Sélectionnez plusieurs applications.  
4. Touchez **« Région »** (icône de globe) dans la barre d’outils inférieure.  
5. Choisissez la région cible dans **« Sélectionner une région »** ; AppBox tentera ensuite de récupérer les informations du Store pour chaque application.  
6. Une fois terminé, vous pourrez consulter la page **« Résultats de la modification des régions »**, où les applications réussies, échouées ou ignorées seront listées séparément.

### Filtrer (afficher uniquement certaines régions)
Dans les détails de la collection, touchez l’icône **Filtrer** en haut à droite → champ **« Région »** → sélection multiple possible pour n’afficher que les applications correspondant aux régions choisies. Les régions proposées sont limitées à celles réellement présentes dans cette collection.

## « Apple Data » lors de l’importation des données

Dans **Réglages → Importation des données → Apple Data**, vous pouvez sélectionner de 1 à 10 régions avant de lancer l’importation. Les informations des applications seront ensuite récupérées automatiquement selon l’ordre de la liste, jusqu’à ce qu’une correspondance soit trouvée ou que toutes les stratégies aient été épuisées.

Attention : sélectionner trop de régions ralentira considérablement la vitesse d’importation. Il est recommandé d’en choisir seulement 1 à 3.