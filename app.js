const fs = require('fs');
const express = require('express');


const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8'));

app.get(`/api/v1/tours`,(req,res)=>{
    res.status(200).json({
        status: 'success',
        data: {
            tours
        }
    })
})

app.post(`/api/v1/tours`,(req,res)=>{

    newId = tours[tours.length - 1].id + 1;
    newTour = Object.assign({id: newId}, req.body);
    tours.push(newTour);
    console.log(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            tour: newTour
        }
    })
})

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}....`);
});
