(function (global) {
    System.config({
            defaultJSExtensions: true,
            map: {
                'app': 'app',
                // angular bundles
                '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
                '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
                '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
                '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
                '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
                '@angular/common/http': 'node_modules/@angular/common/bundles/common-http.umd.js',
                'tslib': 'node_modules/tslib/tslib.js',
                '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
                '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
                '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
                // other libraries
                'rxjs': 'node_modules/rxjs',
                'lodash': 'node_modules/lodash',
                // ag libraries
                'ag-grid-angular': 'node_modules/ag-grid-angular',
                'ag-grid-community': 'node_modules/ag-grid-community',
                'ag-grid-enterprise': 'node_modules/ag-grid-enterprise'
            },
            packages: {
                app: {
                    main: './boot.js',
                    defaultExtension: 'js',
                    meta: {
                        './*.js': {
                            loader: 'systemjs-angular-loader.js'
                        },
                    }
                },
                'ag-grid-community': {
                    main: 'main.js'
                },
                'ag-grid-enterprise': {
                    main: 'main.js'
                },
                'lodash': {
                    main: 'index.js',
                    defaultExtension: 'js'
                }
            }
        }
    );
})(this);