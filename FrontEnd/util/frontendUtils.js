/*=========Customer Register Image Buttons==========*/
$('#btnIDFront').change(function (event) {
    let file = this.files[0];
    loadImage($('#regIDFrontLoader'),file)
});

$('#btnIDBack').change(function (event) {
    let file = this.files[0];
    loadImage($('#regIDBackLoader'),file)
});
/*=================Car Add Form====================*/

$('#btnCarFront').change(function (event) {
    let file = this.files[0];
    loadImage($('#imgCarFront'),file)
});

$('#btnCarBack').change(function (event) {
    let file = this.files[0];
    loadImage($('#imgCarBack'),file)
});

$('#btnCarSide').change(function (event) {
    let file = this.files[0];
    loadImage($('#imgCarSide'),file)
});

$('#btnCarIn').change(function (event) {
    let file = this.files[0];
    loadImage($('#imgCarIn'),file)
});

/*===================IMAGE LOADERS=====================*/
function loadImage(image,file) {

    console.log(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);


    reader.onprogress = function (event) {
        reader.onload = function () {
            image.attr('src', reader.result).show();
        }

    };

}

function base64ToUint8Array(base64) {
    const binaryString = window.atob(base64);
    const length = binaryString.length;
    const uint8Array = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
        uint8Array[i] = binaryString.charCodeAt(i);
    }

    return uint8Array;
}


function byteArrayToImage(byteArray) {
    const blob = new Blob([base64ToUint8Array(byteArray)], { type: 'image/jpeg' });
    const imageUrl = URL.createObjectURL(blob);

    return imageUrl;
}

function byteArrayToFile(byteArray) {
    const blob = new Blob([base64ToUint8Array(byteArray)], { type: 'image/jpeg' });
    const file = new File([blob], 'a.jpg', { type: blob.type });
    return file;
}

/*=====================TOASTS==========================*/
function blueToastShow(message) {
    $('#toastBlueText').text(message);
    const toastBLueFrame = $('#toastBLueFrame');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastBLueFrame);
    toastBootstrap.show();
}

function greenToastShow(message) {
    $('#toastGreenText').text(message);
    const toastBLueFrame = $('#toastGreenFrame');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastBLueFrame);
    toastBootstrap.show();
}

function yellowToastShow(message) {
    $('#toastYellowText').text(message);
    const toastBLueFrame = $('#toastYellowFrame');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastBLueFrame);
    toastBootstrap.show();
}
function RedToastShow(message) {
    $('#toastRedText').text(message);
    const toastBLueFrame = $('#toastRedFrame');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastBLueFrame);
    toastBootstrap.show();
}