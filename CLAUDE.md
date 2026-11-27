# Regler for arbejde på aiautomationgreenland.dk

Hjemmesiden for AI Automation Greenland (enkeltmandsvirksomhed, ejer: Tobias Albrechtsen).
Siden kører på GitHub Pages fra `main` og er live på https://aiautomationgreenland.dk (se `CNAME`).
Alt, der lægges på `main`, går live med det samme.

## Hvordan der arbejdes

1. Ret **aldrig** direkte på `main`. Alt laves på en kladde-gren (fx `kampagne-opdatering`).
2. Vis altid Tobias et billede (screenshot) af ændringen, før noget går live.
3. Intet merges til `main`, før Tobias har skrevet "læg det live" eller lignende.

## Skal altid godkendes af Tobias først

4. Priser, rabatter, frister og kampagnevilkår.
5. Juridisk tekst: privatlivspolitik, CVR, adresse og kontaktoplysninger.
6. Logo og farver.
7. Nye sider eller sider, der skal slettes.

## Må rettes uden at spørge (stadig kun på kladde-gren)

8. Stavefejl, links der ikke virker, og tekniske fejl.

## Faste regler for indholdet

9. Firmaet skriver i "vi"-form, aldrig "jeg".
10. Ændres noget på en dansk side, skal den tilsvarende engelske side også opdateres
    (`index.html` ↔ `en.html`, `kampagne.html` ↔ `campaign.html`).
11. Grønlandsk tekst kommer kun fra Tobias' tolk. Oversæt aldrig selv til grønlandsk.
12. Antal ledige kampagnepladser (klassen `kledige`) opdateres altid på både `kampagne.html` og `campaign.html`.
13. Der må aldrig ligge kodeord, API-nøgler eller andre hemmeligheder i repoet.

## Fakta om siden

- Offentlig kontaktmail: kontakt@aiautomationgreenland.dk
- Kontaktformularer sender via Formspree.
- Chatbotten styres fra `chat.js` (n8n-webhook; tom = ingen chat vises).
- Farver: mørkeblå `#0a2a43`, rød `#d00c33`, isblå `#eaf5fb`. Skrifttyper: Archivo (overskrifter) og Inter (tekst).
- Logoet ligger både i `logo.svg` og som `<symbol id="mark">` inde i hver side. Ændres logoet, skal alle steder opdateres.
- Kampagnen "Pilotvinter 2027" løber til 31. januar 2027 eller til de 3 pladser er taget.
