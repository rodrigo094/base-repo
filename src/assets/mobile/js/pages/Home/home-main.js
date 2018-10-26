
import { $homeMobile } from "./../../../../common/js/modules/Globals/globals-selectors";

export default {
    init() {
        this.main();
    },

    main() {
        this.initSlick();
    },

    initSlick() {
        $homeMobile.slickWrapper.slick({
            lazyLoad: 'ondemand',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            dots: true,
            appendDots: '.js--home-dots-slick',
        }).on( 'lazyLoaded', ( event, slick, image, imageSource ) => {
            $( image ).removeClass( 'has--placeloader' );
        } );
    }
};
