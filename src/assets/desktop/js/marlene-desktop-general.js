//Funções Home

function slickMaisVendidos(){
    // $('.e-home .e-general__shelve-launch--container ul').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    // });
};

function slickMaisQueridinhos(){
    // $('.e-home .e-general__shelve-dear--container ul').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    // });
};

//Funções Categoria

function orderBy(){
    $('.e-group-orderby span').click(function(){
        $('.e-group-orderby ul').toggleClass('e-active').slideToggle();
    });
};

function openFilters(){
    var filters = $('.search-multiple-navigator fieldset.Características');
    var menuFilters = $('.search-multiple-navigator fieldset.Características >div');
    var filtersSize = $('.search-multiple-navigator fieldset.Sku');
    var menuFiltersSize = $('.search-multiple-navigator fieldset.Sku >div');

    $(filters).click(function(){
        $(menuFilters).toggleClass('e-active').slideToggle();
    });

    $(filtersSize).click(function(){
        $(menuFiltersSize).toggleClass('e-active').slideToggle();
    });
};

function removeHelperComplement(){
    $('.vitrine ul .helperComplement').remove();
};

//Funções Produto

function slickProductPage(){
    // $('#show .thumbs').slick({
    //     infinite: true,
    //     vertical: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     slide: "li"
    // });
};

function scrollTop() {
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".e-header").addClass('e-fixed');
        } else {
            $(".e-header").removeClass('e-fixed');
        }
    });
};

function activeDescription() {
    $('.e-general__tabs--container-description .e-title').click(function(){
        $('.e-general__tabs--container-description #productDescription').toggleClass('e-active');
        $('.e-general__tabs--container-description .e-title').toggleClass('e-active');
        $('.e-general__tabs--container-specification .e-title').removeClass('e-active');
        $('.e-general__tabs--container-specification #productDescription').removeClass('e-active');
    });
};

function activeSpecification() {
    $('.e-general__tabs--container-specification .e-title').click(function(){
        $('.e-general__tabs--container-specification #productDescription').toggleClass('e-active');
        $('.e-general__tabs--container-specification .e-title').toggleClass('e-active');
        $('.e-general__tabs--container-description .e-title').removeClass('e-active');
        $('.e-general__tabs--container-description #productDescription').removeClass('e-active');
    });
};

function cloneBuyTogheter() {
    var title = $('#divCompreJunto td h3 a');

    $('#divCompreJunto .buy').prepend(title);
    $(title).addClass('e-title');
};

function selectorSku() {
    $('.e-buy-together tbody td ul.e-select-cor span').click(function(){
        $('ul.e-select-cor li').addClass('e-active');
    });
};

function slickPodeGostar(){
    // $('.e-general__enjoy--container ul').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    // });
};

function activeSize() {
    var sizeSelect = $('.seletorSku .Tamanho item-dimension-Tamanho span label');

    $(sizeSelect).click(function(){
        $(sizeSelect).toggleClass('e-active');
    });
};


$(document).ready(function(){
    slickMaisVendidos();
    slickMaisQueridinhos();
    openFilters();
    removeHelperComplement();
    orderBy();
    slickProductPage();
    activeDescription();
    activeSpecification();
    cloneBuyTogheter();
    selectorSku();
    slickPodeGostar();
    activeSize();
    scrollTop();
});