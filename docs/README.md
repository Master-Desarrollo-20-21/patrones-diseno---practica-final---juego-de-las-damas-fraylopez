# Checkers requirements

- [Use cases](#use-cases)
  - [Player Context](#game-context)
  - [AITrainer Context](#ai-training-context)
  - [Specification](#specification)
    - [Player](#player-use-cases)
      - [Launch](#launch-use-case-specification)
      - [Load](#load-use-case-specification)
      - [Move](#move-use-case-specification)
      - [Undo](#undo-use-case-specification)
      - [Redo](#redo-use-case-specification)
      - [Exit](#exit-use-case-specification)
      - [Restart](#restart-use-case-specification)
      - [SaveGame](#savegame-use-case-specification)
    - [User](#user-use-cases)
      - [Start](#start-use-case-specification)
    - [AITrainer](#aitrainer-use-cases)
      - [ShowCurrentConfig](#showcurrentconfig-use-case-specification)
      - [EditConfig](#editconfig-use-case-specification)
      - [SaveConfig](#saveconfig-use-case-specification)
- [UI Prototype](#player-ui-prototype)
  - [User](#player-ui-prototype)
  - [AI Trainer](#aitrainer-ui-prototype)

- [Analysis](#analysis)
  - [Packages](#packages-mvc)
  - [Collaboration](#collaboration-diagrams)
    - [Player](#player-use-cases-collaboration)
      - [Launch](#launch-collaboration)
      - [Load](#load-collaboration)
      - [SaveGame](#saveGame-collaboration)
      - [Move](#move-collaboration)
      - [Move Seq](#move-sequence)
      - [Undo](#undo-collaboration)
      - [Redo](#redo-collaboration)
      - [Exit](#exit-collaboration)
    - [User](#user-use-cases-collaboration)
      - [Start Collaboration](#start-collaboration)
    - [AiTrainer](#aitrainer-use-cases-collaboration)
      - [ShowCurrentConfig](#showcurrentconfig-collaboration)
      - [EditConfig](#editconfig-collaboration)
      - [SaveConfig](#saveconfig-collaboration)
  - [Hexagonal Architecture](#hexagonal-architecture)



## Use cases
![Actors and Use Cases](output/use-cases/UseCases.png)


### User Context
![User context](output/use-cases/context/UserContextDiagram.png)
### AI trainer Context

![AI Trainer Context](output/use-cases/context/AITrainingContextDiagram.png)

## Player Use Cases
### Launch use case specification
![Launch Specification](output/use-cases/specification/LaunchUseCaseSpecification.png)

### Load use case specification
![Load Specification](output/use-cases/specification/LoadUseCaseSpecification.png)

### Move use case specification
![Move Specification](output/use-cases/specification/MoveUseCaseSpecification.png)

### Undo use case specification
![Undo Specification](output/use-cases/specification/UndoUseCaseSpecification.png)
### Redo use case specification
![Redo Specification](output/use-cases/specification/RedoUseCaseSpecification.png)
### Exit use case specification
![Exit Specification](output/use-cases/specification/ExitUseCaseSpecification.png)
![Redo Specification](output/use-cases/specification/RedoUseCaseSpecification.png)
## Restart use case specification
![Restart Specification](output/use-cases/specification/RestartUseCaseSpecification.png)
### SaveGame use case specification
![SaveGame Specification](output/use-cases/specification/SaveGameUseCaseSpecification.png)


## User Use Cases

### Start use case specification
![Start Specification](output/use-cases/specification/StartUseCaseSpecification.png)


## AITrainer Use Cases

### ShowCurrentConfig use case specification
![ShowCurrentConfig Specification](output/use-cases/specification/ShowCurrentConfigUseCaseSpecification.png)
### EditConfig use case specification
![EditConfig Specification](output/use-cases/specification/EditConfigUseCaseSpecification.png)
### SaveConfig use case specification
![SaveConfig Specification](output/use-cases/specification/SaveConfigUseCaseSpecification.png)

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
Done!

-------------------

1) Read current config
2) Edit config
3) Load edit session
Option? [1-3]

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
![packages-mvc](output/analysis/Packages.png)

## Collaboration Diagrams

## Player Use Cases collaboration

### Launch Collaboration
![launch-colab](output/analysis/use-cases/LaunchCollaborationDiagram.png)
### Load Collaboration
![load-colab](output/analysis/use-cases/LoadCollaborationDiagram.png)
### SaveGame Collaboration
![saveGame-colab](output/analysis/use-cases/SaveGameCollaborationDiagram.png)
### Move Collaboration
![move-colab](output/analysis/use-cases/MoveCollaborationDiagram.png)

### Move Sequence
![move-sequence](output/analysis/use-cases/MoveSequence.png)


### Undo Collaboration
![undo-colab](output/analysis/use-cases/UndoCollaborationDiagram.png)

### Redo Collaboration
![redo-colab](output/analysis/use-cases/RedoCollaborationDiagram.png)
### Exit Collaboration
![exit-colab](output/analysis/use-cases/ExitCollaborationDiagram.png)


## User Use Cases collaboration
### Start Collaboration
![start-colab](output/analysis/use-cases/StartCollaborationDiagram.png)

## AITrainer Use Cases collaboration

### ShowCurrentConfig Collaboration
![showcurrent-config-colab](output/analysis/use-cases/ShowCurrentConfigCollaborationDiagram.png)
### EditConfig Collaboration
![editconfig-colab](output/analysis/use-cases/EditConfigCollaborationDiagram.png)

### SaveConfig Collaboration
![saveconfig-colab](output/analysis/use-cases/SaveConfigCollaborationDiagram.png)



### Hexagonal Architecture
![packages-hex](output/analysis/ArchitecturePackages.png)

![hex-arch](output/analysis/ArchHexPackage.png)
