
$(function(){
    console.log( 'Ready page...' );
    $('.modal').modal();

});

$('.btn-NB').on('click', function(){
//    $('.infography-title').text('Infografías del Nivel Básico');
    $('.display-pdf-document').attr('src', 'Resource/pdf/NB.pdf');
});

$('.btn-NMS').on('click', function(){
//    $('.infography-title').text('Infografías del Nivel Media Superior');
    $('.display-pdf-document').attr('src', 'Resource/pdf/NMS.pdf');
});

$('.btn-NS').on('click', function(){
//    $('.infography-title').text('Infografías del Nivel Superior');
    $('.display-pdf-document').attr('src', 'Resource/pdf/NS.pdf');
});

