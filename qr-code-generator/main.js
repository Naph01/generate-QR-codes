const QRBoxImage = document.querySelector('.QR-image');
const QRImage = document.querySelector('#qr-img');
const input = document.querySelector('input');
const button = document.querySelector('.btn');

const generateQR = () => {
    if(input.value.length > 0){
        QRImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input.value;
    QRBoxImage.classList.add('show-qr');
    }
    else{
        QRImage.src = '';
    }
    
}

button.addEventListener('click', generateQR);