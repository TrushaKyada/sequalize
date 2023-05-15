var nodemailer = require("nodemailer");

var mailService = async (to, sub, html) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            // port: 587,    //optional
            // secure: false,   //optional
            auth: {
                user: process.env.email,
                pass: process.env.pass

            },
            tls: {
                rejectUnauthorized: true,
            },
        });

        let mailOption = {
            from: process.env.email, // Your Mail
            to: to,
            subject: sub,
            html: html,
        };
        transporter.sendMail(mailOption, async (err, info) => {
            if (err) {
                return console.log(err);
            }
            console.log("Message sent:%s", info.accepted);

        });
    } catch (error) {
        console.error(error);
    }
};

module.exports.mailService = mailService;
