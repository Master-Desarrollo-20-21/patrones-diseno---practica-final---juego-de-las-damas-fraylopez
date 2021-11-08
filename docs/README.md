# Checkers requirements

- [Use cases](#use-cases)
  - [Game Context](#game-context)
  - [AITrainer Context](#ai-training-context)
  - [Specification](#specification)
    - [Start](#start-use-case)
    - [EditConfig](#editconfig-use-case)
- [Analysis](#analysis)
  - [Packages](#packages)
  - [Hexagonal Architecture](#hex-arch)
- [UI Prototype](#player-ui-prototype)
  - [Player](#player-ui-prototype)
  - [AI Trainer](#aitrainer-ui-prototype)

## Use cases
![use-cases](output/use-cases/UseCases.png)

### Game Context
![Game context](output/use-cases/context/GameContextDiagram.png)
### AI training Context Diagram

![ai-training-context](output/use-cases/context/AITrainingContextDiagram.png)

## Start use case specification
![start-use-case](output/use-cases/specification/StartUseCaseSpecification.png)
## EditConfig use case specification
![editconfig-use-case](output/use-cases/specification/EditConfigUseCaseSpecification.png)

## UI Prototype
### Player UI Prototype


```
1) NewGame
2) LoadGame
Option? [1-2]: 1
How many players?1

-------------------

Select difficulty? [1-8]: 1

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


------------
1) New Game
2) Restart (with same difficulty)
3) Save Game
Option? [1-3]: 3

------------

Save game? (y/n): y
Insert game name: my-game

```

### AITrainer UI Prototype

```
1) Read current config
2) Edit config
3) Load edit session
Option? [1-3]: 1

-----------------

Current values:
alpha: 0.45
beta: 7.2

1) Read current config
2) Edit config
3) Load edit session
Option? [1-3]: 2

-----------------
1) Edit [alpha]
2) Edit [beta]
Option? [1-2]: 1

-----------------

Insert new value for [alpha (0.45)]: 0.55

-----------------

1) Edit [alpha]
2) Edit [beta]
3) Test
Option? [1-3]: 3


-------------------

select token from rowcolumn (ie: 21):21

-------------------

move to rowcolumn (ie: 30):30

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
AITrainer won!

-------------------

Save Configuration? (y/n): y

-------------------

Assign difficulty to this configuration(1-10): 6
Done, now exiting.

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
AITrainer loose!

-------------------

1) Retry
2) Exit
Option? [1-2]: 1

```

## Analysis
### Packages

![packages](output/ArchitecturePackages.png)
### Hexagonal Architecture

![hex-arch](output/ArchHexPackage.png)
