const express = require('express');
const app = express();
require('dotenv').config();
const sequalize = require('./database/conn');
const cors = require('cors');
sequalize.sync();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const userRouter = require('./routes/user.routes');
const stateRouter = require('./routes/state.routes');
const cityRouter = require('./routes/city.routes');


app.use('/user', userRouter);
app.use('/state', stateRouter);
app.use('/city', cityRouter);

// "db:seed": "./node_modules/.bin/sequelize db:seed:all",
//./node_modules/.bin/sequelize db:migrate

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})                   