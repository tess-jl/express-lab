# Express Routing Lab 

### Node.js, Express
___

#### Assignment: "Build a recipe storage application. It should let you create new recipes, get a recipe by id,
get all recipes, update a recipe by id, and delete a recipe by id."

## Requirements

### Missing Tests 

There are some missing tests. Determine any gaps in test coverage and fill in the gaps (focus on missing route tests).

### Add ingredients 

Our model is incomplete. In order to provide a better user experience our recipes should include the ingredients
needed for a recipes. Add an `ingredients` field, which is an array of subdocuments with `amount`,
`measurement` ('teaspoon', 'tablespoon', 'cup', 'ounce', 'grams'), and `name`.

### Refactor to use Router 

To help promote cleaner code, refactor your routes into a `lib/routes/recipes` file. Use and export an
`express.Router`.

### Add a second model 

Add an `Attempt` model which tracks when you used a recipe. An `Attempt` has: `recipeId`, `dateOfEvent`,
`notes`, and `rating`. Create all CRUD routes for your `Attempt` model

