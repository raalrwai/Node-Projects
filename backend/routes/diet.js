const router = require('express').Router();
let Diet = require('../models/diet.model');

router.route('/').get((req, res) => {
    Diet.find()
      .then(diet => res.json(diet))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/add').post((req, res) => {
    const foodName = req.body.foodName;
    const portions = Number(req.body.portions);
    const calories = Number(req.body.calories);
    
  
    const newDiet = new Diet({
      foodName,
      portions,
      calories,
    });
  
    newDiet.save()
    .then(() => res.json('Diet added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Diet.findById(req.params.id)
      .then(diet => res.json(diet))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Diet.findByIdAndDelete(req.params.id)
      .then(() => res.json('Diet deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Diet.findById(req.params.id)
      .then(diet => {
        diet.foodName = req.body.username;
        diet.portions = Number(req.body.duration);
        diet.calories = Number(req.body.duration);
        
  
        diet.save()
          .then(() => res.json('Diet updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  



module.exports = router