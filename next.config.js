const withFonts = require("next-fonts");
require("dotenv").config()



module.exports = withFonts({
    webpack(config, options) {
       
        config.module.rules.push({
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: "url-loader?limit=100000",
                },
                {
                    loader: "file-loader",
                },
                '@svgr/webpack'
            ],
        });
        return config;
    },
    env:{
        kid: process.env.KID,
        auth_token: process.env.AUTH_TOKEN,
        widget_key: process.env.WIDGET_KEY
        
    }
});
