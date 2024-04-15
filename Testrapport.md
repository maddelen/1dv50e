## Testrapport - Manuella tester

| Test | Beskrivning               | PASS/FAIL | |
|------|---------------------------|------------------|-----------| 
| TC1 | Starta applikationen och se om man kommer till startsidan. |  Pass  | |
| TC2 | Fylla i formuläret och slutföra en anmälan. |  Pass  | |


<br>

## Testfall
<details>
<summary>
<b> TC 1: Starta applikationen och se om man kommer till startsidan.</b>
</summary>
<br>
<b>Testinstruktioner:</b><br>
1. Öppna upp terminalen i visual studio code.<br>
2. Skriv in `npm run dev`<br>
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:8080/` i en webbläsare.<br>

<b>Förväntad resultat:</b>
Nu borde startsidan av applikationen visas (se bild nedan).

![Start](/src/images/start.png)
</details>

<details>
<summary>
<b> TC 2: Fylla i formuläret och slutföra en anmälan.</b>
</summary>
<br>
<b>Testinstruktioner:</b><br>
1. Öppna upp terminalen i visual studio code.<br>
2. Skriv in `npm run dev`<br>
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:8080/` i en webbläsare.<br>
4. Fylla i fälten i formuläret och klicka på "Boka". <br>

<b>Förväntad resultat:</b>
Ett meddelande bör visas som .

![Start](/src/images/start.png)

</details>