const express = require('express');
const placeController = require('../controllers/placeController');

const router = express.Router();

const {
  getAllPlaces,
  createPlace,
  getPlace,
  updatePlace,
  deletePlace,
} = placeController;

router.route('/').get(getAllPlaces).post(createPlace);

router.route('/:id').get(getPlace).patch(updatePlace).delete(deletePlace);

module.exports = router;
