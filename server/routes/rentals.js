const express = require('express');
const router = express.Router();

const Rental = require('../models/rental');

router.get('', (req, res) => {
  Rental.find({}, (err, foundRentals) => {
    res.json(foundRentals);
  });
});

router.get('/:id', (req, res) => {
  const rentalId = req.params.id;
  Rental.findById(rentalId, (err, foundRental) => {
    if (err || !foundRental) {
      return res.status(422).send({error: [{
        title: 'Rentals error!',
        detail: 'Coudn\'t find rental'
      }]});
    }

    res.json(foundRental);
  });
});

module.exports = router;