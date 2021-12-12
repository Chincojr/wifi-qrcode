const qrcode =require('wifi-qr-code-generator')// Api required for the qr code generator


const Qr_Function = (req,res) => {

    const QrInfo = req.body

    let hiddenprop

    QrInfo.checkbox = true ?  hiddenprop = true : hiddenprop = false

    const pr = qrcode.generateWifiQRCode({
        ssid: QrInfo.ssid,
        password: QrInfo.password,
        encryption: QrInfo.encryption,
        hiddenSSID: hiddenprop,
        outputFormat: { type: 'image/png' }
      })
      pr.then((data) => {
          
          const QRurl = data
          res.render('QR', {imgUrl : QRurl})
      })
      
    

}

module.exports  = {
    Qr_Function
}