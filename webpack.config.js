const path = require('path');
const srcDir = path.join(__dirname, 'client');
const targetDir = path.join(__dirname, 'public');

module.exports = {
    entry: `${srcDir}/index.jsx`,
    output: {
        filename: 'bundle.js',
        path: targetDir
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                include: srcDir,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env']
                    },
                    
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
};