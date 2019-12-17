const router = require('express').Router();
let Meal = require('../models/meal.model');

router.route('/').get((req, res) => {
  Meal.find()
    .then(meals => res.json(meals))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const mealName = req.body.mealName;
  const ingredients = req.body.ingredients;
  const imageURL = req.body.imageURL;

  const newMeal = new Meal({
    mealName,
    ingredients,
    imageURL
  });

  newMeal.save()
    .then(() => res.json('Meal added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;