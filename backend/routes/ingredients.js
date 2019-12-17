const router = require('express').Router();
let Ingredient = require('../models/ingredient.model');

router.route('/').get((req, res) => {
  Ingredient.find()
    .then(ingredient => res.json(ingredient))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>{
  const ingredient = req.body.ingredient;

  const newIngredient = new Ingredient({ingredient});

  newIngredient.save()
  .then(()=>res.json('Ingredient added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;