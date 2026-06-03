# Wie App-Regionen verwendet werden
**App-Region** bedeutet: welches **Land bzw. welcher regionale App Store** von AppBox verwendet wird, wenn **Informationen wie Beschreibungen, Symbole usw.** aus dem App Store abgerufen werden.

Damit kannst du: **Apps finden, die in dieser Region verfügbar sind**, **Namen und Symbole passend zur Region anzeigen lassen** sowie **Regionen gesammelt und einheitlich abfragen**.

:::info
**Hinweis:** Verfügbarkeit, Übersetzungen von App-Namen usw. richten sich immer nach dem jeweiligen regionalen App Store. Wenn angezeigt wird, dass eine App in dieser Region nicht verfügbar ist, stammt diese Information direkt vom Store und bedeutet nicht, dass deine Sammlung verloren gegangen ist.
:::

## Wann diese Funktion nützlich ist
+ **Eine App lässt sich nicht finden** → Region wechseln und erneut suchen (einige Apps sind nur in bestimmten Stores verfügbar).  
+ **Apps mit gleichem Namen schwer unterscheidbar** → Regionen helfen dabei, die angezeigten Informationen voneinander zu unterscheiden.  
+ **Der Link enthält bereits eine Region** → AppBox erkennt die Region **vorrangig anhand des Links** (siehe unten).  
+ **Listen mit mehreren Ländern** → Über **Filter · Region** anzeigen oder nach einer **Massenänderung der Region** aktualisieren.

## App-Regionen in den „Einstellungen“ verwalten
**Einstellungen → Apps → App-Region**

<!-- Dies ist ein Bild, OCR-Inhalt: -->
![](../../assets/region/region-settings.png)

Hier befindet sich die **„Regionsabfrageliste“**: aktivierte Länder oder Regionen. Die Reihenfolge **von oben nach unten** entspricht der Priorität (Einträge weiter oben werden zuerst verwendet; auch bei mehreren Regionen wird diese Reihenfolge berücksichtigt).

| Aktion | Beschreibung |
| --- | --- |
| **Region hinzufügen** | Auf „Region hinzufügen“ tippen und eine Region aus der Liste auswählen. Es können **maximal 10 Regionen** hinzugefügt werden; bei Erreichen des Limits erscheint ein Hinweis. |
| **Löschen** | Einen Eintrag **nach links wischen**, um ihn zu löschen. Mindestens **1 Region muss erhalten bleiben**. |
| **Sortieren** | Oben rechts auf **Sortieren** tippen, Reihenfolge anpassen und anschließend mit **Bestätigen** speichern. Die **oberste Region** dient normalerweise als Standardpriorität (insbesondere wenn die Region nicht aus dem Link erkannt werden kann). |
| **Leere Liste** | Die Seite weist darauf hin, dass zuerst über „Region hinzufügen“ Regionen ausgewählt werden müssen. |

### Unterschied zur Liste „Region auswählen“
In Bereichen wie **App hinzufügen** oder **App-Details** zeigt die eingeblendete Liste **„Region auswählen“** normalerweise nur die Regionen an, die du in den Einstellungen bereits aktiviert hast (also die oben genannte „Regionsabfrageliste“). Dadurch wird ein schneller Wechsel erleichtert.

Die Funktion **Region hinzufügen** in den Einstellungen greift dagegen auf das **vollständige Regionsverzeichnis** zu, um die Liste der aktivierten Regionen zu erweitern.

## App-Store-Links und Regionen: Erkennungsregeln
Wenn du einen **App-Store-Link** einfügst oder teilst, versucht AppBox möglichst die **Region bzw. das Land** direkt aus dem Link zu erkennen, zum Beispiel:

+ Enthält der Link etwas wie `…/cn/app/…` oder `…/us/app/…` — also einen **zweibuchstabigen Code** (meist klein geschrieben) — wird dieser normalerweise als entsprechende Region interpretiert (z. B. cn → chinesischer Festland-Store, us → US-Store).

