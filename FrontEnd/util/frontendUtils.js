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
