# Versionsprotokoll

## V1.7.3

1. Sammlungsfilter unterstützen jetzt die Stichwortsuche für eine effizientere App-Suche
2. Neue Bilderkennungs-Importfunktion — Apps können schnell per Screenshot hinzugefügt werden
3. Optimierte System-Share-Extension, unterstützt jetzt die Synchronisation von App-Bewertungen und Tag-Informationen
4. Sammlungsverwaltung mit neuer Mehrfachauswahl-Löschfunktion für einfachere Organisation
5. Optimierter Apple Data Import-Prozess, unterstützt jetzt Hintergrundimport
6. Problem behoben, bei dem die Schaltflächen zum Bearbeiten von Beschreibung und Tags nach dem Aufrufen der App-Details von der Suchseite aus nicht verwendet werden konnten

## V1.7.2

1. Neue App-Kartenansicht, konfigurierbare Anzeige von Tags, Bewertungen und Beschreibungsfeldern
2. Einstellungen – Seite "Alle Apps" unterstützt jetzt Tap zum direkten Sprung in den App Store
3. Optimierte Anzeige des App-Namens in der Symbolansicht auf der Sammlungsdetailseite
4. Optimierter App-Vorschaubereich auf der App-Seite, unterstützt das Hinzufügen von App-Tags
5. App-Detailseite zeigt jetzt an, zu welchen Sammlungen die App gehört
6. Aktualisieren-Schaltfläche auf der Sammlungsfreigabeseite hinzugefügt
7. Tag-Datenoptimierung: unterstützt Import, Export und Synchronisation
8. App-Regionsoptimierung: automatische Region (region_auto) entfernt
9. Optimierung der Sammlungsfilterung: Regionsfilter zeigt jetzt die tatsächlichen App-Regionen in der aktuellen Sammlung an

## V1.7

1. Vollständig an iOS 26 angepasst, Seiteninteraktion neu strukturiert
2. Neue Funktionen zur Änderung und Batch-Änderung von App-Regionen
3. Neue Aktualisierungsfunktion für Apps innerhalb einer Sammlung – ruft den neuesten App-Namen und das neueste Symbol ab
4. Neue App-Tags und Tag-Verwaltung, unterstützt Suchen, Anzeigen, Synchronisieren und Bearbeiten von Tags
5. Neue Filterfunktion innerhalb von Sammlungen, unterstützt Filtern nach Plattform, Region und Tags
6. Neue Unterstützung für den Import von App Store-Downloadaufzeichnungen aus Apple Data & Privacy
7. Unterstützt Anzeigekonfiguration für Sammlungs- und App-Detailseiten

## V1.6

> Veröffentlichungsdatum: 2026-02-14

1. Datensynchronisation neu strukturiert, stabiler und unterstützt Synchronisation benutzerdefinierter Apps
2. Startseiten-Rasteransicht unterstützt benutzerdefinierte Sortierung
3. Sammlungsfreigabe – Exportieren, Teilen und Importieren von Sammlungen über QR-Code-Karten
4. Datenexport enthält jetzt benutzerdefinierte Sortierreihenfolgenfelder für Sammlungen
5. Beim Hinzufügen von Apps von der Startseite können auf der Sammlungsauswahlseite neue Sammlungen erstellt werden
6. Importprotokolle: detaillierter Importverlauf zur Fehlerbehebung bei Importproblemen
7. Optimierter Einstieg für die App-Link-Erkennung, unterstützt Einzel- und Batch-Hinzufügen
8. Sammlungsbeschreibungen und App-Beschreibungen werden bei Leerheit ausgeblendet und bei Überlänge automatisch eingeklappt
9. Unterstützt Kopieren von Textinhalten wie App-Beschreibungen von der App-Detailseite
10. Problem mit Bildaussetzern bei zu vielen Sammlungen auf der Startseite und Verzögerungen beim Seitenwechsel behoben
11. App-Symbolaktualisierung: unterstützt Aktualisierung vorhandener App-Symbole
12. Zeichenbegrenzung für App-Beschreibungen auf der System-Share-Extension-Seite auf 2000 Zeichen geändert

## V1.5.1 (Nicht im App Store)

> Build-Datum: 2026-01-18

**1. Änderungen**

