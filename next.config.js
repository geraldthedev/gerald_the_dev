const withFonts = require("next-fonts");


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
        kid: 'app_640103275400b0011ab26d96',
        auth_token: '8cWdYo3QxtMNWfxtMvGSXJcLS7oFHN18oMIWNcgLlAoXoGJk0stHE-uw5RGkzqwn3DUuIR_KhKm3uJFzLPyrRQ'
        
    }
});
