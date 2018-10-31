var headers_vtex = {
    'Accept': 'application/vnd.vtex.ds.v10+json',
    'Content-Type': 'application/json',
    'REST-Range': 'resources=0-300'
};

function slickMaisVendidos(){
    $('.e-general__shelve-launch--container ul').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
};

function slickMaisQueridinhos(){
    $('.e-general__shelve-dear--container ul').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
};

function newsletterPost() {
    $(".e-general__newsletter-form").submit(function(e) {
        e.preventDefault();
        var _json = {
            'nome': $(".e-general__newsletter-form #name").val(),
            'email': $(".e-general__newsletter-form #email").val(),
            'telefone': $('.e-general__newsletter-form #telefone').val()
        };
        console.log(_json);
        $.ajax({
            headers: headers_vtex,
            data: JSON.stringify(_json),
            type: "PATCH",
            url: "https://api.vtexcrm.com.br/portalmarlene/dataentities/NW/documents/",
            success: function(data) {
                $(".e-general__newsletter-form").hide(),
                $(".e-general__newsletter-success").removeClass("e-hide")
            },
            error: function(data) {
                $(".e-general__newsletter-form").hide(),
                $(".e-general__newsletter-error").removeClass("e-hide")
            }
        });
    });
};

function activeNews() {
    $('.e-general__newsletter-error .e-voltar').click(function(){
        $('.e-general__newsletter-form').show();
        $('.e-general__newsletter-error').hide();
    });
};


$(document).ready(function(){
    slickMaisQueridinhos();
    slickMaisVendidos();
    newsletterPost();
    activeNews();
});