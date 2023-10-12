const path = require('path');

module.exports = {
    entry: './contact.js', // Replace with the path to your entry file
    output: {
        filename: 'bundle.js', // Output bundle filename
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
};
