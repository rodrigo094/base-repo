var Bigshirts_Categoria = {

    methods: {

        filtersPage : function(){
            setTimeout(function(){
                $('.search-multiple-navigator').addClass('e-filters-loaded');
                $('.search-single-navigator').addClass('e-filters-loaded');
            }, 600);

            // add thumb color filters colors
            $('.e-category__filters .filtro_cor label').each(function() {
                var color =  $(this).attr("title");
                color = Bigshirts.data.removeAcentos(color.replace(/ /g, '-').replace('-/-', '-'));
                $(this).append('<img src="/arquivos/'+color+'.jpg" border="0" alt=""/>');
            });

            var titleFilter = $('.e-category__filters .search-multiple-navigator fieldset h5');

            titleFilter.click(function(){
                titleFilter.not(this).removeClass('e-active');
                $(this).toggleClass('e-active');
                titleFilter.not(this).next().slideUp();
                $(this).next().slideToggle();
            });
        },

        orderBy : function() {
            $('.e-category__vitrine--orderby .e-orderby-title').click(function(){
                $(this).toggleClass('e-active');
                $(this).next().slideToggle(200);
            });
        },

        init : function() {
            this.filtersPage();
            this.orderBy();
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
    Bigshirts_Categoria.mounted();
});

$(document).ajaxStop(function () {
    Bigshirts_Categoria.ajax();
});