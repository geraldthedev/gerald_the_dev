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
        widget_key: process.env.WIDGET_KEY,
        fire_api_key: process.env.FIREAPIKEY,
        fire_auth_domain: process.env.FIREAUTHDOMAIN,
        fire_project_id: process.env.FIREPROJECTID,
        fire_storage_bucket: process.env.FIRESTORAGEBUCKET,
        fire_messaging_sender_id: process.env.FIREMESSAGINGSENDERID,
        fire_app_id: process.env.FIREAPPID,
        fire_measurement_id: process.env.FIREMEASUREMENTID,
        apikey: process.env.APIKEY,
        email: process.env.EMAIL
        
    }
});
