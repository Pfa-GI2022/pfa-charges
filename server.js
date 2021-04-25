const express = require('express')
const app = express();

//importing the routes
const departementRoutes = require('./api/routes/derpartement');
const professeurRoutes = require('./api/routes/professeurs');


app.use('/departements' , departementRoutes);
app.use('/professeurs' , professeurRoutes);



//not found routes
app.use((req ,res ,next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})


app.use((error ,req ,res ,next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message : error.message
        }
    })
})

const port = process.env.PORT || 3000;
app.listen(port);
