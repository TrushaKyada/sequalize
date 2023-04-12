const user = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { mailService } = require('../helper/mail.helper');

//register
exports.insert = async (req, res) => {
    try {

        const userEmail = await user.findOne({ where: { email: req.body.email } })


        if (userEmail) {

            res.status(409).json({
                message: "Email is already exists",
                status: 409
            })

        } else {
            const uName = req.body.username

            if (uName.length > 2) {

                const userData = new user({
                    username: req.body.username,
                    email: req.body.email,
                    mobile: req.body.mobile,
                    gender: req.body.gender,
                    city: req.body.city,
                    // Password: bcrypt.hashSync(req.body.Password, bcrypt.genSaltSync(8), null)
                })

                const data = await userData.save();
                res.status(201).json({
                    message: 'Registration successfully',
                    status: 201,
                    data: data
                })

            } else {
                res.status(422).json({
                    message: "user name is must  be a 3 character long",
                    status: 422
                })
            }
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


//login
exports.login = async (req, res) => {
    try {

        const email = req.body.email

        const userEmail = await user.findOne({ where: { email: req.body.email } })

        if (userEmail) {

            const result = Math.random().toString(36).substring(2, 8);
            console.log("result", result);

            let sub = "Password detailed";
            let html = `<p> Your login password is ${result} </p>`;

            await mailService(email, sub, html)

            const update_db = await user.update({
                Password: bcrypt.hashSync(result, bcrypt.genSaltSync(8), null),
            }, {
                where: {
                    id: userEmail.id
                }
            })

            res.status(200).json({
                message: "Please check your email",
                status: 200
            })

        } else {
            res.status(404).json({
                message: "user not found",
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



//verfiy_password
exports.verifyPassword = async (req, res) => {
    try {

        const id = req.params.id

        const data = await user.findOne({ where: { id: req.params.id } })

        if (data) {

            const token = jwt.sign({ _id: id.toString() }, process.env.SECRET_KEY);

            const Pass = req.body.Password

            bcrypt.compare(Pass, data.Password, async (err, data) => {

                if (data) {

                    const update_token = await user.update({ token: token }, {
                        where: {
                            id: id
                        }
                    });

                    res.cookie("jwt", token, {
                        expires: new Date(Date.now() + 300000 * 3),
                        httpOnly: true
                    })

                    res.status(200).json({
                        message: "login successfully",
                        status: 200,
                        token: token
                    })

                } else {
                    res.status(401).json({
                        message: "Password dose not matched",
                        status: 401
                    })
                }
            })

        } else {
            res.status(404).json({
                message: "user not found",
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


//update profile
exports.update = async (req, res) => {
    try {

        const data = await user.findOne({ where: { id: req.params.id } })

        if (data) {

            const uName = req.body.username

            if (uName.length > 2) {

                const userData = await user.update({
                    username: req.body.username,
                    email: req.body.email,
                    mobile: req.body.mobile,
                    gender: req.body.gender,
                    city: req.body.city,
                }, {
                    where: {
                        id: req.params.id
                    }
                })

                res.status(200).json({
                    message: 'updated successfully',
                    status: 200,
                })

            } else {
                res.status(422).json({
                    message: "user name is must  be a 3 character long",
                    status: 422
                })
            }

        } else {
            res.status(404).json({
                message: 'user data not found',
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