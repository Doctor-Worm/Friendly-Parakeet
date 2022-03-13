# Password Generator Starter Code - Friendly-Parakeet

## **Goal:**
### *To be able to randomly generate a strong password with different optional varibles to choose from to create a password that provides greater security.*

___

<br>

## Application Details
- User clicks the 'Generate Password' button to begins the prompts.
- First prompts user how many characters they would like in their password.
- Then prompts user which 4 options they would like included in their password:
    - Lowercase Letters
    - Uppercase Letters
    - Numbers
    - Special Characters
- Once the user selects which options they would like to include in their password, javascript randomly generates a password from their given inputs of:
    - How many characters they would like,
    - Which options they would like included.

___

<br>

## Challenges Faced

- I was first held back by forgetting to set an empty array to push my choosen variables into. I was stumped on how to actually gather the data I collected into something that functions. The empty array variable fixed this.
- The second and most confusing concept to create was the random number generator that picks a character out of my user created array and adds it into a new final answer empty array. I had to spend extra time digesting how the Math.floor and Math.random functions worked and how to use them with my variables to create a randomly generated string.

<br>

## *Links to GitHub repository, the active website, and a screenshot of the website:*

<br>

- **[Link to the GitHub Repository](https://github.com/Doctor-Worm/Friendly-Parakeet)**

- **[Friendly Parakeet Active Website](https://doctor-worm.github.io/Friendly-Parakeet/)**

<br>

![Website Screenshot](/Images/Password%20Generator%20Screenshot.png)