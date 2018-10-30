var MarleneEnxovais = {

    data: {

        floatToCurrency : function(_float) {
            var s = _float.toString().replace(',', '').split('.'),
            decimals = s[1] || '',
            integer_array = s[0].split(''),
            formatted_array = [];

            for (var i = integer_array.length, c = 0; i != 0; i--, c++) {
                if (c % 3 == 0 && c != 0) {
                    formatted_array[formatted_array.length] = '.';
                }
                formatted_array[formatted_array.length] = integer_array[i - 1];
            }

            if (decimals.length == 1) {
                decimals = decimals + '0';
            } else if (decimals.length == 0) {
                decimals = '00';
            } else if (decimals.length > 2) {
                decimals = Math.floor(parseInt(decimals, 10) / Math.pow(10, decimals.length - 2)).toString();
            }

            return '<span>R$</span> ' + formatted_array.reverse().join('') + ',' + decimals;
        },

        removeAcentos : function(palavra){
            var palavra = new String(palavra);
            var com_acento = new Array("á", "à", "â", "ã", "ä", "é", "è", "ê", "ë", "í", "ì", "î", "ï", "ó", "ò", "ô", "õ", "ö", "ú", "ù", "û", "ü", "ç", "Á", "À", "Â", "Ã", "Ä", "É", "È", "Ê", "Ë", "Í", "Ì", "Î", "Ï", "Ó", "Ò", "Ô", "Õ", "Ö", "Ú", "Ù", "Û", "Ü", "Ç");
            var sem_acento = new Array("a", "a", "a", "a", "a", "e", "e", "e", "e", "i", "i", "i", "i", "o", "o", "o", "o", "o", "u", "u", "u", "u", "c", "A", "A", "A", "A", "A", "E", "E", "E", "E", "I", "I", "I", "I", "O", "O", "O", "O", "O", "U", "U", "U", "U", "C");
            var nova='';

            for(i=0;i<palavra.length;i++) {
                gravou="";
                letra = palavra.substr(i,1);

                for(x=0;x<46;x++){
                    if(letra==com_acento[x]){
                        nova+=sem_acento[x];
                        gravou="ok";
                    }
                }
                if(gravou!="ok"){
                    nova+=letra;
                }
            }
            return nova;
        }
    },

    methods: {

        removeHelpComplement : function() {
            $('.helperComplement').remove();
        },

        header : function(){
            $('.e-header__top--info-search .e-icon-search').click(function(event) {
                $(this).toggleClass('e-active');
                $(this).closest('.e-header__top--info-search').find('.e-search-form').toggleClass('e-active');

            });

            $('.e-header__top--info-search .e-search-form form').submit(function(event) {
                var _therm = $(this).find('input').val();
                if (_therm != "") {
                    window.location.href = "/" + _therm;
                };
                return false;
            });

            $('.e-header__bottom--navigation-items-item').each(function(){
                if($(this).closest('li').find('.e-item-dropdown').length){
                    $(this).addClass('e-drop');
                }
            });

            $('.e-header__bottom--navigation-items-item a').click(function() {
                $(this).closest('li').toggleClass('e-active');

                if($(this).closest('li').find('.e-item-dropdown').length){

                    $('.e-header__bottom--navigation-items-item').find('.e-item-dropdown').slideUp();

                    $(this).closest('li').find('.e-item-dropdown').stop(true, false).slideToggle();

                    return false;
                }
            });

            var _menuButton = $('.e-header__top .e-header__top--hamburger-button');
            var _closeButton = $('.e-header__bottom--navigation--mobile-menu-close');
            var _closeOverlay = $('.e-header__bottom--overlay');

            _menuButton.click(function(event) {
                $('.e-header__bottom--navigation').addClass('e-active');
                $('.e-header__bottom--overlay').addClass('e-active');
                
            });
            _closeButton.click(function(){
                $('.e-header__bottom--navigation').removeClass('e-active');
                $('.e-header__bottom--overlay').removeClass('e-active');
            });   
            _closeOverlay.click(function(){
                $('.e-header__bottom--navigation').removeClass('e-active');
                $('.e-header__bottom--overlay').removeClass('e-active');
            });
        },

        headerMinicart : function(){
            var itemcart = $(".e-header__top--info-cart .e-cart .e-cart-info");

            itemcart.click(function(e){
                e.preventDefault();
                $(".e-header .e-full-cart").toggleClass("e-active");
            });

            $(".e-header .e-full-cart .e-icon-close-cart").click(function(){
                itemcart.trigger("click");
            });

            $(".e-header .e-full-cart .e-buy .e-btn-continue").click(function(e){
                e.preventDefault();
                itemcart.trigger("click");
            });
        },

        cartQtda: function(){
            var qtditemsCartEm = 0,
                qtditemsCart   = 0;
                
            var qtditemsCartEm = parseFloat($(".amount-items-em").eq(0).text());
            var qtditemsCart   = parseFloat($(".amount-items").eq(0).text());
            
            if(qtditemsCartEm > 0 || qtditemsCart > 0){
                $('.e-full-cart .e-group-cart').addClass("e-active");
                $('.e-full-cart .e-msg-group-cart').removeClass("e-active");
            } else{
                $('.e-full-cart .e-msg-group-cart').addClass("e-active");
                $('.e-full-cart .e-group-cart').removeClass("e-active");
            }

            $('.e-header__top--info-cart .e-cart .e-cart-info-qtda').html(qtditemsCartEm + ' Itens');
        },

        newslleter: function() {
            setTimeout(function(){
                $('.e-newsletter__contents .btn-ok').val('Enviar');
            }, 300);
        },

        footer : function() {
            var title = $(".e-footer__contents-item h3");

            title.click(function(){
                title.not(this).removeClass('e-active');
                $(this).toggleClass('e-active');
                title.not(this).next().slideUp();
                $(this).next().slideToggle();
            });
        },

        init : function() {
            this.removeHelpComplement();
            this.header();
            this.headerMinicart();
            this.cartQtda();
            this.newslleter();
            this.footer();
        },

        init_ajax: function() {
            this.removeHelpComplement();
            this.cartQtda();
        },
    },

    ajax: function() {
        return this.methods.init_ajax();
    },

    mounted: function () {
        return this.methods.init();
    },
};

$(document).ready(function () {
    MarleneEnxovais.mounted();
});

$(document).ajaxStop(function () {
    MarleneEnxovais.ajax();
});