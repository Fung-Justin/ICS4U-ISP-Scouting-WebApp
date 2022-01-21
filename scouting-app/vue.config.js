const path = require('path');

module.exports = { 
    outputDir: path.resolve( __dirname, '../server/public'),
    devServer: { proxy:  { 
        "^/url": {
             target: "http://localhost:5000", 
             changeOrigin: true,
              pathRewrite: { "^/url": "/" } 
            },
              
              "^/api": {
                target: "http://localhost:5000", 
                changeOrigin: true,
                 pathRewrite: { "^/api": "/api" } 
                } 

         }
    
          
        
    } 
};