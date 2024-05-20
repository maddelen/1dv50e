## Testrapport - Manuella tester

| Test | Beskrivning               | PASS/FAIL | |
|------|---------------------------|------------------|-----------| 
| TC1 | Starta applikationen och se om man kommer till startsidan. |  Pass  | |
| TC2 | Fylla i formuläret och slutföra en anmälan. |  Pass  | |
| TC3 | Försöka logga in med fel username eller password som admin via /login. |  Pass  | |
| TC4 | Logga in med korrekt username och password som admin via /login. |  Pass  | |
| TC5 | Redigera antalet anmälda i ett sällskap |  Pass  | |
| TC6 | Ta bort en anmälan. |  Pass  | |
| TC7 | Logga ut från admin. |  Pass  | |

Redigera antalet anmälda i ett sällskap
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

![Start](/Testrapport/images/start.png)
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
Ett meddelande bör visas som verifierar att bokningen genomfördes.

![Start](/Testrapport/images/submitOK.png)

</details>

<details>
<summary>
<b> TC 3: Försöka logga in med fel username eller password som admin via /login.</b>
</summary>
<br>
<b>Testinstruktioner:</b><br>
1. Öppna upp terminalen i visual studio code.<br>
2. Skriv in `npm run dev`<br>
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:8080/login` i en webbläsare.<br>
4. Se ett login formulär. <br>
4. Fylla i fel username eller password sen klicka på "Login". <br>

<b>Förväntad resultat:</b>
Ett meddelande bör visas som förklarar att inloggningen misslyckades.

![Start](/Testrapport/images/loginFail.png)

</details>

<details>
<summary>
<b> TC 4: Logga in med korrekt username och password som admin via /login.</b>
</summary>
<br>
<b>Testinstruktioner:</b><br>
1. Öppna upp terminalen i visual studio code.<br>
2. Skriv in `npm run dev`<br>
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:8080/login` i en webbläsare.<br>
4. Se ett login formulär. <br>
4. Fylla i korrekt username och password sen klicka på "Login". <br>
5. Admin sidan ska genereras vid lyckad inloggning. <br>

<b>Förväntad resultat:</b>
Vid korrekt inloggning ska Attendees sidan visas med alla anmälningar samt sammanställning av antalet anmälda per match.

![Start](/Testrapport/images/attendees.png)

</details>

<details>
<summary>
<b> TC 5: Redigera antalet anmälda i ett sällskap.</b>
</summary>
<br>
<b>Testinstruktioner:</b><br>
1. Öppna upp terminalen i visual studio code.<br>
2. Skriv in `npm run dev`<br>
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:8080/login` i en webbläsare.<br>
4. Se ett login formulär. <br>
4. Fylla i korrekt username och password sen klicka på "Login". <br>
5. Admin sidan ska genereras vid lyckad inloggning. <br>
6. Admin ska se ett formulär med anmälningar, och till höger om anmälningar ska det synas en "Edit" länk. 
7. Admin ska klicka på "Edit" länken och få ett formulär med anmälan ifylld och möjlighet att ändra antalet i formuläret.
8. Admin klickar på "Save changes" och får se den sparade ändringen i tabellen för det sparade anmälningarna.

<b>Förväntad resultat:</b>
Vid klick på "Edit ska ett formulär med redigeringsmöjligheter synas. Samt när klick på "Save changes" ska admin slussas till attendees tabellen med meddelande att ändringarna sparats och att även den sammanställning av antalet anmälda till matchen uppdaterats.

![Start](/Testrapport/images/editAttendees.png)
![Start](/Testrapport/images/editOK.png)

</details>

<details>
<summary>
<b> TC 6: Ta bort en anmälan.</b>
</summary>
<br>
<b>Testinstruktioner:</b><br>
1. Öppna upp terminalen i visual studio code.<br>
2. Skriv in `npm run dev`<br>
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:8080/login` i en webbläsare.<br>
4. Se ett login formulär. <br>
4. Fylla i korrekt username och password sen klicka på "Login". <br>
5. Admin sidan ska genereras vid lyckad inloggning. <br>
6. Admin ska se ett formulär med anmälningar, och till höger om anmälningar ska det synas en soptunna-ikon. 
7. Admin ska klicka på ikonen och då försvinner den anmälningen från tabellen.


<b>Förväntad resultat:</b>
Vid klick på ikonen försvinner anmälningen ur tabellen och ett meddelande visas att borttagningen av anmälan gjordes. Sammanställning av antalet anmälda till matchen uppdaterats.

![Start](/Testrapport/images/deleteAttendee.png)


</details>

<details>
<summary>
<b> TC : Logga ut från admin.</b>
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
Vid klick på log out så ska användaren slussas till inloggningssidan.

![Start](/Testrapport/images/login.png)

</details>