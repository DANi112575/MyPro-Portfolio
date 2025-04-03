const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post("/send", (req, res) => {
    const { name, email, message } = req.body;
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) return res.status(500).json({ message: "Error sending email" });
        res.json({ message: "Message sent successfully!" });
    });
});

app.listen(5000, () => console.log("Server running on port 5000"));