- Datenaktualisierungslogik neu geschrieben. Wenn nach dem Update ein Datenaktualisierungshinweis erscheint, kann dieser bedenkenlos durchgeführt werden; die Dauer hängt von der Anzahl der Apps ab und kann einige Minuten betragen
- Schwebende Hinzufügen-Schaltfläche unten rechts auf der Sammlungsdetailseite entfernt, mit Batch-Hinzufügen im Menü "Hinzufügen/Batch-Hinzufügen" oben rechts zusammengeführt
- Verzögerungen und Bildaussetzer beim Wechsel zwischen zu vielen Sammlungen auf der Startseite behoben
- Zeichenbegrenzung für App-Beschreibungen auf der System-Share-Extension-Seite auf 2000 Zeichen geändert

**2. Neuerungen**

- Apps von der Startseite hinzufügen: Neue Sammlungen können auf der Sammlungsauswahlseite erstellt werden
- Apps von der Startseite hinzufügen: Nach erfolgreichem Hinzufügen erscheint eine Rückmeldung
- Apps von der Startseite hinzufügen: Der App-Link-Tab unterstützt Einzel-/Batch-Linkerfassung und Anzeigen des Erkennungsverlaufs
- Datenimport/-export: unterstützt Import und Export benutzerdefinierter Sortierreihenfolgenfelder für Sammlungen
- Datenimport: Protokollanzeige zur Fehlerbehebung bei Importproblemen
- Sammlungsbeschreibungen und App-Beschreibungen werden bei Überlänge automatisch eingeklappt
- Unterstützt Kopieren von Textinhalten wie App-Beschreibungen von der App-Detailseite

## V1.5

> Datum: 2025-12-26

**0. Wichtige Hinweise:**

- Im Vergleich zu V1.4 wurde das Datenmodell aktualisiert, daher ist eine Datenaktualisierung erforderlich. Ein Hinweis erscheint automatisch – einfach bestätigen, um fortzufahren
- Nach der Aktualisierung kann der Status unter Einstellungen → Datenaktualisierung → Aktualisierungsverlauf überprüft werden. Fehlgeschlagene Daten manuell löschen und erneut hinzufügen
- Benutzer, die alte Daten noch nicht wiederhergestellt haben, können die Entwicklertools zur Wiederherstellung verwenden. Die Anleitung finden Sie unter Einstellungen → Benutzerhandbuch → FAQ

**1. Änderungen:**

- Unterstützt Import von Links für Mac-exklusive Software
- Zeichenbegrenzung für App-Beschreibungen von 200 auf 2000 Zeichen erhöht
- Layout der Startseite angepasst, neue untere Aktionsleiste; Sortierung und Ansichtswechsel in das Menü oben rechts verschoben
- Abonnementinformationen werden jetzt beim Kopieren/Verschieben von Apps synchronisiert

**2. Neue Funktionen:**

- Sammlungssortierung: nach Name (A-Z und Z-A) oder Erstellungsdatum (neueste-älteste und älteste-neueste)
- Benutzerdefinierter Import: Benutzer können Symbole, Namen, Quellen und andere Informationen eingeben
- Direkte Suche und Hinzufügen von Apps nach Name innerhalb von AppBox
- App-Detailseite mit neuem Bereich "Weitere Informationen" mit Importzeitpunkt, Region und Quelllink
- Datenexport jetzt als vollständiges komprimiertes Paket mit App-Symbol-Dateien und JSON-Datei
- App-Detailseite zeigt die App-ID; Übersetzungsschaltflächen zu den Bereichen App-Beschreibung und Update-Verlauf hinzugefügt
- App-Regionsauswahl: Regionsauswahl beim Hinzufügen neuer Apps, unterstützt Regionssortierung (Einstellungen → App-Regionen)
- Suchergebnisseite mit Langdruck-Menüs (Bearbeiten, Kopieren/Verschieben, Löschen) für Sammlungen und Apps
- Vollständige Vorlagen und Feldbeschreibungen, unterstützt Batch-Import über Vorlagendateien
- Symbol-Zwischenspeicherung: lädt App-Symbole lokal herunter für Offline-Anzeige
- Bearbeitung von App-Beschreibungen während des Imports unterstützt (sowohl im Startseiten-Modul als auch auf der Sammlungsdetailseite)
- Entwicklertools zur Wiederherstellung alter Datenbankversionen hinzugefügt

