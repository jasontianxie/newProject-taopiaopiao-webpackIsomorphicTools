module.exports = {
    entry:{
        app:'../entry/index.js',
        vendor:'../entry/vendor.js'
    },
    output:{
        path:'../public',
        filename:'[name].[hash].js'
    }
}