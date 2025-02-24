const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'script.js'))
})

app.get('/styles.css', (req, res) => {
    res.type('text/css')
    res.sendFile(path.join(__dirname, 'public', 'styles.css'))
})

app.get('/images', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'images'));
})

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'h.pierrache@gmail.com',
        pass: 'injg cgzx jrfu smuf'
    }
})

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'h.pierrache@gmail.com',
        subject: `Nouveau message de ${name}. Mail: ${email} `,
        text: message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.json({ success: false });
        } else {
            console.log('Email envoyé: ' + info.response);
            res.json({ success: true });
        }
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
})