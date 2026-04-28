const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../../dev-data/data/tours-simple.json`, 'utf-8'),
);

exports.getTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tours,
        },
    });
};

exports.getTour = (req, res) => {
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

exports.createTour = (req, res) => {
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

exports.updateTour = (req, res) => {
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

exports.deleteTour = (req, res) => {
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
