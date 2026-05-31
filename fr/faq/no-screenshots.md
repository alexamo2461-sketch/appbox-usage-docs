# Certaines applications n'ont pas de capture d'écran sur la page de détails

Sur la page de détails de l'application, certaines applications n'affichent pas de captures d'écran. Ce n'est ni un problème de réseau ni un bug d'AppBox. Les informations renvoyées par l'API de l'App Store ne contiennent tout simplement pas de captures d'écran pour ces applications. En termes simples, Apple ne les fournit pas, donc elles ne sont pas affichées (je ne sais pas non plus pourquoi l'application App Store affiche des captures d'écran alors que l'API développeur ne les renvoie pas).

D'après mes tests, la règle est la suivante : pour les applications de niche ou celles avec très peu de téléchargements, les captures d'écran ne sont pas renvoyées ; les applications grand public ont toutes des captures d'écran.
