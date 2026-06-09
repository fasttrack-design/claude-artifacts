/* ===================================================================
   WM 2026 – BESTÄTIGTE ERGEBNISSE (offizielle Quelle)
   -------------------------------------------------------------------
   Diese Datei wird von einem geplanten Claude-Task aktualisiert.
   Nur HIER stehen gesicherte Ergebnisse. Die Webseite liest sie beim
   Öffnen ein. Bestätigte Ergebnisse überschreiben deine Tipps und
   sperren die betroffenen Felder.

   Heute (Stand dieser Datei): noch kein K.-o.-Spiel hat stattgefunden
   (Turnierstart 11.06.2026, K.-o.-Runde ab 28.06.2026). Daher sind
   alle Felder Tipp-Felder.

   ------------------------- FORMAT --------------------------------
   updated : Datum/Uhrzeit der letzten Aktualisierung (String)
   source  : Quelle (String)

   qualified : Welche Mannschaft welches Sechzehntelfinal-Startfeld
               besetzt. Schlüssel = Setz-Code aus dem Spielplan,
               Wert = 3-Buchstaben-Teamcode.
               Beispiel:  "1A": "MEX",  "2B": "SUI",  "3CEFHI": "POR"

   results   : Tatsächlich gespielte K.-o.-Spiele. Schlüssel = interne
               Spiel-ID (SF1..SF16, AF1..AF8, VF1..VF4, HF1, HF2, P3, FIN).
               Wert = { home, away, hg, ag, winner }
                 home/away : Teamcodes
                 hg/ag     : Tore Heim/Auswärts (regulär+Verläng.)
                 winner    : "home" oder "away" (wichtig bei Elfmeter-
                             schießen; sonst aus Toren ableitbar)
               Beispiel:
                 "SF1": { home:"MEX", away:"NOR", hg:2, ag:1, winner:"home" }
   ================================================================== */

window.WM_RESULTS = {
  updated: "",            // z.B. "09.06.2026, 08:00 Uhr"
  source:  "FIFA / dpa",
  qualified: {
    // noch keine Gruppenphase entschieden
  },
  results: {
    // noch kein K.-o.-Spiel gespielt
  }
};
