
## Juego de "Las Damas"

Se propone realizar una implementación del juego de las damas, con consola.

El juego de las damas (denominación como se conoce el juego en España) es, si se puede decir, una simplificación del ajedrez, en la que solamente se juega con peones. Los peones se mueven en diagonal y pueden saltar por encima de otros peones para "comerlos".

Las instrucciones completas se pueden ver en la [wikipedia](https://es.wikipedia.org/wiki/Damas). Aunque ellos muestran como distintas implementaciones. Nosotros jugaremos en un tablero de 8x8 y donde cada jugador tiene 12 fichas de cada color. Este vídeo de Youtube [aclara las reglas en 2 minutos](https://www.youtube.com/watch?v=jA-zevc2fao).


## UI

```
1) NewGame
2) LoadGame
Option? [1-2]: 1
How many players?1

-------------------
     columns
   0 1 2 3 4 5 6 7
0 ██● ██● ██● ██●
1 ● ██● ██● ██● ██
2 ██● ██● ██● ██●
3   ██  ██  ██  ██
4 ██  ██  ██  ██
5 ○ ██○ ██○ ██○ ██
6 ██○ ██○ ██○ ██○
7 ○ ██○ ██○ ██○ ██

1) Move
2) Exit
Option? [1-2]: 1
-------------------

select token from rowcolumn (ie: 21):21

-------------------

move to rowcolumn (ie: 30):30

-------------------

     columns
   0 1 2 3 4 5 6 7
0 ██● ██● ██● ██●
1 ● ██● ██● ██● ██
2 ██  ██● ██● ██●
3 ● ██  ██  ██  ██
4 ██  ██  ██○ ██
5 ○ ██○ ██  ██○ ██
6 ██○ ██○ ██○ ██○
7 ○ ██○ ██○ ██○ ██

1) Move
2) Undo
3) Exit
Option? [1-3]: 1

-------------------

...

-------------------

     columns
   0 1 2 3 4 5 6 7
0 ██◎ ██  ██  ██
1   ██  ██  ██  ██
2 ██  ██  ██  ██
3   ██○ ██○ ██  ██
4 ██  ██  ██◎ ██
5   ██○ ██  ██  ██
6 ██○ ██  ██  ██
7 ○ ██  ██  ██  ██
Player Black won!

Save game? (y/n): y
Insert game name: my-game
Restart? (y/n): y