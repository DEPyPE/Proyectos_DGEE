
$(function(){
    console.log( 'Ready page...' );
    $('.modal').modal();
    $('.tabs').tabs();
});

$('.btn-NB').on('click', function(){
//    $('.infography-title').text('Infografías del Nivel Básico');
//  <embed class="display-pdf-document" type="application/pdf"/>
    $('.ShowPDFDocuments-Content').empty();
    $('.ShowPDFDocuments-Content').html('<embed class="display-pdf-document" type="application/pdf" src="Resource/pdf/NB.pdf"/>');
});

$('.btn-NMS').on('click', function(){
//    $('.infography-title').text('Infografías del Nivel Media Superior');
$('.ShowPDFDocuments-Content').empty();
$('.ShowPDFDocuments-Content').html('<embed class="display-pdf-document" type="application/pdf" src="Resource/pdf/NMS.pdf"/>');
});

$('.btn-NS').on('click', function(){
//    $('.infography-title').text('Infografías del Nivel Superior');
$('.ShowPDFDocuments-Content').empty();
$('.ShowPDFDocuments-Content').html('<embed class="display-pdf-document" type="application/pdf" src="Resource/pdf/NS.pdf"/>');
});

