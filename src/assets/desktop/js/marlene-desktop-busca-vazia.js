var Marlene_Empty = {

    methods: {

        slickEmpty: function() {

            $('.e-vitrine-bottom ul').slick({
                infinite: true,
                slidesToShow: 3,
                arrows: false,
                slidesToScroll: 1
            });
        },

        init: function() {
            this.slickEmpty();
        },

        init_ajax: function() {
        },
    },

    ajax: function() {
        return this.methods.init_ajax();
    },

    mounted: function() {
        return this.methods.init();
    },
};

$(document).ready(function() {
    Marlene_Empty.mounted();
});

$(document).ajaxStop(function() {
    Marlene_Empty.ajax();
});