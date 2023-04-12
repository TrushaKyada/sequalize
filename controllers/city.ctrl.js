const city = require('../models/city.model');
const state = require('../models/state.model');

//insert
exports.insert = async (req, res) => {
    try {

        const stateData = await state.findOne({ where: { state_id: req.params.state_id } })

        if (stateData) {

            const data = await new city({
                state_id: req.params.state_id,
                cityName: req.body.cityName,
                state: req.body.state,
                people: rq.body.people
            })

            const result = await data.save();

            res.status(201).json({
                message: "city inserted successfully",
                status: 201,
                data: result
            })

        } else {
            res.status(404).json({
                message: "state data not found",
                status: 404
            })
        }

    } catch (error) {
        console.log("--error--", error);
        res.status(500).json({
            message: "something went wrong , please try again",
            status: 500,
            error: error.message
        })
    }
}


//update
exports.update = async (req, res) => {
    try {

        const cityData = await city.findOne({ where: { id: req.params.id } })

        if (cityData) {

            const stateData = await state.findOne({ where: { id: req.params.id } })

            if (stateData) {

                const data = await new city({
                    state_id: req.params.state_id,
                    cityName: req.params.cityName,
                    state: req.body.state,
                    people: rq.body.people
                })

                const result = await data.save();

                res.status(201).json({
                    message: "city inserted successfully",
                    status: 201,
                    data: result
                })

            } else {
                res.status(404).json({
                    message: "state data not found",
                    status: 404
                })

            }
        } else {

            res.status(404).json({
                message: "city data not found",
                status: 404
            })
        }

    } catch (error) {
        console.log("--error--", error);
        res.status(500).json({
            message: "something went wrong , please try again",
            status: 500,
            error: error.message
        })
    }
}