| Situation | Verhalten |
| --- | --- |
| **Die Region ist im Link erkennbar** | Unter **App hinzufügen → App-Link** wird die Zeile „Land oder Region“ normalerweise **nicht angezeigt**, da die Region bereits durch den Link bestimmt wurde. Änderungen an der Reihenfolge der Regionen in den Einstellungen **beeinflussen dieses Verhalten nicht**. |
| **Die Region ist im Link nicht erkennbar** | Es erscheint die Auswahl **„Land oder Region“** (z. B. „Festlandchina (cn)“). Verwendet wird dabei die aktuell in den Einstellungen ausgewählte Region. |
| **Mehrere Links gleichzeitig einfügen** | Kann der gesamte Inhalt **nicht** als einzelner regionsbezogener Link interpretiert werden, wird die Option „Land oder Region“ normalerweise **angezeigt**. Alle Links verwenden dann gemeinsam die ausgewählte Regionsstrategie. |

**Kurz gesagt:** Wenn der Link die Region eindeutig angibt, folgt AppBox dem Link. Falls nicht, verwendet AppBox die von dir ausgewählte Region.

## Region beim Hinzufügen einer App festlegen
<!-- Dies ist ein Bild, OCR-Inhalt: -->
![](../../assets/region/add-app-region.png)

## Region auf der App-Detailseite anzeigen und ändern
<!-- Dies ist ein Bild, OCR-Inhalt: -->
![](../../assets/region/app-detail-region.png)

### Region anzeigen
Öffne in den App-Details den Bereich **„Weitere Informationen“**. Dort zeigt die Zeile **„Region“** den Namen der Store-Region an, die aktuell diesem gespeicherten Eintrag zugeordnet ist.

### Region ändern (nur für Store-basierte Apps)
1. Im **„⋯“**-Menü oben rechts auf der App-Detailseite **„Region ändern“** auswählen.  
2. In **„Region auswählen“** eine Region auswählen und bestätigen.  
3. AppBox prüft anschließend erneut im Store, ob die App in der neuen Region verfügbar ist.  
    - **Erfolgreich:** Name, Symbol und weitere Informationen werden aktualisiert (falls vom Store bereitgestellt), anschließend erscheint die Meldung **„Änderung erfolgreich“**.  
    - **Fehlgeschlagen:** Falls beispielsweise die Meldung **„Diese App ist im aktuell ausgewählten Store nicht verfügbar“** erscheint, wird die Region automatisch auf den vorherigen Wert zurückgesetzt, um fehlerhafte Zustände zu vermeiden.

> Für **benutzerdefinierte Apps** wird die Funktion **„Region ändern“** derzeit nicht angezeigt, da deren Informationen manuell eingetragen werden.
>

## App-Regionen innerhalb einer App-Sammlung verwalten
<!-- Dies ist ein Bild, OCR-Inhalt: -->
![](../../assets/region/collection-region.png)

### Regionen gesammelt ändern
Wenn innerhalb derselben **App-Sammlung** mehrere Store-basierte Apps ausgewählt wurden, können sie gleichzeitig auf dieselbe Region umgestellt werden, um die angezeigten Informationen gemeinsam zu aktualisieren.

#### Schritte
1. Eine **App-Sammlung** öffnen.  
2. Oben rechts auf **„⋯“** → **„Apps auswählen“** tippen.  
3. Mehrere Apps markieren.  
4. In der unteren Werkzeugleiste auf **„Region“** (Globus-Symbol) tippen.  
5. Unter **„Region auswählen“** die Zielregion festlegen; die Store-Informationen werden anschließend nacheinander aktualisiert.  
6. Nach Abschluss kann die Seite **„Ergebnisse der Regionsänderung“** eingesehen werden. Erfolgreiche, fehlgeschlagene oder übersprungene Apps werden dort separat aufgeführt.

### Filtern (nur bestimmte Regionen anzeigen)
In den Details der App-Sammlung oben rechts auf das **Filter**-Symbol tippen → Feld **„Region“** → mehrere Regionen auswählen, um nur passende Apps innerhalb der aktuellen Sammlung anzuzeigen. Zur Auswahl stehen nur Regionen, die tatsächlich in dieser Sammlung vorkommen.

## „Apple Data“ beim Datenimport

Unter **Einstellungen → Datenimport → Apple Data** können vor dem Import 1–10 Regionen ausgewählt werden. App-Informationen werden anschließend automatisch entsprechend der Listenreihenfolge abgerufen, bis ein Treffer gefunden wurde oder alle Strategien ausgeschöpft sind.

Bitte beachten: Werden zu viele Regionen ausgewählt, verlangsamt sich der Import deutlich. Empfohlen werden 1–3 Regionen.