**3. Sonstiges:**

- Optimierung der gesamten App-Importlogik: AppBox extrahiert numerische IDs (z. B. `id1234567890`) aus Links und fragt den App Store nach App-Informationen. Die Regionsauswahlstrategie: Priorität hat der explizite Regionscode im Link (z. B. `/cn/`, `/us/`); fehlt dieser, wird die Regionsliste in Einstellungen → App-Regionen von oben nach unten durchlaufen. "Universell" bedeutet keine bestimmte Region, sondern wird von Apples Server basierend auf der Anfrageumgebung automatisch ermittelt (meistens USA). Details siehe Einstellungen → Benutzerhandbuch → FAQ → App-Link-Erkennungsregeln und Regionsfunktion

## V1.4

## V1.01

> Datum: 2025-11-06

**1. Neue Funktionen**

1. Neue Abonnementverfolgung: benutzerdefinierte Abonnement-Start-/Enddaten, Preis, Währung und Abonnementinfo – muss manuell in Einstellungen → App-Eigenschaften aktiviert werden
2. Neue Mehrsprachenunterstützung: Sprachumschaltung in Einstellungen → Sprache. Derzeit unterstützt: Vereinfachtes Chinesisch, Traditionelles Chinesisch, Englisch, Deutsch, Französisch, Japanisch, Koreanisch und Türkisch – 8 Sprachen insgesamt, weitere in Vorbereitung
3. Neue Unterstützung für Vorwärts- und Rückwärtssortierung von Apps innerhalb einer Sammlung
4. Optimierte Suchseite, jetzt mit Unterstützung für die Suche in App-Beschreibungen

**2. Fehlerbehebungen**

1. Inkonsistenz zwischen der Sammlungslistenreihenfolge in der System-Share-Extension und der Haupt-App behoben
2. Stabilität der System-Share-Extension verbessert, Probleme beim Import von Apps behoben, wenn die Haupt-App nicht im Hintergrund läuft

## V1.0

> Datum: 2025-10-28

**1. Neue Funktionen**

Erste offizielle Version, derzeit unterstützte Funktionen:

1. Sammlungen erstellen, um Apps zu kategorisieren und zu speichern
2. App Store-Links in Sammlungen importieren für automatische App-Erkennung, mit Listen- und Rasteransicht
3. Benutzerdefinierte Notizen und Bewertungen für Sammlungen und Apps hinzufügen
4. Sammlungen sortieren, Farben einstellen, zwischen mehreren Kartenansichten wechseln
5. Apps zwischen Sammlungen kopieren und verschieben
6. Batch-Import von App-Links
7. iCloud-Synchronisation für Sammlungen, Notizen und Bewertungen; Datenimport/-export als JSON-Dateien
8. App Store-App-Informationen innerhalb der App anzeigen, mit einem Tap zur entsprechenden App Store-Seite springen
9. Karten zum Teilen von Sammlungen generieren (derzeit 3 Stile)
10. Themenmodi (Hell, Dunkel, System) und Akzentfarben wechseln

**2. Fehlerbehebungen**

1. Problem behoben, bei dem Apps auf der Sammlungsdetailseite nach Erstellungsdatum sortiert wurden
2. iCloud-Synchronisationsprobleme behoben: Synchronisation von automatisch auf manuelles Überschreiben umgestellt
3. Verzögerte Reaktion beim Wechsel des Themenmodus behoben
4. Popup-Fenster-Höhenproblem auf der macOS-Einstellungsseite behoben
5. Mehrfachauswahl in der System-Share-Extension zum Hinzufügen zu mehreren Sammlungen hinzugefügt
6. Langdruck-Menüs (Kopieren, Verschieben, Bearbeiten) für Apps auf der Sammlungsdetailseite hinzugefügt
7. Datenlöschvorgang hinzugefügt, unterstützt Zurücksetzen/Löschen lokaler/Cloud-Daten
8. Lokale/Cloud-Datenverlaufssicherung hinzugefügt, speichert die letzten 10 vollständigen Datensätze zur lokalen Wiederherstellung
9. Adaptive App-Anordnung in der Symbolansicht unter macOS basierend auf Fensterbreite hinzugefügt
10. Unterstützte Plattformen und In-App-Kaufinformationen zur App-Detailseite hinzugefügt
