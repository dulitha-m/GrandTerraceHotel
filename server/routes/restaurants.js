const express = require('express');
const router = express.Router();
let Restaurant = require('../models/Restaurant');

// Get all restaurants
router.route('/').get((req, res) => {
    Restaurant.find()
        .then(restaurants => res.json(restaurants))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add a restaurant
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const cuisine = req.body.cuisine;
    const image = req.body.image;
    const menus = req.body.menus;

    const newRestaurant = new Restaurant({
        name,
        description,
        cuisine,
        image,
        menus
    });

    newRestaurant.save()
        .then(() => res.json('Restaurant added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get restaurant by ID
router.route('/:id').get((req, res) => {
    Restaurant.findById(req.params.id)
        .then(restaurant => res.json(restaurant))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete restaurant by ID
router.route('/:id').delete((req, res) => {
    Restaurant.findByIdAndDelete(req.params.id)
        .then(() => res.json('Restaurant deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update restaurant by ID
router.route('/update/:id').post((req, res) => {
    Restaurant.findById(req.params.id)
        .then(restaurant => {
            restaurant.name = req.body.name;
            restaurant.description = req.body.description;
            restaurant.cuisine = req.body.cuisine;
            restaurant.image = req.body.image;
            restaurant.menus = req.body.menus;

            restaurant.save()
                .then(() => res.json('Restaurant updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
