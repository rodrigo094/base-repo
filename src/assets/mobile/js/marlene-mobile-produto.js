var MarleneEnxovais_Produto = {

    methods: {

        activeDescription : function(){
            $('.e-description__navigation li a').click(function() {
                var _attr = $(this).attr('data-content');

                $('.e-description__navigation li a').removeClass('e-active');
                $('.e-description__content > article').removeClass('e-active');
                $('.e-description__content > article').slideUp();

                $(this).addClass('e-active');
                $('#' + _attr).addClass('e-active');
                $('#' + _attr).slideDown();
                return false;
            });
        },

        btnAviseme : function() {
            $('.e-product__info--buy .portal-notify-me-ref form .notifyme-form .btn-ok').val('Avise-me');
        },

        init : function() {
            this.activeDescription();
            this.btnAviseme();
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

$(document).ready(function () {
    MarleneEnxovais_Produto.mounted();
});

$(document).ajaxStop(function () {
    MarleneEnxovais_Produto.ajax();
});