## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan
HTML Elements:
- div at top
    - show number of goblins defeated
    - input + button to add new goblin
- main section
    - left shows image and personal HP
    - center is hidden, but shows if you've won or lost the game
    - right contains goblin divs
        - name, hp, and image
        - overlay X is hidden until the goblin dies

Events:
- click on a goblin
    - you try to hit the goblin, goblin hp updated
    - the goblin tries to hit you, your hp updated
    - possible results:
        - goblin dies --> disable clicking on that goblin
        - you die --> disable all functionality
        - game ends (you win or lose) ==> disable all functionality
    - *displayGoblins* function
- player adds a goblin
    - use function to create new goblin (*renderGoblin* unique id, name from input, hp random)
    - *displayGoblins* function

Feature plan:
1. Render HTML elements
    - create general HTML layout
        - hard code 2 goblin divs (temporary until renderGoblin is made)
    - TDD renderGoblin(goblin) function
    - displayGoblins function

2. goblinClick 
    - Add event listener for goblinClick
    - add goblinClickHandler

3. Handling HP = 0
    - if goblin HP = 0
    - if player HP = 0


Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
