var Marlene_Institucional = {

    methods: {

        navSlide: function() {

            $('body').on('click', '.e-content-sidebar-title', function(event) {
                $(this).next('div').slideToggle();
                $(this).toggleClass('e-open');
            });
        },

        navTitle: function() {


            $('.e-content-sidebar-link').each(function(index, el) {
                
                var _this = $(this);
                var _classBody = $('body').attr('class').split(' ')[1];
                var _idItem = _this.attr('id');

                if (_classBody == _idItem) {
                    $('.e-content-sidebar-title').text(_this.find('a').text());
                    _this.remove();
                }
            });
            
        },

        init: function() {
            this.navSlide();
            this.navTitle();
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
    Marlene_Institucional.mounted();
});

$(document).ajaxStop(function() {
    Marlene_Institucional.ajax();
});