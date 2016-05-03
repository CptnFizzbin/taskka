module.exports = config = {
    SRC: 'src',

    dev: {
        DEST: 'build'
    },

    dist: {
        DEST: 'dist'
    },

    fileExtensions: {
        statics: ['html', 'css', 'json'],
        jade: ['jade'],
        images: ['png', 'gif', 'jpg', 'jpeg', 'svg'],
        sass: ['scss', 'sass'],
        typescript: ['ts'],
        inject: ['scss', 'css', 'js']
    },

    buildSrcGlob: function (extensionType, srcOverride) {
        var extensions = this.fileExtensions[extensionType];

        //When the multiple items glob ('{}') contains a single item the glob breaks. Only add the braces
        // when there are multiple items.
        if (extensions.length === 1) {
            extensions = extensions[0];
        }
        else {
            extensions = '{' + extensions.join(',') + '}';
        }

        var srcString = srcOverride || config.SRC;

        return srcString + '/**/*.' + extensions;
    },

    sass: {
        includePaths: [
            './',
            'src'
        ]
    },

    jade: {
        dev: {
            pretty: true,
            compileDebug: true,
            doctype: 'html'
        },

        dist: {
            pretty: false,
            compileDebug: false,
            doctype: 'html'
        }
    }

};