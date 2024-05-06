## Testrapport - Manuella tester

| Test | Beskrivning               | PASS/FAIL | |
|------|---------------------------|------------------|-----------| 
| TC1 | Starta applikationen och se om man kommer till startsidan. |  Pass  | |
| TC2 | Fylla i formuläret och slutföra en anmälan. |  Pass  | |
| TC3 | Logga in som admin via /login. |  Pass  | |
| TC4 | Logga ut från admin. |  Fail  | |


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

![Start](/public/img/start.png)
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

<details>
<summary>
<b> TC 3: Logga in som admin via /login.</b>
</summary>
<br>
<b>Testinstruktioner:</b><br>
1. Öppna upp terminalen i visual studio code.<br>
2. Skriv in `npm run dev`<br>
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:8080/login` i en webbläsare.<br>
4. Se ett login formulär. <br>
4. Fylla i username och password sen klicka på "Login". <br>
5. Admin sidan ska genereras vid lyckad inloggning. <br>

<b>Förväntad resultat:</b>
Ett meddelande bör visas som .

![Start](/src/images/start.png)

</details>

<details>
<summary>
<b> TC 4: Logga ut från admin.</b>
</summary>
<br>
<b>Testinstruktioner:</b><br>
1. Öppna upp terminalen i visual studio code.<br>
2. Skriv in `npm run dev`<br>
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:8080/login` i en webbläsare.<br>
4. Se ett login formulär. <br>
4. Fylla i username och password sen klicka på "Login". <br>
5. Admin sidan ska genereras vid lyckad inloggning. <br>
6. En länk med "Log out" ska synas. <br>
7. Klicka på länken och login sidan ska visas <br>

<b>Förväntad resultat:</b>
Ett meddelande bör visas som .

![Start](/src/images/start.png)

</details>