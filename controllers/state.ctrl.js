const state = require('../models/state.model');

//insert state
exports.InsertState = async (req, res) => {
    try {

        const data = await new state({
            state: req.body.state,
            country: req.body.country
        })

        const result = await data.save();

        res.status(201).json({
            message: 'state inserted successfully',
            status: 201,
            data: result
        })

    } catch (error) {
        console.log("--error--", error);
        res.status(500).json({
            message: "something went wrong , please try again",
            status: 500,
            error: error.message
        })
    }
}


