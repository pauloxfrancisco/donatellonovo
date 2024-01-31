
if (direcao == 'down') {
    $('div.folha1').addClass('animate__animated animate__fadeInUp');
    $('div.folha3').addClass('animate__animated animate__fadeInUp');
    $('div.camarao').addClass('animate__animated animate__slow');
    $('div.tomate').addClass('animate__animated animate__slow');
    $('div.folha2').addClass('animate__animated animate__slower');
    $('div.queijo').addClass('animate__animated animate__slower');
}

$('section.pizza').waypoint (function(direcao){
/*direcao=representa um espaço na memoria q ira guardar como o usuario chegou naquele elemento html, as duas possibilidades serão up(subindo)
down(descendo)*/

if (direcao =='down') {
    $('section.pizza p').addClass ('animate__animated animate__fadeInUp');
    
if (direcao =='up'){
    $ ('section.pizza p').removeClass ('animate__fadeInUp');
    ('animate__animated animate__fadeInUp');
}

},{
offset: '450px;'

})