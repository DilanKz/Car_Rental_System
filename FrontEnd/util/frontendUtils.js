
$('#btnIDFront').change(function (event) {
    let file = this.files[0];
    loadImage($('#regIDFrontLoader'),file)
});

$('#btnIDBack').change(function (event) {
    let file = this.files[0];
    loadImage($('#regIDBackLoader'),file)
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
