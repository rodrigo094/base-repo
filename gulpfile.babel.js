
import Taskerify from 'taskerify';
// import cssIconfontTemplate from 'taskerify/storage/iconfont-template.scss';

Taskerify.config.sourcemaps    = false;
Taskerify.config.srcPath       = './src/assets';  // Src Path
Taskerify.config.distPath      = './dist/assets'; // Dist Path
Taskerify.config.srcViewsPath  = './src';         // Views Src Path
Taskerify.config.distViewsPath = './dist';        // Compiled Views Dist Path (HTML)

const NODE_MODULES = './node_modules';
const SRC          = Taskerify.config.srcPath;
const DIST         = Taskerify.config.distPath;

const storeName    = 'tio-bob';
const commomFiles  = ['globals', 'checkout'];
const desktopFiles = ['general', 'home', 'product'];
const mobileFiles  = ['general', 'home', 'product'];

Taskerify((mix) => {
    // PugJS Template
    mix.pug();

    // Javascript Linter
    mix.eslint();

    // SVG to Iconfonts
    mix.iconfont({
        /** Plugin options - Default Values */
        normalize          : true,
        fontHeight         : 1001,
        centerHorizontally : true,

        /** Fonts / CSS options */
        iconsPath       : `${SRC}/common/iconfont/`,
        sassPath        : `${SRC}/common/scss/settings/`,
        fontPath        : '/arquivos/',
        outputFontPath  : `${DIST}/common/iconfont/`,
        className       : 'iconfont',
        iconFontName    : `iconfont-${storeName}`,
        template        : './node_modules/taskerify/storage/iconfont-template.scss',
        sassFileName    : `_iconfont-${storeName}`,
        customExtension : '.css',
    });

    // Common Files
    commomFiles.map((file) => {
        mix.browserify(`${SRC}/common/js/${storeName}-common-${file}.js`, `${DIST}/common/js`)
            .sass(`${SRC}/common/scss/${storeName}-common-${file}.scss`,  `${DIST}/common/css`);
    });

    // Main Desktop Files
    desktopFiles.map((file) => {
        mix.browserify(`${SRC}/desktop/js/${storeName}-desktop-${file}.js`, `${DIST}/desktop/js`)
            .sass(`${SRC}/desktop/scss/${storeName}-desktop-${file}.scss`,  `${DIST}/desktop/css`);
    });

    // Main Mobile Files
    mobileFiles.map((file) => {
        mix.browserify(`${SRC}/mobile/js/${storeName}-mobile-${file}.js`, `${DIST}/mobile/js`)
            .sass(`${SRC}/mobile/scss/${storeName}-mobile-${file}.scss`,  `${DIST}/mobile/css`);
    });
});
