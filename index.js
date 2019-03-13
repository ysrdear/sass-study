var sass = require('node-sass');
var fs = require('fs')

sass.render({
    file: 'index.scss',
}, function(err, result) {
    fs.writeFileSync('index.css', result.css ,function(){

    })
});
