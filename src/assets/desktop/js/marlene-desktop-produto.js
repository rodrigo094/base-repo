function slickProductPage(){
    $('#show .thumbs').slick({
        infinite: true,
        vertical: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        slide: "li"
    });
};

function activeDescription() {
    $('.e-general__tabs--container-description #productDescription').addClass('e-active');
    $('.e-general__tabs--container-description .e-title').addClass('e-active');
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

function removeSpecification() {
    var removeSpecification = $('.e-general__tabs--container-specification #caracteristicas').find();

    if($(removeSpecification).length == 0) {
        $('.e-general__tabs--container-specification').hide();
    }
};

function cloneBenefits(){
    var benefits = $('#productDescription #caracteristicas td.Beneficios');

    if($(benefits).length != 0) {
        // $('.cod-ref').append(benefits);
        $('.cod-ref').append('<ul class="beneficiosList e-dropdown"></ul>');
        for (var l = 0; l <= benefits.length - 1; l++) {
             != (benefits[l]) && (".beneficiosList").append("<li>" + (benefits[l]) + "</li>")
        }
    }

    
};

function createColorsVariations() {
    var sku = skuJson.skus;
    console.log(sku);
    
    if(sku > 0) {
        $('.e-general__product--specifications-container_control .sku-selector-container ul .specification').append('<div class="e-sku-colors"></div>');

        for(var i=0; i<qtd_skus; i++) {
            var prd_sku_id    = response.skus[i].image;
            var _available = response.skus[i].available;

            if (_available == true) {
                $('.e-general__product--specifications-container_control .sku-selector-container ul .specification').append('<label class="e-size" data-sku="'+prd_sku_id+'">teste</label>');
            };

            
        }
    }

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

var Marlene_Produto = {

    methods: {

        buyTogether : function(){

            $(document).on('click', '.e-select-cor li', function(){
                var _self = $(this);
                $(this).parents('td').find('.e-select-cor li').removeClass('e-active');
                _self.addClass('e-active');
                var _idProduto = $(this).parents('.e-select-cor').attr('data-id');
                var skuColor = _self.attr('data-cor');
                _self.parents('.e-select-cor').next().html('<span>Selecione o Tamanho:</span>');
                vtexjs.catalog.getProductWithVariations(_idProduto).done(function(product) {
                    $.each(product.skus, function(index, value) {
                        var corSku = product.skus[index].dimensions.Cor;
                        if (corSku == skuColor) {
                            var tamanhosku = (typeof product.skus[index].dimensions.Tamanho != "undefined" ? product.skus[index].dimensions.Tamanho : product.skus[index].dimensions.Tamanhos);
                            var idSku = product.skus[index].sku;
                            var qtdDisponivel = product.skus[index].availablequantity;
                            var classIndisponivel = (qtdDisponivel == 0 ? "e-indisponivel" : "");
                            _self.parents('.e-select-cor').next().append('<li class="'+tamanhosku+' '+classIndisponivel+'" data-sku="' + idSku + '">'+tamanhosku+'</li>');
                        }
                    });
                });
            });

            $(document).on('click', '.e-select-tamanho li', function(){
                $(this).parents('td').find('.e-select-tamanho li').removeClass('e-active');
                $(this).addClass('e-active');
            })

            $(document).on('click', '.e-buy-together .comprar-junto a', function(e){
                e.preventDefault();

                var _itens = new Array();

                //skuA
                if($('.e-buy-together .itemA .e-select-tamanho li.e-active').length && $('.e-buy-together .itemA .e-select-cor li.e-active').length){
                    var _skuA = $('.e-buy-together .itemA .e-select-tamanho li.e-active').attr('data-sku');
                    _itens.push({
                        id: _skuA,
                        quantity : 1,
                        seller: 1
                    })

                    if($('.e-product-together.slick-active .e-select-tamanho li.e-active').length && $('.e-product-together.slick-active .e-select-cor li.e-active').length){
                        var _skuB = $('.e-buy-together .itemB .e-select-tamanho li.e-active').attr('data-sku');
                        _itens.push({
                            id: _skuB,
                            quantity : 1,
                            seller: 1
                        });

                        vtexjs.checkout.addToCart(_itens, null, 1)
                          .done(function(orderForm) {
                            window.location.href = "/checkout";
                        });
                    } else{
                        alert('Selecione o modelo dos produtos');
                        return false;
                    }
                } else{
                    alert('Selecione o modelo dos produtos');
                    return false;
                }

            })
        },

        slickBuyTogether : function(){
            var options = {
                slidesToShow: 1,
                autoplay: false,
                infinite: true,
                fade: true,
                dots: false,
                arrows: true,
            }

            $('.e-slider-together').slick(options);

            $('.e-slider-together').on('beforeChange', function(event, slick, currentSlide, nextSlide){
                $('.itemB .e-select-tamanho li').removeClass('e-active');
            });
        },

        crateBuyTogether : function(response){
            var _product = response[0];
            var _name = _product.productName;
            var _image = _product.items[0].images[0].imageTag.replace('#width#', '288').replace('#height#', '400').replace('~', '');

            //get variations ITEMB
            var _listTamanhos = "";
            var _listCores = "";
            $.each(_product.items, function(i,v){
                //get cor
                var _cor = v.Cor[0];
                if(_listCores.indexOf(_cor) < 0){
                    _listCores += '<li data-cor="'+_cor+'">'+_cor+'</li>';
                }

                //get tamanho
                var _tamanho = (typeof v.Tamanhos != "undefined" ? v.Tamanhos[0] : v.Tamanho[0]);
                var _sku = v.itemId;;
                if(_listTamanhos.indexOf(_tamanho) < 0){
                    _listTamanhos += '<li data-sku="'+_sku+'">'+_tamanho+'</li>';                
                }
            });

            //monta produto
            $('.e-slider-together').append('<div class="e-product-together">\
                <div class="e-image">'+_image+'</div>\
                <h3><a href="javascript:void()">'+_name+'</a></h3>\
                <ul class="e-select-cor" data-id="'+_product.productId+'"><span>Selecione a Cor:</span>'+_listCores+'</ul>\
                <ul class="e-select-tamanho"><span>Selecione o Tamanho:</span>'+_listTamanhos+'</ul>\
                </div>')      
        },

        getBuyTogether: function(){

            var _idProduto = skuJson.productId;
            $('.buy-together-content').attr('class', 'e-buy-together')
            //get variations itemA
            $('.e-buy-together .itemA').append('<ul class="e-select-cor" data-id="'+_idProduto+'"><span>Selecione a Cor:</span></ul>\
                <ul class="e-select-tamanho"><span>Selecione o Tamanho:</span></ul>');
            $.each(skuJson.skus, function(i,v){
                //get cores
                var _mainCor = $('.e-buy-together .itemA .e-select-cor');
                var _cor = v.dimensions.Cor;
                if(!_mainCor.find('li[data-cor="'+_cor+'"]').length){
                    $('.e-buy-together .itemA .e-select-cor').append('<li data-cor="'+_cor+'">'+_cor+'</li>');
                }

                //get tamanhos
                var _mainTamanho = $('.e-buy-together .itemA .e-select-tamanho');
                var _tamanho = (typeof v.dimensions.Tamanho != "undefined" ? v.dimensions.Tamanho : v.dimensions.Tamanhos);
                var _sku = v.sku;
                if(!_mainTamanho.find('li[data-tamanho="'+_tamanho+'"]').length){
                    $('.e-buy-together .itemA .e-select-tamanho').append('<li data-tamanho="'+_tamanho+'" data-sku="'+_sku+'">'+_tamanho+'</li>')
                }
            })


            //getProducts
            var _urlsProduto = new Array();

            $('.product__BuyTogether .itemB').each(function(){
                var _url = $(this).find('a').attr('href').split('.com.br')[1];
                if(_urlsProduto.indexOf(_url) < 0)
                    _urlsProduto.push(_url);
            })

            //reset buy together
            var _row = $('.product__BuyTogether tr');
            _row.not(_row.eq(0)).remove();
            $('.product__BuyTogether .itemB').html('');
            $('.product__BuyTogether .itemB').append('<div class="e-slider-together"></div>');

            $.each(_urlsProduto, function(index, value){
                $.ajax({
                    method: "GET",
                    url: "/api/catalog_system/pub/products/search" + value,
                }).done(function (response) {
                    Marlene_Produto.methods.crateBuyTogether(response);
                });    
            });

            setTimeout(function(){
                Marlene_Produto.methods.slickBuyTogether();
            },1000)
        },

        init : function() {
            this.getBuyTogether();
            this.buyTogether();
        },

        init_ajax: function() {

        },
    },

    ajax: function() {
        return this.methods.init_ajax();
    },

    mounted: function () {
        return this.methods.init();
    },
};

function slickPodeGostar(){
    $('.e-general__enjoy--container ul').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
};

$(document).ajaxStop(function () {
    Marlene_Produto.ajax();
});

$(document).ready(function() {
    Marlene_Produto.mounted();
    slickPodeGostar();
    selectorSku();
    cloneBuyTogheter();
    createColorsVariations();
    activeSpecification();
    activeDescription();
    slickProductPage();
    removeSpecification();
    cloneBenefits();
});

$(window).load(function(){
    
});