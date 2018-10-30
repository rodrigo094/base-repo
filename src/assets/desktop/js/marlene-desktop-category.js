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

$(document).ready(function(){
    orderBy();
    openFilters();
    removeHelperComplement();
});