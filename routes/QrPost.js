const express = require('express')
const QrCodeFunction = require('../controller/QrFunction')
const router = express.Router()


//routes the post Request with the QrCode function
router.post('/qrcode', QrCodeFunction.Qr_Function )


module.exports =router