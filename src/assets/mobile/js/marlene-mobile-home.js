var Bigshirts_Home = {

    methods: {  

        sliderMainBanner : function(){
            var options = {
                slidesToShow: 1,
                autoplay: true,
                infinite: true,
                dots: true,
                fade: false,
                arrows: false,
            }

            $('.e-banners .e-banners__carousel').slick(options);
        },

        sliderVitrines : function(){
            var options = {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
                autoplay: false,
                infinite: false,
                fade: false,
                dots: false,
                arrows: true
            }

            $('.e-products .e-products__list ul').slick(options);
        },

        init : function() {
            this.sliderMainBanner();
            this.sliderVitrines();
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
    Bigshirts_Home.mounted();
});

$(document).ajaxStop(function () {
    Bigshirts_Home.ajax();
});