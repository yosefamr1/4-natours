const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8'),
);

const getTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  const id = req.params.id;
  const tour = tours.find((el) => el.id === id * 1);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: tour,
  });
};

const createTour = (req, res) => {
  newId = tours[tours.length - 1].id + 1;
  newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    },
  );
};

const updateTour = (req, res) => {
  const id = req.params.id;
  const tour = tours.find((el) => el.id === id * 1);

  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

const deleteTour = (req, res) => {
  const id = req.params.id;
  const tour = tours.find((el) => el.id === id * 1);

  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: null,
    },
  });
};
const getUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

// //get request handler
// app.get(`/api/v1/tours`, getTours)

// //get request handler for specific tour
// app.get(`/api/v1/tours/:id`, getTour)

// //post request handler
// app.post(`/api/v1/tours`, createTour)
const tourRouter = express.Router();
const userRouter = express.Router();

tourRouter.route(`/`).get(getTours).post(createTour);

tourRouter.route(`/:id`).get(getTour).patch(updateTour).delete(deleteTour);

userRouter.route(`/`).get(getUsers).post(createUser);
userRouter.route(`/:id`).get(getUser).patch(updateUser).delete(deleteUser);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}....`);
});
