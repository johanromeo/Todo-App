# Handledning med Christoffer

### Johans frågor

1. Hur kan jag skapa en bättre arkitektur?

- Svar: En komponent ska gärna göra en sak med ett tydligt syfte, men fokus ska ligga utifrån användarens perspektiv. Så "dumma" komponenter som möjligt, håll logiken simpel, KISS.

Kolla över namnsättning på mapparna, använd ej "Component" där.

2. När man t.ex trycker på "Add user", vad bör vara där istället för ett hårdkodat inputfält?

- Svar: Add user kan vara olika, beroende på

3. Hur ska man tänka med styling? Sätta upp en bas i App.css och sedan låta varje enskild komponent style efter behov?

- Svar: bas styling i index.css och sedan låta varje komponent sköta dens egna styling
