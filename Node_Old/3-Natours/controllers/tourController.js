const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkID = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);
  if (isNaN(val)) {
    return res.status(400).json({
      status: 'fail',
      message: 'ID must be a number',
    });
  }

  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

// Utility: Save tours to file
const saveToursToFile = (tours, res, newTour) => {
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({
          status: 'error',
          message: 'Could not save this data',
        });
      }

      res.status(201).json({
        status: 'success',
        data: { tour: newTour },
      });
    }
  );
};

// Get all tours
exports.getAllTours = (req, res) => {
  try {
    if (!tours || tours.length === 0) {
      return res.status(404).json({
        status: 'fail',
        message: 'No tours found',
      });
    }

    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: { tours },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

// Tour By Id
exports.getTour = (req, res) => {
  const id = Number(req.params.id);

  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: `Tour with ID ${id} not found`,
    });
  }

  res.status(200).json({
    status: 'success',
    results: 1,
    data: { tour },
  });
};

// update the tour (still dummy - update logic add karna hai)
exports.updateTour = (req, res) => {
  const id = Number(req.params.id);
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data: { tour: '<Updated tour here...>' },
  });
};

exports.deleteTour = (req, res) => {
  const id = Number(req.params.id);
  const tour = tours.find((el) => el.id === id);

  res.status(204).json({
    status: 'success',
    data: { tour: '<No Content>' },
  });
};

exports.createTour = (req, res) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'name and price are required',
    });
  }

  const newId = tours.length ? tours[tours.length - 1].id + 1 : 1;
  const newTour = { id: newId, ...req.body };
  tours.push(newTour);

  saveToursToFile(tours, res, newTour);
};
