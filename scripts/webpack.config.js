const path = require('path');

module.exports = {
    entry: './contact.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
