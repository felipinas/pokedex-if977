# Pokedex - IF977

## About

That's an application was made during the Software Engineering course (IF977), offered by the Professor Vinicius Garcia, in UFPE Informatics Center. The main purpose of this application is train and apply the knowledge about React and Node classes.

In addition to React and Node, I decided to use other tools, which I'll list.

## How does it works?

* When you open the home page, you'll see a pokemon list with pagination, but just the first generation.
  * To show each pokemon, there are cards, which contain: an image, the order, the name and, finally, types.
* There is another page, My Pokemons:
  * We can add, edit and delete pokemons.

## Technologies and tools

* Frontend:
  * React
  * Styled Components
  * React Router Dom
  * React Toastify
  * Axios

* Backend:
  * Node
  * Express
  * Mongoose

## How to run

1. Clone the repository.

  * `git clone https://github.com/felipinas/pokedex-if977.git`

2. Open two terminals: one in client folder, and the another one in server folder.

  * To the client folder: `cd client`
  * To the server folder: `cd server`

3. In the server folder, run the server (API).

  * `nodemon index.js`

  > I don't know why, but when I try that command above, doesn't work. But, when I use `npx nodemon index.js`, works well. Maybe will fix to you too. 

4. Now, with the server running, run the client side, in the client folder.

 * `yarn start`

5. Done! Probably, it's running.
