const Place = require('../models/placeModel');

exports.getAllPlaces = async (req, res) => {
  const places = await Place.find();

  try {
    res.status(200).json({
      requestetAt: req.requestTime,
      status: 'success',
      data: {
        places,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.getPlace = async (req, res) => {
  const place = await Place.findById(req.params.id);

  try {
    res.status(200).json({
      requestetAt: req.requestTime,
      status: 'success',
      data: {
        place,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.createPlace = async (req, res) => {
  try {
    const newPlace = await Place.create(req.body);

    res.status(201).json({
      requestetAt: req.requestTime,
      status: 'success',
      data: {
        place: newPlace,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.updatePlace = async (req, res) => {
  const place = await Place.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  try {
    res.status(200).json({
      requestetAt: req.requestTime,
      status: 'success',
      data: {
        place,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.deletePlace = async (req, res) => {
  await Place.findByIdAndDelete(req.params.id);

  try {
    res.status(204).json({
      requestetAt: req.requestTime,
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};
