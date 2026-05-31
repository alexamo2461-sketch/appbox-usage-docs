# Einige Apps haben keine Screenshots auf der Detailseite

Auf der App-Detailseite werden bei manchen Apps keine Screenshots angezeigt. Dies ist weder ein Netzwerkproblem noch ein Fehler in AppBox. Die von der App Store API zurückgegebenen Informationen enthalten einfach keine Screenshots für diese Apps. Einfach ausgedrückt: Apple stellt sie nicht zur Verfügung, daher werden sie nicht angezeigt (ich weiß auch nicht, warum die App Store App Screenshots anzeigt, die Entwickler-API sie aber nicht zurückgibt).

Nach meinen Tests gilt: Bei Nischen-Apps oder Apps mit sehr wenigen Downloads werden keine Screenshots zurückgegeben; bei Mainstream-Apps sind immer Screenshots vorhanden.
