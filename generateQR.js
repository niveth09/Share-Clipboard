var qrdata = document.getElementById('qr-data');
var qrcode = new QRCode(document.getElementById('qrcode'));

     function generateQR()
     {

         var data = qrdata.value;
         qrcode.makeCode(data);
     }

     document.addEventListener('DOMContentLoaded', function() {
        var link = document.getElementById('link');
        link.addEventListener('click', function() {
            generateQR();
        });
    });
